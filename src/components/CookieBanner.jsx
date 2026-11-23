import { useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'caragi-cookies';

/** Aviso simples de cookies (LGPD). A escolha fica salva no localStorage. */
export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem(KEY); } catch { return true; }
  });
  if (!visible) return null;

  const choose = (value) => {
    try { localStorage.setItem(KEY, value); } catch { /* ignora */ }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-xl2 bg-dark p-5 text-sand shadow-lift sm:bottom-5"
    >
      <p className="text-sm leading-relaxed">
        Usamos cookies essenciais para o funcionamento do site e para entender como ele é usado. Saiba mais na{' '}
        <Link to="/politica-de-privacidade" className="font-bold underline underline-offset-2 hover:text-accent-light">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose('aceito')} className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-accent/90">
          Aceitar
        </button>
        <button type="button" onClick={() => choose('recusado')} className="rounded-lg border border-sand/50 px-5 py-2.5 text-sm font-bold hover:bg-sand hover:text-primary">
          Apenas essenciais
        </button>
      </div>
    </div>
  );
}
