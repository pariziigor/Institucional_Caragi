/** @type {import('tailwindcss').Config} */
// As cores vêm de variáveis CSS (canais RGB), preenchidas a partir de src/config/site.config.js.
// Assim, trocar a paleta exige mexer apenas no arquivo de configuração.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: token('primary'), // grafite quente: fundos escuros, títulos
        secondary: token('secondary'), // verde-oliva: apoio
        accent: token('accent'), // cobre: CTAs e destaques
        'accent-light': token('accent-light'), // cobre claro: destaques sobre fundo escuro
        sand: token('sand'), // fundo claro
        paper: token('paper'), // fundo claro alternativo
        ink: token('ink'), // texto
        muted: token('muted'), // texto secundário
        dark: token('dark'), // fundo escuro profundo
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      // Escala tipográfica
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 3.2vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.25' }],
        lead: ['clamp(1.0625rem, 1.5vw, 1.25rem)', { lineHeight: '1.65' }],
      },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: {
        soft: '0 8px 30px -12px rgb(28 26 24 / 0.18)',
        lift: '0 18px 40px -16px rgb(28 26 24 / 0.28)',
      },
    },
  },
  plugins: [],
};
