import { useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'
import { navLinks, profile } from '../data/site'
import { useScrollSpy, useScrolled } from '../hooks/useScrollSpy'
import Modal from './Modal'

const ids = navLinks.map(link => link.id)
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useScrollSpy(ids)
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav aria-label="Primary" className="shell nav-inner">
        <a href="#home" className="wordmark" aria-label={`${profile.name}, home`}><span className="monogram">{profile.initials}<span>.</span></span><span>{profile.name}<small>Independent creative</small></span></a>
        <ul className="desktop-nav">{navLinks.map(link => <li key={link.id}><a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined}>{link.label}</a></li>)}</ul>
        <a className="nav-cta text-link" href="#contact">Let's talk <ArrowUpRight size={17}/></a>
        <button type="button" className="icon-button menu-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(true)}><Menu size={22}/></button>
      </nav>
    </header>
    {open && <Modal onClose={() => setOpen(false)} labelId="menu-title" className="menu-modal">
      <p id="menu-title" className="eyebrow">Explore the portfolio</p>
      <nav id="mobile-nav" aria-label="Mobile"><ul>{navLinks.map((link, i) => <li key={link.id}><a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setOpen(false)}><span>{link.label}</span><small>{String(i + 1).padStart(2, '0')}</small></a></li>)}</ul></nav>
      <p className="menu-note">{profile.availability}</p>
    </Modal>}
  </>
}
