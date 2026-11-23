import { Link } from 'react-router-dom';
import Logo from './Logo';
import siteConfig from '../config/site.config';
import { navItems } from '../data/content';
import { anchor, telLink, whatsappLink } from '../lib/helpers';

export default function Footer() {
  const h = 'mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-light';
  return (
    <footer className="on-dark bg-dark pt-16 text-sand/80">
      <div className="container-page grid gap-12 pb-12 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="Caragi, página inicial"><Logo /></Link>
          <p className="mt-6 max-w-xs">{siteConfig.copy.footerDescription}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className={h}>Navegação</h2>
          <ul className="space-y-2.5">
            {navItems.map((i) => (
              <li key={i.id}><a href={anchor(i.id)} className="hover:text-accent-light">{i.label}</a></li>
            ))}
            <li><Link to="/politica-de-privacidade" className="hover:text-accent-light">Política de Privacidade</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className={h}>Contato</h2>
          <ul className="space-y-2.5">
            <li>Telefone: <a className="hover:text-accent-light" href={telLink()}>{siteConfig.phone}</a></li>
            <li>WhatsApp: <a className="hover:text-accent-light" href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a></li>
            <li>E-mail: <a className="break-all hover:text-accent-light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé com fio vermelho (Brandbook 4.3) */}
      <div className="border-t border-accent py-6 text-sm">
        <div className="container-page flex flex-col gap-2 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName} Todos os direitos reservados.</p>
          <p>CNPJ {siteConfig.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
