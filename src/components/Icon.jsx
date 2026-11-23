import {
  Hammer, Home, Map, Key, Handshake, Eye, MapPin, ShieldCheck, Route, Ruler, Clock, Scale,
  MessageCircle, Search, FileText, KeyRound, Phone, Mail, Clock3, Instagram, Facebook, Linkedin,
  Warehouse, Building2, Network,
} from 'lucide-react';

// Registro de ícones usados nos dados (src/data). Para usar um novo, importe e adicione aqui.
const icons = {
  hammer: Hammer, home: Home, map: Map, key: Key, handshake: Handshake, eye: Eye, mapPin: MapPin,
  shield: ShieldCheck, route: Route, ruler: Ruler, clock: Clock, scale: Scale,
  messageCircle: MessageCircle, search: Search, fileText: FileText, keyRound: KeyRound,
  phone: Phone, mail: Mail, hours: Clock3, instagram: Instagram, facebook: Facebook, linkedin: Linkedin,
  warehouse: Warehouse, building: Building2, network: Network,
};

export default function Icon({ name, size = 24, ...props }) {
  const Cmp = icons[name] || Home;
  return <Cmp size={size} aria-hidden="true" focusable="false" {...props} />;
}
