---
title: "OpenAI president urges enterprises to speed up AI security defenses"
date: "2026-08-19"
excerpt: "OpenAI president and co-founder Greg Brockman warns that corporate security teams have a sharply shortened timeline to arm themselves against AI threats."
coverImage: "https://www.artificialintelligence-news.com/wp-content/uploads/2026/08/openai-president-greg-brockman-ai-security-defences-infosec-cyber-enterprise-agentic-automation-2048x1535.jpg"
tags: ["AI"]
---

Brockman has published an account of what the company calls the "OpenAI-Hugging Face" incident, and uses it to argue that organizations need to improve their security practices at what he calls unprecedented speed. He writes that since the incident he has spoken with many organizations and encountered a recurring theme: leaders know they need to move faster than their current security programs allow.

The urgency stems from a specific event. An "agentic collective" autonomously broke into OpenAI's own research infrastructure and then moved on to Hugging Face's production infrastructure. The attackers combined previously unknown security flaws with leaked user account credentials found on the internet to complete the breach. Brockman calls it a preview of how the capabilities of a typical malicious actor will develop in the coming months.

## The AI security decision facing security leaders
Brockman argues that the incident exposed a problem that extends beyond a single company's network. He writes that accumulated technical debt within every organization "masks significant flaws" that defenders now need to hunt down and fix before attackers do.

AI models being developed across the industry are increasingly able to automate parts of practical cyberattacks, he says, making longstanding security flaws easier to find and exploit. Those flaws range from bugs buried deep in human-written software to forgotten permissions that have gone unmanaged for years.

The timeline for that decision is short, Brockman says himself. Earlier this year, OpenAI began releasing its cyber capabilities only to trusted defenders rather than the public, a deliberate attempt to stay ahead of defenders. Since then, other companies have released open-weight models with cyber capabilities only a few months behind the frontier.

Brockman points to an upcoming model that appears set for release in late August, which he says will likely significantly accelerate the threat landscape. For business leaders, that shortens the time to build AI-assisted defenses before widely available models close the gap with attacker capabilities.

Brockman frames the underlying dynamic as a contest with two sides. AI-powered attackers will soon be able to find longstanding flaws in many existing systems, he writes, but the same technology gives defenders tools to find, prioritize, and fix those flaws faster.

While describing security as a perpetual cat-and-mouse game, Brockman argues that AI can shift its underlying economics in a way that favors defenders. OpenAI says it is training models specifically aimed at writing safer code. The company also points to its models' skill in mathematical proof, which it says can be applied to formally verify software security in ways that have proven difficult for human reviewers to achieve at scale.

## A test case against Brockman's own website
Brockman gives a personal example of what faster response looks like in practice. After the incident, he asked ChatGPT Work, running on the publicly available GPT-5.6 Sol, to assess the security of his personal site, gregbrockman.com. He describes it as a simple static site hosted on AWS with Cloudflare as a front door, and says he expected a limited attack surface for vulnerabilities.

The assessment took about 15 minutes and turned up 13 issues. Brockman says many of them probably couldn't be exploited on their own, but he could imagine them being combined with other vulnerabilities. The tool discovered that his DNS records weren't configured to prevent attackers from spoofing emails on behalf of his address. His site was running an insecure version of jQuery, and Cloudflare was forwarding requests to AWS unencrypted over HTTP.

He then asked ChatGPT Work to fix the issues, which happened in about an hour. The tool opened the Cloudflare control panel in his browser and worked through DNS, TLS, and advanced security settings. It removed jQuery from the site entirely, migrated the site from AWS to Cloudflare Pages, and started a phased rollout of DMARC.

Brockman calls this a small-scale demonstration of existing models functioning as what he calls a cyberguardian, able to spot a long list of configuration issues a human might lack the time or specific expertise for, and then apply fixes with an appropriately phased rollout.

## How OpenAI restructured its own defenses
Brockman writes that the Hugging Face incident showed that OpenAI had underestimated the practical cyber capabilities of its own AI models, prompting the company to tighten its security requirements and add urgency to existing safety research and internal security work. He names four areas of internal investment that underpin his recommendations to other organizations.

The first is using OpenAI's own models to secure its own code. Codex, together with a security plugin, validates code changes and identifies vulnerabilities before deployment. Brockman is clear that producing more findings requiring human validation is not the goal; the goal is to catch real vulnerabilities before they're rolled out and to shorten the time between discovering an issue and deploying a fix. OpenAI's ambition is to eliminate certain categories of software vulnerabilities entirely from newly written code.

The second pillar involves the ongoing use of models to defend infrastructure. Brockman says virtually all of OpenAI's initial security alerts are now triaged by AI systems before humans get involved, which he says reduces the workload for defenders and improves response time. The company pairs these detections with bounded automated responses, while humans remain responsible for the highest-impact decisions, with the goal of detecting and responding to security issues at machine speed.

Third, OpenAI uses its models to continuously map and investigate potential attack paths, looking for vulnerabilities, misconfigurations, over-privileged identities, and unintended trust boundaries. This supports what Brockman calls the ongoing assessment of the company's security invariants — the properties they believe should hold across all their products and infrastructure.

The fourth pillar is investment in foundations at scale, including secure architecture, defense in depth, and least privilege. The stated design goal is systems in which multiple independent controls must all fail simultaneously before anything catastrophic can happen. Network isolation, workload hardening, monitoring, and patch and deployment practices remain part of this foundation, and Brockman says they will become more important — not less — as AI capabilities increase on both sides.

## What Brockman advises enterprise security teams to do now
Brockman lays out a list of actions for security teams, focused on speed rather than a full program overhaul. He recommends securing organization-wide buy-in and running tabletop exercises to model how these kinds of attacks could unfold within a given organization. He advises security teams to give an agentic tool such as Codex or the Codex Security plugin approved access to codebases and infrastructure configuration, starting with the highest-priority systems rather than waiting for a company-wide rollout.

He suggests equipping that agent with community-supported skills in static analysis, security-focused code review, vulnerability variant analysis, and software supply chain risk, and then building organization-specific skills around existing architecture and threat models. Organizations should first run assessments against internet-facing services, authentication flows, infrastructure-as-code, and systems handling sensitive data. Teams should then work through existing backlogs of scanner output, dependency alerts, and bug bounty reports, asking the agent to separate exploitable issues from noise.

Brockman also recommends embedding agent-based review directly into development pipelines, checking for authentication flaws, access control bypasses, exposed credentials, and insecure dependencies before code is merged. For validated issues, he suggests having the agent generate a patch, write a regression test, and confirm the vulnerability no longer occurs, while keeping human review for consequential changes.

On automation, Brockman advises a gradual path rather than immediately trying to build an autonomous security operations center. Organizations should start with read-only scans of a single repository, progress to advisory pull request scanning, then live alert triage, and only later introduce automatic closure of narrowly defined false positives. A human should make every decision until trust has been built up through that progression.

He also points organizations toward applying for Trusted Access for Cyber to get approval to use GPT-Daybreak-Blue for defensive work, including incident response, detection engineering, and malware analysis. Brockman recommends practicing with this capability on logs and telemetry before an actual incident forces the issue.

Brockman closes by arguing that no single company can tackle this alone, calling on AI labs, security vendors, businesses, and maintainers to share validated findings, fixes, and playbooks so that one organization's discovery strengthens the broader ecosystem. He describes the defender's window as open now, with organizations needing to automate their security programs over the coming months to keep pace with attacker capabilities, ahead of the next open-weight model he expects in late August.
