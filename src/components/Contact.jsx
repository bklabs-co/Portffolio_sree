import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal, Stagger, Magnetic, SplitText } from './Primitives'
import { contact, profile } from '../data/site'

export default function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" aria-labelledby="contact-t" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_66%)] blur-3xl motion-safe:animate-[drift_24s_ease-in-out_infinite]" />
      </div>

      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">Contact</p>
          <h2 id="contact-t" className="font-display text-[clamp(2.1rem,7vw,4.25rem)] font-extrabold leading-[0.98]">
            <SplitText text="Let's build something great." accentFrom={2} />
          </h2>
          <p className="mt-6 max-w-[58ch] text-[1.05rem] text-slate">
            I'm open to creative collaborations, freelance projects and roles where visual design, video and digital
            products come together.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 flex flex-wrap items-center gap-6">
          <Magnetic strength={0.3}>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex tap items-center gap-2 rounded-full grad-btn px-8 font-medium text-white transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-[0_0_38px_-6px_rgba(168,85,247,0.7)]"
            >
              Start a conversation
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Magnetic>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {contact.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="relative text-slate transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-violet-accent after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-3" gap={0.06}>
          {items.map(({ icon: Icon, label, value, href }) => {
            const Inner = (
              <>
                <Icon size={17} className="text-violet-accent" aria-hidden />
                <span className="mt-4 block text-[13px] text-slate-dim">{label}</span>
                <span className="mt-1 block break-words font-display text-[15px] font-semibold">{value}</span>
              </>
            )
            return (
              <Stagger.Item key={label} className="elevate-inset bg-surface transition-colors duration-500 hover:bg-raised">
                {href ? <a href={href} className="block p-6">{Inner}</a> : <div className="p-6">{Inner}</div>}
              </Stagger.Item>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
