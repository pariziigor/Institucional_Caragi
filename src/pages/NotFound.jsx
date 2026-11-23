import Seo from '../components/Seo';
import Button from '../components/Button';
import { anchor } from '../lib/helpers';

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não existe ou foi movida." path="/404" noindex />
      <section className="on-dark flex min-h-[80vh] items-center bg-dark pt-24">
        <div className="container-page text-center">
          <p className="font-display text-8xl text-accent-light" aria-hidden="true">404</p>
          <h1 className="mt-4 text-h1">Página não encontrada</h1>
          <p className="mx-auto mt-4 max-w-md text-lead">O endereço pode ter mudado ou não existe mais. Volte ao início ou fale com a gente.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Voltar ao início</Button>
            <Button href={anchor('contato')} variant="outlineLight">Ir para contato</Button>
          </div>
        </div>
      </section>
    </>
  );
}
