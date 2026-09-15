interface HeroProps {
  name: string;
  initials: string;
  avatarUrl?: string;
  role: string;
  company: string;
  introduction: string;
}

export function Hero({ name, initials, avatarUrl, role, company, introduction }: HeroProps) {
  return (
    <section className="hero-section" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-card">
          <div className="hero-profile-row">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="avatar-image-large"
                width={72}
                height={72}
              />
            ) : (
              <span className="avatar-badge-large" aria-hidden="true">
                {initials}
              </span>
            )}
            <div className="hero-name-group">
              <h1 className="hero-title">{name}</h1>
              <div className="hero-badge-row">
                <span className="badge badge-role">{role}</span>
                <span className="badge badge-company">{company}</span>
              </div>
            </div>
          </div>

          <p className="hero-intro-text">{introduction}</p>

          <div className="hero-action">
            <a href="#projects" className="btn-primary">
              View my projects
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
