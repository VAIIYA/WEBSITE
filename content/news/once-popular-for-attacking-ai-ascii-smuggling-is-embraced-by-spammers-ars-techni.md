---
title: "Van AI-hack naar inbox: hoe spammers met onzichtbare tekens e-mailfilters omzeilen"
date: "2026-09-04"
excerpt: "Een verfijnde techniek om AI-systemen te misleiden met onzichtbare Unicode-tekens wordt nu massaal ingezet door spammers. Microsoft zag het aantal aanvallen begin dit jaar exploderen."
tags: ["Cybersecurity", "Spam", "AI", "Unicode"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
---

Een aanvalstechniek die oorspronkelijk werd bedacht om AI-modellen te misleiden, heeft zijn weg gevonden naar traditionele e-mailspam. Met behulp van zogeheten *ASCII smuggling* proberen spammers op grote schaal de beveiligingsfilters van e-mailplatforms te omzeilen.

ASCII smuggling werd twee jaar geleden bekend als een methode om *prompt injections* uit te voeren op grote taalmodellen (LLM's). Aanvallers maken hierbij gebruik van een specifieke blok van 128 Unicode-tags. Deze tekens komen overeen met standaard ASCII-karakters, maar zijn zo ontworpen dat ze voor het menselijk oog onzichtbaar zijn. AI-modellen en computersystemen lezen de verborgen instructies wel, terwijl een menselijke lezer enkel een normale tekst ziet.

## Explosieve toename in e-mailverkeer

Inmiddels is de techniek overgenomen door spammers. Beveiligingsonderzoekers van Microsoft zagen begin dit jaar een enorme piek in het gebruik van deze verhullingsmethode. 

Waar Microsoft Defender for Office begin februari 2026 nog zo'n 21.000 van deze patronen per dag detecteerde, schoot dat aantal binnen vier dagen omhoog naar maar liefst 2,5 miljoen waarnemingen per dag. Deze enorme stroom aan berichten hield maanden aan, voordat de golf halverwege mei weer wegzakte.

Het doel van de spammers is het omzeilen van trefwoorddetectie. Spamfilters zoeken continu naar verdachte woorden zoals "credit", "lening" of specifieke geldbedragen. Door onzichtbare Unicode-tekens midden in een gevoelig woord te plaatsen — bijvoorbeeld door een verborgen karakter in het woord "funding" te stoppen — ziet een filter slechts losse reeksen zoals "fun" en "ding". Het beveiligingssysteem slaat geen alarm, terwijl de ontvanger in zijn mailclient gewoon het volledige woord leest.

## Waarom moderne AI-filters falen

Het camoufleren van tekst met onzichtbare spaties gebeurt al decennia, maar ASCII smuggling vormt een specifiek probleem voor moderne beveiliging. Veel e-mailfilters vertrouwen tegenwoordig op Machine Learning en Natural Language Processing (NLP) om berichten te classificeren.

Deze AI-systemen hakken teksten vooraf in kleine stukjes, zogeheten *tokens*. Een verborgen Unicode-teken verstoort dit tokenisatieproces. De tokenizer herkent het originele woord niet meer en genereert onbekende of afwijkende sub-tokens, waardoor het filter de schadelijke intentie van het bericht mist. 

Zolang filters niet zijn geprogrammeerd om deze specifieke Unicode-reeks vooraf te verwijderen of te herkennen, blijft de techniek effectief. Microsoft heeft inmiddels richtlijnen gepubliceerd waarmee ontwikkelaars hun detectiesystemen beter kunnen wapenen tegen deze vorm van tekstmanipulatie.
