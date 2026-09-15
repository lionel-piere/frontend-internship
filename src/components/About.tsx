interface AboutProps {
  paragraphs: string[];
}

export function About({ paragraphs }: AboutProps) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">
          About Me
        </h2>
        <div className="about-card">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
