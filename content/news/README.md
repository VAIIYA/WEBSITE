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

## Automated AI news digest (daily, 20:00 local time on this Mac)

A scheduled job (`scripts/ai-news-digest.sh`, run by a macOS LaunchAgent — `~/Library/LaunchAgents/com.vaiiya.ai-news-digest.plist`) checks TechCrunch's AI RSS feed every evening for articles not yet covered. It deduplicates by checking `sourceUrl` across existing posts in this folder, so the same story is never drafted twice. For each new article it writes an ELI5-style rewrite (not a verbatim copy) as a markdown file here, always with `sourceName` and `sourceUrl` set so the post links back and credits the original clearly.

We originally tried Reuters, but reuters.com actively blocks automated requests (DataDome bot protection, HTTP 401 on every URL including RSS) — there was no way to fetch it without circumventing that protection, which isn't something to work around. TechCrunch's AI category feed (`techcrunch.com/category/artificial-intelligence/feed/`) is open and unblocked, so that's the source in use. Swap the feed URL in the script if you'd like a different / additional source later.

**Nothing is committed or pushed automatically.** The job only has `Write`/`Read`/`Glob`/`Grep`/`WebFetch` access — no `Bash`, so it's structurally unable to run git commands. New posts just appear as untracked files in this folder; open GitHub Desktop, review the diff, and commit/push whichever ones you're happy with (delete the rest).

Logs for each run land in `~/Library/Logs/vaiiya-ai-news-digest/run-YYYY-MM-DD.log`. The job only runs while this Mac is on; if it's asleep or off at 20:00, that day's run is simply skipped (launchd does not queue missed runs by default here).
