import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../lib/helpers';
import { useScrolled } from '../lib/hooks';

/** Botão flutuante de WhatsApp + botão "voltar ao topo". */
export default function FloatingActions() {
  const scrolled = useScrolled(600);
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col items-end gap-3 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sand  transition duration-300 hover:bg-secondary ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
        tabIndex={scrolled ? 0 : -1}
      >
        <ArrowUp size={22} aria-hidden="true" />
      </button>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Caragi pelo WhatsApp (abre em nova aba)"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white  transition duration-200 hover:scale-105 hover:bg-primary"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </a>
    </div>
  );
}
