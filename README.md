# Sree Ruban — Creative Portfolio

An existing React 18 / Vite 5 portfolio redesigned with an editorial charcoal,
ivory and warm orange visual system. Uses the existing Tailwind CSS, Framer
Motion and Lucide React dependencies. Single-page section navigation; no router,
server architecture or new runtime dependencies.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if the local execution policy blocks
`npm.ps1`. Production output is in `dist/`. No lint or automated test script is
configured in the original package.

## Content and components

- `src/data/site.js`: original profile, About copy, services, process, experience,
  toolkit and contact information.
- `src/data/portfolio.js`: real projects, artwork collections, image descriptions,
  video metadata and asset paths.
- `src/data/asset-previews.json`: mapping from originals to optimized WebP variants.
- `src/components/Tilt.jsx` and `ProjectCard.jsx`: reusable spring tilt and 3D card
  faces, with hover, keyboard and touch interaction.
- `src/components/MediaViewer.jsx` and `Modal.jsx`: image galleries, zoom,
  scrollable long-page previews and video playback in accessible native dialogs.
- `CreativeShowcase.jsx`, `VideoShowcase.jsx`, `BrandShowcase.jsx`: dedicated,
  media-specific showcases.
- `src/index.css` and `src/responsive.css`: visual system and viewport overrides.

All main sections and existing navigation targets remain available. The Work
index filters 18 projects/collections across six disciplines. The original images
are preserved, with 640px and 1440px WebP variants for presentation and extracted
posters for the seven videos. See [the asset audit](docs/ASSET-AUDIT.md) for every
included category and the reference bundles intentionally kept separate.

## Interaction and accessibility

Hover a selected card to turn it; tap or press Enter on its front to show details.
Use View project to open the gallery, and the return arrow to restore the artwork.
Gallery arrow keys move between images, Escape closes a preview and focus returns
to the opener. Native dialogs contain focus and prevent background interaction.
The mobile menu uses the same accessible dialog system. Reduced-motion settings
replace 3D rotation with immediate face changes and disable decorative motion.
Videos load only when their viewer opens and never autoplay on the page.

## Contact configuration

The original `hello@sreeruban.com` is retained, but is marked as a placeholder in
`src/data/site.js`. Confirm the email and replace the `#` social URLs there before
publishing. Social buttons appear automatically when real URLs are provided.

## Verification

The production build passes, and 48 interaction and asset checks pass. The
production preview has no broken image requests, console errors, horizontal page
overflow or video downloads before playback is requested. The redesign was
checked in installed Chrome with desktop, tablet and mobile
viewport emulation, including widths from 320px to 1920px. Checks cover section
anchors, project filtering, hover and touch card flips, keyboard operation, modal
focus and Escape, gallery navigation, video playback, reduced motion, asset URLs,
console errors and horizontal page overflow. Local QA screenshots and scripts are
ignored under `.local-qa/` and are not bundled with the application.
