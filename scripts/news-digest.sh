#!/bin/bash
set -euo pipefail

REPO_DIR="/Users/meneergroot/Github/VAIIYA/WEBSITE"
CLAUDE_BIN="/Users/meneergroot/.local/bin/claude"
LOG_DIR="/Users/meneergroot/Library/Logs/vaiiya-news-digest"
mkdir -p "$LOG_DIR"

cd "$REPO_DIR"

# 1. Fetch and decode candidate articles from Robotics, AI, and Gaming feeds
CANDIDATES_JSON=$(python3 "$REPO_DIR/scripts/fetch_news.py" --limit-per-cat "${LIMIT_PER_CAT:-2}" 2>/dev/null)

COUNT=$(echo "$CANDIDATES_JSON" | python3 -c "import sys, json; data=json.load(sys.stdin); print(data.get('count', 0))")

if [ "$COUNT" -eq 0 ]; then
  echo "$(date '+%Y-%m-%d %H:%M:%S'): No new articles found across AI, Gaming, and Robotics feeds." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"
  exit 0
fi

echo "$(date '+%Y-%m-%d %H:%M:%S'): Found $COUNT candidate articles to process." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"

PROMPT="You are the daily multi-category news digest job for the VAIIYA website (https://vaiiya.vercel.app/news).
We cover three topics daily: AI, Gaming, and Robotics.

Here are the fresh candidate articles to process (JSON):
$CANDIDATES_JSON

Instructions:
1. First, read content/news/README.md to confirm the exact frontmatter and formatting conventions.
2. Check existing files in content/news/*.md to ensure none of these candidate stories are already covered.
3. For each candidate article:
   a. Fetch the article text from its sourceUrl using WebFetch (or WebSearch if the site has an aggressive paywall/interstitial).
   b. Write a genuine, original rewrite as a markdown file in content/news/.
      - TONE & STYLE: Clear, conversational, high-signal, and easy to understand (ELI5 style for smart readers). Explain any technical jargon (e.g. embodied AI, neural radiance, frame generation, model parameters, actuator torque) using simple analogies.
      - STRUCTURE:
        Use clean Markdown with standard headings:
        ## The quick version
        ## What happened / [Topic-specific explanatory heading]
        ## Why it matters
        ## What's next
      - FRONTMATTER:
        ---
        title: \"Catchy, engaging title (not necessarily the source's exact headline)\"
        date: \"$(date +%Y-%m-%d)\"
        excerpt: \"One or two punchy sentences summarizing the core takeaway.\"
        tags: [\"<Category>\", \"<Subtag>\"]  # Category must be at least one of Robotics, AI, Gaming
        sourceName: \"<Source publisher name>\"
        sourceUrl: \"<The original article URL>\"
        ---
      - FILENAME: content/news/<kebab-case-slug>.md
      - CRITICAL: Never copy full paragraphs or close phrasing from the source. Write an authentic, insightful synthesis.
4. Leave the newly created markdown files in content/news/ as untracked files. Do NOT run git commit or push commands.
5. When finished, print a concise summary of the newly created posts with category, title, and filename."

"$CLAUDE_BIN" -p "$PROMPT" \
  --allowedTools "WebFetch,WebSearch,Read,Write,Glob,Grep" \
  --permission-mode acceptEdits \
  < /dev/null \
  >> "$LOG_DIR/run-$(date +%Y-%m-%d).log" 2>&1

# Optional auto-push to git if AUTO_PUSH is enabled
if [ "${AUTO_PUSH:-false}" = "true" ]; then
  echo "$(date '+%Y-%m-%d %H:%M:%S'): AUTO_PUSH is enabled. Staging and committing new posts..." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"
  git add content/news/*.md
  if ! git diff --cached --quiet; then
    git commit -m "content(news): automated daily digest for $(date +%Y-%m-%d)"
    git push origin main
    echo "$(date '+%Y-%m-%d %H:%M:%S'): Pushed new posts to origin/main." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"
  else
    echo "$(date '+%Y-%m-%d %H:%M:%S'): No changes to commit." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"
  fi
fi

echo "$(date '+%Y-%m-%d %H:%M:%S'): Digest run completed." | tee -a "$LOG_DIR/run-$(date +%Y-%m-%d).log"
