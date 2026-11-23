import siteConfig from '../config/site.config';

/** Gera link do WhatsApp com mensagem pré-preenchida. */
export const whatsappLink = (message = siteConfig.whatsappMessages.default) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

/** Link tel: apenas com dígitos. */
export const telLink = (phone = siteConfig.phone) => `tel:+55${phone.replace(/\D/g, '')}`;

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.street}, ${a.city} - ${a.state}, ${a.zip}`;
};

export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress())}`;

/** Converte #RRGGBB em "r g b" (formato usado pelas variáveis CSS do Tailwind). */
export const hexToChannels = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(' ');
};

/** Máscara de telefone brasileiro: (11) 91234-5678 ou (11) 1234-5678. */
export const maskPhone = (value) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
