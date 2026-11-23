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
import { useCountUp, useInView } from '../lib/hooks';
import { bts, diferenciais, galpaoData, galpaoFeatures, galpoes, gallery } from '../data/content';

const SLASH = 'polygon(26% 0, 100% 0, 100% 100%, 0 100%)'; // corte diagonal (Brandbook 3.12)
const LAMBDA_PATH = 'M27 2H37L55 62H61V68H39V62H46L30.2 9.4L11.5 62H18V68H0V62H8Z';
const pad = (n) => String(n).padStart(2, '0');

const heroStats = [
  { value: 2, label: 'Galpões para locação' },
  { value: 1500, label: 'm² em cada galpão' },
  { value: 16, label: 'Terrenos Built to Suit' },
];

const marqueeItems = [
  '1.500 m² por galpão', 'Pé-direito de 10 m', 'Elevador e doca', '16 vagas', 'Energia', '16 terrenos Built to Suit', 'Parque tecnológico',
];

/** Número que sobe até o valor quando entra na tela. */
function Stat({ value, label }) {
  const [ref, inView] = useInView();
  const n = useCountUp(value, inView, 1800);
  return (
    <div ref={ref}>
      <p className="font-display text-5xl font-semibold leading-none text-sand md:text-6xl" aria-label={`${value.toLocaleString('pt-BR')} ${label}`}>
        <span aria-hidden="true">{n.toLocaleString('pt-BR')}</span>
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-light">{label}</p>
    </div>
  );
}

/** Lista de dados com fios finos, sem sombra (Brandbook 3.12). */
function DataRows({ rows }) {
  return (
    <dl className="border-t border-primary/20">
      {rows.map((r) => (
        <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-primary/20 py-3 transition-colors duration-300 hover:bg-paper/50">
          <dt className="text-muted">{r.label}</dt>
          <dd className="text-right font-bold text-primary">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Espaço reservado para foto/planta, até haver material real. */
function Placeholder({ title, note = 'Foto em breve', className = 'aspect-[4/3]', tag }) {
  return (
    <div className={`relative flex w-full items-center justify-center overflow-hidden bg-paper ${className}`}>
      <Lambda className="absolute -bottom-8 -right-6 h-4/5 w-auto text-primary/[0.07] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-110" />
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
      <div className="relative px-4 text-center">
        <p className="font-display text-2xl font-semibold text-primary">{title}</p>
        <p className="mt-1 text-sm text-muted">{note}</p>
      </div>
      {tag && <span className="status-tag absolute left-0 top-0">{tag}</span>}
    </div>
  );
}

/** Composição de 1.500 m²: térreo de 900 m² e duas lajes de 300 m², com cota de pé-direito. */
function Composicao() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const grow = (d) => ({ transitionDelay: inView ? `${d}ms` : '0ms' });
  const block = `origin-bottom transition-transform duration-[900ms] ease-out ${inView ? 'scale-y-100' : 'scale-y-0'}`;
  return (
    <figure ref={ref} className="mt-10" aria-label="Composição do galpão: térreo de 900 metros quadrados e duas lajes de 300 metros quadrados cada">
      <div className="relative ml-10 flex h-64 flex-col justify-end">
        <div className="flex h-[26%] w-1/3 flex-col">
          <div className={`flex flex-1 items-center justify-center bg-accent text-xs font-bold uppercase tracking-wider text-white ${block}`} style={grow(500)}>Laje 2</div>
        </div>
        <div className="mt-px flex h-[26%] w-1/3 flex-col">
          <div className={`flex flex-1 items-center justify-center bg-secondary text-xs font-bold uppercase tracking-wider text-sand ${block}`} style={grow(300)}>Laje 1</div>
        </div>
        <div className={`mt-px flex h-[44%] w-full items-center justify-center bg-primary text-sm font-bold uppercase tracking-wider text-sand ${block}`} style={grow(100)}>Térreo</div>
        {/* Cota de pé-direito */}
        <div className={`absolute -left-8 bottom-0 flex h-[44%] items-center transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={grow(1100)} aria-hidden="true">
          <div className="relative h-full w-px bg-primary/60">
            <span className="absolute -left-1 top-0 h-px w-3 bg-primary/60" />
            <span className="absolute -left-1 bottom-0 h-px w-3 bg-primary/60" />
          </div>
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold text-primary">10 m</span>
        </div>
      </div>
      <figcaption className="ml-10 mt-3 grid grid-cols-3 gap-2 text-xs text-muted">
        <span><b className="text-primary">900 m²</b> térreo</span>
        <span><b className="text-primary">300 m²</b> laje 1</span>
        <span><b className="text-primary">300 m²</b> laje 2</span>
      </figcaption>
    </figure>
  );
}

/** 16 terrenos que se preenchem em sequência ao entrar na tela. */
function LotsGrid() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <ul ref={ref} className="grid grid-cols-4 gap-2" aria-label={`${bts.lots} terrenos disponíveis`}>
      {Array.from({ length: bts.lots }, (_, i) => (
        <li
          key={i}
          style={{ transitionDelay: inView ? `${i * 70}ms` : '0ms' }}
          className={`flex aspect-square cursor-default items-center justify-center border text-sm font-bold transition-all duration-500 hover:!bg-accent hover:!text-white ${
            inView ? 'border-accent-light bg-accent-light text-primary' : 'border-sand/20 bg-transparent text-transparent'
          }`}
        >
          {pad(i + 1)}
        </li>
      ))}
    </ul>
  );
}

function Heading({ index, eyebrow, id, title, text, className = '' }) {
  return (
    <Reveal className={className}>
      <span className="eyebrow">{pad(index)} · {eyebrow}</span>
      <h2 id={id} className="text-h2">{title}</h2>
      {text && <p className="mt-4 text-lead text-muted [.on-dark_&]:text-sand/85">{text}</p>}
    </Reveal>
  );
}

const difStyles = [
  'lg:col-span-2 bg-primary text-sand on-dark',
  'bg-white',
  'bg-white',
  'lg:col-span-2 bg-paper',
  'lg:col-span-2 bg-white',
  'bg-accent text-white on-dark',
];

export default function Home() {
  const { hero } = siteConfig.copy;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <>
      <Seo
        description="Galpões prontos para locação de 1.500 m² e 16 terrenos para projetos Built to Suit, dentro de um parque tecnológico."
        path="/"
      />

      {/* 1. Hero */}
      <section
        onMouseMove={onMove}
        className="on-dark relative flex min-h-[100svh] items-center overflow-hidden bg-primary pb-24 pt-32"
        aria-labelledby="hero-title"
      >
        <div className="slide-in absolute inset-y-0 right-0 hidden w-[46%] bg-secondary lg:block" style={{ clipPath: SLASH }} aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[33%] overflow-hidden lg:block" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lambda" width="64" height="76" patternUnits="userSpaceOnUse">
                <path transform="translate(14 14) scale(0.55)" fill="#F1EBE3" fillOpacity="0.07" d={LAMBDA_PATH} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lambda)" />
          </svg>
        </div>
        {/* Luz que acompanha o cursor */}
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-100 md:block"
          style={{ background: 'radial-gradient(520px circle at var(--mx, 70%) var(--my, 30%), rgb(217 169 138 / 0.13), transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow fade-up" style={{ '--d': '100ms' }}>{siteConfig.region}</span>
            <h1 id="hero-title" className="max-w-3xl text-display !text-[clamp(3rem,7.2vw,6rem)]">
              <span className="mask"><span style={{ '--d': '200ms' }}>O espaço ideal</span></span>
              <span className="mask"><span style={{ '--d': '320ms' }}>para sua empresa</span></span>
              <span className="mask"><span className="italic text-accent-light" style={{ '--d': '440ms' }}>crescer.</span></span>
            </h1>
            <p className="fade-up mt-8 max-w-xl text-lead text-sand/90" style={{ '--d': '700ms' }}>{hero.subtitle}</p>
            <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ '--d': '850ms' }}>
              <Button href={anchor('contato')}>
                Conheça as oportunidades <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href={whatsappLink()} variant="outlineLight"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</Button>
            </div>
          </div>

          <div className="fade-up float-slow hidden lg:block" style={{ '--d': '600ms' }}>
            <div className="relative border border-sand/25 bg-dark/40 p-8 backdrop-blur-md">
              <span className="status-tag absolute -top-3 left-8">Locação</span>
              <div className="space-y-7">
                {heroStats.map((s) => <Stat key={s.label} {...s} />)}
              </div>
              <p className="mt-7 border-t border-sand/20 pt-4 text-sm text-sand/75">Dentro de um parque tecnológico.</p>
            </div>
          </div>
        </div>

        <a href={anchor('galpoes')} className="fade-up absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sand/70 hover:text-sand md:flex" style={{ '--d': '1300ms' }} aria-label="Rolar para os galpões">
          Role
          <span className="h-10 w-px overflow-hidden bg-sand/20"><span className="scroll-cue block h-full w-full bg-accent-light" /></span>
        </a>
      </section>

      {/* Faixa de dados em movimento */}
      <div className="marquee overflow-hidden bg-accent py-4 text-white" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {marqueeItems.map((t) => (
                <li key={t + k} className="flex items-center whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em]">
                  <span className="px-8">{t}</span>
                  <Lambda className="h-3.5 w-auto opacity-70" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* 2. Galpões para locação */}
      <section id="galpoes" className="section" aria-labelledby="galpoes-title">
        <div className="container-page grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Heading
              index={1}
              eyebrow="Locação"
              id="galpoes-title"
              title="Galpões disponíveis para locação"
              text="Dois galpões de 1.500 m² cada, com área produtiva, escritórios e infraestrutura no mesmo prédio."
            />
            <Composicao />
          </div>

          <div>
            <ul className="grid gap-8 sm:grid-cols-2">
              {galpoes.map((g, i) => (
                <Reveal as="li" key={g.name} delay={i * 100}>
                  <article className="group h-full border border-primary/15 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-accent">
                    <Placeholder title={g.name} note="Fotos e plantas em breve" tag={g.status} />
                    <div className="p-6">
                      <h3 className="text-h3">{g.name}</h3>
                      <div className="mt-4"><DataRows rows={galpaoData} /></div>
                      <Button href={whatsappLink(siteConfig.whatsappMessages.galpoes)} variant="secondary" className="mt-6 w-full">
                        Solicitar informações <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            <ul className="mt-10 grid gap-px border border-primary/15 bg-primary/15 sm:grid-cols-2">
              {galpaoFeatures.map((f, i) => (
                <Reveal as="li" key={f.title} delay={(i % 2) * 80} className="group relative flex gap-4 overflow-hidden bg-sand p-6">
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-sand transition-colors duration-300 group-hover:bg-accent"><Icon name={f.icon} size={22} /></span>
                  <div>
                    <h3 className="text-xl">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-8 border border-dashed border-primary/30 bg-paper/50 p-6">
              <p className="font-display text-2xl font-semibold text-primary">Plantas e informações técnicas</p>
              <p className="mt-1 text-muted">Material técnico organizado por galpão em breve. Solicite o que precisar pelo formulário.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Built to Suit */}
      <section id="built-to-suit" className="on-dark section relative overflow-hidden bg-primary" aria-labelledby="bts-title">
        <Lambda className="pointer-events-none absolute -right-16 -top-10 h-[70%] w-auto text-sand/[0.04]" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Heading index={2} eyebrow="Built to Suit" id="bts-title" title={bts.title} text={bts.text} />
            <Reveal delay={100} className="mt-10 max-w-md">
              <LotsGrid />
              <p className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-6xl font-semibold leading-none text-accent-light">{bts.lots}</span>
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-sand/80">terrenos disponíveis</span>
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="border-l-2 border-accent-light pl-6 font-display text-2xl italic leading-snug text-sand md:text-[1.75rem]">{bts.concept}</p>
            </Reveal>
            <ol className="relative mt-12 space-y-8 border-l border-sand/20 pl-8">
              {bts.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 120} className="relative">
                  <span className="absolute -left-[2.9rem] top-0 flex h-8 w-8 items-center justify-center bg-accent text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-1.5 text-sand/80">{s.text}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <Button href={whatsappLink(siteConfig.whatsappMessages.bts)} className="mt-12">
                <MessageCircle size={18} aria-hidden="true" /> Conversar sobre um projeto
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Diferenciais */}
      <section id="diferenciais" className="section" aria-labelledby="dif-title">
        <div className="container-page">
          <Heading index={3} eyebrow="Diferenciais do empreendimento" id="dif-title" title="Um endereço pensado para a operação crescer" className="mb-12 max-w-3xl" />
          <ul className="grid gap-4 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <Reveal as="li" key={d.title} delay={(i % 3) * 90} className={`group relative overflow-hidden border border-primary/10 p-8 transition duration-500 hover:-translate-y-1 ${difStyles[i]}`}>
                <span className="absolute right-6 top-5 font-display text-5xl opacity-[0.12]" aria-hidden="true">{pad(i + 1)}</span>
                <span className={`flex h-12 w-12 items-center justify-center transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${i === 5 ? 'bg-sand text-accent' : i === 0 ? 'bg-accent text-white' : 'bg-primary text-sand'}`}><Icon name={d.icon} /></span>
                <h3 className={`mt-8 text-h3 ${i === 0 || i === 5 ? '!text-inherit' : ''}`}>{d.title}</h3>
                <p className={`mt-2 max-w-sm ${i === 0 ? 'text-sand/80' : i === 5 ? 'text-white/90' : 'text-muted'}`}>{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Galeria */}
      <section id="galeria" className="section bg-paper/60" aria-labelledby="galeria-title">
        <div className="container-page">
          <Heading
            index={4}
            eyebrow="Galeria"
            id="galeria-title"
            title="Imagens dos galpões e da infraestrutura"
            text="As fotos reais serão publicadas aqui, junto com o tour virtual 360°."
            className="mb-12 max-w-3xl"
          />
          <ul className="grid auto-rows-[13rem] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => {
              const span = ['lg:col-span-2 lg:row-span-2', '', '', 'lg:col-span-2', '', ''][i];
              return (
                <Reveal as="li" key={g.title} delay={(i % 4) * 70} className={`group overflow-hidden ${span}`}>
                  {g.src ? (
                    <figure className="relative h-full">
                      <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-4 text-sm text-sand">{g.title}</figcaption>
                    </figure>
                  ) : (
                    <Placeholder title={g.title} className="h-full" />
                  )}
                </Reveal>
              );
            })}
            <Reveal as="li" delay={200} className="on-dark relative flex items-center gap-6 overflow-hidden bg-primary p-7 sm:col-span-2">
              <svg viewBox="0 0 100 100" className="spin-slow h-24 w-24 shrink-0 text-accent-light" aria-hidden="true">
                <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 50 50)" />
              </svg>
              <div>
                <span className="status-tag">Em breve</span>
                <h3 className="mt-3 text-h3">Tour virtual 360°</h3>
                <p className="mt-1 text-sand/80">Visite os galpões sem sair da sua empresa.</p>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* 6. Formulário de interesse */}
      <section id="contato" className="section" aria-labelledby="contato-title">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Heading
              index={5}
              eyebrow="Contato"
              id="contato-title"
              title="Conheça as oportunidades"
              text="Informe o tipo de interesse e a nossa equipe retorna com os detalhes do galpão ou do terreno."
            />
            <Reveal delay={100}>
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
          </div>
          <Reveal delay={100}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
