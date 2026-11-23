import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import siteConfig from '../config/site.config';

/* TODO: substituir pelo texto revisado por um profissional jurídico. Modelo básico de Política de Privacidade (LGPD). */
export default function Privacy() {
  const email = siteConfig.email;
  return (
    <>
      <Seo title="Política de Privacidade" description="Saiba como a Caragi coleta, usa e protege os seus dados pessoais, conforme a LGPD." path="/politica-de-privacidade" />
      <PageHeader title="Política de Privacidade" crumbs={[{ label: 'Política de Privacidade' }]} />
      <section className="section">
        <div className="container-page max-w-3xl space-y-8 text-lg leading-relaxed text-muted">
          <p>Esta política explica como a {siteConfig.legalName} (CNPJ {siteConfig.cnpj}) trata os dados pessoais de quem usa este site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
          <div>
            <h2 className="mb-2 text-h3">Quais dados coletamos</h2>
            <p>Coletamos apenas os dados que você informa no formulário de contato (nome, empresa, e-mail, telefone, tipo de interesse e mensagem) e dados técnicos de navegação, como páginas acessadas.</p>
          </div>
          <div>
            <h2 className="mb-2 text-h3">Para que usamos</h2>
            <p>Usamos os dados para responder ao seu contato, enviar propostas e melhorar o site. Não vendemos nem compartilhamos seus dados com terceiros para fins de publicidade.</p>
          </div>
          <div>
            <h2 className="mb-2 text-h3">Base legal e consentimento</h2>
            <p>O tratamento ocorre com base no seu consentimento e na execução de procedimentos preliminares a um contrato, solicitados por você.</p>
          </div>
          <div>
            <h2 className="mb-2 text-h3">Cookies</h2>
            <p>Usamos cookies essenciais ao funcionamento do site e, se você aceitar, cookies de medição de uso. Você pode alterar a sua escolha limpando os dados do navegador.</p>
          </div>
          <div>
            <h2 className="mb-2 text-h3">Seus direitos</h2>
            <p>Você pode solicitar acesso, correção, anonimização ou exclusão dos seus dados, e revogar o consentimento a qualquer momento, pelo e-mail <a className="font-bold text-accent underline" href={`mailto:${email}`}>{email}</a>.</p>
          </div>
          <div>
            <h2 className="mb-2 text-h3">Retenção</h2>
            <p>Mantemos os dados pelo tempo necessário para atender à sua solicitação e cumprir obrigações legais.</p>
          </div>
          <p className="text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </section>
    </>
  );
}
