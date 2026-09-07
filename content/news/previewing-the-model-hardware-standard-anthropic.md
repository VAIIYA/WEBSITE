---
title: "Anthropic onthult Model Hardware Standard voor AI-besturing van lab- en fabrieksapparatuur"
date: "2026-08-28"
excerpt: "Anthropic introduceert een research preview van de Model Hardware Standard, een open specificatie die AI-agents in staat stelt om laboratoriuminstrumenten en robotica direct en veilig aan te sturen."
tags: ["AI", "Anthropic", "Robotica", "Hardware", "MHS"]
sourceName: "Anthropic"
sourceUrl: "https://www.anthropic.com/news/model-hardware-standard-research-preview"
---

Anthropic heeft een onderzoekspreview gestart van de Model Hardware Standard (MHS). Dit is een universele specificatie die AI-agents in staat stelt om fysieke apparaten in laboratoria en fabrieksomgevingen veilig aan te sturen. De standaard, die in eerste instantie werd ontwikkeld in samenwerking met het HHMI Janelia Research Campus, moet het integreren van complexe instrumenten zoals microscopen, robotarmen en liquid handlers terugbrengen van weken naar enkele minuten.

## Gestandaardiseerde communicatie via MCP

In veel laboratoria en productiefaciliteiten communiceren apparaten niet standaard met elkaar. Het aansluiten van AI op deze machines vereist tot nu toe vaak maatwerk en specifieke integratiesoftware. MHS lost dit op door gebruik te maken van een gestandaardiseerde driver. Deze vertaalt communicatie tussen het besturingssysteem en het apparaat via eenvoudige basiscommando's zoals 'read' (bijvoorbeeld het uitlezen van een temperatuur) en 'write' (het aanpassen van instellingen).

De standaard is model-agnostisch en werkt met elk apparaat dat beschikt over een programmeerbare interface. Om apparaten begrijpelijk te maken voor AI-modellen, genereert de driver automatisch een referentiebestand met fysieke eigenschappen en veiligheidslimieten. Gebruikers kunnen deze kenmerken toevoegen via natuurlijke taal. AI-agents kunnen de hardware vervolgens aansturen via onder meer het Model Context Protocol (MCP), command-line-interfaces of API-codebestanden.

## Eerste praktijktest bij Genentech

Biotechbedrijf Genentech heeft MHS getest in een praktijkopstelling om de zogeheten BCA-eiwittest te automatiseren. Hierbij moesten een liquid handler, een robotarm en een microplate reader nauw samenwerken. Anthropic-model Claude werd ingezet om het protocol aan te sturen en de vloeistofdynamiek te optimaliseren.

Tijdens de test bleek Claude in staat om zelfstandig de stroomsnelheid aan te passen voor verschillende vloeistoffen. Zo stelde het model vast dat viskeuze eiwitsamples (zoals BSA) een aanzienlijk tragere dosering vereisen dan water om nauwkeurige resultaten te behalen. Ook kon de AI eenvoudige hardwarefouten zelfstandig herstellen.

## Fysieke limieten en open-source ambitie

Hoewel de resultaten veelbelovend zijn, stuitte de AI tijdens het experiment ook op beperkingen. Claude bleek moeite te hebben met fysieke en chemische wetmatigheden, zoals het ontstaan van luchtbellen bij het mengen van viskeuze vloeistoffen. Omdat de AI de natuurkundige oorzaak van de fout niet direct begreep, schoot het in eerste instantie in een herhalingslus die juist meer bellen veroorzaakte. Pas nadat menselijke onderzoekers aanvullende context gaven, kon het model het proces correct bijsturen.

Anthropic deelt MHS momenteel met geselecteerde partners in de wetenschap, robotica en elektronicamanufacturing. Het doel is om veiligheidsevaluaties en best practices verder te ontwikkelen voordat de specificatie volledig open source wordt gemaakt.
