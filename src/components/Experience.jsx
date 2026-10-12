import { Reveal, Section } from './Primitives'
import { experience } from '../data/site'
export default function Experience() {
  return <Section id="experience" label="07 - Experience" title={<>Grounded in practice.<br/><span className="accent-text">Growing with purpose.</span></>} lead="Hands-on work across client projects, production and digital design, with a growing focus on IT and product environments.">
    <ol className="experience-list">{experience.map((job, i) => <Reveal as="li" key={job.role} delay={i * 0.08} className="experience-row"><div className="experience-meta"><span className="eyebrow">{job.period}</span><p>{job.company}</p><div className="experience-number" aria-hidden>0{i + 1}</div></div><div><h3>{job.role}</h3><p className="experience-summary">{job.summary}</p><ul className="experience-points">{job.points.map(point => <li key={point}>{point}</li>)}</ul>{job.clients && <p className="experience-summary"><strong>Clients:</strong> {job.clients.join(', ')}</p>}<div className="card-tags">{job.stack.map(tool => <span key={tool}>{tool}</span>)}</div></div></Reveal>)}</ol>
  </Section>
}
