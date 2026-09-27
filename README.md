# Sree Ruban — Portfolio (React + Vite)

Animated dark portfolio: React 18, Vite 5, Tailwind CSS 3, Framer Motion, Lucide React.
Single page, anchored sections, no router.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Structure

```
src/
  data/site.js          all copy, projects, experience, skills, links
  hooks/useScrollSpy.js scroll-spy + scrolled-state
  components/
    Primitives.jsx      Reveal, Stagger, SplitText, Magnetic, Section, Pill
    Chrome.jsx          Intro curtain, CursorGlow, ScrollProgress
    Navbar.jsx          sticky, blur-on-scroll, spring pill indicator, mobile panel
    Hero.jsx            split-text headline, scroll parallax, floating badges
    Marquee.jsx  About.jsx  Services.jsx
    Work.jsx  ProjectCard.jsx   filter + 3D tilt + cursor sheen
    Experience.jsx  Skills.jsx  Contact.jsx  Footer.jsx
  App.jsx  main.jsx  index.css
```

## Motion layer

| Where | Effect |
|---|---|
| Page load | Curtain with the name, lifts after ~1.5s (skipped for reduced motion) |
| Global | Gradient scroll-progress bar; cursor-following glow (pointer:fine only) |
| Hero | Word-by-word masked headline; layers parallax apart on scroll; floating tool badges; drifting gradient mesh |
| Buttons | Magnetic lean toward the cursor, gradient sweep, arrow slide |
| Nav | `layoutId` spring pill that travels between active links |
| Cards | 3D tilt toward the cursor, radial sheen tracking the pointer, image scale, arrow swap |
| Filters | Shared-layout pill; `AnimatePresence` on the grid |
| Experience | Gradient timeline line that draws itself as the section scrolls |
| Sections | Staggered children, not one blanket fade |

Everything is transform/opacity. `prefers-reduced-motion` disables the curtain, the
cursor glow, tilt, parallax and split-text, leaving static content.

Timings to tune: `BASE` in `Hero.jsx` (entrance delay), the timeout in `Intro`,
and the `gap` prop on `<Stagger>`.

## Editing content

Everything is in `src/data/site.js`. Nothing is hardcoded in components.

- **Project images** — put files in `src/assets/`, import them, set `image:` on the project.
  `image: null` renders a designed gradient placeholder.
- **Card size** — each project has `size: 'wide' | 'tall' | 'regular'`, driving the
  asymmetric 12-column grid. Reorder the array to re-compose the layout.
- **Portrait** — two slots marked with a comment: `Hero.jsx` and `About.jsx`.
- **Links** — `contact.socials` and `contact.email` are placeholders (`#`). Replace before deploy.
