---
title: "Anthropic Unveils Model Hardware Standard to Connect AI Agents with Physical Lab Equipment"
date: "2026-08-28"
excerpt: "Anthropic has released a research preview of the Model Hardware Standard, an open protocol designed to help AI agents safely operate industrial and scientific hardware."
tags: ["Artificial Intelligence", "Robotics", "Anthropic"]
sourceName: "Anthropic"
sourceUrl: "https://www.anthropic.com/news/model-hardware-standard-research-preview"
---

Anthropic has introduced a research preview of the Model Hardware Standard (MHS), an open framework designed to enable AI agents to directly control physical hardware in scientific laboratories and manufacturing facilities. Co-developed with the HHMI Janelia Research Campus, the standard seeks to streamline how AI operates equipment like liquid handlers, robotic arms, and microscopes.

Connecting scientific hardware historically requires weeks or months of custom integration because most laboratory devices use proprietary software interfaces. MHS addresses this fragmentation by introducing a universal driver layer. Using basic commands such as "read" and "write," the driver standardizes hardware interfaces, allowing AI agents to discover, communicate with, and control multiple devices across networks without specialized translation software.

MHS is model-agnostic and supports established connection protocols, including Anthropic's Model Context Protocol (MCP), command-line tools, and direct APIs. To ensure physical safety, the standard allows operators to define machine characteristics—such as weight limits or temperature thresholds—in plain language. MHS automatically compiles these notes into reference files that instruct the AI agent on how to handle the hardware within safe operating boundaries.

## Automated Experimentation and High-Speed Execution

Beyond simple remote control, MHS allows AI agents to monitor incoming data streams and adjust experimental parameters dynamically. For tasks requiring fast execution or long runs, agents can compile their reasoning steps into deterministic code scripts. During testing, Anthropic observed Claude adjusting a laser beam via camera feedback, learning the physical alignment mechanics, and then packaging the procedure into a single script that ran autonomously without needing step-by-step reasoning.

Biotechnology firm Genentech tested MHS as a proof-of-concept to automate a bicinchoninic acid (BCA) protein assay, a process requiring precise coordination between a liquid handler, microplate reader, and robotic arm. Guided by Claude via MHS, the system optimized fluid transfer rates for liquids of varying viscosities and resolved routine hardware errors independently. 

The trial also highlighted current AI limitations regarding real-world physics. When air bubbles formed in liquid samples, Claude initially repeated the fluid-mixing operations, aggravating the issue until human operators provided contextual guidance on bubble dynamics.

Anthropic is currently offering preview access to select organizations across biotechnology, quantum computing, and robotics. The company plans to collaborate with these partners to establish safety evaluations and operational guidelines before releasing MHS as a fully open-source standard.
