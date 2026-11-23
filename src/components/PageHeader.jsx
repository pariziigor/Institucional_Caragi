import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/** Cabeçalho de página interna (escuro, com título H1 e breadcrumb). */
export default function PageHeader({ title, intro, crumbs = [] }) {
  return (
    <section className="on-dark bg-dark pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="container-page">
        <nav aria-label="Você está em">
          <ol className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-sand/75">
            <li><Link to="/" className="hover:text-accent-light">Início</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} aria-hidden="true" />
                {c.to ? <Link to={c.to} className="hover:text-accent-light">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-h1">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lead">{intro}</p>}
      </div>
    </section>
  );
}
