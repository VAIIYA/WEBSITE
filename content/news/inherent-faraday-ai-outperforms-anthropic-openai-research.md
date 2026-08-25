---
title: "A Tiny AI Model Just Beat Anthropic and OpenAI's Best at Redoing Science Experiments"
date: "2026-08-23"
excerpt: "A small London startup founded by ex-Google DeepMind researchers built an AI agent that out-replicated scientific papers better than much bigger models from Anthropic and OpenAI — while running on a fraction of the computing power."
tags: ["AI Research", "Startups", "Science"]
sourceName: "TechCrunch"
sourceUrl: "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research/"
---

## What this startup built

A London-based AI company called Inherent, started by former Google DeepMind researchers, has built an AI agent named Faraday. Its job is to take an existing published science paper and try to independently reproduce the experiment's results from scratch — reading the methodology, writing the code, running the analysis, and seeing if it gets the same answer the original scientists did. This is a real skill in science: being able to replicate someone else's findings is one of the ways researchers check that a discovery is solid and not a fluke or a mistake.

## The surprising part: smaller beat bigger

Faraday was tested against top AI models from Anthropic (Claude Opus 4.8) and OpenAI (GPT-5.5), and reportedly did a better job at this replication task than both of them. What makes that notable is the size difference: Faraday runs on a much smaller underlying model — one with 27 billion parameters, a rough measure of how large and computationally expensive an AI model is. That's a small fraction of the size of the massive models from the bigger labs it was tested against. In simple terms, a leaner, more specialized system out-performed some of the biggest, most expensive AI models available today at this particular task.

Inherent's chief scientist, Edward Hughes, said beating the bigger companies wasn't really the point of the project. Replicating a scientific paper is actually a common exercise young researchers do early in their careers — he noted that PhD students often start their research training this way. What Inherent was really trying to build wasn't just an AI that gets the right numbers, but one with good "research taste": the judgment to know which experiments are worth running and how to design them well, not just brute-force number crunching.

## How they trained it

To build this judgment, Inherent used a training method called reinforcement learning, where an AI system is rewarded when it does something well and not rewarded when it doesn't — sort of like training an animal with treats, except the "animal" is a computer program learning through trial and feedback rather than being given an explicit rulebook to follow.

Interestingly, Faraday doesn't do everything itself — for the actual coding work, it leans on OpenAI's GPT-5.5 Codex, a tool built for writing code. Hughes compared this setup to how human scientists work together, with one person running experiments and turning to a collaborator to ask, "I did these experiments, what do you think of the results?" It's less about one AI doing everything alone, and more about different tools playing to their strengths together.

## A small team with a bigger point to make

Inherent came out of stealth mode just a few weeks ago with $50 million in seed funding, and currently has about a dozen employees working in person in London's King's Cross neighborhood — a location partly chosen because Google DeepMind's offices helped turn the area into something of an AI hub. The company plans to grow to 20-25 employees by the end of the year.

Hughes also used the moment to make a point about UK hiring practices: he's pushing for the country to get rid of "garden leave" rules, which force employees to sit out for a period before joining a competing employer. He argues that this kind of restriction puts British AI startups like his at a disadvantage when trying to compete for talent against American companies, which don't typically face the same restrictions.
