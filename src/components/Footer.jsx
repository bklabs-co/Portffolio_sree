import { ArrowUp } from 'lucide-react'
import { navLinks, profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className="shell flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"
        style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom,0px))' }}
      >
        <div>
          <p className="font-display text-[15px] font-bold">{profile.name}</p>
          <p className="mt-1 text-[13px] text-slate-dim">Designed and built with intention.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-slate">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-[13px] text-slate-dim">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#home" aria-label="Back to top"
             className="grid h-10 w-10 place-items-center rounded-full border border-line text-slate transition-all duration-500 hover:border-violet-accent hover:text-ink">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
