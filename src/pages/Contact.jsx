import { MessageCircle, Phone, Mail, MapPin, Clock3, Navigation } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import siteConfig from '../config/site.config';
import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl, telLink, whatsappLink } from '../lib/helpers';

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="card flex gap-4 bg-white">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sand"><Icon size={22} aria-hidden="true" /></span>
      <div className="min-w-0">
        <h3 className="font-sans text-base font-bold text-primary">{title}</h3>
        <div className="mt-1 text-muted">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contato"
        description="Fale com a Caragi por WhatsApp, telefone, e-mail ou formulário. Veja o endereço, o horário de atendimento e como chegar."
        path="/contato"
      />
      <PageHeader
        title="Contato"
        intro="Conte o que você precisa. Vamos ouvir, entender o seu caso e responder de forma clara e sem compromisso."
        crumbs={[{ label: 'Contato' }]}
      />

      <section className="section" aria-labelledby="canais-title">
        <div className="container-page">
          <h2 id="canais-title" className="sr-only">Canais de atendimento</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="card flex flex-col justify-between gap-4 bg-secondary !text-sand md:col-span-2 lg:col-span-1">
              <div>
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-secondary"><MessageCircle size={22} aria-hidden="true" /></span>
                <h3 className="font-display text-2xl font-semibold text-sand">WhatsApp</h3>
                <p className="mt-1 text-sand/90">A forma mais rápida de falar com a gente: {siteConfig.whatsappDisplay}</p>
              </div>
              <Button href={whatsappLink()} variant="light">Fale com a Caragi</Button>
            </Reveal>
            <Reveal delay={60}><InfoCard icon={Phone} title="Telefone"><a href={telLink()} className="font-medium hover:text-accent hover:underline">{siteConfig.phone}</a></InfoCard></Reveal>
            <Reveal delay={120}><InfoCard icon={Mail} title="E-mail"><a href={`mailto:${siteConfig.email}`} className="break-all font-medium hover:text-accent hover:underline">{siteConfig.email}</a></InfoCard></Reveal>
            <Reveal delay={60}><InfoCard icon={MapPin} title="Endereço"><address className="not-italic">{fullAddress()}</address></InfoCard></Reveal>
            <Reveal delay={120}>
              <InfoCard icon={Clock3} title="Horário de atendimento">
                <ul>{siteConfig.hours.map((h) => <li key={h.label}>{h.label}: {h.value}</li>)}</ul>
              </InfoCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper/70 !pt-16" aria-labelledby="form-title">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Formulário</span>
            <h2 id="form-title" className="text-h2">Envie uma mensagem</h2>
            <p className="mt-3 mb-8 text-muted">Preencha os campos e retornamos em horário comercial. Seus dados são usados somente para este contato.</p>
            <ContactForm />
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Localização</span>
            <h2 className="text-h2">Onde estamos</h2>
            <div className="mt-6 overflow-hidden rounded-xl2 shadow-soft">
              <iframe
                title={`Mapa com a localização da Caragi: ${fullAddress()}`}
                src={mapsEmbedUrl()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full border-0 lg:h-[30rem]"
                allowFullScreen
              />
            </div>
            <Button href={mapsDirectionsUrl()} variant="secondary" className="mt-5">
              <Navigation size={20} aria-hidden="true" /> Como chegar
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="on-dark bg-dark py-16 text-center" aria-labelledby="cta-final">
        <Reveal className="container-page">
          <h2 id="cta-final" className="text-h2">Prefere falar agora?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lead">Chame a gente no WhatsApp e conte o que você precisa.</p>
          <Button href={whatsappLink()} className="mt-7 !px-9 !py-4 text-lg"><MessageCircle size={22} aria-hidden="true" /> Fale com a Caragi</Button>
        </Reveal>
      </section>
    </>
  );
}
