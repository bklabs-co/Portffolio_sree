import previewMap from './asset-previews.json'
import profileImage from '../assets/Portfolio Project Assets/Profile pic/Sree ruban Profile image.png'
import agencyImage from '../assets/Portfolio Project Assets/Added/Creaitve Agency UI design.png'
import videoPlatformImage from '../assets/Portfolio Project Assets/Added/1920w light (3).png'
// Originals stay untouched; WebP variants and extracted video posters serve the UI.
const originals = import.meta.glob([
  '../assets/Portfolio Project Assets/Graphics Design/*.{jpg,jpeg,png}',
  '../assets/Portfolio Project Assets/New/*.{jpg,jpeg,png}',
  '../assets/Portfolio Project Assets/LOGO And Branding/*.{jpg,jpeg,png}',
  '../assets/Portfolio Project Assets/UI-UX Design/*.{jpg,jpeg,png}',
  '../assets/Portfolio Project Assets/Video editing/*.mp4',
], { eager: true, query: '?url', import: 'default' })
const posters = import.meta.glob('../assets/portfolio/video-posters/*.jpg', { eager: true, query: '?url', import: 'default' })
const previews = import.meta.glob('../assets/portfolio/optimized/*.webp', { eager: true, query: '?url', import: 'default' })
const asset = (folder, file) => {
  const url = originals[`../assets/Portfolio Project Assets/${folder}/${file}`]
  if (!url) throw new Error(`Missing portfolio asset: ${folder}/${file}`)
  return url
}
const image = (folder, file, alt) => {
  const variants = previewMap[`${folder}/${file}`]
  if (!variants) throw new Error(`Missing optimized image: ${folder}/${file}`)
  const src = previews[`../assets/portfolio/optimized/${variants[1440]}`]
  const thumbnail = previews[`../assets/portfolio/optimized/${variants[640]}`]
  if (!src || !thumbnail) throw new Error(`Missing WebP preview: ${folder}/${file}`)
  return { src, thumbnail, alt, original: asset(folder, file), aspect: variants.aspect,
    srcSet: variants.width640 === variants.width1440 ? undefined : `${thumbnail} ${variants.width640}w, ${src} ${variants.width1440}w` }
}
const graphic = (file, alt) => image('Graphics Design', file, alt)
const fresh = (file, alt) => image('New', file, alt)
const ui = (file, alt) => image('UI-UX Design', file, alt)

const addedImage = (name, original, alt) => ({ aspect: {profile: 1672 / 940, agency: 2 / 3, 'video-platform': 11817 / 1926}[name], srcSet: `${previews[`../assets/portfolio/optimized/added-${name}-640.webp`]} 640w, ${previews[`../assets/portfolio/optimized/added-${name}-1440.webp`]} ${{profile: 940, agency: 1440, 'video-platform': 978}[name]}w`, src: previews[`../assets/portfolio/optimized/added-${name}-1440.webp`], thumbnail: previews[`../assets/portfolio/optimized/added-${name}-640.webp`], original, alt })
export const portrait = addedImage('profile', profileImage, 'Portrait of Sree Ruban')
export const interfaceProjects = [
  { id: 'apex', title: 'Apex', category: 'UI / UX', subtitle: 'A digital studio, thoughtfully framed.', summary: 'A dark, typography-led digital agency landing page with service highlights, a clear call to action and a layered visual direction.', tags: ['Landing page', 'Visual hierarchy', 'UI design'], images: [ui('Apex.png', 'Apex digital agency landing page design')], theme: 'blue' },
  { id: 'nike', title: 'Nike / Infinite scroll', category: 'UI / UX', subtitle: 'An interface built around the product.', summary: 'A footwear storefront concept using a restrained palette, generous spacing and a product-first horizontal composition.', tags: ['E-commerce', 'Interface concept'], images: [ui('NIKE INFINITE SCROLL.png', 'Nike Air Jordan storefront interface concept')], theme: 'light' },
  { id: 'dashboard', title: 'Analytics dashboard', category: 'UI / UX', subtitle: 'Complex information. Clear decisions.', summary: 'A dashboard interface bringing performance metrics, charting and day-to-day activity into one readable workspace.', tags: ['Dashboard', 'Information design'], images: [ui('Desktop - 1.png', 'Analytics dashboard with metrics, charts and activity panels')], theme: 'mint' },
  { id: 'vfeed', title: 'VFeed / Web experience', category: 'UI / UX', subtitle: 'An entire experience, from top to bottom.', summary: 'A full-length website interface exploring content hierarchy, product presentation and a connected visual system.', tags: ['Web design', 'Long-form layout'], images: [ui('1920w light (2).png', 'Full-length VFeed website interface design')], theme: 'light' },
  { id: 'airpods', title: 'AirPods / Scroll study', category: 'UI / UX', subtitle: 'Product storytelling in motion.', summary: 'A collection of dark product interface frames exploring parallax and scrolling presentation for AirPods.', tags: ['Scroll concept', 'Product design'], images: [ui('Parallax & Scrolling animation.png', 'AirPods product interface frames for a parallax and scrolling study')], theme: 'dark' },
]
export const addedProjects = [
  { id: 'creative-agency-study', title: 'Creative agency / Interface study', category: 'UI / UX', summary: 'A dark creative agency interface exploring bold typography, blue accents and a sculptural hero composition.', tags: ['Interface study', 'Web design'], images: [addedImage('agency', agencyImage, 'Creative agency interface with blue orbital graphics and a bold headline')] },
  { id: 'video-platform-study', title: 'AI video platform / Web study', category: 'UI / UX', summary: 'A full-length video platform interface bringing editing tools, avatar features and product storytelling into a light, structured layout.', tags: ['Landing page', 'UI design'], images: [addedImage('video-platform', videoPlatformImage, 'Full-length AI video platform landing page with editing tools and avatar features')] },
]
export const visualCollections = [
  { id: 'product-visuals', title: 'Product / In a different light', category: 'Image Editing', summary: 'Product-focused compositions using light, colour, typography and a considered visual hierarchy.', tags: ['Product visuals', 'Compositing'], images: [graphic('Product Images.jpg', 'Green skincare serum advertisement with citrus and botanical details'), graphic('Product Images 2.jpg', 'Minimal green botanical product composition')] },
  { id: 'watch', title: 'Time, well designed.', category: 'Image Editing', summary: 'Watch campaign creatives exploring cinematic lighting, clean product presentation and distinct visual directions.', tags: ['Product campaign', 'Image editing'], images: [fresh('watch poster Social Media For 1080x1080-01.jpg.jpeg', 'Automatic watch campaign with warm cinematic lighting'), graphic('Watch Poster2.jpg', 'Burei watch campaign on a dark background'), graphic('Watch POster.jpg', 'Green and white watch collection advertisement')] },
  { id: 'food', title: 'Made to make you look.', category: 'Graphic Design', summary: 'Food and beverage creatives spanning promotional posters, seasonal moments and social media storytelling.', tags: ['Social creatives', 'Campaign design'], images: [
    graphic('Burger-01.jpg.jpeg', 'Fried chicken burger promotional poster'), graphic('ColD coffee-01.jpg.jpeg', 'Cold coffee campaign with warm lighting'), graphic('Fried Chicken-01.jpg.jpeg', 'Crispy fried chicken poster'), graphic('Hot Dog-01.jpg.jpeg', 'Orange hot dog promotional poster'), graphic('Mijito-01.jpg.jpeg', 'Green mojito drinks poster'), graphic('National  French Fries Day-01.jpg.jpeg', 'National French Fries Day creative'), graphic('National Burger Day-01-01.jpg.jpeg', 'National Burger Day creative'), graphic('National Hot Dog  Day-01.jpg.jpeg', 'National Hot Dog Day creative'), graphic('National Mojito Day-01.jpg.jpeg', 'National Mojito Day creative'), graphic('Nationala Pizza day-01.jpg.jpeg', 'National Pizza Day creative'), graphic('Pasta-01.jpg.jpeg', 'Classic arrabbiata pasta poster'), graphic('Pizza-01.jpg.jpeg', 'Spicy barbecue chicken pizza poster'), graphic('sandwich day-01.jpg.jpeg', 'Sandwich Day promotional creative'), graphic('Sandwich-01.jpg.jpeg', 'Sandwich poster with cinematic restaurant lighting'), graphic('Smoothie Days-01.jpg.jpeg', 'National Smoothie Day mango drink creative'), graphic('Smoothie-01.jpg.jpeg', 'Peanut caramel shake poster'), graphic('Waffle-01-1.jpg.jpeg', 'Strawberry waffle poster'), graphic('Waffle-01.jpg.jpeg', 'Waffle poster with a minimal split layout'), graphic('World Chocolate day-01.jpg.jpeg', 'World Chocolate Day milkshake creative'), graphic('World Mango day-01.jpg.jpeg', 'National Mango Day creative'),
  ] },
  { id: 'campaigns', title: 'Ideas with a point of view.', category: 'Graphic Design', summary: 'Campaign compositions across automotive, agriculture, healthcare, sustainability, books and everyday products.', tags: ['Campaigns', 'Visual storytelling'], images: [
    fresh('Car  POster 1080x1080-01.jpg.jpeg', 'BMW automotive poster with layered monochrome graphics'), fresh('Bangalore task Agri-01.jpg.jpeg', 'Farm to Future agricultural campaign'), fresh('Agir + Healthcare-01.jpg.jpeg', 'Healthy Earth Healthy Us campaign'), fresh('Earth Day Poster Story.jpg.jpeg', 'Earth Day sustainable fashion story creative'), graphic('World Book day Poster-01.jpg.jpeg', 'World Book Day illustrated campaign poster'), graphic('Blinkit copy.jpg', 'Blinkit campaign featuring grocery delivery and families'),
  ] },
]
export const brandProjects = [
  { id: 'agri-brand', title: 'Agriculture / Brand identity', category: 'Branding', summary: 'An agricultural identity combining botanical forms with a clean circular mark, carried through business card and product mockups.', tags: ['Logo design', 'Brand applications'], images: [fresh('Agri Logo-04.jpg.jpeg', 'Agricultural logo featuring grain and a botanical mark'), fresh('Agri Logo MockUp Jpeg.jpg.jpeg', 'Agricultural brand logo applied to a ceramic mug'), fresh('agri Logo Mockup 2.jpg.jpeg', 'Agricultural brand business card mockup')] },
  { id: 'dp-holidays', title: 'DP Holidays', category: 'Branding', summary: 'A travel identity with an interlocking DP mark, supported by destination and travel fair campaign artwork.', tags: ['Travel identity', 'Campaign collateral'], images: [image('LOGO And Branding', 'dp_holidays_logo.jpg', 'DP Holidays blue and green travel logo'), image('LOGO And Branding', '1770605217387.jpg', 'DP Holidays China travel campaign'), image('LOGO And Branding', '1770605218250.jpg', 'DP Holidays travel fair campaign')] },
]
const videoData = [
  ['local-story', 'RS Puram / A local story', '1.mp4', 'Location storytelling, portrait framing and social-first pacing.', 'Video Editing', '00:29'],
  ['street-story', 'RS Puram / People & place', '3.mp4', 'A portrait-format edit combining on-location footage, people and text.', 'Video Editing', '00:22'],
  ['map', 'Documentary / Map animation', 'Documentary Map Animation.mp4', 'A textured map sequence for documentary-style visual storytelling.', 'Motion Design', '00:07'],
  ['canva', 'Canva / Founder story', 'Portfoli Video Canva Founder.mp4', 'A short-form founder story with typography, image cutouts and narrative pacing.', 'Video Editing', '00:25'],
  ['saas', 'SaaS / Interface animation', 'Saas Animation Video Hotel Page.mp4', 'An interface-focused motion piece combining a product prompt with a visual reveal.', 'Motion Design', '00:08'],
  ['shopify', 'Shopify / Big ideas need stores', 'Shopify Video.mp4', 'A product communication edit for an e-commerce website experience.', 'Motion Design', '00:15'],
  ['launch', 'Web / Launch animation', 'Web Page Launch  Animation video.mp4', 'A vertical website launch animation introducing a storefront on mobile.', 'Motion Design', '00:06'],
]
export const videoProjects = videoData.map(([id, title, file, summary, category, duration], i) => ({
  id, title, summary, category, duration, tags: ['Video', category], video: asset('Video editing', file),
  images: [{ src: posters[`../assets/portfolio/video-posters/video-${i + 1}.jpg`], alt: `Frame from ${title}` }],
}))
export const portfolioProjects = [...interfaceProjects, ...addedProjects, ...visualCollections, ...brandProjects, ...videoProjects]
export const portfolioCategories = ['All', 'UI / UX', 'Graphic Design', 'Image Editing', 'Branding', 'Video Editing', 'Motion Design']
export const heroArt = { product: visualCollections[0].images[0], watch: visualCollections[1].images[0], interface: interfaceProjects[0].images[0] }
