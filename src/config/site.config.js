/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Edite este arquivo para trocar dados da empresa, textos principais, cores e integrações.
 * Cores e fontes seguem o Brandbook Caragi v1.0.
 *
 * TODO: contatos, CNPJ e endereço abaixo são provisórios. Substituir pelos dados oficiais.
 */

const siteConfig = {
  // ---------- Empresa ----------
  name: 'Caragi',
  legalName: 'Caragi Construções e Imóveis Ltda.', // TODO: confirmar razão social
  tagline: 'Galpões para locação e terrenos Built to Suit',
  cnpj: '00.000.000/0001-00', // TODO: substituir
  creci: '', // deixe '' para ocultar
  url: 'https://www.caragi.com.br', // TODO: substituir pelo domínio real
  region: 'Parque tecnológico',

  // ---------- Contato ----------
  phone: '(11) 3000-0000', // TODO: substituir
  whatsapp: '5511900000000', // formato: 55 + DDD + número, só dígitos. TODO: substituir
  whatsappDisplay: '(11) 90000-0000',
  email: 'contato@caragi.com.br', // TODO: substituir
  address: {
    street: 'Endereço do parque tecnológico', // TODO: [ENDEREÇO]
    city: 'Cidade',
    state: 'UF',
    zip: '00000-000',
    country: 'BR',
  },
  hours: [],
  social: [],

  // ---------- Formulário ----------
  // Ponto único de integração. Veja o README (seção "Conectar o formulário").
  form: {
    provider: 'formspree', // 'formspree' | 'endpoint' | 'simulado'
    endpoint: '', // ex.: 'https://formspree.io/f/xxxxxxx'. Vazio = envio simulado (modo demonstração)
  },

  // ---------- Cores do Brandbook (viram variáveis CSS e tokens do Tailwind) ----------
  colors: {
    primary: '#4A1D22', // Vinho
    secondary: '#6E2129', // Vinho médio
    accent: '#B10304', // Vermelho Caragi
    'accent-light': '#D9A98A', // Cobre
    sand: '#F1EBE3', // Areia
    paper: '#E2D7C9', // Areia escura
    ink: '#221A1B', // Grafite
    muted: '#5B4B4D', // texto secundário (AA sobre areia)
    dark: '#2E1215', // Vinho profundo
  },

  // ---------- Mensagens do WhatsApp ----------
  whatsappMessages: {
    default: 'Olá. Vim pelo site da Caragi e gostaria de informações sobre os galpões e terrenos.',
    galpoes: 'Olá. Gostaria de informações sobre os galpões disponíveis para locação.',
    bts: 'Olá. Gostaria de conversar sobre um projeto Built to Suit.',
  },

  images: { ogImage: '' },

  // ---------- Textos principais ----------
  copy: {
    hero: {
      title: 'O espaço ideal para sua empresa crescer.',
      subtitle:
        'Galpões prontos para locação e terrenos para projetos Built to Suit, dentro de um parque tecnológico.',
    },
    footerDescription:
      'Galpões prontos para locação e terrenos para projetos Built to Suit, dentro de um parque tecnológico.',
  },
};

export default siteConfig;
