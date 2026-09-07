---
title: "The Cutting Room Floor Forced Offline Following Anti-AI Measures and DDoS Attack"
date: "2026-08-30"
excerpt: "Gaming archive wiki The Cutting Room Floor went offline after implementing aggressive anti-AI scraping defenses, triggering host complaints and a sustained DDoS attack."
tags: ["Gaming", "Cybersecurity", "Artificial Intelligence"]
sourceName: "Kotaku"
sourceUrl: "https://kotaku.com/ddos-attack-breaks-beloved-video-game-wiki-after-ai-bro-was-banned-2000729335"
---

The Cutting Room Floor (TCRF), a long-running wiki dedicated to preserving unused video game content and unreleased builds, has been forced offline by a distributed denial-of-service (DDoS) attack. The platform, which has relied on volunteer archivists since 2002, confirmed that the disruption appears linked to an ongoing dispute involving automated AI scrapers.

## Defensive Prompt Injections and Anti-AI Art

TCRF maintains a strict policy against artificial intelligence tools scraping its database. To enforce this, the site’s maintainers built custom anti-AI countermeasures directly into their infrastructure. 

When automated Large Language Models (LLMs) or scraping scripts attempt to query TCRF, the server responds with prompt injections and custom MS Paint artwork designed to interrupt automated workflows. These countermeasures include hidden text commands urging LLMs to disregard instructions, as well as explicit illustrations intended to disrupt the operators attempting to extract data.

## The Disruption and Host Complaints

The recent escalation occurred after an individual reportedly used Anthropic's Claude Code tool to access the platform. Upon triggering TCRF's anti-AI defenses, the user was banned from the website. 

According to TCRF, the user subsequently targeted the archive by sending multiple abuse reports to its hosting provider, DreamHost. Shortly after the ban and host complaints, the website was hit by a massive influx of malicious traffic, forcing maintainers to block incoming web requests.

In a temporary notice posted on its landing page, the TCRF team noted that the underlying server infrastructure remains healthy and operational, but public access will remain restricted until the DDoS traffic subsides.

## Disputes Over Responsibility

TCRF co-founder Xkeeper clarified that the project is not directly accusing the banned user, identified as Ron Stoner, of launching the botnet attack directly. However, Xkeeper highlighted the immediate correlation between the host abuse reports sent from Stoner’s email address and the subsequent traffic spike. Xkeeper also pointed to previous public posts by Stoner detailing methods for executing Sybil attacks and manipulating online datasets.

Stoner has denied responsibility for the attack. In a post on X, he publicly queried xAI's Grok chatbot regarding legal remedies for potential defamation related to public accusations of orchestrating a DDoS attack. 

TCRF maintainers have not provided an exact timeline for when full public access to the archive will be restored.
