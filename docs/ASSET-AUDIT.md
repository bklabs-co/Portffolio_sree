# Portfolio asset audit

The supplied artwork is in `src/assets/Portfolio Project Assets/`. Originals have
not been moved, overwritten or edited. `src/assets/portfolio/` contains derived
WebP previews and still frames extracted from the supplied videos.

## Included

All 43 images outside the separately named reference bundles and all seven MP4s
are included. There are 18 actual projects or collections, rather than one card
for every file. Collection galleries make all variants accessible.

| Original folder / files | Presentation |
| --- | --- |
| Graphics Design / `1690378510655.jpg.jpeg` | About portrait |
| UI-UX Design / `Apex.png` | Hero, featured digital project, work index and preview |
| UI-UX Design / `NIKE INFINITE SCROLL.png` | Rotating card, work index and preview |
| UI-UX Design / `Desktop - 1.png` | Analytics dashboard in the work index and preview |
| UI-UX Design / `1920w light (2).png` | VFeed project with a scrollable full-page preview |
| UI-UX Design / `Parallax & Scrolling animation.png` | AirPods scroll study and preview |
| Graphics Design / `Product Images.jpg`, `Product Images 2.jpg` | Hero, dedicated product composition showcase and gallery |
| Graphics Design / `Watch POster.jpg`, `Watch Poster2.jpg`; New / `watch poster Social Media For 1080x1080-01.jpg.jpeg` | Watch campaign rotating card and three-image gallery |
| Graphics Design / 20 food and beverage posters | Six selected images in a horizontal rail; every image in the collection gallery |
| Graphics Design / `Blinkit copy.jpg`, `World Book day Poster-01.jpg.jpeg` | Campaign collection gallery |
| New / `Car  POster 1080x1080-01.jpg.jpeg`, `Bangalore task Agri-01.jpg.jpeg`, `Agir + Healthcare-01.jpg.jpeg`, `Earth Day Poster Story.jpg.jpeg` | Campaign collection gallery |
| New / `Agri Logo-04.jpg.jpeg`, `Agri Logo MockUp Jpeg.jpg.jpeg`, `agri Logo Mockup 2.jpg.jpeg` | Rotating identity card, large branding presentation and applications gallery |
| LOGO And Branding / all three images | DP Holidays identity and campaign gallery |
| Video editing / `1.mp4`, `3.mp4` | RS Puram location and people edits |
| Video editing / `Documentary Map Animation.mp4` | Documentary map animation |
| Video editing / `Portfoli Video Canva Founder.mp4` | Canva founder story |
| Video editing / `Saas Animation Video Hotel Page.mp4` | SaaS interface motion piece |
| Video editing / `Shopify Video.mp4` | Featured cinematic preview |
| Video editing / `Web Page Launch  Animation video.mp4` | Vertical website launch animation |

The food collection includes Burger, Cold coffee, Fried Chicken, Hot Dog, Mojito,
French Fries Day, Burger Day, Hot Dog Day, Mojito Day, Pizza Day, Pasta, Pizza,
Sandwich Day, Sandwich, Smoothie Day, Smoothie, both Waffle variants, Chocolate Day
and Mango Day. Filenames and the full mapping are in `src/data/portfolio.js`.

## Intentionally excluded and preserved

- `PORTFOLIO - ADHINA/Final Portfolio/`: 54 images in a separately named portfolio,
  including UI screens, advertising, candle branding and alternate food creatives.
  Authorship is not established by the existing Sree Ruban content. This complete
  bundle remains available as reference material; it is not attributed to Sree
  Ruban without confirmation.
- `Website/surya/`: a separately named bundle of static website sources, sample
  images, navigation/form exercises, a weather app and Tripadvisor/Udemy clones.
  No original portfolio imports, live project links or authorship confirmation
  connect this bundle to Sree Ruban. It remains intact as reference material.
- Nested `.git` objects, editor files, shortcuts and generic stock imagery inside
  those website exercises are not standalone portfolio projects.
- The six original project entries had no images or project URLs. Their generic
  placeholder cards have been replaced with actual supplied work. The personal
  information, capabilities, About paragraphs, job history, skills and process
  remain in `src/data/site.js`.

## Delivery and performance

The 43 source images total approximately 187 MB. Their 1440px WebP previews total
approximately 8 MB, a 96% reduction. Smaller variants serve compact displays and
thumbnails. Full-resolution originals remain available through the preview's
Original image link. All seven videos have extracted poster frames; video elements
are created only when a visitor opens a film, use metadata preload and are removed
when the modal closes.

The build intentionally packages full-resolution originals and supplied videos.
The published artifact is therefore large, but the page does not download those
files on initial load.

## Contact information awaiting confirmation

The existing source marks `hello@sreeruban.com` and the three social destinations
as placeholders. The email is retained; social links with `href: '#'` are hidden
until real URLs are supplied. No contact information has been invented.
