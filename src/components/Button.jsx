import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary: 'bg-accent text-white hover:bg-primary',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-sand',
  // Para fundos escuros
  outlineLight: 'border-2 border-sand/70 text-sand hover:bg-sand hover:text-primary',
  light: 'bg-sand text-primary hover:bg-white',
};

/** Botão: `to` (rota interna), `href` (link ou âncora) ou botão comum. */
export default function Button({ variant = 'primary', to, href, external, className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) {
    const ext = external ?? /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return <button className={cls} {...rest}>{children}</button>;
}
