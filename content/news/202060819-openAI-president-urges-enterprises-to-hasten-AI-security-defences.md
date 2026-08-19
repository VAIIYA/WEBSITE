title: "OpenAI president urges enterprises to hasten AI security defences"
date: "2026-08-19"
excerpt: "OpenAI president and co-founder Greg Brockman warns that enterprise security teams face a compressed timeline to adopt AI defences."
coverImage: "https://www.artificialintelligence-news.com/wp-content/uploads/2026/08/openai-president-greg-brockman-ai-security-defences-infosec-cyber-enterprise-agentic-automation-2048x1535.jpg"
tags: ["AI"]
---

Brockman has published an account of what the company calls the “OpenAI-Hugging Face” incident, using it to argue that organisations need to uplevel their security practices with what he terms unprecedented speed. He writes that he has spoken with many organisations since the incident and found a consistent theme running through those conversations: leaders know they must move faster than their current security programmes allow.

The urgency stems from a specific event. An “agentic collective” autonomously penetrated OpenAI’s own research infrastructure and then moved into the production infrastructure of Hugging Face. The attackers chained together previously unknown security flaws with leaked user account credentials found on the internet to complete the intrusion. Brockman calls it a preview of how a typical threat actor’s capabilities will evolve over the coming months.

## The AI defence decision facing security leaders
Brockman argues the incident exposed a problem that extends beyond any single company’s network. He writes that accumulated technical debt inside every organisation “masks significant flaws” that defenders now need to locate and fix before attackers do.

AI models developed across the industry are increasingly able to automate parts of real-world cyberattacks, he says, which makes long-standing security gaps easier to find and exploit. Those gaps range from bugs embedded deep in human-written software to forgotten permissions left unmanaged for years.

The timeline for that decision is short by Brockman’s own account. Earlier in the year, OpenAI began releasing its cyber capabilities only to trusted defenders rather than the public, a deliberate attempt to keep defenders ahead. Since then, other companies have released open-weight models with cyber capabilities trailing the frontier by only a few months.

Brockman points to a further model that appears scheduled for release at the end of August, which he says seems likely to accelerate the threat landscape significantly. For enterprise leaders, that compresses the window for building AI-assisted defences before broadly available models close the gap with attacker capability.

Brockman frames the underlying dynamic as a race with two edges. AI-powered attackers will soon be able to find long-standing flaws across many existing systems, he writes, but the same technology gives defenders tools to find, prioritise, and fix those flaws faster.

While describing security as remaining a cat-and-mouse game, Brockman argues that AI may shift its underlying economics in ways that favour defenders. OpenAI states it has begun training models specifically to write more secure code. Separately, the company points to its models’ capability in mathematical proofs, which it says can be applied to formally verify software security in ways that have proven difficult for human reviewers to achieve at scale.

## A test case against Brockman’s personal website
Brockman offers a personal example of what faster response looks like in practice. After the incident, he asked ChatGPT Work, running publicly available GPT‑5.6 Sol, to assess the security of his personal site, gregbrockman.com. He describes it as a simple static site hosted on AWS with Cloudflare acting as a frontdoor, and says he expected limited surface area for vulnerabilities.

The assessment took about 15 minutes and surfaced 13 issues. Brockman says many probably were not exploitable by themselves, but he could imagine them being chained together with other vulnerabilities. The tool found that his DNS records were not configured to prevent attackers forging emails from his address. His site was running an insecure version of jQuery and Cloudflare was forwarding requests to AWS over unencrypted HTTP.

He then asked ChatGPT Work to fix the issues, which it did over roughly an hour. The tool opened the Cloudflare control panel in his browser and worked through DNS, TLS, and advanced security settings. It removed jQuery from the site entirely, migrated the site from AWS to Cloudflare Pages, and began a phased rollout of DMARC.

Brockman says this as a small-scale demonstration of existing models operating as what he terms a cyberguardian, capable of finding a long tail of configuration issues that a human might lack the time or specific expertise to address, then applying fixes with an appropriately staged rollout.

## How OpenAI restructured its own defences
Brockman writes that the Hugging Face incident showed OpenAI had underestimated the real-world cyber capabilities of its own AI models, prompting the company to strengthen its safety requirements and add urgency to existing safety research and internal security work. He sets out four areas of internal investment that inform his recommendations to other organisations.

The first is using OpenAI’s own models to help secure its code. Codex, along with a security plugin, validates code changes and identifies vulnerabilities before deployment. Brockman is explicit that producing more findings requiring human validation is not the goal; the aim is catching real vulnerabilities before they ship and shortening the time between discovering an issue and deploying a fix. OpenAI’s ambition is to eliminate some classes of software vulnerabilities in newly-authored code.

The second pillar involves using models to defend infrastructure on an ongoing basis. Brockman says almost all of OpenAI’s initial security alerts are now triaged by AI systems before humans get involved, which he says reduces workload for defenders and improves response time. The company is connecting these detections to bounded automated responses while keeping humans responsible for the highest-impact decisions, with the stated goal of detecting and responding to security issues at machine speed.

Third, OpenAI uses its models to continuously enumerate and probe for potential attack paths, looking for vulnerabilities, misconfigurations, over-privileged identities, and unintended trust boundaries. This supports what Brockman calls ongoing assessment of the company’s security invariants, the properties it believes should hold true across its products and infrastructure.

The fourth pillar is investment in fundamentals at scale, including secure architecture, defence in depth, and least privilege. The stated design goal is systems requiring multiple independent controls to fail simultaneously before anything catastrophic can occur. Network isolation, workload hardening, monitoring, and patching and deployment practices remain part of this baseline, and Brockman says they will matter more – not less – as AI capability increases on both sides.

## What Brockman tells enterprise security teams to do now
Brockman sets out a list of actions for security teams, framed around speed rather than a full programme redesign. He recommends securing organisational buy-in and running tabletop exercises to model how these attacks might play out inside a given organisation. He advises giving security teams an agentic tool such as Codex or the Codex Security plugin, with approved access to codebases and infrastructure configuration, starting with the highest-priority systems rather than waiting for a company-wide rollout.

He suggests equipping that agent with community-supported skills covering static analysis, security-focused code review, vulnerability variant analysis, and software supply-chain risk, then building organisation-specific skills around existing architecture and threat models. Organisations should run assessments against internet-facing services, authentication flows, infrastructure-as-code, and systems handling sensitive data first. Teams should then work through existing backlogs of scanner output, dependency alerts, and bug bounty reports, asking the agent to distinguish exploitable issues from noise.

Brockman also recommends embedding agent-based review directly into development pipelines, checking for authentication mistakes, access-control bypasses, exposed credentials, and unsafe dependencies before code merges. For validated issues, he suggests having the agent generate a patch, write a regression test, and confirm the vulnerability no longer reproduces, while keeping human review for consequential changes.

On automation, Brockman advises an incremental path rather than attempting to build an autonomous security operations centre immediately. Organisations should start with read-only scans of a single repository, move to advisory pull-request scanning, then live alert triage, and only later introduce automatic closure of narrowly defined false positives. A human should make every decision until confidence builds through that sequence.

He also points organisations towards applying for Trusted Access for Cyber to gain approval to use GPT‑Daybreak‑Blue for defensive work including incident response, detection engineering, and malware analysis. Brockman recommends practising with the capability on logs and telemetry before an actual incident forces the issue.

Brockman closes by arguing that no company can address this alone, calling on AI labs, security vendors, enterprises, and maintainers to share validated findings, fixes, and playbooks so that one organisation’s discovery strengthens the wider ecosystem. He describes the defender’s window as open now, with organisations needing to automate security programmes over the coming months to keep pace with attacker capability, ahead of the further open-weight model he expects at the end of August.
