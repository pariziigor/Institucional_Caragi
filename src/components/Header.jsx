import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { navItems } from '../data/content';
import { useScrolled } from '../lib/hooks';
import { anchor, whatsappLink } from '../lib/helpers';
import siteConfig from '../config/site.config';

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

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

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-40 transition duration-300 ${
        scrolled || open ? 'border-b border-sand/15 bg-dark' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between">
        <Link to="/" aria-label="Caragi, página inicial">
          <Logo className="!text-[1.9rem]" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              className="py-2 text-xs font-bold uppercase tracking-[0.16em] text-sand transition-colors duration-200 hover:text-accent-light"
            >
              {item.label}
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

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-dark transition-opacity duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Principal (mobile)" className="container-page flex flex-col py-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="border-b border-sand/15 py-4 font-display text-3xl text-sand"
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
