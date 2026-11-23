import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Maximize2, MapPin, MessageCircle, Ruler, Calendar } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import { StatusBadge } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';
import NotFound from './NotFound';
import { getProject } from '../data/projects';
import { whatsappLink } from '../lib/helpers';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project) return <NotFound />;

  return (
    <>
      <Seo title={project.name} description={`${project.summary} ${project.location}.`} path={`/projetos/${project.slug}`} image={project.images[0].src} />
      <PageHeader title={project.name} crumbs={[{ label: 'Projetos', to: '/projetos' }, { label: project.name }]} />

      <section className="section" aria-label="Detalhes do projeto">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <li key={img.src} className={i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Ampliar foto ${i + 1} de ${project.images.length}: ${img.alt}`}
                  className="group relative block h-full w-full overflow-hidden rounded-xl2 bg-paper"
                >
                  <img src={i === 0 ? img.src : img.thumb} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-dark/70 p-2 text-sand"><Maximize2 size={18} aria-hidden="true" /></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <StatusBadge status={project.status} />
              <h2 className="mt-4 text-h2">Sobre o projeto</h2>
              <p className="mt-4 text-lead text-muted">{project.description}</p>
            </div>
            <aside className="h-fit rounded-xl2 bg-paper/70 p-6" aria-label="Ficha técnica">
              <ul className="space-y-3 text-muted">
                <li className="flex items-center gap-3"><MapPin size={20} aria-hidden="true" className="text-accent" /> {project.location}</li>
                <li className="flex items-center gap-3"><Ruler size={20} aria-hidden="true" className="text-accent" /> {project.type} · {project.area}</li>
                <li className="flex items-center gap-3"><Calendar size={20} aria-hidden="true" className="text-accent" /> {project.status === 'concluida' ? 'Entregue em' : 'Previsão:'} {project.year}</li>
              </ul>
              <Button href={whatsappLink(`Olá! Vi o projeto "${project.name}" no site da Caragi e gostaria de conversar sobre um projeto parecido.`)} className="mt-6 w-full">
                <MessageCircle size={20} aria-hidden="true" /> Falar sobre este projeto
              </Button>
            </aside>
          </div>

          <Link to="/projetos" className="mt-10 inline-flex items-center gap-2 font-bold text-accent hover:underline">
            <ArrowLeft size={18} aria-hidden="true" /> Voltar para projetos
          </Link>
        </div>
      </section>

      <Lightbox images={project.images} index={lightbox} onChange={setLightbox} />
      <CtaBand />
    </>
  );
}
