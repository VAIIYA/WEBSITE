#!/usr/bin/env python3
"""
Fetch and decode Google News RSS feeds for AI, Gaming, and Robotics.
Deduplicates against existing posts in content/news/*.md.
"""

import os
import re
import sys
import json
import argparse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Dict, List, Set, Any

try:
    from googlenewsdecoder import gnewsdecoder
except ImportError:
    print("Error: googlenewsdecoder package not installed. Run: pip install googlenewsdecoder", file=sys.stderr)
    sys.exit(1)

FEEDS = {
    "Robotics": "https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREp3TUhRMVpoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US:en",
    "AI": "https://news.google.com/rss/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNRzFyZWhJQ1pXNG9BQVAB?hl=en-US&gl=US&ceid=US:en",
    "Gaming": "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0ZHpFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US:en",
}

def normalize_url(url: str) -> str:
    """Strip common tracking parameters for reliable deduplication."""
    if not url:
        return ""
    url = re.sub(r'(\?|&)(utm_[^&]+|oc=\d+|ref=[^&]+|source=[^&]+)', '', url)
    url = url.rstrip('?&/ ')
    return url

def load_existing_sources(news_dir: Path) -> Set[str]:
    """Scan existing Markdown posts and collect all sourceUrl and slug references."""
    existing_urls = set()
    if not news_dir.exists():
        return existing_urls

    for file_path in news_dir.glob("*.md"):
        if file_path.name == "README.md":
            continue
        try:
            content = file_path.read_text(encoding="utf-8")
            match = re.search(r'^sourceUrl:\s*["\']?(.*?)["\']?\s*$', content, re.MULTILINE)
            if match:
                url = match.group(1).strip()
                if url:
                    existing_urls.add(url)
                    existing_urls.add(normalize_url(url))
        except Exception as e:
            print(f"Warning reading {file_path}: {e}", file=sys.stderr)

    return existing_urls

def clean_title(raw_title: str, source_name: str) -> str:
    """Clean title by removing source suffix if attached (e.g. 'Headline - The Verge')."""
    title = raw_title.strip()
    if source_name and title.endswith(f" - {source_name}"):
        title = title[:-len(f" - {source_name}")].strip()
    elif " - " in title:
        parts = title.rsplit(" - ", 1)
        if len(parts[1]) < 30:  # likely publisher name
            title = parts[0].strip()
    return title

def fetch_category_feed(category: str, feed_url: str, existing_sources: Set[str], limit_per_cat: int = 2) -> List[Dict[str, Any]]:
    """Fetch RSS, decode URLs, and filter out existing stories."""
    results = []
    try:
        req = urllib.request.Request(feed_url, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        })
        with urllib.request.urlopen(req, timeout=15) as resp:
            xml_data = resp.read()
    except Exception as e:
        print(f"Error fetching RSS for {category}: {e}", file=sys.stderr)
        return results

    try:
        root = ET.fromstring(xml_data)
    except Exception as e:
        print(f"Error parsing XML for {category}: {e}", file=sys.stderr)
        return results

    items = root.findall(".//item")
    for item in items:
        if len(results) >= limit_per_cat:
            break

        title_elem = item.find("title")
        link_elem = item.find("link")
        pub_elem = item.find("pubDate")
        source_elem = item.find("source")

        if title_elem is None or link_elem is None:
            continue

        raw_title = title_elem.text or ""
        google_link = link_elem.text or ""
        pub_date = pub_elem.text if pub_elem is not None else ""
        source_name = source_elem.text if source_elem is not None else ""

        title = clean_title(raw_title, source_name)

        # Decode Google News link
        decoded_url = ""
        try:
            decode_res = gnewsdecoder(google_link)
            if decode_res and decode_res.get("status"):
                decoded_url = decode_res.get("decoded_url", "")
        except Exception as e:
            print(f"Decoding failed for {google_link}: {e}", file=sys.stderr)

        target_url = decoded_url or google_link
        norm_target = normalize_url(target_url)

        # Check if already covered
        if target_url in existing_sources or norm_target in existing_sources or google_link in existing_sources:
            continue

        results.append({
            "category": category,
            "title": title,
            "pubDate": pub_date,
            "sourceName": source_name or "Source",
            "sourceUrl": target_url,
            "googleLink": google_link,
        })
        # Add to existing to avoid intra-batch duplicates
        existing_sources.add(target_url)
        existing_sources.add(norm_target)

    return results

def main():
    parser = argparse.ArgumentParser(description="Fetch and decode fresh Google News stories.")
    parser.add_argument("--repo-dir", default=str(Path(__file__).resolve().parents[1]), help="Path to website repo root")
    parser.add_argument("--limit-per-cat", type=int, default=2, help="Number of new articles per category")
    parser.add_argument("--category", choices=["all", "Robotics", "AI", "Gaming"], default="all", help="Specific category or all")
    args = parser.parse_args()

    repo_dir = Path(args.repo_dir)
    news_dir = repo_dir / "content" / "news"

    existing_sources = load_existing_sources(news_dir)

    all_articles = []
    categories = [args.category] if args.category != "all" else list(FEEDS.keys())

    for cat in categories:
        feed_url = FEEDS[cat]
        articles = fetch_category_feed(cat, feed_url, existing_sources, limit_per_cat=args.limit_per_cat)
        all_articles.extend(articles)

    output = {
        "count": len(all_articles),
        "articles": all_articles
    }

    print(json.dumps(output, indent=2))

if __name__ == "__main__":
    main()
