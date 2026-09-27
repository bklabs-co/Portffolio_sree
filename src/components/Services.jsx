import { Section, Stagger, Reveal } from './Primitives'
import { services, process } from '../data/site'

export default function Services() {
  return (
    <Section
      id="services"
      label="What I do"
      title="Skills that work together, not in isolation."
      lead="Instead of treating each discipline as a separate service, I combine design, editing and motion into one piece of visual communication."
    >
      <Stagger as="ul" className="grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Stagger.Item as="li" key={s.title} className="elevate-inset group relative overflow-hidden bg-surface p-7 transition-colors duration-500 hover:bg-raised">
            <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 grad-btn transition-transform duration-500 group-hover:scale-x-100" />
            <h3 className="font-display text-[1.25rem] font-semibold transition-transform duration-500 group-hover:translate-x-1">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate">{s.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 text-[12px] text-slate-dim transition-colors duration-500 group-hover:border-violet-accent/30 group-hover:text-slate">{t}</li>
              ))}
            </ul>
          </Stagger.Item>
        ))}
      </Stagger>

      {/* Numbered because this genuinely is a sequence. */}
      <Reveal className="mt-20">
        <Stagger as="ol" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Stagger.Item as="li" key={step.title} className="group border-t border-line pt-5 transition-colors duration-500 hover:border-violet-accent/50">
              <span className="font-display text-[13px] text-violet-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-[1.05rem] font-semibold">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">{step.body}</p>
            </Stagger.Item>
          ))}
        </Stagger>
      </Reveal>
    </Section>
  )
}
