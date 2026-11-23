import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';
import { projects, projectTypes } from '../data/projects';
import { whatsappLink } from '../lib/helpers';
import siteConfig from '../config/site.config';

const tabs = [
  { id: 'todos', label: 'Todos' },
  { id: 'concluida', label: 'Obras realizadas' },
  { id: 'andamento', label: 'Projetos em andamento' },
];

export default function Projects() {
  const [status, setStatus] = useState('todos');
  const [type, setType] = useState('todos');

  const filtered = useMemo(
    () => projects.filter((p) => (status === 'todos' || p.status === status) && (type === 'todos' || p.type === type)),
    [status, type],
  );

  return (
    <>
      <Seo
        title="Projetos"
        description="Veja as obras realizadas e os projetos em andamento da Caragi: casas, sobrados, reformas, obras comerciais e terrenos."
        path="/projetos"
      />
      <PageHeader title="Projetos" intro="Obras entregues e projetos em andamento. Filtre por situação e por tipo." crumbs={[{ label: 'Projetos' }]} />

      <section className="section" aria-label="Lista de projetos">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div role="group" aria-label="Filtrar por situação" className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={status === t.id}
                  onClick={() => setStatus(t.id)}
                  className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition duration-200 ${
                    status === t.id ? 'border-primary bg-primary text-sand' : 'border-primary/30 text-primary hover:border-primary'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div>
              <label htmlFor="filtro-tipo" className="mb-1.5 block text-sm font-bold text-primary">Tipo de projeto</label>
              <select id="filtro-tipo" value={type} onChange={(e) => setType(e.target.value)} className="field !w-auto min-w-[12rem]">
                <option value="todos">Todos os tipos</option>
                {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <p className="mb-6 text-muted" role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
          </p>

          {filtered.length ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <li key={p.slug}><ProjectCard project={p} /></li>)}
            </ul>
          ) : (
            <div className="rounded-xl2 bg-paper/70 p-10 text-center">
              <p className="text-lead text-muted">Nenhum projeto com esses filtros.</p>
              <button type="button" onClick={() => { setStatus('todos'); setType('todos'); }} className="mt-4 font-bold text-accent underline underline-offset-4">
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBand title="Quer um projeto como esses?" text="Conte o que você tem em mente e receba uma orientação inicial sem compromisso." message={siteConfig.whatsappMessages.projects} />
    </>
  );
}
