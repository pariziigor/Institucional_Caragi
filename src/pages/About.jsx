import { Check, MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import siteConfig from '../config/site.config';
import { aboutContent as a } from '../data/content';

export default function About() {
  return (
    <>
      <Seo
        title="A Caragi"
        description="Conheça a Caragi: nossa história, propósito, missão, valores e a região em que atuamos com construção e negócios imobiliários."
        path="/a-caragi"
      />
      <PageHeader title="A Caragi" intro="Construção e negócios imobiliários feitos com clareza, qualidade e proximidade." crumbs={[{ label: 'A Caragi' }]} />

      {/* Quem somos */}
      <section className="section" aria-labelledby="quem-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Quem somos</span>
            <h2 id="quem-title" className="text-h2">Uma empresa construída sobre confiança</h2>
            {/* TODO: substituir pelo conteúdo real */}
            <div className="mt-5 space-y-4 text-lead text-muted">
              {a.who.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src={siteConfig.images.about} alt="Obra residencial em andamento com estrutura de concreto" loading="lazy" width="1000" height="750" className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-lift" />
          </Reveal>
        </div>
      </section>

      {/* Nossa história */}
      <section className="section bg-paper/70" aria-labelledby="hist-title">
        <div className="container-page">
          <SectionHeading eyebrow="Nossa história" title={<span id="hist-title">Marcos da nossa trajetória</span>} />
          {/* TODO: substituir pelos marcos reais */}
          <ol className="relative space-y-10 border-l-2 border-accent/40 pl-8 md:space-y-12 md:border-l-0 md:pl-0">
            {/* linha central (desktop) */}
            <span className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-accent/30 md:block" aria-hidden="true" />
            {a.timeline.map((m, i) => (
              <Reveal
                as="li"
                key={m.year}
                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
              >
                <span
                  className={`absolute top-2 h-4 w-4 rounded-full border-4 border-paper bg-accent -left-[2.6rem] ${
                    i % 2 === 0 ? 'md:-right-2 md:left-auto' : 'md:-left-2'
                  }`}
                  aria-hidden="true"
                />
                <p className="font-display text-3xl font-semibold text-accent">{m.year}</p>
                <h3 className="mt-1 text-h3">{m.title}</h3>
                <p className="mt-1.5 text-muted">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Propósito */}
      <section className="on-dark bg-dark section" aria-labelledby="prop-title">
        <Reveal className="container-page text-center">
          <span className="eyebrow">Propósito</span>
          <h2 id="prop-title" className="mx-auto max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-tight">
            “{a.purpose}”
          </h2>
        </Reveal>
      </section>

      {/* Missão, visão e valores */}
      <section className="section" aria-labelledby="mvv-title">
        <div className="container-page">
          <SectionHeading eyebrow="Missão, visão e valores" title={<span id="mvv-title">No que acreditamos</span>} />
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal className="card bg-white"><h3 className="text-h3">Missão</h3><p className="mt-3 text-muted">{a.mission}</p></Reveal>
            <Reveal delay={80} className="card bg-white"><h3 className="text-h3">Visão</h3><p className="mt-3 text-muted">{a.vision}</p></Reveal>
            <Reveal delay={160} className="card bg-white">
              <h3 className="text-h3">Valores</h3>
              <ul className="mt-3 space-y-3">
                {a.values.map((v) => (
                  <li key={v.title} className="flex items-center gap-3 text-muted">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary"><Icon name={v.icon} size={20} /></span>
                    {v.title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section className="section bg-paper/70" aria-labelledby="est-title">
        <div className="container-page">
          <SectionHeading eyebrow="Estrutura" title={<span id="est-title">Equipes que trabalham juntas</span>} text="Três áreas integradas para que o seu projeto não dependa de ninguém de fora." />
          <ul className="grid gap-6 md:grid-cols-3">
            {a.structure.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="card bg-white">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sand"><Icon name={s.icon} /></span>
                <h3 className="text-h3">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Região de atuação */}
      <section className="section" aria-labelledby="reg-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative overflow-hidden rounded-xl2 shadow-lift">
            <img src={siteConfig.images.region} alt="Vista aérea de bairro residencial arborizado na região de atuação" loading="lazy" width="1400" height="1050" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-secondary/35" aria-hidden="true" />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 font-bold text-primary">
              <MapPin size={18} aria-hidden="true" className="text-accent" /> {a.regions.main}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Região de atuação</span>
            <h2 id="reg-title" className="text-h2">Onde estamos</h2>
            {/* TODO: [CIDADES] substituir pelas cidades e bairros reais */}
            <p className="mt-4 text-lead text-muted">Atendemos {siteConfig.region} e cidades vizinhas, com equipe que conhece o mercado de cada local.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {a.regions.cities.map((c) => (
                <li key={c} className="flex items-center gap-2.5 font-medium"><Check size={18} aria-hidden="true" className="text-accent" /> {c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
