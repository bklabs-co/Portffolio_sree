import { ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data/site'
export default function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><div><a href="#home" className="footer-name">{profile.name}<span>.</span></a><p>Designed and built with intention.</p></div><nav aria-label="Footer"><ul>{navLinks.map(link => <li key={link.id}><a href={`#${link.id}`}>{link.label}</a></li>)}</ul></nav><a href="#home" className="icon-button" aria-label="Back to top"><ArrowUpRight size={23}/></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Visual design · Video · Motion · Web</span></div>
  </div></footer>
}
