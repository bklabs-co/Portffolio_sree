import { Section, Stagger, Pill } from './Primitives'
import { skills } from '../data/site'
export default function Skills() {
  return <Section id="skills" label="08 - The tools behind the work" title={<>Ideas first.<br/><span className="accent-text">Tools to bring them to life.</span></>}>
    <Stagger className="skills-list">{skills.map((group, i) => <Stagger.Item key={group.group}><span className="eyebrow">0{i + 1}</span><h3>{group.group}</h3><ul>{group.items.map(item => <li key={item}><Pill>{item}</Pill></li>)}</ul></Stagger.Item>)}</Stagger>
  </Section>
}
