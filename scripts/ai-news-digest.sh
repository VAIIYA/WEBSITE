#!/bin/bash
set -euo pipefail

REPO_DIR="/Users/meneergroot/Github/VAIIYA/WEBSITE"
CLAUDE_BIN="/Users/meneergroot/.local/bin/claude"
LOG_DIR="/Users/meneergroot/Library/Logs/vaiiya-ai-news-digest"
mkdir -p "$LOG_DIR"

cd "$REPO_DIR"

PROMPT="You are the daily AI news digest job for the VAIIYA website (a Next.js site). Do the following:

1. Fetch https://techcrunch.com/category/artificial-intelligence/feed/ (an RSS feed) and list the articles in it (title, link, pubDate, description).

2. Read every file in content/news/*.md (skip README.md), parse the YAML frontmatter of each, and collect the set of sourceUrl values already present. Any article whose URL is already in that set has already been covered — skip it. Process every remaining new article found in the feed (no cap on count). If none are new, do nothing further and stop — do not create any file.

3. For each new article: fetch the full article text from its link, then write an ELI5-style rewrite as a new markdown file in content/news/. This must be a genuine original rewrite in plain, simple language explaining the story for a general audience (explain jargon, keep sentences simple, several paragraphs, headings where useful) — it must NOT reproduce or closely paraphrase the source's own sentences/wording, and must NOT copy full paragraphs from the source. Always credit and link back to the original via frontmatter. Read content/news/README.md first to confirm current frontmatter conventions, then follow this schema:

---
title: \"...\"
date: \"YYYY-MM-DD\"   (today's date)
excerpt: \"one or two sentence summary\"
coverImage: \"...\"    (optional — do NOT use the source's own photos; only include this field if you have a genuinely generic/royalty-free stock image URL for the general topic, otherwise omit the field entirely)
tags: [...]           (topical tags)
sourceName: \"TechCrunch\"
sourceUrl: \"<the original article URL>\"
---

Filename: a kebab-case slug derived from the article title, e.g. content/news/openai-new-model-explained.md

4. Do NOT run any git commands (you don't have Bash access anyway). Do NOT attempt to commit or push. Just leave the new markdown files in content/news/ as untracked files — the site owner reviews and commits them manually via GitHub Desktop.

5. When finished, print a short plain-text summary: how many new posts were written (with titles), or 'No new articles found.' if none."

"$CLAUDE_BIN" -p "$PROMPT" \
  --allowedTools "WebFetch,Read,Write,Glob,Grep" \
  --permission-mode acceptEdits \
  >> "$LOG_DIR/run-$(date +%Y-%m-%d).log" 2>&1
