---
title: "Kan AI nu echt werkende printplaten ontwerpen? GPT-6 Astra op de proef gesteld"
date: "2026-09-06"
excerpt: "OpenAI beweert dat GPT-6 Astra zelfstandig printplaten kan ontwerpen in KiCad. Onafhankelijke testen laten zien wat de technologie al kan — en waar de grenzen liggen."
tags: ["Kunstmatige Intelligentie", "Hardware", "OpenAI"]
sourceName: "Hackaday"
sourceUrl: "https://hackaday.com/2026/09/05/can-ai-now-design-pcbs-that-just-work/"
---

Met de lancering van het GPT-6 Astra-model doet OpenAI een opvallende claim: het AI-model zou op basis van een elektrisch schema zelfstandig een volledig gerouteerde printplaat (PCB) kunnen genereren in KiCad. Volgens het bedrijf is het opgeleverde bestand in theorie direct klaar om naar een fabrikant te worden gestuurd voor productie.

Dit roept de vraag op of AI-gebaseerd hardware-ontwerp volwassen begint te worden, of dat het vooralsnog een geavanceerde variant blijft van de traditionele auto-routing tools die alleen onder strak gecontroleerde omstandigheden werken.

## Prestaties in de praktijk

Om de claims van OpenAI onafhankelijk te toetsen, is het model onderworpen aan de EEBench-benchmark. Dit testplatform meet hoe effectief AI-agenten zijn in het uitvoeren van praktische taken binnen de elektrotechniek. Opvallend detail: EEBench is ontwikkeld door het team achter Atopile, een op code gebaseerd systeem om KiCad-ontwerpen beter toegankelijk te maken voor AI.

In de testen behaalt GPT-6 Astra een score van 69,3 procent. Daarmee presteert het model op een vergelijkbaar niveau als concurrent Claude Opus 5, al doet het model van OpenAI dat sneller en tegen lagere kosten. 

## Snel prototype versus industriële standaard

De resultaten laten zien dat AI-modellen prima in staat zijn om de eerste opzet van een eenvoudig board te genereren. Dit zogenaamde 'vibe-coding' van hardware vormt een nuttige snelkoppeling voor hobbyprojecten en het snel valideren van een concept. 

Toch waarschuwen experts dat het routen van een printplaat slechts een fractie is van het werk van een hardware-engineer. Bij commerciële hardwareontwikkeling gelden immers strengere kwaliteits- en veiligheidseisen dan bij software. Een printplaat moet niet alleen geleidingsbanen verbinden, maar ook omgaan met complexe randgevallen zoals warmteafvoer, elektromagnetische compatibiliteit (EMC) en signaalruis.

Anders dan bij software — waar bugs vaak achteraf via een digitale update worden hersteld — zijn de kosten van een foutieve printplaat enorm. Een verkeerd ontwerp kan leiden tot kostbare terugroepacties, fysieke schade of afkeuring door toezichthouders. Volledige controle en validatie door ervaren ingenieurs blijft voorlopig dan ook onmisbaar voordat een ontwerp daadwerkelijk in massaproductie gaat.
