import { ArrowUpRight } from "lucide-react";
import { Section, Stagger, Reveal } from "./Primitives";
import { services, process, creativeTechnology } from "../data/site";
export default function Services() {
  return (
    <Section
      id="services"
      label="06 - What I bring to the table"
      title={
        <>
          A connected
          <br />
          <span className="accent-text">creative toolkit.</span>
        </>
      }
      lead="I combine design, editing and motion into clear, purposeful visual communication."
    >
      <Stagger as="ul" className="service-list">
        {services.map((service, i) => (
          <Stagger.Item as="li" key={service.title} className="service-row">
            <span className="index-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{service.title}</h3>
            <div>
              <p>{service.body}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={22} aria-hidden />
          </Stagger.Item>
        ))}
      </Stagger>
      <div className="creative-expertise">
        <Reveal className="ai-card">
          <p className="eyebrow">Design meets possibility</p>
          <h3>AI &amp; Creative Technology</h3>
          <ul className="ai-skills">
            {creativeTechnology.map((skill, i) => (
              <li key={skill}>
                <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal className="process-heading">
        <p className="eyebrow">The approach</p>
        <h3>From a rough idea to a considered outcome.</h3>
      </Reveal>
      <Stagger as="ol" className="process-list">
        {process.map((step, i) => (
          <Stagger.Item as="li" key={step.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  );
}
