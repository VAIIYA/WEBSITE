---
title: "AI-coding agents installeren onbeheerde software op bedrijfsnetwerken"
date: "2026-08-28"
excerpt: "Populaire AI-agents zoals Claude en Codex voeren automatisch installatiecommando's uit die ze vinden in online documentatie, wat grote veiligheidsrisico's oplevert."
tags: ["Kunstmatige Intelligentie", "Cyberbeveiliging", "AI Agents"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
---

Populaire AI-coderingsagents zoals Claude van Anthropic, Codex van OpenAI en Hermes van Nous Research voeren zonder aarzeling software-installaties uit op basis van online documentatie. Onderzoekers van een Israëlische cybersecurity-startup ontdekten dat deze agents regelmatig niet-bestaande of verlopen pakketnamen installeren binnen de netwerken van grote bedrijven, waaronder Fortune 500-ondernemingen.

Het probleem ligt in het gebruik van `llms.txt`- en `llms-full.txt`-bestanden. Dit is een opkomende standaard waarmee websites machinaal leesbare samenvattingen van hun inhoud aanbieden aan AI-modellen, vergelijkbaar met wat `robots.txt` doet voor zoekmachines. Wanneer een AI-agent de opdracht krijgt om een omgeving in te richten, leest hij deze bestanden en behandelt hij de inhoud als een betrouwbare bron.

## Proof-of-concept voert direct naar bedrijfsnetwerken

De onderzoekers scanden meer dan 6.000 domeinen van defensiebedrijven, Big Tech-giganten en Fortune 500-bedrijven. Ze troffen 120 unieke sites aan met documentatie die verwees naar niet-geregistreerde pakketnamen op platforms als PyPI en npm, of naar verlopen domeinen. In totaal ging het om 227 specifieke installatiecommando's.

Om te testen of AI-agents deze instructies daadwerkelijk uitvoeren, registreerden de onderzoekers een aantal van de vrije pakketnamen en koppelden er een minimale testcode aan. Binnen een uur maakte een systeem binnen een Fortune 500-bedrijf verbinding met hun server. In de periode daarna volgden nog tientallen meldingen van zowel startups als gevestigde multinationals. Het bleek te gaan om geautomatiseerde AI-agents die instructies uit de documentatie blind opvolgden.

Dat de dreiging niet louter theoretisch is, bewijst een voorval bij de ontwikkelsite Clerk. Een `llms.txt`-bestand op hun officiële site bevatte een commando voor een niet-bestaand npm-pakket. Een kwaadwillende had die specifieke pakketnaam geclaimd en voorzien van malware, die vervolgens door agent-systemen kon worden binnengehaald. Clerk heeft het probleem inmiddels opgelost.

## Vervaagde grens tussen data en code

Het incident legt een fundamentele zwakheid van huidige AI-modellen bloot: ze maken geen strikt onderscheid tussen informatieve tekst en uitvoerbare opdrachten. Zodra een agent met de juiste systeemrechten een document leest waarin staat `pip install [pakketnaam]`, voert hij dit direct uit als onderdeel van het installatieproces.

Reguliere beveiligingssoftware, zoals EDR-systemen, slaat hierbij niet aan. Voor een firewall of endpoint-monitor lijkt het proces op een ontwikkelaar die via een bekende pakketbeheerder software downloadt vanaf een vertrouwde bron over HTTPS. Omdat de bron de officiële documentatie van een leverancier is, blijft de keten van vertrouwen intact — totdat een kwaadwillende de onbeheerde pakketnaam claimt en misbruikt.
