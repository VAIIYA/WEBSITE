---
title: "IBM bets on local reasoning with new Granite 4.2 models"
date: "2026-08-26"
excerpt: "IBM is expanding its open-weight Granite family with version 4.2. The new AI models focus on local deployment, step-by-step reasoning, and enterprise applications."
tags: ["AI", "IBM", "Granite", "Open Source", "Enterprise"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/ai/2026/08/ibms-new-granite-4-2-models-ride-the-wave-of-interest-in-local-llms/"
---

IBM has unveiled the newest generation of its open-weight language models: Granite 4.2. The models are specifically designed to be run and managed locally by organizations and developers. With this release, the tech company is responding to the rapidly growing demand for AI solutions that can operate independently of expensive cloud infrastructure.

Granite 4.2 comes in three variants with 3 billion, 8 billion, and 30 billion parameters respectively. All versions use a decoder-only architecture and come with a generous context window of 128,000 tokens by default. The two larger versions (8B and 30B) were trained using agentic reinforcement learning. This allows them to independently operate external tools, such as running commands in a terminal or searching the web.

## Focus on functional reasoning

With this update, IBM is calling Granite 4.2 the "reasoning-focused" release within the model series. In the context of language models, this doesn't mean human consciousness or genuine understanding. It refers to functional reasoning via chain-of-thought methods, in which the AI carries intermediate results forward across multiple consecutive steps.

For complex problems, this approach produces more accurate and better-substantiated answers. In practice, though, it also means a higher computational load and longer response times. IBM isn't aiming for the fastest or most spectacular performance in the market with this, but rather for stability and predictability for enterprise applications.

## The shift toward local AI

The launch coincides with a broader discussion in the tech industry about the rising costs and limited capacity of large cloud models, such as those from OpenAI and Anthropic. More and more companies and software developers are exploring local alternatives to cut spending on API tokens and retain more control over their data.

This development is also fueling growing popularity for model routers. These are systems that analyze incoming requests and automatically forward them to the most suitable model. By handling lighter tasks with efficient local models like Granite 4.2 and only sending the heaviest tasks to the cloud, organizations can strike an optimal balance between performance, speed, and cost.
