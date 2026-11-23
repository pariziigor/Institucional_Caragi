// Conteúdo da página. Tom de voz do Brandbook: direto, o dado concreto é o argumento.

export const navItems = [
  { id: 'galpoes', label: 'Galpões' },
  { id: 'built-to-suit', label: 'Built to Suit' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'contato', label: 'Contato' },
];

export const heroFacts = [
  { label: 'Galpões para locação', value: '2' },
  { label: 'Área de cada galpão', value: '1.500 m²' },
  { label: 'Terrenos Built to Suit', value: '16' },
  { label: 'Localização', value: 'Parque tecnológico' },
];

export const galpoes = [
  { name: 'Galpão 01', status: 'Disponível para locação' },
  { name: 'Galpão 02', status: 'Disponível para locação' },
];

export const galpaoData = [
  { label: 'Área total', value: '1.500 m²' },
  { label: 'Térreo (produção e operação)', value: '900 m²' },
  { label: 'Lajes (escritórios)', value: '2 × 300 m²' },
  { label: 'Pé-direito na área produtiva', value: '10 m' },
];

export const galpaoFeatures = [
  { icon: 'building', title: 'Térreo de 900 m²', text: 'Área para produção e operação.' },
  { icon: 'layers', title: 'Duas lajes de 300 m²', text: 'Espaço para escritórios, no mesmo prédio.' },
  { icon: 'ruler', title: 'Pé-direito de 10 metros', text: 'Na área produtiva.' },
  { icon: 'truck', title: 'Elevador e doca', text: 'Movimentação de cargas e pessoas.' },
  { icon: 'zap', title: 'Energia e 16 vagas', text: 'Infraestrutura para a operação diária.' },
  { icon: 'shield', title: 'Padrão construtivo diferenciado', text: 'Construção com acabamento e especificação acima do comum.' },
];

export const bts = {
  lots: 16,
  title: 'Terrenos para construir a sede da sua empresa',
  text: 'Há 16 terrenos disponíveis para construção de sedes empresariais sob medida.',
  concept:
    'Built to Suit significa construir sob medida. A empresa define o que precisa e o espaço é projetado e construído conforme a sua operação, em vez de adaptar a operação a um imóvel pronto.',
  steps: [
    { icon: 'fileText', title: 'Você define a necessidade', text: 'Área, layout, fluxo de produção e estrutura de escritórios.' },
    { icon: 'ruler', title: 'O espaço é projetado para isso', text: 'O projeto parte da sua operação, não de um modelo fixo.' },
    { icon: 'building', title: 'Sua sede, no parque', text: 'A empresa passa a operar em um endereço feito para ela.' },
  ],
};

export const diferenciais = [
  { icon: 'cpu', title: 'Parque tecnológico', text: 'Localização dentro de um parque tecnológico.' },
  { icon: 'network', title: 'Ecossistema de inovação', text: 'Empresas, pesquisa e inovação no mesmo ambiente.' },
  { icon: 'layers', title: 'Produção, operação e escritórios', text: 'Tudo integrado no mesmo espaço.' },
  { icon: 'shield', title: 'Infraestrutura diferenciada', text: 'Elevador, doca, energia e vagas para a operação.' },
  { icon: 'landmark', title: 'Credibilidade do endereço', text: 'Um endereço que reforça a presença da sua empresa.' },
  { icon: 'maximize', title: 'Possibilidade de expansão', text: 'Espaço para crescer junto com o negócio.' },
];

// Para usar uma foto real, informe `src` (ex.: '/fotos/galpao-fachada.jpg') e `alt`.
export const gallery = [
  { title: 'Fachada dos galpões', src: null, alt: '' },
  { title: 'Área produtiva', src: null, alt: '' },
  { title: 'Escritórios nas lajes', src: null, alt: '' },
  { title: 'Doca e elevador', src: null, alt: '' },
  { title: 'Infraestrutura do parque', src: null, alt: '' },
  { title: 'Terrenos Built to Suit', src: null, alt: '' },
];

export const interests = [
  { value: 'galpao', label: 'Galpão pronto' },
  { value: 'built-to-suit', label: 'Built to Suit' },
];
