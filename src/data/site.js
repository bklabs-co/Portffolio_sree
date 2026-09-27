// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Content carried over from the existing portfolio.
// Replace the TODO placeholders with real links/assets before deploy.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sree Ruban',
  initials: 'SR',
  role: 'Visual Designer × Video Editor × Motion Designer',
  availability: 'Available for creative & product design roles',
  headline: ['I design visuals.', 'I edit stories.', 'I make ideas move.'],
  intro:
    "I'm Sree Ruban — a visual designer, video editor and motion designer with 2+ years of hands-on experience across branding, social media, video, UI/UX and digital experiences.",
  location: 'Coimbatore, Tamil Nadu, India',
  years: '2+',
}

export const about = {
  paragraphs: [
    "I'm a creative professional from Kanyakumari, currently based in Coimbatore. My work sits at the intersection of visual design, video editing, motion and digital experiences.",
    "Over the last two years I've worked on real client and business requirements — wedding and corporate video, branding, social media creatives, product visuals, UI concepts and web design. I like turning rough ideas into clear, purposeful visual communication.",
    "I'm now focused on growing into an IT and product-oriented creative role, where design, technology and visual storytelling come together.",
  ],
  facts: [
    { label: 'Based in', value: 'Coimbatore, Tamil Nadu' },
    { label: 'Experience', value: '2+ years' },
    { label: 'Focus', value: 'Visual design, video & UI/UX' },
    { label: 'Looking for', value: 'Creative + product roles' },
  ],
  tools: ['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'Figma', 'DaVinci Resolve'],
}

export const services = [
  { title: 'Video editing', body: 'Wedding highlights, corporate films, reels, testimonials, promotional edits and social-first cuts.', tags: ['Premiere Pro', 'Storytelling', 'Sound design'] },
  { title: 'Motion design', body: 'Kinetic typography, title animation, transitions, product visuals and social motion graphics.', tags: ['After Effects', 'Animation', 'Compositing'] },
  { title: 'Graphic & brand design', body: 'Logos, brand identity, social creatives, posters, brochures and campaign collateral.', tags: ['Photoshop', 'Illustrator', 'Branding'] },
  { title: 'UI / UX design', body: 'Wireframes, landing pages and app concepts built around hierarchy, usability and clarity.', tags: ['Figma', 'Wireframes', 'Prototyping'] },
  { title: 'Web & front-end', body: 'Responsive website concepts and front-end builds with HTML, CSS, JavaScript and React.', tags: ['HTML/CSS', 'JavaScript', 'React'] },
  { title: 'Creative production', body: 'Brief to delivery — concept development, visual direction, asset prep and production support.', tags: ['Creative direction', 'Visual storytelling', 'Production'] },
]

export const categories = ['All', 'Video Editing', 'Motion Design', 'Graphic Design', 'UI / UX']

// `image`: drop a file in src/assets, import it, and set it here. null renders a designed placeholder.
// `grade`: a signature colour-grade for the card, like a colourist's LUT per project —
// keeps every case study visually distinct instead of one repeated accent wash.
export const projects = [
  { id: 'product-film', category: 'Video Editing', title: 'Product advertisement & brand film', summary: 'Story-driven editing, pacing, sound design, B-roll and motion-led product communication.', year: '2025', tags: ['Premiere Pro', 'Sound design'], size: 'wide', image: null, grade: { from: '#0b6478', to: '#0a2a3a', tint: '#5eead4' } },
  { id: 'landing-ui', category: 'UI / UX', title: 'Product landing page UI', summary: 'Interface structure, hierarchy and a conversion-focused visual direction.', year: '2025', tags: ['Figma', 'Responsive'], size: 'tall', image: null, grade: { from: '#4f46e5', to: '#7c3aed', tint: '#c4b5fd' } },
  { id: 'social-system', category: 'Graphic Design', title: 'Social media & brand creatives', summary: 'Campaign creatives, promotional posts and digital ads built for visual consistency.', year: '2025', tags: ['Photoshop', 'Illustrator'], size: 'regular', image: null, grade: { from: '#15803d', to: '#0a3b20', tint: '#86efac' } },
  { id: 'kinetic-type', category: 'Motion Design', title: 'Motion graphics & kinetic type', summary: 'Animated typography, transitions and title treatments for short-form content.', year: '2025', tags: ['After Effects'], size: 'regular', image: null, grade: { from: '#3b0764', to: '#150826', tint: '#e9d5ff' } },
  { id: 'wedding-film', category: 'Video Editing', title: 'Wedding & event highlight film', summary: 'Emotional storytelling, music sync, cinematic pacing and finished colour.', year: '2024', tags: ['Premiere Pro', 'Colour'], size: 'wide', image: null, grade: { from: '#0369a1', to: '#0f2436', tint: '#7dd3fc' } },
  { id: 'brand-identity', category: 'Graphic Design', title: 'Logo & brand identity system', summary: 'Logo concepts, typography, colour direction and practical brand collateral.', year: '2024', tags: ['Illustrator', 'Identity'], size: 'tall', image: null, grade: { from: '#78350f', to: '#2b1608', tint: '#fcd34d' } },
]

export const experience = [
  {
    period: 'Apr 2025 — Present',
    role: 'Graphic Designer & Video Editor',
    company: 'Freddyfish Events & Photography',
    summary: 'Creating visual content across graphic design, branding, digital marketing, social media and video production.',
    points: [
      'Design logos, brand identities, brochures, advertisements and social media creatives.',
      'Edit wedding highlights, reels, corporate videos, testimonials and event content.',
      'Develop motion-led visuals, B-roll sequences and social-first edits.',
      'Work with clients from brief through final delivery.',
    ],
    stack: ['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator'],
  },
  {
    period: 'Freelance / project-based',
    role: 'Freelance Designer & Video Editor',
    company: 'Independent creative work',
    summary: 'Handling design and editing requirements directly with clients — briefs, revisions, deadlines and final exports.',
    points: [
      'Video editing for events, weddings, social media and promotional content.',
      'Graphic design for digital campaigns, branding and marketing assets.',
      'UI/UX and web design work bridging visual design and digital products.',
    ],
    stack: ['Figma', 'DaVinci Resolve', 'HTML/CSS'],
  },
]

export const process = [
  { title: 'Understand', body: 'Clarify the brief, audience, platform, references and delivery requirements.' },
  { title: 'Plan', body: 'Build the visual direction, storyboard, wireframe or edit plan before execution.' },
  { title: 'Create', body: 'Design, edit and animate with attention to hierarchy, pacing and composition.' },
  { title: 'Deliver', body: 'Review, refine and export production-ready assets for the intended platform.' },
]

export const skills = [
  { group: 'Video & motion', items: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound design', 'Colour grading'] },
  { group: 'Design', items: ['Photoshop', 'Illustrator', 'Figma', 'Brand identity', 'Typography'] },
  { group: 'Web & front-end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
  { group: 'Practice', items: ['Wireframing', 'Prototyping', 'Visual direction', 'Client delivery'] },
]

// TODO: replace placeholder hrefs and email with real details.
export const contact = {
  email: 'hello@sreeruban.com',
  phone: 'Available on request',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
