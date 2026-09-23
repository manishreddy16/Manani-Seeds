# Manani Seeds — Website

Premium marketing website for **Manani Seeds** ("Seeds with a New Skill"),
built with React + TypeScript + Vite, Tailwind CSS v4, Framer Motion and
React Three Fiber (Three.js) for the cinematic hero.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Where to put real content

Everything is centralized so you never have to touch a component file to
update content:

| What to change              | File                          |
|------------------------------|-------------------------------|
| WhatsApp number, email, address, tagline, impact stats, Why-Us copy, About copy | `src/data/site.ts` |
| Real photos & logo (paths)   | `src/data/media.ts` + drop files into `public/media/...` |
| Product names, descriptions, specs, Telugu content | `src/data/products.ts` |

Until real photography is added, every image slot renders a tasteful
branded placeholder in the exact right aspect ratio — see
`public/media/README.md` for the folder/filename convention. The moment a
real file is placed and `real: true` is set on that entry in
`src/data/media.ts`, the real photo appears with zero layout changes.

## Structure

```
src/
  components/
    ui/          navbar, footer, floating WhatsApp button, MediaFrame
    sections/    Hero, Stats, About, Products, WhyUs, Story, Gallery, Contact
    product/     ProductCard
    three/       SeedField (R3F hero background)
  data/          site.ts, media.ts, products.ts  ← single source of truth
  pages/         Home, ProductDetailPage, NotFound
  hooks/         useCountUp (one-time stat animation)
  lib/           whatsapp.ts, cn.ts
```

## Routes

- `/` — full one-page experience (Hero → Stats → About → Products → Why Us → Story → Gallery → Contact)
- `/products/:slug` — dedicated detail page per product (zoomba, manani-666, bhoomi, rudhraksha, maize)

## Notes

- No backend, auth, database or CMS — WhatsApp is the sole conversion path, per spec.
- 3D hero degrades gracefully: it's skipped on small screens and honors `prefers-reduced-motion`.
- All statistics in `site.ts` and specs in `products.ts` are clearly marked
  placeholders — replace only with confirmed real figures.
