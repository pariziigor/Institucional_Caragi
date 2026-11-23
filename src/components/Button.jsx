import { Link } from 'react-router-dom';

const base =
  'group relative inline-flex items-center justify-center overflow-hidden px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] transition-transform duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

// `sweep`: cor que varre o botão no hover; `text`: cor do texto durante o hover.
const variants = {
  primary: { cls: 'bg-accent text-white', sweep: 'bg-dark', text: '' },
  secondary: { cls: 'border-2 border-primary text-primary', sweep: 'bg-primary', text: 'group-hover:text-sand group-focus-visible:text-sand' },
  // Para fundos escuros
  outlineLight: { cls: 'border-2 border-sand/70 text-sand', sweep: 'bg-sand', text: 'group-hover:text-primary group-focus-visible:text-primary' },
  light: { cls: 'bg-sand text-primary', sweep: 'bg-white', text: '' },
};

/** Botão: `to` (rota interna), `href` (link ou âncora) ou botão comum. Efeito de varredura no hover. */
export default function Button({ variant = 'primary', to, href, external, className = '', children, ...rest }) {
  const v = variants[variant];
  const cls = `${base} ${v.cls} ${className}`;
  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-full ${v.sweep} transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0`}
      />
      <span className={`relative inline-flex items-center gap-2 transition-colors duration-300 ${v.text}`}>{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) {
    const ext = external ?? /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {inner}
      </a>
    );
  }
  return <button className={cls} {...rest}>{inner}</button>;
}
