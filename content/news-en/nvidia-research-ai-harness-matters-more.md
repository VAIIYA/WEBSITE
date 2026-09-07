---
title: "The same AI model scored 30% on a test — then 100%, just by changing the setup"
date: "2026-08-22"
excerpt: "New research from Nvidia suggests that how you wrap and support an AI model — the tools, the memory, and the safeguards — may matter more than the model itself. The same AI went from a 30% score to a perfect 100% just by improving that surrounding setup."
tags: ["Nvidia", "AI Agents", "AI Research"]
sourceName: "TechCrunch"
sourceUrl: "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/"
---

## What exactly is a "harness"?

When people talk about an "AI agent" — an AI system that can more or less independently tackle multi-step tasks — the underlying language model is just one piece of the puzzle. Around that model sits an entire supporting structure: the tools it's allowed to use, how it remembers what it has already done, how it manages the context of a long task, and the rules that steer its behavior along the way. That surrounding structure is called the "harness" in the industry. Think of the model as the engine, and the harness as everything else that makes a car usable — the steering wheel, the brakes, the dashboard.

## The surprising result

Nvidia ran an experiment with Anthropic's Claude Opus 5 on a tough benchmark called ARC-AGI-3, which tests an AI's reasoning ability through interactive 2D puzzle games — the kind of test that requires sustained, multi-step thinking rather than a single quick answer. With the model in a standard, bare-bones setup, it scored just 30%. With the exact same model, but wrapped in a custom-built harness designed by Nvidia's researchers, it scored a perfect 100%. Nothing changed about the underlying AI model itself — only the framing around it.

## The key trick: giving the AI a supervisor

The single biggest improvement came from adding what Nvidia calls a "supervisor" — essentially a second AI whose only job is to watch the first AI work and correct it when it starts to drift. According to Adel El Hallak, Nvidia's VP of product, this supervisor behaves "almost like a CEO," stepping in when the main AI agent appears to be heading down a dead end or straying from the actual goal.

## Why this means more than just this one benchmark

This finding echoes what other companies have independently noticed. Databricks, for instance, found that the exact same AI model can incur wildly different costs to run, purely depending on how well-designed the harness is — a poorly designed harness can roughly double the cost of completing a task, even though the model itself never changes.

The bigger lesson is that choosing "the best" AI model is only part of building something that actually works well. How that model is framed — the tools, the memory system, the operating rules, and now apparently also a built-in supervisor keeping watch — can matter just as much, or more, than which model you picked in the first place.
