# Orion SunComfort – Statische one‑page landingspagina (multi‑language)

**Mapstructuur**
```
/nl/index.html
/en/index.html
/es/index.html
/pt/index.html
/fr/index.html
/de/index.html
/assets/logo.svg
/assets/illus-1.svg
/assets/illus-2.svg
/assets/illus-3.svg
/assets/illus-4.svg
/assets/installateurskit.txt
/css/styles.css
/js/main.js
```

## Lokale taalnavigatie
Elke pagina heeft in de header en footer links naar de taalvarianten (relatieve paden). Kopieer de map naar uw webroot zodat `/nl/index.html` etc. bereikbaar zijn. De `aria-current` wordt gezet op de actieve taal.

## Logo vervangen
Vervang `/assets/logo.svg` met uw definitieve logo (zelfde bestandsnaam) of pas het pad in de HTML aan. Gebruik toegankelijke `alt`‑tekst.

## Placeholders invullen
- **[besparing %]**, **[kWh]**, **[details]** voor CE/IEC, **[CO₂‑besparing]**, namen van **[Resortnaam]**, **[regio’s]**.
- **Bedrijfsgegevens** in de footer (adres/telefoon).
- **Installateurskit**: vervang `/assets/installateurskit.txt` door PDF/ZIP.
- **Privacyverklaring**: vervang de tekst en link in het formulierblok.

## Toegankelijkheid & SEO
- Semantische headings (H1→H2). Buttons met duidelijke focus‑states.
- `alt`‑teksten aanwezig; SVG’s hebben `role="img"` en titels/desc waar zinvol.
- `lang`‑attribuut per pagina; unieke `<title>`/meta description en Open Graph/Twitter tags.
- FAQ bevat JSON‑LD `FAQPage` voor rijke resultaten.
- Kleuren hebben hoog contrast en zijn configureerbaar via CSS variabelen.

## Prestaties
- Eén gedeeld CSS‑bestand (± enkele KB). Geen externe libraries of fonts (system stack).
- Hero‑illustratie inline; overige SVG’s lazy‑loaded via `data-src` + `IntersectionObserver`.
- Voorlaad (`preload`) ingesteld voor CSS en hero‑illustratie. System fonts hoeven niet gepreload te worden.

## Progressive enhancement
- **Smooth scroll** voor ankers (respecteert `prefers-reduced-motion`).
- **Eenvoudige form‑validatie** bovenop HTML5.
- **Lazy‑loading** voor niet‑kritische SVG’s.

## Formulier zonder backend
Het formulier gebruikt `mailto:` als fallback. Voor productie adviseren we een server‑endpoint of een formulierdienst. Laat `novalidate` weg om HTML5‑validatie te behouden.

## Tips
- **Lighthouse**: optimaliseer afbeeldingen indien u nieuwe rasterafbeeldingen toevoegt; huidige assets zijn lichte SVG’s.
- **Console‑errors**: er zijn geen externe scripts; JS is defensief opgezet.
- **Toetsenbordnavigatie**: controleer `Tab`‑volgorde en `:focus-visible`.

—
Gegenereerd op 2025-08-19.
