import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Section, Reveal } from './Primitives'
import { experience } from '../data/site'

export default function Experience() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  return (
    <Section
      id="experience"
      label="Experience"
      title="From creative execution to product thinking."
      lead="Hands-on work across client projects, production and digital design, with a growing focus on IT and product environments."
    >
      <ol ref={ref} className="relative">
        <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[11px]" />
        {/* The accent line draws itself as you scroll the section. */}
        <motion.span
          aria-hidden
          style={reduce ? { scaleY: 1 } : { scaleY }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top grad-btn sm:left-[11px]"
        />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 0.08} className="group relative pb-14 pl-9 last:pb-0 sm:pl-16">
            <span aria-hidden className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-line bg-surface transition-transform duration-500 group-hover:scale-125 sm:left-1">
              <span className="h-[5px] w-[5px] rounded-full grad-btn" />
            </span>

            <p className="text-[13px] text-violet-accent">{job.period}</p>
            <h3 className="mt-2 font-display text-[clamp(1.2rem,2.4vw,1.55rem)] font-semibold">{job.role}</h3>
            <p className="mt-1 text-[15px] text-slate">{job.company}</p>
            <p className="mt-4 max-w-[66ch] text-[15px] leading-relaxed text-slate">{job.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {job.points.map((pt) => (
                <li key={pt} className="relative max-w-[66ch] pl-5 text-[14.5px] leading-relaxed text-slate">
                  <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-slate-dim transition-all duration-500 group-hover:w-3.5 group-hover:bg-violet-accent" />
                  {pt}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 text-[12px] text-slate-dim">{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
