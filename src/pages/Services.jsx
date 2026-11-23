import { Check, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import { services, process } from '../data/content';
import { whatsappLink } from '../lib/helpers';

export default function Services() {
  return (
    <>
      <Seo
        title="Áreas de atuação"
        description="Construção, compra e venda de imóveis, compra e venda de terrenos e locação. Conheça os serviços da Caragi e como funciona cada etapa."
        path="/areas-de-atuacao"
      />
      <PageHeader
        title="Áreas de atuação"
        intro="Quatro serviços que se complementam. Você pode contratar um deles ou contar com a Caragi do terreno às chaves."
        crumbs={[{ label: 'Áreas de atuação' }]}
      />

      {/* Serviços em zig-zag */}
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={s.id} id={s.id} className={`section ${flip ? 'bg-paper/70' : ''}`} aria-labelledby={`${s.id}-title`}>
            <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <img src={s.image} alt={s.imageAlt} loading="lazy" width="1000" height="750" className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-lift" />
              </Reveal>
              <Reveal delay={100} className={flip ? 'lg:order-1' : ''}>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white"><Icon name={s.icon} /></span>
                <h2 id={`${s.id}-title`} className="text-h2">{s.title}</h2>
                <p className="mt-4 text-lead text-muted">{s.description}</p>
                <h3 className="mt-6 font-sans text-base font-bold uppercase tracking-wider text-primary">O que está incluso</h3>
                <ul className="mt-3 space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-muted"><Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-secondary" />{item}</li>
                  ))}
                </ul>
                <h3 className="mt-6 font-sans text-base font-bold uppercase tracking-wider text-primary">Para quem é indicado</h3>
                <p className="mt-2 text-muted">{s.audience}</p>
                <Button href={whatsappLink(s.whatsappMessage)} className="mt-8">
                  <MessageCircle size={20} aria-hidden="true" /> {s.ctaLabel}
                </Button>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Como funciona */}
      <section className="on-dark bg-dark section" aria-labelledby="como-title">
        <div className="container-page">
          <SectionHeading eyebrow="Como funciona" title={<span id="como-title">Do primeiro contato ao fechamento</span>} text="Um processo simples e igual para todos os serviços, para você saber sempre em que etapa está." />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="rounded-xl2 border border-sand/15 bg-sand/5 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white"><Icon name={p.icon} size={22} /></span>
                  <span className="font-display text-3xl text-accent-light" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3 className="text-h3"><span className="sr-only">Passo {i + 1}: </span>{p.title}</h3>
                <p className="mt-2 text-sand/80">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
