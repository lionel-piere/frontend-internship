interface HeaderProps {
  name: string;
  shortName: string;
}

export function Header({ name, shortName }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand-link" aria-label={`${name} - Back to top`}>
          <span className="brand-name">{shortName}</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills &amp; Learning
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link">
                Education
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
