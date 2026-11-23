import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import siteConfig from './config/site.config';
import { hexToChannels } from './lib/helpers';
import './index.css';

// Aplica as cores de site.config.js como variáveis CSS (usadas pelos tokens do Tailwind).
Object.entries(siteConfig.colors).forEach(([name, hex]) => {
  document.documentElement.style.setProperty(`--c-${name}`, hexToChannels(hex));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
