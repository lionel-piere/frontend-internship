interface SkillsProps {
  projectExposure: string[];
  currentlyLearning: string[];
}

export function Skills({ projectExposure, currentlyLearning }: SkillsProps) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">
          Skills &amp; Learning
        </h2>
        <div className="skills-grid">
          <div className="skills-category-card">
            <h3 className="skills-category-title">
              <span aria-hidden="true">&#9679;</span> Project Exposure
            </h3>
            <ul className="skills-tag-list" aria-label="Technologies with project exposure">
              {projectExposure.map((skill) => (
                <li key={skill} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-category-card">
            <h3 className="skills-category-title">
              <span aria-hidden="true">&#9679;</span> Currently Learning
            </h3>
            <ul className="skills-tag-list" aria-label="Topics currently learning">
              {currentlyLearning.map((topic) => (
                <li key={topic} className="skill-tag skill-tag-learning">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
