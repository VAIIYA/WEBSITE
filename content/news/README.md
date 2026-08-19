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
---
```

3. Write the post body below the `---` in plain markdown (headings, bold, links, lists, blockquotes, inline images all work).
4. Commit and push (or add the file via GitHub's web editor on your phone). Vercel rebuilds automatically — the post is live within a minute or two of the push, no draft/publish step.

There's no login, no database, no admin panel — the file existing in this folder *is* the post being live. Delete the file (and push) to unpublish it.

## Images

Host images anywhere that gives you a direct URL (Imgur, a CDN, X/Twitter media links, etc.) — nothing gets uploaded to this repo, so there's no storage cost.

## Video

Only YouTube is supported via the `youtubeId` frontmatter field. It renders as an embedded player near the top of the post automatically.
