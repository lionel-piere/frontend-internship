import { ExperienceItem } from '../data/profile';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article key={index} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-period">{item.period}</span>
              </div>
              <p className="experience-org">{item.organization}</p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
