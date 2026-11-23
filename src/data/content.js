/**
 * CONTEÚDO EDITÁVEL DO SITE (navegação, serviços, loteamentos, locação, BTS, diferenciais, números etc.)
 * Os campos "icon" usam nomes registrados em src/components/Icon.jsx.
 * Itens marcados com TODO ainda precisam de dados reais (preços, endereços, fotos próprias).
 */
import { img } from '../config/site.config';

export const navItems = [
  { label: 'Início', to: '/' },
  { label: 'A Caragi', to: '/a-caragi' },
  { label: 'Áreas de atuação', to: '/areas-de-atuacao' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Contato', to: '/contato' },
];

// ---------- Locação comercial (prioridade comercial) ----------
export const rental = {
  eyebrow: 'Locação comercial',
  title: 'Galpões e barracões para a sua empresa',
  text:
    'Nossa prioridade é a locação de barracões. Temos dois imóveis com cerca de 1.580 m² cada, divulgados também por uma rede de aproximadamente 10 imobiliárias parceiras.',
  highlights: [
    { value: '2', label: 'barracões disponíveis' },
    { value: '1.580 m²', label: 'em cada imóvel (aprox.)' },
    { value: '≈10', label: 'imobiliárias parceiras' },
  ],
  points: [
    'Galpões e barracões para locação, com foco em empresas',
    'Divulgação ampliada por imobiliárias parceiras',
    'Atuação em locação e venda de imóveis comerciais',
    'Atendimento direto para propostas e visitas',
  ],
  ctaLabel: 'Quero alugar um barracão',
  whatsappMessage: 'Olá! Tenho interesse na locação dos barracões de 1.580 m² da Caragi e gostaria de mais informações.',
  image: img('1581094794329-c8112a89af12', 1200),
  imageAlt: 'Interior amplo de um barracão industrial com piso liso e boa iluminação',
};

// ---------- Loteamentos residenciais ----------
export const allotments = [
  {
    id: 'residencial-flamboyan',
    name: 'Residencial Flamboyan',
    city: 'Matão',
    state: 'SP',
    lots: 107,
    minArea: '275 m²',
    areaPrefix: 'a partir de',
    image: img('1500382017468-9049fed747ef', 900),
    imageAlt: 'Terreno plano e gramado ao entardecer, pronto para construção',
    whatsappMessage: 'Olá! Tenho interesse nos lotes do Residencial Flamboyan, em Matão. Podem me enviar mais informações?',
  },
  {
    id: 'residencial-benasse',
    name: 'Residencial Benasse',
    city: 'Matão',
    state: 'SP',
    lots: 25,
    minArea: '360 m²',
    areaPrefix: 'a partir de',
    image: img('1448630360428-65456885c650', 900),
    imageAlt: 'Vista aérea de bairro residencial arborizado',
    whatsappMessage: 'Olá! Tenho interesse nos lotes do Residencial Benasse, em Matão. Podem me enviar mais informações?',
  },
  {
    id: 'parque-das-orquideas',
    name: 'Parque das Orquídeas',
    city: 'Monte Alto',
    state: 'SP',
    lots: 48,
    minArea: '450 m²',
    areaPrefix: 'aprox.',
    image: img('1613490493576-7fde63acd811', 900),
    imageAlt: 'Casa moderna cercada por área verde, em loteamento residencial',
    whatsappMessage: 'Olá! Tenho interesse nos lotes do Parque das Orquídeas, em Monte Alto. Podem me enviar mais informações?',
  },
];

// ---------- Projetos comerciais e BTS ----------
export const bts = {
  eyebrow: 'Projetos comerciais e BTS',
  title: 'Built to Suit: o imóvel feito sob medida para a sua empresa',
  text:
    'No modelo BTS (Built to Suit), desenvolvemos e construímos o imóvel de acordo com as necessidades da empresa, do projeto à entrega. Uma solução para empresas e investidores que querem o espaço certo, sem imobilizar capital.',
  steps: [
    { icon: 'search', title: 'Entendemos a demanda', text: 'Levantamos a operação, o tamanho e a localização ideais.' },
    { icon: 'ruler', title: 'Projetamos e construímos', text: 'O imóvel nasce sob medida, com cronograma e orçamento claros.' },
    { icon: 'keyRound', title: 'Entregamos pronto', text: 'A empresa ocupa um espaço adequado ao seu negócio.' },
  ],
  projects: [
    {
      name: 'Caragi',
      tag: 'Em detalhamento',
      text: 'Projeto em fase de detalhamento. Em breve, mais informações por aqui.', // TODO: detalhar o projeto
      image: img('1486406146926-c627a92ad1ab', 900),
      imageAlt: 'Edifício comercial moderno com fachada de vidro',
    },
    {
      name: 'ECO DAMA',
      tag: 'Empreendimento comercial',
      text: 'Empreendimento comercial desenvolvido pela Caragi.', // TODO: incluir localização e detalhes
      image: img('1504307651254-35680f356dfd', 900),
      imageAlt: 'Obra comercial com estrutura em andamento',
    },
  ],
  ctaLabel: 'Quero um projeto sob medida',
  whatsappMessage: 'Olá! Tenho interesse em um projeto comercial / BTS com a Caragi e gostaria de conversar.',
};

// ---------- Áreas de atuação ----------
export const services = [
  {
    id: 'locacao-comercial',
    icon: 'warehouse',
    title: 'Locação comercial',
    short: 'Galpões e barracões para empresas, com divulgação em imobiliárias parceiras.',
    description:
      'Nossa prioridade é a locação de galpões e barracões. Temos dois imóveis de aproximadamente 1.580 m² cada e uma rede de cerca de 10 imobiliárias parceiras para divulgar e fechar bons negócios.',
    includes: [
      'Dois barracões de aproximadamente 1.580 m² cada',
      'Divulgação em cerca de 10 imobiliárias parceiras',
      'Atuação em locação e venda de imóveis comerciais',
      'Atendimento direto para visitas e propostas',
    ],
    audience: 'Empresas que precisam de espaço para operação, estoque ou produção, e proprietários de imóveis comerciais.',
    ctaLabel: 'Quero alugar um barracão',
    whatsappMessage: 'Olá! Tenho interesse na locação de galpões/barracões e gostaria de falar com a Caragi.',
    contactSubject: 'locacao',
    image: img('1581094794329-c8112a89af12', 1000),
    imageAlt: 'Interior amplo de um barracão industrial',
  },
  {
    id: 'venda-de-terrenos',
    icon: 'map',
    title: 'Venda de terrenos e loteamentos',
    short: 'Três loteamentos residenciais em Matão e Monte Alto, com 180 lotes no total.',
    description:
      'Trabalhamos a venda de terrenos residenciais nos loteamentos Residencial Flamboyan e Residencial Benasse, em Matão, e Parque das Orquídeas, em Monte Alto.',
    includes: [
      'Residencial Flamboyan (Matão): 107 lotes a partir de 275 m²',
      'Residencial Benasse (Matão): 25 lotes a partir de 360 m²',
      'Parque das Orquídeas (Monte Alto): 48 lotes de cerca de 450 m²',
      'Apoio na escolha do lote e na negociação',
    ],
    audience: 'Famílias que querem construir a casa própria e investidores que buscam terrenos residenciais.',
    ctaLabel: 'Quero conhecer os lotes',
    whatsappMessage: 'Olá! Tenho interesse nos lotes dos loteamentos da Caragi e gostaria de mais informações.',
    contactSubject: 'terrenos',
    image: img('1500382017468-9049fed747ef', 1000),
    imageAlt: 'Terreno plano e gramado ao entardecer, pronto para construção',
  },
  {
    id: 'projetos-bts',
    icon: 'building',
    title: 'Projetos comerciais e BTS',
    short: 'Imóveis desenvolvidos sob medida para empresas, no modelo Built to Suit.',
    description:
      'Desenvolvemos projetos comerciais sob demanda, incluindo construções no modelo BTS (Built to Suit), em que o imóvel é planejado e construído para atender às necessidades de uma empresa.',
    includes: [
      'Projeto e construção sob medida para a operação da empresa',
      'Modelo BTS (Built to Suit) para empresas e investidores',
      'Cronograma e orçamento claros em cada etapa',
      'Referências: ECO DAMA e projeto Caragi',
    ],
    audience: 'Empresas que precisam de um imóvel sob medida e investidores que buscam projetos comerciais.',
    ctaLabel: 'Quero um projeto sob medida',
    whatsappMessage: 'Olá! Tenho interesse em um projeto comercial / BTS com a Caragi e gostaria de conversar.',
    contactSubject: 'construcao',
    image: img('1486406146926-c627a92ad1ab', 1000),
    imageAlt: 'Edifício comercial moderno com fachada de vidro',
  },
  {
    id: 'compra-venda-imoveis',
    icon: 'home',
    title: 'Compra e venda de imóveis',
    short: 'Negociação segura de imóveis comerciais e residenciais, da avaliação à escritura.',
    description:
      'Atuamos na venda e na locação de imóveis, com destaque para o segmento comercial. Avaliamos, divulgamos e negociamos com a documentação conferida.',
    includes: [
      'Avaliação de mercado do imóvel',
      'Conferência de documentação e matrícula',
      'Divulgação ampliada com imobiliárias parceiras',
      'Apoio na negociação e na escritura',
    ],
    audience: 'Quem quer vender ou comprar com segurança, ou investir em imóveis comerciais.',
    ctaLabel: 'Quero vender meu imóvel',
    whatsappMessage: 'Olá! Quero vender (ou comprar) um imóvel e gostaria de falar com a Caragi.',
    contactSubject: 'imoveis',
    image: img('1560518883-ce09059eeffa', 1000),
    imageAlt: 'Fachada de uma casa residencial com jardim',
  },
];

// ---------- Diferenciais ----------
export const differentials = [
  { icon: 'handshake', title: 'Atendimento personalizado', text: 'Você fala direto com quem conduz o seu caso, sem repasses e sem protocolos demorados.' },
  { icon: 'network', title: 'Rede de imobiliárias parceiras', text: 'Cerca de 10 parceiras ajudam a divulgar os imóveis e a gerar contatos qualificados.' },
  { icon: 'mapPin', title: 'Conhecimento da região', text: 'Atuamos em Matão e Monte Alto e conhecemos preços, bairros e regras locais.' },
  { icon: 'eye', title: 'Transparência', text: 'Valores, prazos e condições explicados com clareza antes de qualquer assinatura.' },
  { icon: 'shield', title: 'Segurança jurídica', text: 'Documentação conferida e contratos revisados para proteger as duas partes.' },
  { icon: 'ruler', title: 'Soluções sob medida', text: 'Do lote ao projeto BTS, desenvolvemos a solução certa para cada perfil.' },
];

// ---------- Números ----------
export const stats = [
  { value: 180, suffix: '', label: 'lotes em 3 loteamentos' },
  { value: 2, suffix: '', label: 'barracões de 1.580 m² para locação' },
  { value: 10, suffix: '+', label: 'imobiliárias parceiras' },
  { value: 2, suffix: '', label: 'cidades atendidas: Matão e Monte Alto' },
];

// ---------- Página A Caragi ----------
export const aboutContent = {
  who: [
    'A Caragi atua no desenvolvimento imobiliário em Matão e Monte Alto, no interior de São Paulo. Trabalhamos com locação comercial, loteamentos residenciais e projetos sob medida para empresas.',
    'Nossa prioridade comercial é a locação de galpões e barracões, apoiada por uma rede de aproximadamente 10 imobiliárias parceiras. Também vendemos terrenos em três loteamentos residenciais.',
    'Para empresas e investidores, desenvolvemos projetos comerciais, inclusive no modelo BTS (Built to Suit), em que o imóvel é construído para atender às necessidades do negócio.',
  ],
  // TODO: substituir pela história real da empresa. Os marcos abaixo são ilustrativos.
  timeline: [
    { year: '2013', title: 'Início das atividades', text: 'Primeiras obras e negócios imobiliários na região.' },
    { year: '2016', title: 'Entrada no mercado imobiliário', text: 'Criação da área de compra, venda e locação de imóveis.' },
    { year: '2019', title: 'Terrenos e loteamentos', text: 'Início da análise e negociação de terrenos.' },
    { year: '2022', title: 'Projetos comerciais', text: 'Foco em locação comercial e projetos sob demanda.' },
    { year: '2025', title: 'Três loteamentos em comercialização', text: 'Flamboyan e Benasse, em Matão, e Parque das Orquídeas, em Monte Alto.' },
  ],
  purpose: 'Facilitar o caminho de quem quer ter um lugar para chamar de seu.',
  mission: 'Desenvolver e negociar imóveis com transparência, qualidade e respeito às pessoas e aos seus planos.',
  vision: 'Ser a referência regional em locação comercial, loteamentos e projetos sob medida, reconhecida pela confiança.',
  values: [
    { icon: 'eye', title: 'Transparência' },
    { icon: 'shield', title: 'Integridade' },
    { icon: 'ruler', title: 'Qualidade' },
    { icon: 'handshake', title: 'Respeito ao cliente' },
    { icon: 'clock', title: 'Compromisso com prazos' },
  ],
  structure: [
    { icon: 'warehouse', title: 'Locação comercial', text: 'Galpões e barracões divulgados com a rede de imobiliárias parceiras.' },
    { icon: 'map', title: 'Loteamentos', text: 'Venda de terrenos residenciais em Matão e Monte Alto.' },
    { icon: 'building', title: 'Projetos e BTS', text: 'Projetos comerciais sob demanda, incluindo Built to Suit.' },
  ],
  regions: {
    main: 'Matão',
    cities: ['Matão', 'Monte Alto'],
  },
};

// ---------- Como funciona ----------
export const process = [
  { icon: 'messageCircle', title: 'Contato', text: 'Você conta o que precisa pelo WhatsApp, telefone ou formulário.' },
  { icon: 'search', title: 'Análise', text: 'Entendemos o seu caso e avaliamos a melhor solução.' },
  { icon: 'fileText', title: 'Proposta', text: 'Enviamos uma proposta clara, com valores, prazos e condições.' },
  { icon: 'handshake', title: 'Negociação ou execução', text: 'Conduzimos a negociação ou o projeto, mantendo você informado.' },
  { icon: 'keyRound', title: 'Entrega ou fechamento', text: 'Entregamos o imóvel ou fechamos o negócio com a documentação em dia.' },
];
