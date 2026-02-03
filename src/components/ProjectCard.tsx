import { Link } from 'react-router-dom';
import type { Project } from '@/content/projects/index';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link to={`/work/${project.slug}`} className="project-card__link">
        <div className="project-card__image">
          <img
            src={project.coverImage}
            alt={`${project.title} - forhåndsvisning`}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement?.classList.add('project-card__image--placeholder');
            }}
          />
          <div className="project-card__overlay" />
        </div>
        <div className="project-card__content">
          <div className="project-card__tags">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <span className="project-card__cta">
            Se prosjekt
            <svg
              className="project-card__arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
