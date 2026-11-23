import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import JsonLd from './components/JsonLd';
import Home from './pages/Home';

// Páginas secundárias carregadas sob demanda (JS inicial menor)
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <>
      <a href="#conteudo" className="sr-only z-[70] bg-accent px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Pular para o conteúdo
      </a>
      <ScrollToTop />
      <JsonLd />
      <Header />
      <main id="conteudo">
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
