---
title: "Voorbeeldbericht: Tekst, Afbeelding & Ingesloten Video"
date: "2026-08-18"
excerpt: "Een sjabloonbericht dat elk ondersteund blok toont — coverafbeelding, markdown-tekst en een YouTube-embed — zodat toekomstige berichten eenvoudig te kopiëren zijn."
coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
youtubeId: "dQw4w9WgXcQ"
tags: ["Template", "AI"]
---

Dit bericht bestaat als een **kopieer-en-plak-sjabloon**. Dupliceer dit bestand, wijzig de frontmatter bovenaan, en schrijf je bericht eronder in gewone markdown.

## Basisopmaak

Je kunt standaard markdown gebruiken:

- Opsommingstekens zoals deze
- **Vet** en *cursief* tekst
- [Links](https://vaiiya.vercel.app)

> Blokcitaten werken ook, voor het uitlichten van een citaat uit een artikel dat je behandelt.

### Een inline afbeelding toevoegen

Aangezien afbeeldingen elders worden gehost (bijv. Imgur, Unsplash, een CDN), plaats je de URL gewoon rechtstreeks in de markdown:

```
![Alt-tekst](https://example.com/image.jpg)
```

### De YouTube-embed hierboven

Door `youtubeId` in te stellen in de frontmatter (het deel van de URL na `v=`) wordt de video automatisch bovenaan het bericht ingesloten — geen `<iframe>`-code nodig.

Dat is alles. Verwijder de inhoud van dit bestand en schrijf je eerste echte bericht op dezelfde manier.
