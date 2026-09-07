---
title: "Hetzelfde AI-model scoorde 30% op een test — daarna 100%, gewoon door de opzet te veranderen"
date: "2026-08-22"
excerpt: "Nieuw onderzoek van Nvidia suggereert dat hoe je een AI-model omhult en ondersteunt — de tools, het geheugen en de waarborgen — belangrijker kan zijn dan het model zelf. Dezelfde AI ging van een score van 30% naar een perfecte 100% door alleen die omringende opzet te verbeteren."
tags: ["Nvidia", "AI Agents", "AI Research"]
sourceName: "TechCrunch"
sourceUrl: "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/"
---

## Wat is eigenlijk een "harness"?

Als mensen het hebben over een "AI-agent" — een AI-systeem dat min of meer zelfstandig aan de slag kan gaan met meerstaps-taken — dan is het onderliggende taalmodel maar één stukje van de puzzel. Rondom dat model zit een hele ondersteunende structuur: de tools die het mag gebruiken, hoe het onthoudt wat het al heeft gedaan, hoe het de context van een lange taak beheert, en de regels die zijn gedrag onderweg sturen. Die omringende structuur wordt in de industrie de "harness" genoemd. Zie het model als de motor, en de harness als alles wat een auto verder bruikbaar maakt — het stuur, de remmen, het dashboard.

## Het verrassende resultaat

Nvidia voerde een experiment uit met Anthropic's Claude Opus 5 op een lastige benchmark genaamd ARC-AGI-3, die het redeneervermogen van een AI test via interactieve 2D-puzzelspellen — het soort test dat aanhoudend, meerstaps denken vereist in plaats van één snel antwoord. Met het model in een standaard, kale opzet scoorde het slechts 30%. Met exact hetzelfde model, maar dan verpakt in een op maat gebouwde harness ontworpen door Nvidia's onderzoekers, scoorde het een perfecte 100%. Er veranderde niets aan het onderliggende AI-model zelf — alleen aan de omkadering eromheen.

## De sleuteltruc: de AI een supervisor geven

De grootste enkele verbetering kwam van het toevoegen van wat Nvidia een "supervisor" noemt — in essentie een tweede AI wiens enige taak het is om de eerste AI aan het werk te zien en die bij te sturen wanneer die begint af te dwalen. Volgens Adel El Hallak, Nvidia's VP of product, gedraagt deze supervisor zich "bijna als een CEO", die ingrijpt wanneer de hoofd-AI-agent een doodlopend pad lijkt in te slaan of afdwaalt van het eigenlijke doel.

## Waarom dit meer betekent dan alleen deze ene benchmark

Deze bevinding sluit aan bij wat andere bedrijven onafhankelijk hebben opgemerkt. Databricks ontdekte bijvoorbeeld dat exact hetzelfde AI-model wild uiteenlopende kosten met zich mee kan brengen om te draaien, puur afhankelijk van hoe goed doordacht de harness is — een slecht ontworpen harness kan de kosten om een taak te voltooien ongeveer verdubbelen, ook al verandert het model zelf nooit.

De grotere les is dat het kiezen van "het beste" AI-model maar een deel is van het bouwen van iets dat daadwerkelijk goed werkt. Hoe dat model wordt omkaderd — de tools, het geheugensysteem, de operationele regels, en nu blijkbaar ook een ingebouwde supervisor die toezicht houdt — kan net zo belangrijk zijn, of belangrijker, dan welk model je in eerste instantie koos.
