# Posting to VAIIYA News

Each post is one markdown file in this folder. The filename becomes the URL:
`content/news/my-post.md` → `vaiiya.vercel.app/news/my-post`

## How to publish a new post

1. Copy `example-post-with-video.md` (or any existing post) to a new file, named for your post, e.g. `gpt-6-launch.md`. Use lowercase words separated by hyphens — no spaces.
2. Edit the frontmatter block at the top:

```yaml
---
title: "Your post title"
date: "2026-08-19"        # YYYY-MM-DD, controls sort order on the news list
excerpt: "One or two sentences shown on the news list card."
coverImage: "https://..."  # optional — any hosted image URL
youtubeId: "dQw4w9WgXcQ"   # optional — the id from youtube.com/watch?v=THIS_PART
tags: ["OpenAI", "Tools"]   # optional
sourceName: "TechCrunch"    # optional — shows "Based on reporting by X" with a link
sourceUrl: "https://..."    # optional — required if sourceName is set
---
```

3. Write the post body below the `---` in plain markdown (headings, bold, links, lists, blockquotes, inline images all work).
4. Commit and push (or add the file via GitHub's web editor on your phone). Vercel rebuilds automatically — the post is live within a minute or two of the push, no draft/publish step.

There's no login, no database, no admin panel — the file existing in this folder *is* the post being live. Delete the file (and push) to unpublish it.

## Images

Host images anywhere that gives you a direct URL (Imgur, a CDN, X/Twitter media links, etc.) — nothing gets uploaded to this repo, so there's no storage cost.

## Video

Only YouTube is supported via the `youtubeId` frontmatter field. It renders as an embedded player near the top of the post automatically.

## Automated AI, Gaming & Robotics News Digest (Daily, 20:00 local time on this Mac)

A scheduled job (`scripts/news-digest.sh`, run by a macOS LaunchAgent — `~/Library/LaunchAgents/com.vaiiya.ai-news-digest.plist`) checks Google News RSS feeds daily for new stories across three topics:
1. **Robotics**: `https://news.google.com/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREp3TUhRMVpoSUNaVzRvQUFQAQ`
2. **AI**: `https://news.google.com/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNRzFyZWhJQ1pXNG9BQVAB`
3. **Gaming**: `https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0ZHpFU0FtVnVLQUFQAQ`

### How the automation works:
1. **Ingestion & URL Decoding**: `scripts/fetch_news.py` queries the Google News RSS endpoints and resolves Google's encoded redirect links into canonical publisher URLs using `googlenewsdecoder`.
2. **Deduplication**: It inspects existing `sourceUrl`s in `content/news/*.md` to ensure stories already covered are skipped.
3. **Synthesis & Rewriting**: Claude Code fetches the original article and generates an ELI5-style rewrite explaining technical concepts and jargon simply with structured markdown headings (`## The quick version`, `## What happened`, `## Why it matters`, `## What's next`).
4. **Manual Review / Git Push**: Posts are saved as untracked files in `content/news/`. Review the diff in GitHub Desktop (or run git commands) to commit and deploy.

### Running manually:
You can trigger a digest run anytime:
```bash
npm run news:digest
```
Or check candidate articles without writing files:
```bash
npm run news:fetch
```

Logs land in `~/Library/Logs/vaiiya-news-digest/run-YYYY-MM-DD.log`.
