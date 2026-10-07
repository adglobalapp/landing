# landing

Teszt landing page az [adglobalapp.com](https://adglobalapp.com) arculatához igazítva – weboldalkészítés promóció (EN · ES · HU).

**Stack:** React 19 · TypeScript · JavaScript · CSS (custom property tokenek) · Vite

## Futtatás

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # típusellenőrzés + production build a dist/ mappába
npm run preview   # a build kiszolgálása
```

## Felépítés

```
src/
  styles/tokens.css   # design tokenek (szín, tipográfia, spacing, radius, motion)
  styles/base.css     # reset, globális elemek, utility osztályok
  data/content.js     # a teljes szöveges tartalom 3 nyelven (JS + JSDoc)
  utils/reveal.js     # scroll reveal IntersectionObserverrel (JS)
  i18n.tsx            # nyelvváltó context (TS)
  components/         # szekciók: Header, Hero, Services, Process, Packages, Contact, Footer
```

Az arculat módosításához elég a `src/styles/tokens.css`-t szerkeszteni, a szövegekhez a `src/data/content.js`-t.

A kapcsolati űrlap teszt jellegű: nincs backend, beküldéskor csak visszajelzést mutat.
