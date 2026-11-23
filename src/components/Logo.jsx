import siteConfig from '../config/site.config';

/**
 * Logotipo provisório (wordmark). Para trocar por um logotipo real,
 * substitua o conteúdo deste componente por <img src="/logo.svg" alt="Caragi" />.
 */
export default function Logo({ className = '', light = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="14" fill={light ? 'rgb(var(--c-accent))' : 'rgb(var(--c-primary))'} />
        <path d="M42 22.5a14 14 0 1 0 0 19" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
        <rect x="38" y="30" width="12" height="4.5" rx="1" fill="#fff" />
      </svg>
      <span
        className={`font-display text-2xl font-bold tracking-[0.2em] ${light ? 'text-sand' : 'text-primary'}`}
      >
        {siteConfig.name.toUpperCase()}
      </span>
    </span>
  );
}
