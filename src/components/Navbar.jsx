import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/site'
import { useScrollSpy, useScrolled } from '../hooks/useScrollSpy'
import { Magnetic } from './Primitives'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useScrollSpy(ids)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,padding] duration-500 ${
        scrolled ? 'glass border-b border-line py-3' : 'border-b border-transparent py-5'
      }`}
      style={{ paddingTop: `calc(env(safe-area-inset-top,0px) + ${scrolled ? '0.75rem' : '1.25rem'})` }}
    >
      <nav aria-label="Primary" className="shell flex items-center justify-between gap-6">
        <a href="#home" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl grad-btn font-display text-sm font-bold text-white transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-[15px] font-bold leading-tight">{profile.name}</span>
            <span className="block text-[11px] leading-tight text-slate-dim">Visual · Video · Motion</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const on = active === l.id
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={on ? 'true' : undefined}
                  className={`relative inline-flex h-10 items-center rounded-full px-4 text-[14px] transition-colors duration-300 ${
                    on ? 'text-ink' : 'text-slate hover:text-ink'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-line bg-white/[0.05]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:block" strength={0.25}>
            <a
              href="#contact"
              className="inline-flex tap items-center rounded-full grad-btn px-5 text-[14px] font-medium leading-[44px] text-white transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-[0_0_28px_-6px_rgba(168,85,247,0.6)]"
            >
              Let's work together
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.6 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.6 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="glass border-t border-line lg:hidden"
          >
            <ul className="shell flex flex-col py-4">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex tap items-center justify-between border-b border-line/60 py-3.5 font-display text-2xl ${
                      active === l.id ? 'text-ink' : 'text-slate'
                    }`}
                  >
                    {l.label}
                    <span aria-hidden className="text-[12px] text-slate-dim">{String(i + 1).padStart(2, '0')}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-5">
                <a href="#contact" onClick={() => setOpen(false)} className="flex tap w-full items-center justify-center rounded-full grad-btn font-medium text-white">
                  Let's work together
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
