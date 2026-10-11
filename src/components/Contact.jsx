import { ArrowUpRight, Mail, MapPin, Phone, Asterisk } from 'lucide-react'
import { Reveal, Magnetic } from './Primitives'
import { contact, profile } from '../data/site'
export default function Contact() {
  const socials = contact.socials.filter(social => social.href && social.href !== '#')
  return <section id="contact" aria-labelledby="contact-t" className="contact-section">
    <div className="shell">
      <Reveal className="contact-topline"><p className="eyebrow">09 / Let's make something meaningful</p><Asterisk size={52} aria-hidden/></Reveal>
      <Reveal><h2 id="contact-t">Good ideas deserve<br/><span>a great execution.</span></h2><div className="contact-body"><p>I'm open to creative collaborations, freelance projects and roles where visual design, video and digital products come together.</p><Magnetic strength={0.1}><a href={`mailto:${contact.email}`} className="button button-dark">Start a conversation <ArrowUpRight size={20}/></a></Magnetic></div></Reveal>
      <Reveal className="contact-details"><a href={`mailto:${contact.email}`}><Mail size={17}/><span>{contact.email}</span></a><span><MapPin size={17}/>{profile.location}</span><a href={`tel:+91${contact.phone}`}><Phone size={17}/>{contact.phone}</a></Reveal>
      {socials.length > 0 && <ul className="contact-socials">{socials.map(social => <li key={social.label}><a className="text-link" href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={16}/></a></li>)}</ul>}
    </div>
  </section>
}
