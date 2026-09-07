---
title: "OpenAI surprises the chip world with its own inference chip, Jalapeño"
date: "2026-08-26"
excerpt: "OpenAI has revealed details about 'Jalapeño,' an in-house developed AI chip. Early benchmarks show the chip outperforms Nvidia's latest hardware on energy efficiency."
tags: ["OpenAI", "Hardware", "Nvidia", "AI"]
sourceName: "SemiAnalysis"
sourceUrl: "https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia"
---

OpenAI is breaking with the assumption that the first generation of a custom-designed chip always lags behind the established players. Working with Broadcom, the AI company developed the inference chip "Jalapeño" in roughly sixteen months. Analysis from research firm SemiAnalysis shows the hardware scores impressively on energy efficiency compared to accelerators from Nvidia, AMD, and Google.

## High performance per megawatt

In modern data centers, physical power capacity has become the biggest limiting factor. Developers therefore no longer optimize purely for raw computing power, but for the number of tokens generated per megawatt. It's exactly on that point that Jalapeño delivers strong results.

Real-world tests from SemiAnalysis show that Jalapeño delivers more AI output per joule than Nvidia's Blackwell architecture, and even the more recent Vera Rubin generation. OpenAI achieves this advantage without specific optimizations such as speculative decoding, meaning the eventual cost per token could drop even further with additional software refinement.

## Broad usability and fast software integration

Although it was previously speculated that the chip would only be suitable for OpenAI's internal models, Jalapeño turns out to have a generic design. The platform runs a variety of open-source models, including DeepSeek R1 and Kimi-K2.5, at high speeds and low latency. With DeepSeek R1, the system achieves speeds of over 700 tokens per second per user.

The rapid development is partly thanks to tight alignment between hardware and software. Because OpenAI could start with a clean slate and didn't need to account for legacy systems, the team was able to build an effective software stack in a short time.

## Advanced specifications and rollout

Technically, Jalapeño uses high-end components. The B0 revision of the chip is manufactured on TSMC's N3P process and is equipped with fast HBM4 memory modules, delivering 15.4 TB/s of bandwidth. Maximum power consumption (TDP) sits around 700 watts, which is relatively low for this category of accelerators.

While the first engineering samples are already operational in the lab, large-scale volume production and rollout of Jalapeño is planned for sometime in 2027.
