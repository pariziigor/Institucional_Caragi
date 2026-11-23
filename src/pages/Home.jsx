import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import siteConfig from '../config/site.config';
import { services, differentials, stats, rental, allotments, bts } from '../data/content';
import { useCountUp, useInView } from '../lib/hooks';
import { whatsappLink } from '../lib/helpers';

function Stat({ value, suffix, label }) {
  const [ref, inView] = useInView();
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl font-semibold text-accent-light md:text-6xl" aria-label={`${value}${suffix} ${label}`}>
        <span aria-hidden="true">{n}{suffix}</span>
      </p>
      <p className="mx-auto mt-2 max-w-[14rem] text-base text-sand/85">{label}</p>
    </div>
  );
}

export default function Home() {
  const { hero } = siteConfig.copy;
  const totalLots = allotments.reduce((sum, a) => sum + a.lots, 0);

  return (
    <>
      <Seo
        description="Locação de galpões e barracões, loteamentos residenciais em Matão e Monte Alto e projetos comerciais BTS. Conheça a Caragi."
        path="/"
      />

      {/* 1. Hero */}
      <section className="on-dark relative flex min-h-[100svh] items-end overflow-hidden bg-dark pb-28 pt-32 md:items-center md:pb-24" aria-labelledby="hero-title">
        <img
          src={siteConfig.images.hero}
          alt="Casa contemporânea com fachada clara e jardim ao entardecer"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" aria-hidden="true" />
        <div className="container-page relative">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-accent-light/40 bg-dark/40 px-4 py-1.5 backdrop-blur">
            <MapPin size={15} aria-hidden="true" /> {siteConfig.region}
          </span>
          <h1 id="hero-title" className="max-w-3xl text-display">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-lead text-sand/90">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={whatsappLink()}><MessageCircle size={20} aria-hidden="true" /> Fale com a Caragi</Button>
            <Button to="/areas-de-atuacao" variant="outlineLight">Conheça as frentes de atuação</Button>
          </div>
        </div>
      </section>

      {/* 2. Três frentes (sobe sobre o hero) */}
      <section className="relative z-10 -mt-16 pb-6 md:-mt-20" aria-label="Frentes de atuação">
        <div className="container-page">
          <ul className="grid gap-4 md:grid-cols-3">
            {[
              { icon: 'warehouse', title: 'Locação comercial', text: `Barracões de 1.580 m² para empresas`, href: '#locacao' },
              { icon: 'map', title: 'Loteamentos', text: `${totalLots} lotes em Matão e Monte Alto`, href: '#loteamentos' },
              { icon: 'building', title: 'Projetos e BTS', text: 'Imóveis sob medida para empresas', href: '#bts' },
            ].map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80}>
                <a
                  href={f.href}
                  className="group flex items-center gap-4 rounded-xl2 border border-primary/10 bg-white p-5 shadow-lift transition duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent text-white"><Icon name={f.icon} size={26} /></span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold text-primary">{f.title}</span>
                    <span className="block text-muted">{f.text}</span>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" className="text-accent transition group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Locação comercial (prioridade) */}
      <section id="locacao" className="on-dark section mt-10 bg-dark" aria-labelledby="locacao-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <img src={rental.image} alt={rental.imageAlt} loading="lazy" width="1200" height="900" className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-lift" />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-white shadow-soft">Prioridade: locação</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">{rental.eyebrow}</span>
            <h2 id="locacao-title" className="text-h2">{rental.title}</h2>
            <p className="mt-5 text-lead text-sand/85">{rental.text}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {rental.highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-sand/15 bg-sand/5 p-4 text-center">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-accent-light sm:text-3xl">{h.value}</dd>
                  <p className="mt-1 text-xs text-sand/80 sm:text-sm" aria-hidden="true">{h.label}</p>
                </div>
              ))}
            </dl>
            <ul className="mt-7 space-y-2.5">
              {rental.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sand/90"><Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-light" />{p}</li>
              ))}
            </ul>
            <Button href={whatsappLink(rental.whatsappMessage)} className="mt-8"><MessageCircle size={20} aria-hidden="true" /> {rental.ctaLabel}</Button>
          </Reveal>
        </div>
      </section>

      {/* 4. Loteamentos */}
      <section id="loteamentos" className="section" aria-labelledby="lotes-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Loteamentos residenciais"
            title={<span id="lotes-title">Terrenos para construir a casa própria</span>}
            text={`Três empreendimentos em comercialização, com ${totalLots} lotes no total em Matão e Monte Alto.`}
          />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allotments.map((a, i) => (
              <Reveal as="li" key={a.id} delay={i * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl2 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <img src={a.image} alt={a.imageAlt} loading="lazy" width="900" height="600" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-dark/75 px-3 py-1 text-sm font-semibold text-sand backdrop-blur">
                      <MapPin size={14} aria-hidden="true" /> {a.city} - {a.state}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-h3">{a.name}</h3>
                    <dl className="mt-5 grid grid-cols-2 divide-x divide-primary/10 rounded-xl bg-paper/60 py-4 text-center">
                      <div>
                        <dd className="font-display text-3xl font-semibold text-accent">{a.lots}</dd>
                        <dt className="text-sm text-muted">lotes</dt>
                      </div>
                      <div>
                        <dd className="font-display text-3xl font-semibold text-accent">{a.minArea}</dd>
                        <dt className="text-sm text-muted">{a.areaPrefix}</dt>
                      </div>
                    </dl>
                    <p className="mt-4 text-muted">Venda de terrenos residenciais.</p>
                    <Button href={whatsappLink(a.whatsappMessage)} variant="secondary" className="mt-auto w-full !mt-6">
                      Quero saber mais <ArrowRight size={18} aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Projetos comerciais e BTS */}
      <section id="bts" className="section bg-paper/70" aria-labelledby="bts-title">
        <div className="container-page">
          <SectionHeading eyebrow={bts.eyebrow} title={<span id="bts-title">{bts.title}</span>} text={bts.text} />
          <ol className="grid gap-5 md:grid-cols-3">
            {bts.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="relative rounded-xl2 bg-white p-6 shadow-soft">
                <span className="absolute right-5 top-4 font-display text-5xl text-primary/10" aria-hidden="true">0{i + 1}</span>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Icon name={s.icon} /></span>
                <h3 className="text-h3">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {bts.projects.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 80}>
                <article className="relative overflow-hidden rounded-xl2 shadow-lift">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" width="900" height="600" className="aspect-[16/9] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-sand">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{p.tag}</span>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-sand">{p.name}</h3>
                    <p className="mt-1 text-sand/85">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href={whatsappLink(bts.whatsappMessage)}><MessageCircle size={20} aria-hidden="true" /> {bts.ctaLabel}</Button>
          </div>
        </div>
      </section>

      {/* 6. Diferenciais */}
      <section className="section" aria-labelledby="dif-title">
        <div className="container-page">
          <SectionHeading eyebrow="Diferenciais" title={<span id="dif-title">Por que escolher a Caragi</span>} />
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d, i) => (
              <Reveal as="li" key={d.title} delay={(i % 3) * 80} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Icon name={d.icon} /></span>
                <div>
                  <h3 className="text-h3">{d.title}</h3>
                  <p className="mt-1.5 text-muted">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Números */}
      <section className="on-dark section relative overflow-hidden bg-dark" aria-label="A Caragi em números">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container-page relative">
          <ul className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s) => <li key={s.label}><Stat {...s} /></li>)}
          </ul>
          <p className="mt-12 text-center">
            <Link to="/areas-de-atuacao" className="inline-flex items-center gap-2 font-bold text-accent-light underline-offset-4 hover:underline">
              Ver todas as áreas de atuação <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* 8. CTA */}
      <CtaBand />
    </>
  );
}
