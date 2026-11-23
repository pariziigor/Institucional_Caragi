import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { navItems } from '../data/content';
import { useScrolled } from '../lib/hooks';
import { whatsappLink } from '../lib/helpers';

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:text-accent-light ${
    isActive ? 'text-accent-light after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-accent-light' : 'text-sand'
  }`;

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Fecha o menu ao trocar de página
  useEffect(() => setOpen(false), [pathname]);

  // Bloqueia rolagem e trata Esc quando o drawer está aberto
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
        scrolled || open ? 'bg-dark/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between">
        <Link to="/" aria-label="Caragi, página inicial">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={whatsappLink()} className="hidden !px-5 !py-2.5 text-sm lg:inline-flex">
            <MessageCircle size={18} aria-hidden="true" /> Fale com a Caragi
          </Button>
          <button
            type="button"
            className="rounded-lg p-2 text-sand lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-dark transition-opacity duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Principal (mobile)" className="container-page flex flex-col gap-1 py-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              tabIndex={open ? 0 : -1}
              className={({ isActive }) =>
                `border-b border-sand/15 py-4 font-display text-2xl ${isActive ? 'text-accent-light' : 'text-sand'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href={whatsappLink()} tabIndex={open ? 0 : -1} className="mt-8">
            <MessageCircle size={20} aria-hidden="true" /> Fale com a Caragi
          </Button>
        </nav>
      </div>
    </header>
  );
}
