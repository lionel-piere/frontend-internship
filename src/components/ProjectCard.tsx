import { Project } from '../data/profile';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      <div className="project-card-header">
        <span className="project-category-tag">{project.category}</span>
        <h3 id={`project-${project.id}`} className="project-title">
          {project.title}
        </h3>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="project-tech-list" aria-label={`Technologies used in ${project.title}`}>
        {project.technologies.map((tech) => (
          <li key={tech} className="tech-tag">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
