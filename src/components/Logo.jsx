/** Símbolo Λ: o "A" sem travessão do logo (Brandbook 3.2 e 3.11). */
export function Lambda({ className = '' }) {
  return (
    <svg viewBox="0 0 62 70" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M27 2H37L55 62H61V68H39V62H46L30.2 9.4L11.5 62H18V68H0V62H8Z" />
    </svg>
  );
}

/**
 * Logo Caragi recriado em vetor a partir do Brandbook: serifas clássicas, "A" sem travessão
 * e barra de sublinhado que nunca se separa do nome.
 * - variant "negative" (padrão): areia, para fundos vinho/escuros.
 * - variant "main": vermelho Caragi, para fundo areia.
 * Tamanho mínimo: 120 px em tela. Para usar o arquivo oficial, troque este componente por <img src="/logo.svg" />.
 */
export default function Logo({ className = '', variant = 'negative' }) {
  const color = variant === 'main' ? 'text-accent' : 'text-sand';
  return (
    <span
      role="img"
      aria-label="Caragi"
      className={`inline-flex select-none flex-col text-[2.1rem] leading-none ${color} ${className}`}
    >
      <span aria-hidden="true" className="flex items-baseline font-display font-semibold tracking-[0.02em]">
        <span>C</span>
        <Lambda className="mx-[0.01em] h-[0.64em] w-auto" />
        <span>R</span>
        <Lambda className="mx-[0.01em] h-[0.64em] w-auto" />
        <span>G</span>
        <span>I</span>
      </span>
      <span aria-hidden="true" className="mt-[0.06em] block h-[0.11em] w-full bg-current" />
    </span>
  );
}
