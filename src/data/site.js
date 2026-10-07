// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Content carried over from the existing portfolio.
// Contact values are retained from the existing portfolio; confirm them before publishing.
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

export { portfolioCategories as categories, portfolioProjects as projects } from './portfolio'

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
