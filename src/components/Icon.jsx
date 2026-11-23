import {
  Home, MapPin, ShieldCheck, Ruler, Clock, MessageCircle, FileText, Phone, Mail, Warehouse, Building2, Network,
  Cpu, Layers, Landmark, Maximize2, Zap, Truck, Check,
} from 'lucide-react';

// Registro de ícones usados nos dados (src/data). Para usar um novo, importe e adicione aqui.
const icons = {
  home: Home, mapPin: MapPin, shield: ShieldCheck, ruler: Ruler, clock: Clock, messageCircle: MessageCircle,
  fileText: FileText, phone: Phone, mail: Mail, warehouse: Warehouse, building: Building2, network: Network,
  cpu: Cpu, layers: Layers, landmark: Landmark, maximize: Maximize2, zap: Zap, truck: Truck, check: Check,
};

export default function Icon({ name, size = 24, ...props }) {
  const Cmp = icons[name] || Home;
  return <Cmp size={size} aria-hidden="true" focusable="false" {...props} />;
}
