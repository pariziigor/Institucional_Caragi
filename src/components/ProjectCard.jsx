import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { statusLabels } from '../data/projects';

/** Selo de status do projeto. Texto + cor, nunca só cor. */
export function StatusBadge({ status, className = '' }) {
  const done = status === 'concluida';
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
        done ? 'bg-secondary text-white' : 'bg-accent text-white'
      } ${className}`}
    >
      {statusLabels[status]}
    </span>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-xl2 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link to={`/projetos/${project.slug}`} className="block" aria-label={`Ver detalhes: ${project.name}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-paper">
          <img
            src={project.images[0].thumb}
            alt={project.images[0].alt}
            loading="lazy"
            decoding="async"
            width="700"
            height="525"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <StatusBadge status={project.status} className="absolute left-4 top-4" />
        </div>
        <div className="p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">{project.type}</p>
          <h3 className="mt-1 text-h3">{project.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={16} aria-hidden="true" /> {project.location}
          </p>
          <p className="mt-3 text-muted">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
