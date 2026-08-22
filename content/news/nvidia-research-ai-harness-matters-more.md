---
title: "The Same AI Model Scored 30% on a Test — Then 100%, Just by Changing Its Setup"
date: "2026-08-22"
excerpt: "New Nvidia research suggests that how you wrap and support an AI model — its tools, memory, and guardrails — can matter more than the model itself. The same AI went from a 30% score to a perfect 100% just by improving that surrounding setup."
tags: ["Nvidia", "AI Agents", "AI Research"]
sourceName: "TechCrunch"
sourceUrl: "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/"
---

## What's a "harness," anyway?

When people talk about an "AI agent" — an AI system that can go off and complete multi-step tasks somewhat on its own — the underlying language model is only one piece of the puzzle. Around that model sits a whole support structure: the tools it's allowed to use, how it remembers what it already did, how it manages the context of a long task, and the rules that govern its behavior along the way. That surrounding structure is what people in the industry call the "harness." Think of the model as the engine, and the harness as everything else that makes a car — the steering, the brakes, the dashboard — actually usable.

## The surprising result

Nvidia ran an experiment using Anthropic's Claude Opus 5 on a tough benchmark called ARC-AGI-3, which tests an AI's reasoning ability through interactive 2D puzzle games — the kind of test that requires sustained, multi-step thinking rather than a single quick answer. Using the model with a standard, plain setup, it scored just 30%. Using the exact same model, but wrapped in a custom-built harness designed by Nvidia's researchers, it scored a perfect 100%. Nothing changed about the underlying AI model itself — only the scaffolding around it.

## The key trick: giving the AI a supervisor

The biggest single improvement came from adding what Nvidia calls a "supervisor" — essentially a second AI whose only job is to watch the first AI work and nudge it back on track when it starts to wander. According to Adel El Hallak, Nvidia's VP of product, this supervisor "almost acts like a CEO," stepping in when the main AI agent looks like it's heading down a dead-end path or drifting away from the actual goal.

## Why this matters beyond one benchmark

This finding lines up with what other companies have separately noticed. Databricks, for instance, found that the exact same AI model can end up costing wildly different amounts to run depending purely on how well-designed its harness is — a poorly built harness can roughly double the cost of getting a task done, even though the model itself never changed.

The bigger takeaway is that picking "the best" AI model is only part of building something that actually works well. How that model is wrapped — its tools, its memory system, its operating rules, and now apparently a built-in supervisor watching over it — can matter just as much, or more, than which model you picked in the first place.
