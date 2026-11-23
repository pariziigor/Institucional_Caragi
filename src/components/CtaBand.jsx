import { MessageCircle, Mail } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';
import siteConfig from '../config/site.config';
import { whatsappLink } from '../lib/helpers';

/** Faixa de chamada para contato (reutilizada em várias páginas). */
export default function CtaBand({ title = siteConfig.copy.ctaBand.title, text = siteConfig.copy.ctaBand.text, message }) {
  return (
    <section className="on-dark bg-secondary py-16 md:py-20" aria-labelledby="cta-title">
      <Reveal className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-h2">{title}</h2>
          <p className="mt-3 text-lead text-sand/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={whatsappLink(message)} variant="light">
            <MessageCircle size={20} aria-hidden="true" /> Falar no WhatsApp
          </Button>
          <Button to="/contato" variant="outlineLight">
            <Mail size={20} aria-hidden="true" /> Enviar mensagem
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
