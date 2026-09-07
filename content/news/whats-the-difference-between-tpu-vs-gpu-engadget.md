---
title: "TPU vs. GPU: Wat is het verschil en welke chip levert de beste AI-prestaties?"
date: "2026-08-30"
excerpt: "Met de sterke opkomst van kunstmatige intelligentie duiken er steeds meer chip-acroniemen op. Wat is een TPU precies en waarin verschilt deze van een traditionele GPU of NPU?"
tags: ["AI", "Hardware", "Google", "TPU", "GPU"]
sourceName: "Engadget"
sourceUrl: "https://www.engadget.com/2242759/tpu-vs-gpu-difference-between-processsors/"
---

De wereld van computerhardware staat niet stil. Na de klassieke CPU en de grafische GPU maakten we de afgelopen jaren kennis met de NPU (Neural Processing Unit) in pc's en smartphones. Google zet met zijn TPU (Tensor Processing Unit) nog een stap verder. Maar wat maakt deze chip anders dan de processoren die we al kennen?

## Wat is een TPU precies?

Google ontwikkelde de TPU al in 2015 voor intern gebruik in zijn datacenters. Het is een gespecialiseerde AI-accelerator die is ontworpen om de wiskundige berekeningen voor machine learning en deep learning zo snel mogelijk uit te voeren. 

De term duikt inmiddels ook op buiten het datacenter. In smartphones zoals de Pixel 11 spreekt Google over de TPU-rekenkracht van de Tensor G6-chip. Op mobiele apparaten fungeert de TPU in feite als een NPU: een energiezuinige rekenkern voor lokale taken zoals fotobewerking en spraakherkenning. De grootschalige TPU's in datacenters zijn echter van een heel andere orde.

## Het verschil met een GPU

De GPU (Graphics Processing Unit) is een veelzijdige duizendpoot. Oorspronkelijk ontwikkeld voor het renderen van 3D-beelden in videogames, bleek de parallelle architectuur van de GPU ook zeer geschikt voor AI-training en het delven van cryptovaluta. 

Toch lopen GPU's bij extreme AI-werklasten tegen grenzen aan. Een GPU moet gegevens voortdurend heen en weer schrijven tussen de rekenkernen en het geheugen, wat bij enorme datastromen zorgt voor vertraging en een hoog energieverbruik.

Datacenter-TPU's omzeilen dit probleem met een speciale hardware-architectuur, een zogenaamde *systolic array*. Hierbij stroomt data direct door een tweedimensionaal netwerk van vermenigvuldigers. De uitkomst van de ene berekening is meteen de invoer voor de volgende, zonder dat de chip tussentijds naar het geheugen hoeft te schrijven. Voor bedrijven als Anthropic en Midjourney, die dagelijks miljarden AI-verzoeken verwerken, levert dit een forse besparing op in tijd en stroomverbruik.

## De rol van de NPU

Waar datacenters vertrouwen op grootschalige TPU's, draait het bij NPU's en mobiele TPU's vooral om efficiëntie op het apparaat zelf. Laptops en smartphones gebruiken deze compacte chips voor alledaagse AI-functies. Denk aan het vervagen van je achtergrond tijdens een videocall of het realtime vertalen van gesprekken, zonder dat de batterij binnen een uur leeg is.

## Welke chip is de beste keuze?

Er is geen eenduidige winnaar; het hangt volledig af van het gebruiksdoel. 

NPUs en mobiele TPU's zijn het meest geschikt voor lichte, alledaagse AI-taken op consumentenapparaten. GPU's bieden de meeste flexibiliteit voor een mix van gaming, videobewerking en het lokaal draaien van AI-modellen. Voor het op gigantische schaal trainen en uitvoeren van complexe neurale netwerken in de cloud blijft de datacenter-TPU de meest efficiënte oplossing.
