import { useRef, useState } from 'react';
import { CheckCircle2, Loader2, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { interests } from '../data/content';
import siteConfig from '../config/site.config';
import { maskPhone, whatsappLink } from '../lib/helpers';
import { sendContactForm } from '../lib/sendForm';
import Button from './Button';

const initial = { name: '', company: '', email: '', phone: '', interest: '', message: '', consent: false, website: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 3) e.name = 'Informe seu nome completo.';
  if (v.company.trim().length < 2) e.company = 'Informe o nome da empresa.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Informe um e-mail válido. Exemplo: nome@empresa.com.br.';
  const digits = v.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) e.phone = 'Informe um telefone válido com DDD. Exemplo: (11) 91234-5678.';
  if (!v.interest) e.interest = 'Escolha o tipo de interesse.';
  if (!v.consent) e.consent = 'Para enviar, é preciso concordar com o uso dos dados.';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-primary">{label}</label>
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
      const { website, consent, interest, ...payload } = values;
      const interestLabel = interests.find((i) => i.value === interest)?.label ?? interest;
      await sendContactForm({ ...payload, interest: interestLabel, consent: true });
      setStatus('success');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="border border-primary/20 bg-white p-8 text-center">
        <CheckCircle2 size={44} aria-hidden="true" className="mx-auto text-accent" />
        <h3 className="mt-4 text-h3">Mensagem enviada</h3>
        <p className="mt-2 text-muted">Obrigado pelo contato. Retornaremos em horário comercial.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-accent underline underline-offset-4">Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative space-y-5 border border-primary/20 bg-white p-6 sm:p-8" aria-label="Formulário de interesse">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={(e) => set('name', e.target.value)} {...aria('name')} />
        </Field>
        <Field id="company" label="Empresa" error={errors.company}>
          <input id="company" name="company" type="text" autoComplete="organization" value={values.company} onChange={(e) => set('company', e.target.value)} {...aria('company')} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="E-mail" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} {...aria('email')} />
        </Field>
        <Field id="phone" label="Telefone / WhatsApp" error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(11) 91234-5678" value={values.phone} onChange={(e) => set('phone', maskPhone(e.target.value))} {...aria('phone')} />
        </Field>
      </div>
      <Field id="interest" label="Tipo de interesse" error={errors.interest}>
        <select id="interest" name="interest" value={values.interest} onChange={(e) => set('interest', e.target.value)} {...aria('interest')}>
          <option value="">Selecione</option>
          {interests.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </Field>
      <Field id="message" label="Mensagem (opcional)" error={errors.message}>
        <textarea id="message" name="message" rows={4} value={values.message} onChange={(e) => set('message', e.target.value)} {...aria('message')} />
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
        <p role="alert" className="border border-red-700 bg-red-50 p-4 text-sm font-medium text-red-800">
          Não foi possível enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={status === 'loading'} className="disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'loading' ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Enviando</>) : (<><Send size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" /> Enviar mensagem</>)}
        </Button>
        <Button href={whatsappLink(siteConfig.whatsappMessages.default)} variant="secondary">
          <MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp
        </Button>
      </div>
    </form>
  );
}
