import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { Lambda } from '../components/Logo';
import siteConfig from '../config/site.config';
import { anchor, whatsappLink } from '../lib/helpers';
import { bts, diferenciais, galpaoData, galpaoFeatures, galpoes, gallery, heroFacts } from '../data/content';

const SLASH = 'polygon(26% 0, 100% 0, 100% 100%, 0 100%)'; // corte diagonal (Brandbook 3.12)

/** Lista de dados com fios finos, sem sombra (Brandbook 3.12). */
function DataRows({ rows, dark = false }) {
  const line = dark ? 'border-sand/20' : 'border-primary/20';
  return (
    <dl className={`border-t ${line}`}>
      {rows.map((r) => (
        <div key={r.label} className={`flex items-baseline justify-between gap-4 border-b ${line} py-3`}>
          <dt className={dark ? 'text-sand/75' : 'text-muted'}>{r.label}</dt>
          <dd className={`text-right font-bold ${dark ? 'text-sand' : 'text-primary'}`}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Espaço reservado para foto/planta, até haver material real. */
function Placeholder({ title, note = 'Foto em breve', ratio = 'aspect-[4/3]', tag }) {
  return (
    <div className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden bg-paper`}>
      <Lambda className="absolute -bottom-6 -right-4 h-3/4 w-auto text-primary/[0.07]" />
      <div className="relative px-4 text-center">
        <p className="font-display text-2xl font-semibold text-primary">{title}</p>
        <p className="mt-1 text-sm text-muted">{note}</p>
      </div>
      {tag && <span className="status-tag absolute bottom-0 left-0">{tag}</span>}
    </div>
  );
}

export default function Home() {
  const { hero } = siteConfig.copy;

  return (
    <>
      <Seo
        description="Galpões prontos para locação de 1.500 m² e 16 terrenos para projetos Built to Suit, dentro de um parque tecnológico."
        path="/"
      />

      {/* 1. Hero */}
      <section className="on-dark relative overflow-hidden bg-primary pb-20 pt-36 md:pb-28 md:pt-44" aria-labelledby="hero-title">
        {/* Bloco com corte diagonal e padrão Λ tom sobre tom (até 1/3 da peça) */}
        <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-secondary lg:block" style={{ clipPath: SLASH }} aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[33%] overflow-hidden lg:block" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lambda" width="64" height="76" patternUnits="userSpaceOnUse">
                <path transform="translate(14 14) scale(0.55)" fill="#F1EBE3" fillOpacity="0.06" d="M27 2H37L55 62H61V68H39V62H46L30.2 9.4L11.5 62H18V68H0V62H8Z" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lambda)" />
          </svg>
        </div>

        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">{siteConfig.region}</span>
            <h1 id="hero-title" className="max-w-2xl text-display">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lead text-sand/90">{hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={anchor('contato')}>Conheça as oportunidades <ArrowRight size={18} aria-hidden="true" /></Button>
              <Button href={whatsappLink()} variant="outlineLight"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</Button>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative bg-sand text-ink">
              <span className="status-tag absolute -top-3 left-6">Locação</span>
              <div className="px-6 pb-4 pt-9">
                <DataRows rows={heroFacts} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Galpões para locação */}
      <section id="galpoes" className="section" aria-labelledby="galpoes-title">
        <div className="container-page">
          <Reveal className="mb-12 max-w-3xl">
            <span className="eyebrow">Locação</span>
            <h2 id="galpoes-title" className="text-h2">Galpões disponíveis para locação</h2>
            <p className="mt-4 text-lead text-muted">
              Dois galpões de 1.500 m² cada, com área produtiva, escritórios e infraestrutura no mesmo prédio.
            </p>
          </Reveal>

          <ul className="grid gap-8 md:grid-cols-2">
            {galpoes.map((g, i) => (
              <Reveal as="li" key={g.name} delay={i * 80}>
                <article className="h-full border border-primary/15 bg-white">
                  <Placeholder title={g.name} note="Fotos e plantas em breve" tag={g.status} />
                  <div className="p-6">
                    <h3 className="text-h3">{g.name}</h3>
                    <div className="mt-4"><DataRows rows={galpaoData} /></div>
                    <Button href={whatsappLink(siteConfig.whatsappMessages.galpoes)} variant="secondary" className="mt-6 w-full">
                      Solicitar informações
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {galpaoFeatures.map((f, i) => (
              <Reveal as="li" key={f.title} delay={(i % 3) * 80} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-sand"><Icon name={f.icon} /></span>
                <div>
                  <h3 className="text-xl">{f.title}</h3>
                  <p className="mt-1 text-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14 border border-dashed border-primary/30 bg-paper/50 p-6 text-center">
            <p className="font-display text-2xl font-semibold text-primary">Plantas e informações técnicas</p>
            <p className="mt-1 text-muted">Material técnico organizado por galpão em breve. Solicite o que precisar pelo formulário.</p>
          </Reveal>
        </div>
      </section>

      {/* 3. Built to Suit */}
      <section id="built-to-suit" className="on-dark section relative overflow-hidden bg-primary" aria-labelledby="bts-title">
        <div className="container-page relative">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow">Built to Suit</span>
              <h2 id="bts-title" className="text-h2">{bts.title}</h2>
              <p className="mt-4 text-lead text-sand/85">{bts.text}</p>
              <p className="mt-8 font-display text-8xl font-semibold leading-none text-accent-light" aria-label={`${bts.lots} terrenos`}>
                {bts.lots}
                <span className="ml-3 text-3xl text-sand">terrenos</span>
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="border-l-2 border-accent-light pl-5 font-display text-2xl italic leading-snug text-sand md:text-3xl">{bts.concept}</p>
              <ol className="mt-10 grid gap-px bg-sand/20 sm:grid-cols-3">
                {bts.steps.map((s, i) => (
                  <li key={s.title} className="bg-primary p-5 sm:pr-4">
                    <span className="font-display text-4xl text-accent-light" aria-hidden="true">0{i + 1}</span>
                    <h3 className="mt-2 text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-sand/80">{s.text}</p>
                  </li>
                ))}
              </ol>
              <Button href={whatsappLink(siteConfig.whatsappMessages.bts)} className="mt-10">
                <MessageCircle size={18} aria-hidden="true" /> Conversar sobre um projeto
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Diferenciais */}
      <section id="diferenciais" className="section" aria-labelledby="dif-title">
        <div className="container-page">
          <Reveal className="mb-12 max-w-3xl">
            <span className="eyebrow">Diferenciais do empreendimento</span>
            <h2 id="dif-title" className="text-h2">Um endereço pensado para a operação crescer</h2>
          </Reveal>
          <ul className="grid gap-px border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <Reveal as="li" key={d.title} delay={(i % 3) * 80} className="bg-sand p-7">
                <span className="flex h-12 w-12 items-center justify-center bg-accent text-white"><Icon name={d.icon} /></span>
                <h3 className="mt-5 text-h3">{d.title}</h3>
                <p className="mt-2 text-muted">{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Galeria */}
      <section id="galeria" className="section bg-paper/60" aria-labelledby="galeria-title">
        <div className="container-page">
          <Reveal className="mb-12 max-w-3xl">
            <span className="eyebrow">Galeria</span>
            <h2 id="galeria-title" className="text-h2">Imagens dos galpões e da infraestrutura</h2>
            <p className="mt-4 text-lead text-muted">As fotos reais serão publicadas aqui, junto com o tour virtual 360°.</p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal as="li" key={g.title} delay={(i % 3) * 80}>
                {g.src ? (
                  <figure>
                    <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="mt-2 text-sm text-muted">{g.title}</figcaption>
                  </figure>
                ) : (
                  <Placeholder title={g.title} />
                )}
              </Reveal>
            ))}
            <Reveal as="li" delay={160} className="sm:col-span-2 lg:col-span-3">
              <div className="on-dark relative flex min-h-[10rem] items-center justify-between gap-6 overflow-hidden bg-primary p-8">
                <Lambda className="absolute -right-4 -top-6 h-[140%] w-auto text-sand/[0.06]" />
                <div className="relative">
                  <span className="status-tag">Em breve</span>
                  <h3 className="mt-3 text-h3">Tour virtual 360°</h3>
                  <p className="mt-1 text-sand/80">Visite os galpões sem sair da sua empresa.</p>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* 6. Formulário de interesse */}
      <section id="contato" className="section" aria-labelledby="contato-title">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Contato</span>
            <h2 id="contato-title" className="text-h2">Conheça as oportunidades</h2>
            <p className="mt-4 text-lead text-muted">
              Informe o tipo de interesse e a nossa equipe retorna com os detalhes do galpão ou do terreno.
            </p>
            <ul className="mt-8 space-y-3">
              {['Galpão pronto para locação', 'Terreno para projeto Built to Suit'].map((t) => (
                <li key={t} className="flex gap-3 text-ink"><Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />{t}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Seus dados são usados apenas para retorno deste contato. Saiba mais na{' '}
              <Link to="/politica-de-privacidade" className="font-bold text-accent underline">Política de Privacidade</Link>.
            </p>
          </Reveal>
          <Reveal delay={100}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
