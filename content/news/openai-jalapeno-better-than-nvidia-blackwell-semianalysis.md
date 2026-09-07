---
title: "OpenAI verrast chipwereld met eigen inferentiechip Jalapeño"
date: "2026-08-26"
excerpt: "OpenAI heeft details onthuld over 'Jalapeño', een in-house ontwikkelde AI-chip. Uit eerste benchmarks blijkt dat de chip op het gebied van energie-efficiëntie de nieuwste hardware van Nvidia overtreft."
tags: ["OpenAI", "Hardware", "Nvidia", "AI"]
sourceName: "SemiAnalysis"
sourceUrl: "https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia"
---

OpenAI breekt met de aanname dat de eerste generatie van een eigen ontworpen chip altijd achterblijft bij de gevestigde orde. In samenwerking met Broadcom heeft het AI-bedrijf in circa zestien maanden de inferentiechip 'Jalapeño' ontwikkeld. Analyse van onderzoeksbureau SemiAnalysis toont aan dat de hardware op het gebied van energie-efficiëntie indrukwekkend scoort vergeleken met accelerators van Nvidia, AMD en Google.

## Hoge prestaties per megawatt

In moderne datacenters is de fysieke stroomcapaciteit de grootste beperkende factor geworden. Ontwikkelaars sturen daarom niet meer uitsluitend op ruwe rekenkracht, maar op het aantal gegenereerde tokens per megawatt. Op exact dat punt behaalt Jalapeño sterke resultaten.

Uit praktijktests van SemiAnalysis blijkt dat Jalapeño meer AI-output levert per joule dan Nvidia’s Blackwell-architectuur en zelfs de recentere Vera Rubin-generatie. Dit voordeel behaalt OpenAI bovendien zonder specifieke optimalisaties zoals *speculative decoding*, wat betekent dat de uiteindelijke kostprijs per token bij verdere softwarematige verfijning nog lager kan uitvallen.

## Brede inzetbaarheid en snelle software-integratie

Hoewel vooraf werd gespeculeerd dat de chip alleen geschikt zou zijn voor interne OpenAI-modellen, blijkt Jalapeño een generiek ontwerp te hebben. Het platform draait uiteenlopende open-source modellen, waaronder DeepSeek R1 en Kimi-K2.5, met hoge snelheden en een lage latentie. Bij DeepSeek R1 behaalt het systeem snelheden van ruim 700 tokens per seconde per gebruiker.

De snelle ontwikkeling is mede te danken aan een strakke afstemming tussen hardware en software. Omdat OpenAI vanaf een schone lei kon beginnen en geen rekening hoefde te houden met legacy-systemen, kon het team in korte tijd een effectieve software-stack neerzetten.

## Geavanceerde specificaties en uitrol

Op technisch vlak maakt Jalapeño gebruik van hoogwaardige componenten. De B0-revisie van de chip wordt gefabriceerd op het N3P-procedé van TSMC en is uitgerust met snelle HBM4-geheugenmodules, goed voor een bandbreedte van 15,4 TB/s. Het maximaal stroomverbruik (TDP) ligt rond de 700 watt, wat relatief zuinig is voor deze categorie accelerators.

Hoewel de eerste testexemplaren (engineering samples) inmiddels operationeel zijn in het lab, staat de grootschalige volumeproductie en uitrol van Jalapeño gepland voor het verloop van 2027.
