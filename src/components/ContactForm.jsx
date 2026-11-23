import { useRef, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { maskPhone } from '../lib/helpers';
import { sendContactForm } from '../lib/sendForm';

export const subjects = [
  { value: 'construcao', label: 'Construção' },
  { value: 'imoveis', label: 'Compra e venda de imóveis' },
  { value: 'terrenos', label: 'Compra e venda de terrenos' },
  { value: 'locacao', label: 'Locação' },
  { value: 'outro', label: 'Outro' },
];

const initial = { name: '', phone: '', email: '', subject: '', message: '', consent: false, website: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 3) e.name = 'Informe seu nome completo.';
  const digits = v.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) e.phone = 'Informe um telefone válido com DDD. Exemplo: (11) 91234-5678.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Informe um e-mail válido. Exemplo: nome@email.com.';
  if (!v.subject) e.subject = 'Escolha o assunto do seu contato.';
  if (v.message.trim().length < 10) e.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  if (!v.consent) e.consent = 'Para enviar, é preciso concordar com o uso dos dados.';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-primary">{label}</label>
      {children}
      {error && <p id={`${id}-erro`} className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const aria = (name) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-erro` : undefined,
    className: `field ${errors[name] ? 'field-error' : ''}`,
  });

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (values.website) return; // honeypot: bots preenchem
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('loading');
    try {
      const { website, consent, ...payload } = values;
      await sendContactForm({ ...payload, consent: true });
      setStatus('success');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="rounded-xl2 bg-secondary/10 p-8 text-center">
        <CheckCircle2 size={48} aria-hidden="true" className="mx-auto text-secondary" />
        <h3 className="mt-4 text-h3">Mensagem enviada!</h3>
        <p className="mt-2 text-muted">Obrigado pelo contato. Responderemos o mais breve possível, em horário comercial.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 font-bold text-accent underline underline-offset-4">Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Formulário de contato">
      <Field id="name" label="Nome" error={errors.name}>
        <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={(e) => set('name', e.target.value)} {...aria('name')} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Telefone / WhatsApp" error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(11) 91234-5678" value={values.phone} onChange={(e) => set('phone', maskPhone(e.target.value))} {...aria('phone')} />
        </Field>
        <Field id="email" label="E-mail" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} {...aria('email')} />
        </Field>
      </div>
      <Field id="subject" label="Assunto / interesse" error={errors.subject}>
        <select id="subject" name="subject" value={values.subject} onChange={(e) => set('subject', e.target.value)} {...aria('subject')}>
          <option value="">Selecione…</option>
          {subjects.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </Field>
      <Field id="message" label="Mensagem" error={errors.message}>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={(e) => set('message', e.target.value)} {...aria('message')} />
      </Field>

      {/* Campo isca anti-spam: invisível para pessoas */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Não preencha<input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set('website', e.target.value)} /></label>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => set('consent', e.target.checked)}
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errors.consent ? 'consent-erro' : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-[rgb(var(--c-accent))]"
          />
          <span>
            Concordo com o tratamento dos meus dados para retorno deste contato, conforme a{' '}
            <Link to="/politica-de-privacidade" className="font-bold text-accent underline">Política de Privacidade</Link> (LGPD).
          </span>
        </label>
        {errors.consent && <p id="consent-erro" className="mt-1.5 text-sm font-medium text-red-700">{errors.consent}</p>}
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800">
          Não foi possível enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-bold text-white transition duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? (<><Loader2 size={20} className="animate-spin" aria-hidden="true" /> Enviando…</>) : (<><Send size={20} aria-hidden="true" /> Enviar mensagem</>)}
      </button>
    </form>
  );
}
