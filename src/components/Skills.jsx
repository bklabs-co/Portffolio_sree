import { Section, Stagger, Pill } from './Primitives'
import { skills } from '../data/site'

export default function Skills() {
  return (
    <Section id="skills" label="Toolkit" title="The tools behind the work.">
      <Stagger className="grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2">
        {skills.map((g) => (
          <Stagger.Item key={g.group} className="elevate-inset bg-surface p-7 transition-colors duration-500 hover:bg-raised">
            <h3 className="font-display text-[1.05rem] font-semibold">{g.group}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((i) => <li key={i}><Pill>{i}</Pill></li>)}
            </ul>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  )
}
