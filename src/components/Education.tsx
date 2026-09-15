import { EducationItem, CertificationItem, LanguageItem } from '../data/profile';

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
}

export function Education({ education, certifications, languages }: EducationProps) {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title" className="section-title">
          Education &amp; Certifications
        </h2>

        <div className="edu-cert-grid">
          <div className="edu-card">
            <h3 className="sub-title">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="edu-item">
                <h4 className="edu-degree">{item.degree}</h4>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-details">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="cert-card">
            <h3 className="sub-title">Certifications &amp; Training</h3>
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <li key={index} className="cert-item">
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-meta">
                    {cert.issuer} &bull; {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="languages-row">
          <span className="languages-label">Languages:</span>
          <div className="languages-list">
            {languages.map((lang, index) => (
              <span key={index} className="language-pill">
                <strong>{lang.language}</strong> ({lang.proficiency})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
