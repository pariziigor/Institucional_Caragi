import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Volta ao topo ao trocar de rota; se houver #âncora, rola até o elemento. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // aguarda a página (lazy) renderizar
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 120);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
}
