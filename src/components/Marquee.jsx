import { Asterisk } from 'lucide-react'
import { services } from '../data/site'
export default function Marquee() {
  return <div aria-hidden className="discipline-strip"><div className="shell">{services.map(service => <span key={service.title}>{service.title}<Asterisk size={18}/></span>)}</div></div>
}
