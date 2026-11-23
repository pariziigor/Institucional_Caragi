/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Edite este arquivo para trocar dados da empresa, textos principais, imagens-chave, cores e integrações.
 * Os componentes não possuem dados fixos. Tudo que é conteúdo vem daqui ou de src/data/.
 *
 * TODO: substituir pelo conteúdo real (todos os valores abaixo são fictícios).
 */

// Monta uma URL do Unsplash com largura e qualidade controladas (troque por arquivos próprios quando quiser).
export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`;

const siteConfig = {
  // ---------- Empresa ----------
  name: 'Caragi',
  legalName: 'Caragi Construções e Imóveis Ltda.', // TODO: substituir pelo conteúdo real
  tagline: 'Construção e imóveis com solidez e transparência',
  cnpj: '00.000.000/0001-00', // TODO: substituir pelo conteúdo real
  creci: 'CRECI-XX 00000-J', // TODO: substituir pelo conteúdo real (deixe '' para ocultar)
  url: 'https://www.caragi.com.br', // TODO: substituir pelo domínio real
  region: 'Matão e Monte Alto/SP',

  // ---------- Contato ----------
  phone: '(11) 3000-0000', // TODO: substituir pelo conteúdo real
  whatsapp: '5511900000000', // formato: 55 + DDD + número, só dígitos. TODO: substituir
  whatsappDisplay: '(11) 90000-0000',
  email: 'contato@caragi.com.br', // TODO: substituir
  address: {
    street: 'Rua Exemplo, 123, Centro', // TODO: [ENDEREÇO]
    city: 'Sua Cidade',
    state: 'UF',
    zip: '00000-000',
    country: 'BR',
  },
  hours: [
    { label: 'Segunda a sexta', value: '8h às 18h' },
    { label: 'Sábado', value: '8h às 12h' },
  ],
  social: [
    { name: 'Instagram', url: 'https://instagram.com/caragi' }, // TODO: [INSTAGRAM]
    { name: 'Facebook', url: 'https://facebook.com/caragi' }, // TODO: [FACEBOOK]
    { name: 'LinkedIn', url: 'https://linkedin.com/company/caragi' }, // TODO: [LINKEDIN]
  ],

  // ---------- Formulário ----------
  // Ponto único de integração. Veja o README (seção "Conectar o formulário").
  form: {
    provider: 'formspree', // 'formspree' | 'endpoint' | 'simulado'
    endpoint: '', // ex.: 'https://formspree.io/f/xxxxxxx'. Vazio = envio simulado (modo demonstração)
  },

  // ---------- Cores (viram variáveis CSS e tokens do Tailwind) ----------
  colors: {
    primary: '#2B2825', // grafite quente
    secondary: '#59613F', // verde-oliva
    accent: '#A9531F', // cobre (CTAs). Contraste 5,6:1 com branco
    'accent-light': '#E0A074', // cobre claro, para fundos escuros
    sand: '#F6F2EC', // fundo claro
    paper: '#ECE5DA', // fundo claro alternativo
    ink: '#1F1D1B', // texto
    muted: '#5E5851', // texto secundário (AA sobre sand)
    dark: '#1C1A18', // fundo escuro profundo
  },

  // ---------- Mensagens do WhatsApp ----------
  whatsappMessages: {
    default: 'Olá! Vim pelo site da Caragi e gostaria de mais informações.',
    projects: 'Olá! Vi os projetos no site da Caragi e gostaria de conversar.',
  },

  // ---------- Imagens-chave ----------
  images: {
    hero: img('1600585154340-be6161a56a0c', 1920),
    aboutHome: img('1503387762-592deb58ef4e', 1000),
    about: img('1541888946425-d81bb19240f5', 1000),
    region: img('1448630360428-65456885c650', 1400),
    ogImage: img('1600585154340-be6161a56a0c', 1200),
  },

  // ---------- Textos principais ----------
  copy: {
    hero: {
      title: 'Barracões para alugar, lotes para construir e projetos sob medida',
      subtitle:
        'Locação comercial de galpões, loteamentos residenciais em Matão e Monte Alto e projetos BTS para empresas, com atendimento direto e contrato claro.',
    },
    footerDescription:
      'Locação comercial, loteamentos residenciais e projetos BTS em Matão e Monte Alto, com transparência em cada etapa.',
    ctaBand: {
      title: 'Vamos conversar sobre o seu próximo passo?',
      text: 'Conte o que você precisa. Respondemos de forma objetiva e sem compromisso.',
    },
  },
};

export default siteConfig;
