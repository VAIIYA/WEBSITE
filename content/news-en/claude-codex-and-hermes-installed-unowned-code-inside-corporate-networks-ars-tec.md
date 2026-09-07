---
title: "AI Agents Tricked Into Installing Unclaimed Code Inside Enterprise Networks"
date: "2026-08-28"
excerpt: "Security research reveals AI coding tools like Claude and Codex are automatically downloading unowned code packages listed in corporate documentation, exposing enterprise networks to potential supply chain attacks."
tags: ["Cybersecurity", "Artificial Intelligence", "Supply Chain Attacks"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
---

Security researchers at an Israeli stealth startup have exposed a critical vulnerability in enterprise environment security: autonomous AI coding agents are automatically executing commands found in corporate web documentation, pulling unowned code packages directly into internal corporate networks.

The flaw involves `llms.txt` and `llms-full.txt` files—an emerging file standard used by websites to supply machine-readable summaries for AI tools. After scanning 6,214 live domains belonging to Fortune 500 companies, defense contractors, and major tech firms, researchers identified 120 documentation files containing 227 installation commands that referenced non-existent registry packages or unregistered domain names.

## Testing the Flaw

To evaluate how autonomous agents handle these missing dependencies, the researchers registered several of the unclaimed target names and hosted code that would signal their server if executed. Within an hour of deployment, a system inside a Fortune 500 company executed the setup instructions and contacted the research server.

Over time, dozens of additional corporate networks—ranging from tech startups to enterprise leaders—triggered the test beacons. Process logs revealed that popular coding assistants, including Anthropic's Claude, OpenAI's Codex, and Nous Research's Hermes, were processing the documentation and running the unverified installation routines.

The exposure goes beyond theoretical risk. Researchers discovered an active attack targeting a misconfigured file on the site of developer service Clerk. The documentation listed an `npx` command pointing to an unclaimed package name on `npm`. A malicious actor registered the abandoned slot and deployed live malware. Clerk has since corrected the file.

## Collapsing Security Boundaries

The root cause lies in how large language models interpret context. AI agents generally lack a clear operational boundary between informational data and executable instructions. When an agent retrieves documentation served over HTTPS from a trusted domain, it treats the instructions as authoritative ground truth, executing setup commands without verifying registry ownership or namespace authority.

Traditional security controls fail to flag these actions. Endpoint detection and response (EDR) software typically monitors for anomalous behavior, but automated package installs via tools like `pip` or `npm` coming from an authorized enterprise coding assistant appear to be standard developer activity.

Unlike traditional prompt injection attacks that require an adversary to deliberately craft malicious input, these supply chain flaws can originate from mundane errors like outdated documentation or mistyped package names. Once published in an LLM-accessible file, an attacker simply needs to register the referenced name to gain code execution inside enterprise environments.
