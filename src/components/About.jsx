import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section, Reveal, Stagger, Pill } from './Primitives'
import { about } from '../data/site'

export default function About() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <Section id="about" label="About" title="Design, motion and story — handled by one person.">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <motion.div style={reduce ? {} : { y }} className="group relative aspect-[4/5] overflow-hidden rounded-xl2 border border-line bg-gradient-to-br from-raised to-surface">
            {/* Swap for <img src={portrait} alt="Sree Ruban" loading="lazy" className="h-full w-full object-cover" /> */}
            <div aria-hidden className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105 bg-[radial-gradient(circle_at_70%_25%,rgba(168,85,247,0.4),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.34),transparent_60%)]" />
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Stagger>
            {about.paragraphs.map((p) => (
              <Stagger.Item key={p.slice(0, 20)} as="p" className="mb-5 max-w-[68ch] text-[1.0625rem] leading-[1.8] text-slate">
                {p}
              </Stagger.Item>
            ))}
          </Stagger>

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" gap={0.06}>
            {about.facts.map((f) => (
              <Stagger.Item key={f.label} className="elevate-inset group relative bg-surface p-5 transition-colors duration-500 hover:bg-raised">
                <p className="text-[13px] text-slate-dim">{f.label}</p>
                <p className="mt-1 font-display text-[15px] font-semibold transition-transform duration-500 group-hover:translate-x-1">{f.value}</p>
              </Stagger.Item>
            ))}
          </Stagger>

          <Stagger className="mt-8 flex flex-wrap gap-2" gap={0.04}>
            {about.tools.map((t) => (
              <Stagger.Item key={t} as="span" className="inline-block"><Pill>{t}</Pill></Stagger.Item>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  )
}
