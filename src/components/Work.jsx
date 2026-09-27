import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Section } from './Primitives'
import ProjectCard from './ProjectCard'
import { categories, projects } from '../data/site'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <Section id="work" label="Selected work" title="A few disciplines, one consistent voice.">
      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === filter
          return (
            <button
              key={c}
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(c)}
              className={`relative tap rounded-full px-5 text-[14px] transition-colors duration-300 ${
                on ? 'text-white' : 'border border-line text-slate hover:border-violet-accent/40 hover:text-ink'
              }`}
            >
              {on && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full grad-btn"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{c}</span>
            </button>
          )
        })}
      </div>

      <LayoutGroup>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </Section>
  )
}
