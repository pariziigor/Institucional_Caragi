import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import siteConfig from '../config/site.config';
import { navItems } from '../data/content';
import { fullAddress, telLink, whatsappLink } from '../lib/helpers';

export default function Footer() {
  return (
    <footer className="on-dark bg-dark pt-16 text-sand/80">
      <div className="container-page grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Caragi, página inicial"><Logo /></Link>
          <p className="mt-5 max-w-xs">{siteConfig.copy.footerDescription}</p>
          <ul className="mt-6 flex gap-3">
            {siteConfig.social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} da Caragi (abre em nova aba)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 transition duration-200 hover:border-accent-light hover:text-accent-light"
                >
                  <Icon name={s.name.toLowerCase()} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-accent-light">Navegação</h2>
          <ul className="space-y-2.5">
            {navItems.map((i) => (
              <li key={i.to}><Link to={i.to} className="hover:text-accent-light">{i.label}</Link></li>
            ))}
            <li><Link to="/politica-de-privacidade" className="hover:text-accent-light">Política de Privacidade</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-accent-light">Contato</h2>
          <ul className="space-y-2.5">
            <li>Telefone: <a className="hover:text-accent-light" href={telLink()}>{siteConfig.phone}</a></li>
            <li>WhatsApp: <a className="hover:text-accent-light" href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a></li>
            <li>E-mail: <a className="break-all hover:text-accent-light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-accent-light">Endereço</h2>
          <address className="not-italic">{fullAddress()}</address>
          <ul className="mt-4 space-y-1 text-sm">
            {siteConfig.hours.map((h) => (<li key={h.label}>{h.label}: {h.value}</li>))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/15 py-6 text-sm">
        <div className="container-page flex flex-col gap-2 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} Todos os direitos reservados.
          </p>
          <p>
            CNPJ {siteConfig.cnpj}
            {siteConfig.creci ? ` · ${siteConfig.creci}` : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}
