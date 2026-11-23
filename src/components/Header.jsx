import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { navItems } from '../data/content';
import { anchor, whatsappLink } from '../lib/helpers';
import siteConfig from '../config/site.config';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  // Esconde ao rolar para baixo, volta ao rolar para cima; barra de progresso de leitura
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setHidden((h) => (y <= 240 ? false : y > last + 4 ? true : y < last - 4 ? false : h));
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      last = y;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      } ${solid ? 'border-b border-sand/10 bg-dark/80 backdrop-blur-xl' : 'bg-transparent'}`}
    >
      <div className={`container-page flex items-center justify-between transition-all duration-500 ${solid ? 'h-16' : 'h-20'}`}>
        <Link to="/" aria-label="Caragi, página inicial">
          <Logo className="!text-[1.9rem]" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              className="group relative py-2 text-xs font-bold uppercase tracking-[0.16em] text-sand transition-colors duration-200 hover:text-accent-light"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-light transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={whatsappLink()} className="hidden !px-5 !py-3 text-xs lg:inline-flex">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp
          </Button>
          <button
            type="button"
            className="p-2 text-sand lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Progresso de leitura */}
      <div className="absolute inset-x-0 bottom-0 h-0.5" aria-hidden="true">
        <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-dark transition-opacity duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Principal (mobile)" className="container-page flex flex-col py-8">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={`border-b border-sand/15 py-4 font-display text-4xl text-sand transition duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {item.label}
            </a>
          ))}
          <Button href={whatsappLink(siteConfig.whatsappMessages.default)} tabIndex={open ? 0 : -1} className="mt-8">
            <MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}
