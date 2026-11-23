/**
 * PROJETOS DO PORTFÓLIO: fonte única de dados.
 * Para adicionar um projeto, copie um item e ajuste. A primeira foto de "images" é a capa.
 * status: 'concluida' | 'andamento'   |   type: 'Residencial' | 'Comercial' | 'Reforma' | 'Terreno'
 * TODO: substituir pelo conteúdo real (todos os projetos abaixo são fictícios).
 */
import { img } from '../config/site.config';

export const projectTypes = ['Residencial', 'Comercial', 'Reforma', 'Terreno'];

export const statusLabels = { concluida: 'Concluída', andamento: 'Em andamento' };

const photo = (id, alt) => ({ src: img(id, 1400), thumb: img(id, 700), alt });

export const projects = [
  {
    slug: 'residencial-jardim-aurora',
    name: 'Residência Jardim Aurora',
    location: 'Bairro Jardim Aurora',
    type: 'Residencial',
    status: 'concluida',
    year: 2024,
    area: '240 m²',
    summary: 'Casa térrea de três suítes com varanda integrada ao quintal.',
    description:
      'Residência térrea pensada para a vida em família, com ambientes integrados, ventilação cruzada e varanda voltada para o quintal. A obra foi entregue no prazo contratado, com acabamento aprovado em vistoria final.',
    images: [
      photo('1600585154340-be6161a56a0c', 'Fachada moderna de casa térrea com revestimento claro e jardim'),
      photo('1600596542815-ffad4c1539a9', 'Casa contemporânea com piscina e varanda ao entardecer'),
      photo('1600607687939-ce8a6c25118c', 'Sala de estar ampla com sofá claro e iluminação natural'),
    ],
  },
  {
    slug: 'sobrado-vila-nova',
    name: 'Sobrado Vila Nova',
    location: 'Bairro Vila Nova',
    type: 'Residencial',
    status: 'concluida',
    year: 2023,
    area: '310 m²',
    summary: 'Sobrado de alto padrão com garagem para quatro carros.',
    description:
      'Sobrado em terreno de esquina, com suíte master, escritório e área gourmet. O projeto priorizou a luz natural e a eficiência energética, com aquecimento solar e reuso de água da chuva.',
    images: [
      photo('1564013799919-ab600027ffc6', 'Sobrado moderno com fachada branca e janelas amplas'),
      photo('1600566753190-17f0baa2a6c3', 'Interior de sobrado com cozinha integrada à sala'),
    ],
  },
  {
    slug: 'edificio-comercial-centro',
    name: 'Edifício Comercial Centro',
    location: 'Centro',
    type: 'Comercial',
    status: 'andamento',
    year: 2026,
    area: '1.200 m²',
    summary: 'Edifício com lojas no térreo e salas comerciais nos andares.',
    description:
      'Edifício comercial de quatro pavimentos em região de grande circulação. A obra está em fase de estrutura e a previsão de entrega é para o fim do próximo ano. Acompanhe o andamento pelo nosso atendimento.',
    images: [
      photo('1486406146926-c627a92ad1ab', 'Edifício comercial moderno com fachada de vidro vista de baixo'),
      photo('1541888946425-d81bb19240f5', 'Estrutura de concreto de um edifício em construção'),
    ],
  },
  {
    slug: 'reforma-casa-bela-vista',
    name: 'Reforma Casa Bela Vista',
    location: 'Bairro Bela Vista',
    type: 'Reforma',
    status: 'concluida',
    year: 2024,
    area: '180 m²',
    summary: 'Reforma completa com ampliação da cozinha e nova cobertura.',
    description:
      'Reforma completa de casa dos anos 90: nova cozinha integrada, troca de instalações elétricas e hidráulicas, nova cobertura e atualização da fachada, mantendo a família na região que amava.',
    images: [
      photo('1600573472592-401b489a3cdc', 'Sala de estar reformada com piso claro e decoração neutra'),
      photo('1556912172-45b7abe8b7e1', 'Cozinha reformada com bancada de pedra e armários claros'),
    ],
  },
  {
    slug: 'condominio-recanto-verde',
    name: 'Condomínio Recanto Verde',
    location: 'Zona Norte',
    type: 'Residencial',
    status: 'andamento',
    year: 2026,
    area: '8 casas de 150 m²',
    summary: 'Conjunto de oito casas geminadas com área verde compartilhada.',
    description:
      'Conjunto residencial com oito casas, quintais privativos e área verde comum. A obra está na fase de alvenaria e acabamentos iniciais. Unidades podem ser reservadas com a nossa equipe comercial.',
    images: [
      photo('1512917774080-9991f1c4c750', 'Casa contemporânea com fachada de madeira e vidro em área verde'),
      photo('1589939705384-5185137a7f0f', 'Obra residencial com paredes de alvenaria em andamento'),
    ],
  },
  {
    slug: 'terreno-alameda-das-flores',
    name: 'Terreno Alameda das Flores',
    location: 'Alameda das Flores',
    type: 'Terreno',
    status: 'concluida',
    year: 2023,
    area: '600 m²',
    summary: 'Terreno regularizado e negociado, hoje com casa construída.',
    description:
      'Terreno em rua tranquila, comprado com análise completa de documentação e topografia. Após a negociação, o proprietário contratou a construção da casa conosco, concluída no mesmo ano.',
    images: [
      photo('1500382017468-9049fed747ef', 'Terreno gramado e plano ao fim da tarde'),
      photo('1448630360428-65456885c650', 'Vista aérea de bairro residencial arborizado'),
    ],
  },
  {
    slug: 'galpao-distrito-industrial',
    name: 'Galpão Distrito Industrial',
    location: 'Distrito Industrial',
    type: 'Comercial',
    status: 'concluida',
    year: 2022,
    area: '900 m²',
    summary: 'Galpão logístico com pé-direito alto e docas de carga.',
    description:
      'Galpão de estrutura metálica com pé-direito de nove metros, piso industrial de alta resistência e duas docas de carga. Executado em seis meses, com cronograma cumprido.',
    images: [
      photo('1504307651254-35680f356dfd', 'Operários em obra de estrutura metálica de galpão'),
      photo('1581094794329-c8112a89af12', 'Interior amplo de um galpão industrial'),
    ],
  },
  {
    slug: 'casa-de-campo-serra',
    name: 'Casa de Campo na Serra',
    location: 'Estrada da Serra',
    type: 'Residencial',
    status: 'andamento',
    year: 2026,
    area: '280 m²',
    summary: 'Casa de campo com estrutura mista de madeira e concreto.',
    description:
      'Casa de campo em terreno em declive, com grandes beirais, lareira e varanda panorâmica. A obra exige logística cuidadosa de materiais, e o cronograma está em dia.',
    images: [
      photo('1613490493576-7fde63acd811', 'Casa de campo moderna com grandes janelas e vista para a natureza'),
      photo('1605276374104-dee2a0ed3cd6', 'Varanda de casa de campo com piso de madeira'),
    ],
  },
  {
    slug: 'loja-ponto-central',
    name: 'Loja Ponto Central',
    location: 'Avenida Principal',
    type: 'Reforma',
    status: 'concluida',
    year: 2025,
    area: '120 m²',
    summary: 'Adequação de loja de rua com nova fachada e acessibilidade.',
    description:
      'Reforma de loja comercial com nova fachada, rampa de acesso, banheiro adaptado e iluminação eficiente. Obra realizada em 45 dias, com o comércio funcionando nos fins de semana.',
    images: [
      photo('1523217582562-09d0def993a6', 'Fachada de loja de rua recém-reformada'),
      photo('1574362848149-11496d93a7c7', 'Interior de loja comercial com iluminação clara'),
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
