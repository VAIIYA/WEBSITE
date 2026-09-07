---
title: "Runway presenteert Solaris: AI die gebruikersinterfaces live genereert als een fysieke wereld"
date: "2026-09-01"
excerpt: "Met Solaris introduceert Runway het concept van Interface World Models. De AI genereert apps en websites frame voor frame in realtime, zonder tussenkomst van traditionele code."
tags: ["Runway", "Solaris", "AI", "Interface World Models", "UX Design"]
sourceName: "runway.com"
sourceUrl: "https://runway.com/news/research/introducing-solaris"
---

AI-ontwikkelstudio Runway heeft Solaris aangekondigd, het eerste model binnen een nieuwe generatie AI-systemen die het bedrijf 'Interface World Models' noemt. Met Solaris stelt Runway een fundamentele vraag: wat gebeurt er als een besturingssysteem of applicatie niet langer afhankelijk is van vaste code, maar de interface in realtime genereert terwijl je deze gebruikt?

Traditionele software werkt altijd via een tussenlaag. Een visueel ontwerp moet door ontwikkelaars worden omgezet in geschreven code (zoals HTML, CSS of JavaScript). Dat proces brengt beperkingen met zich mee: elke mogelijke interactie moet vooraf zijn geprogrammeerd. Dit leidt tot starre interfaces en verlies van visuele details. Solaris omzeilt deze tussenstap door webrendering en interactie samen te voegen. Eén wereldmodel genereert elk beeldje — frame voor frame — direct op basis van de acties van de gebruiker.

## Software als een levende omgeving

Solaris brengt drie grote vernieuwingen naar de wereld van digitale interfaces:

- **Volledig visueel:** Het gegenereerde beeld is direct de applicatie zelf. Wie bijvoorbeeld in een virtuele kledingwinkel wandelt, kan kledingstukken naar een foto van zichzelf slepen om ze te passen, zonder dat daar traditionele backend-logica aan te pas komt.
- **Dynamisch en 'levend':** De interface reageert niet alleen op kliks, maar rendeert continu door. Lichtinval beweegt mee en objecten reageren natuurlijk op spraak- of tekstopdrachten zoals "verplaats de tafel".
- **Onbegrensde interactie:** Gebruikers zijn niet gebonden aan vooraf vastgelegde knoppen. Acties zoals het samenstellen van een salade door ingrediënten in een kom te slepen, verlopen intuïtief en fysiek realistisch.

Daarnaast biedt het model een doorbraak voor het trainen van AI-agents. Waar huidige LLMs moeite hebben met computertaken zodra een lay-out verandert, stelt Solaris agents in staat te trainen in omgevingen die continu veranderen.

## De techniek onder de motorkap

Solaris is gebouwd op Runway’s Gen-4.5 videogeneratiemodel en bouwt voort op het eerdere GWM-1. Om de benodigde snelheid voor realtime-interactie te behalen, genereert het model beelden autoregressief: elk nieuw frame is uitsluitend gebaseerd op de voorafgaande beelden en de actuele invoer van de gebruiker, zoals een klik of sleepbeweging.

Er is sprake van een duidelijke taakverdeling met een taalmodel. Het LLM verzorgt de logica en bepaalt *wat* de applicatie moet doen, terwijl Solaris verantwoordelijk is voor de realtime weergave van *hoe* die actie er visueel uitziet.

## Prestaties en uitdagingen

Uit tests van Runway blijkt dat het vertalen van interfaces naar code altijd leidt tot informatieverlies. In een gebruikersonderzoek onder 250 deelnemers werd Solaris vergeleken met een traditionele, door Claude Opus 5 gegenereerde code-interface. Deelnemers verkozen Solaris in 61% van de gevallen voor het correct uitvoeren van opdrachten en in 71% van de gevallen voor natuurlijk gedrag binnen de scene.

Toch kent de technologie nog duidelijke grenzen. Het scherp en leesbaar genereren van tekst in een live videostroom blijft een technisch obstakel. Runway ziet voor de nabije toekomst dan ook een hybride vorm voor zich, waarbij tekstzware elementen gecombineerd worden met de dynamische, realtime generatie van Solaris.
