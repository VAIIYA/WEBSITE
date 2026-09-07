---
title: "IBM zet in op lokaal redeneervermogen met nieuwe Granite 4.2-modellen"
date: "2026-08-26"
excerpt: "IBM breidt zijn open-weight Granite-familie uit met versie 4.2. De nieuwe AI-modellen richten zich op lokaal beheer, stap-voor-stap redeneren en zakelijke toepassingen."
tags: ["AI", "IBM", "Granite", "Open Source", "Enterprise"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/ai/2026/08/ibms-new-granite-4-2-models-ride-the-wave-of-interest-in-local-llms/"
---

IBM heeft de nieuwste generatie van zijn open-weight taalmodellen onthuld: Granite 4.2. De modellen zijn specifiek ontworpen om lokaal te worden gedraaid en beheerd door organisaties en ontwikkelaars. Met deze release speelt het technologiebedrijf in op de snelgroeiende vraag naar AI-oplossingen die onafhankelijk van dure cloudinfrastructuren kunnen functioneren.

Granite 4.2 verschijnt in drie varianten met respectievelijk 3 miljard, 8 miljard en 30 miljard parameters. Alle versies maken gebruik van een 'decoder-only'-architectuur en beschikken standaard over een royaal contextvenster van 128.000 tokens. De twee grotere uitvoeringen (8B en 30B) zijn getraind via *agentic reinforcement learning*. Hierdoor kunnen zij zelfstandig externe hulpmiddelen aansturen, zoals het uitvoeren van commando's in een terminal of het doorzoeken van het web.

## Focus op functioneel redeneervermogen

Met deze update noemt IBM Granite 4.2 de 'redeneergerichte' uitgave binnen de modellenserie. In de context van taalmodellen betekent dit overigens geen menselijk bewustzijn of echt begrip. Het gaat om functioneel redeneren via 'chain-of-thought'-methoden, waarbij de AI tussentijdse resultaten meeneemt over meerdere opeenvolgende stappen.

Deze aanpak levert bij complexe vraagstukken nauwkeurigere en meer onderbouwde antwoorden op. Wel betekent dit in de praktijk een hogere belasting van de rekenkracht en langere responstijden. IBM richt zich hiermee niet op de snelste of meest spectaculaire prestaties in de markt, maar op stabiliteit en voorspelbaarheid voor zakelijke toepassingen.

## De verschuiving naar lokale AI

De lancering valt samen met een bredere discussie in de techsector over de stijgende kosten en de beperkte capaciteit van grote cloudmodellen, zoals die van OpenAI en Anthropic. Steeds meer bedrijven en softwareontwikkelaars onderzoeken lokale alternatieven om de uitgaven aan API-tokens te drukken en meer controle te houden over hun data.

Deze ontwikkeling zorgt ook voor een toenemende populariteit van *model routers*. Dit zijn systemen die binnenkomende opdrachten analyseren en automatisch doorsturen naar het meest geschikte model. Door lichte taken af te handelen met efficiënte lokale modellen zoals Granite 4.2 en alleen de zwaarste opdrachten naar de cloud te sturen, kunnen organisaties een optimale balans vinden tussen prestaties, snelheid en kosten.
