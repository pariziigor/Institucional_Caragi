/** @type {import('tailwindcss').Config} */
// As cores vêm de variáveis CSS (canais RGB), preenchidas a partir de src/config/site.config.js.
// Paleta e tipografia seguem o Brandbook Caragi v1.0.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Brandbook 3.12: cantos retos, sem arredondamento.
    borderRadius: {
      none: '0', sm: '0', DEFAULT: '0', md: '0', lg: '0', xl: '0', xl2: '0', '2xl': '0', '3xl': '0', full: '0',
    },
    extend: {
      colors: {
        primary: token('primary'), // Vinho #4A1D22
        secondary: token('secondary'), // Vinho médio #6E2129
        accent: token('accent'), // Vermelho Caragi #B10304
        'accent-light': token('accent-light'), // Cobre #D9A98A
        sand: token('sand'), // Areia #F1EBE3
        paper: token('paper'), // Areia escura #E2D7C9
        ink: token('ink'), // Grafite #221A1B
        muted: token('muted'), // texto secundário
        dark: token('dark'), // Vinho profundo #2E1215
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 6.4vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        h1: ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        h2: ['clamp(2rem, 3.8vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 2.2vw, 1.875rem)', { lineHeight: '1.15' }],
        lead: ['clamp(1.0625rem, 1.4vw, 1.1875rem)', { lineHeight: '1.7' }],
      },
    },
  },
  plugins: [],
};
