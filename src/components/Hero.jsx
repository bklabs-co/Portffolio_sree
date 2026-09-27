import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile, about, contact } from '../data/site'
import { Magnetic, SplitText } from './Primitives'

const EASE = [0.16, 1, 0.3, 1]
const BASE = 1.55 // entrance waits for the intro curtain to lift

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const soft = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  // Layers drift apart as the hero scrolls away.
  const yCopy = useTransform(soft, [0, 1], ['0%', '22%'])
  const yArt = useTransform(soft, [0, 1], ['0%', '-14%'])
  const fade = useTransform(soft, [0, 0.75], [1, 0])

  const fadeIn = (d) => (reduce ? {} : {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: BASE + d, ease: EASE },
  })

  return (
    <section id="home" aria-label="Introduction" ref={ref} className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44">
      {/* drifting gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.26),transparent_66%)] blur-3xl motion-safe:animate-[drift_22s_ease-in-out_infinite]" />
        <div className="absolute right-[-12%] top-[30%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2),transparent_66%)] blur-3xl motion-safe:animate-[drift_28s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:radial-gradient(ellipse_at_50%_0%,#000_32%,transparent_74%)]" />
      </div>

      <motion.div style={reduce ? {} : { opacity: fade }} className="shell grid gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:items-end lg:gap-16">
        <motion.div style={reduce ? {} : { y: yCopy }}>
          <motion.p {...fadeIn(0)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-2 pl-2.5 pr-4 text-[13px] text-slate">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-accent" />
            </span>
            {profile.availability}
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,9.5vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            <SplitText text="I design visuals." className="block" delay={BASE} />
            <SplitText text="I edit stories." className="block" delay={BASE + 0.16} />
            <SplitText text="I make ideas move." className="block" delay={BASE + 0.32} accentFrom={2} />
          </h1>

          <motion.p {...fadeIn(0.75)} className="mt-8 max-w-[56ch] text-[clamp(1rem,1.9vw,1.15rem)] text-slate">
            {profile.intro}
          </motion.p>

          <motion.div {...fadeIn(0.85)} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.3}>
              <a href="#work" className="group inline-flex tap items-center gap-2 rounded-full grad-btn px-7 font-medium text-white transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-[0_0_34px_-6px_rgba(168,85,247,0.65)]">
                Explore my work
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#experience" className="inline-flex tap items-center rounded-full border border-line px-7 transition-colors duration-300 hover:border-violet-accent/50 hover:bg-white/[0.04]">
                View experience
              </a>
            </Magnetic>
          </motion.div>

          <motion.div {...fadeIn(0.95)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
            <span className="text-slate-dim">Follow</span>
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} className="relative text-slate transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-violet-accent after:transition-transform after:duration-300 hover:after:scale-x-100">
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* visual composition */}
        <motion.div style={reduce ? {} : { y: yArt }} className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: BASE + 0.35, ease: EASE }}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl2 border border-line bg-gradient-to-br from-raised to-surface"
          >
            {/* Swap for <img src={portrait} alt="Portrait of Sree Ruban" className="h-full w-full object-cover" /> */}
            <div aria-hidden className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105 bg-[radial-gradient(circle_at_28%_18%,rgba(99,102,241,0.5),transparent_58%),radial-gradient(circle_at_78%_78%,rgba(168,85,247,0.4),transparent_58%)]" />
            <div aria-hidden className="absolute inset-0 [background-image:repeating-linear-gradient(115deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_30px)]" />

            {/* Viewfinder framing — a nod to the video/motion craft, the hero's one deliberate flourish. */}
            <div aria-hidden className="absolute inset-4 opacity-70">
              {['top-0 left-0 border-l border-t', 'top-0 right-0 border-r border-t', 'bottom-0 left-0 border-l border-b', 'bottom-0 right-0 border-r border-b'].map((pos) => (
                <span key={pos} className={`absolute h-5 w-5 border-white/35 ${pos}`} />
              ))}
            </div>
            <div aria-hidden className="absolute left-6 top-6 flex items-center gap-2 text-[11px] tracking-[0.14em] text-white/70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
              </span>
              REC
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass rounded-2xl border border-line p-4">
                <p className="font-display text-[15px] font-semibold">{profile.years} years of published work</p>
                <p className="mt-1 text-[13px] text-slate">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <ul aria-hidden className="absolute -left-3 top-8 hidden flex-col gap-2.5 sm:flex">
            {about.tools.slice(0, 3).map((t, i) => (
              <motion.li
                key={t}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: BASE + 0.6 + i * 0.1, ease: EASE }}
                className="glass rounded-full border border-line px-3.5 py-1.5 text-[12px] text-slate motion-safe:animate-[float_6s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div {...fadeIn(1.05)} className="shell mt-16 hidden items-center gap-3 text-[13px] text-slate-dim sm:flex">
        <ArrowDown size={15} aria-hidden className="motion-safe:animate-[float_2.6s_ease-in-out_infinite]" />
        Scroll to explore
      </motion.div>
    </section>
  )
}
