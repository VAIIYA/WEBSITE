---
title: "Google Debuts Gemini 3.8 Flash and Specialized Cyber Variant to Power Agentic Workflows"
date: "2026-09-02"
excerpt: "Google DeepMind has introduced Gemini 3.8 Flash and Gemini 3.8 Flash Cyber, advancing model capabilities in complex reasoning, software engineering, and automated security defense."
tags: ["Google", "Gemini", "Artificial Intelligence", "Cybersecurity"]
sourceName: "blog.google"
sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
---

Google has announced the release of Gemini 3.8 Flash and Gemini 3.8 Flash Cyber, marking its third Flash model release in six weeks. The new additions build on the momentum of Gemini 3.7 Flash, delivering enhanced performance in long-horizon coding, agentic reasoning, and specialized cybersecurity tasks while keeping the same introductory price point.

## Gemini 3.8 Flash: Deep Reasoning for Autonomous Engineering

Gemini 3.8 Flash is designed to handle complex software development and multi-step domain reasoning. The model demonstrates significant performance improvements across several benchmarks, including DeepSWE v1.1 for end-to-end software engineering, as well as specialized evaluations like Vals Finance Agent V2 and Harvey's Legal Agent Benchmark. On HLE-Verified, an assessment measuring cross-domain multi-step reasoning in STEM and the humanities, Gemini 3.8 Flash achieved a score of 54.9%.

The underlying performance gains stem from a design choice allowing the model to execute extra reasoning steps and call external tools iteratively when confronted with complex problems. For applications where compute efficiency is the primary constraint, developers can adjust the model's effort levels to minimize token usage or continue using Gemini 3.7 Flash.

Google is maintaining its introductory pricing for Gemini 3.8 Flash through December 31, 2026, offering access at $0.75 per million input tokens and $3.75 per million output tokens.

## Gemini 3.8 Flash Cyber and the Fairwind Program

Alongside the general-purpose model, Google introduced Gemini 3.8 Flash Cyber, a domain-specific variant optimized for automated vulnerability discovery and security patching. On the CyberGym benchmark, the cyber variant surpassed both Gemini 3.5 Flash Cyber and significantly larger frontier models. In an internal multi-language benchmark spanning 20 programming languages, the model achieved a vulnerability detection success rate exceeding 70%.

On the CWE-Bench benchmark for automated code patching, Gemini 3.8 Flash Cyber reached a pass@1 rate of 47.2%, matching leading frontier models at a fraction of the inference cost.

Early deployments within Google highlight the model's practical utility. The Chrome Security team reported that Gemini 3.8 Flash Cyber generated 2.6 times more correct vulnerability patches than larger commercial alternatives. Separately, Google Cloud Vulnerability Research leveraged the model to identify a critical system flaw in under two hours—a research process that typically spans months.

To mitigate misuse risks related to cyber offensive capabilities, Google is releasing Gemini 3.8 Flash Cyber exclusively to verified defenders—such as government authorities, critical infrastructure operators, and open-source maintainers—through its newly launched Fairwind Program. Meanwhile, Gemini 3.8 Flash is available immediately across Google AI Studio, Android Studio, Google Antigravity, Gemini Enterprise, and consumer-facing Gemini tiers.
