import siteConfig from '../config/site.config';

/**
 * PONTO ÚNICO DE INTEGRAÇÃO DO FORMULÁRIO.
 * Configure em site.config.js (form.provider / form.endpoint). Veja o README.
 * - 'formspree' ou 'endpoint': faz POST JSON para form.endpoint.
 * - endpoint vazio: envio simulado (modo demonstração, nada é enviado).
 * Para EmailJS ou Resend, substitua o conteúdo desta função mantendo a assinatura.
 * Deve resolver em caso de sucesso e lançar Error em caso de falha.
 */
export async function sendContactForm(data) {
  const { endpoint } = siteConfig.form;

  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 900));
    if (import.meta.env.DEV) console.info('[Caragi] Envio simulado. Configure form.endpoint em site.config.js.', data);
    return { simulated: true };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Falha no envio (${response.status})`);
  return response.json().catch(() => ({}));
}
