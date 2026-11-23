# Site institucional da Caragi

React + Vite + Tailwind CSS (v3). Site multipágina com rotas, em pt-BR.

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # testa o build localmente
```

Requer Node 18+.

## Direção visual

| Papel | Cor | Hex |
|---|---|---|
| Primária (grafite quente) | fundos escuros, títulos | `#2B2825` |
| Secundária (verde-oliva) | apoio, selos, faixa de CTA | `#59613F` |
| Destaque (cobre) | botões e CTAs | `#A9531F` |
| Cobre claro | destaques sobre fundo escuro | `#E0A074` |
| Fundo claro (areia) | seções claras | `#F6F2EC` / `#ECE5DA` |
| Texto | `#1F1D1B` (principal), `#5E5851` (secundário) |

Fontes: **Fraunces** (títulos) e **DM Sans** (texto), via Google Fonts. O logotipo é um wordmark provisório em [`src/components/Logo.jsx`](src/components/Logo.jsx).

## Estrutura

```
src/
  config/site.config.js   ← empresa, contatos, redes, cores, imagens-chave, textos principais, formulário
  data/content.js         ← menu, serviços, diferenciais, números, história, missão/valores, processo
  data/projects.js        ← TODOS os projetos (fonte única)
  components/             ← Header, Footer, Button, cards, Lightbox, Seo, CookieBanner, etc.
  pages/                  ← Home, About, Services, Projects, ProjectDetail, Contact, Privacy, NotFound
  lib/                    ← helpers (WhatsApp, máscara), hooks (scroll/contador), sendForm (envio do formulário)
public/                   ← favicon, robots.txt, sitemap.xml, redirecionamentos de SPA
```

Textos fictícios estão marcados com `TODO: substituir pelo conteúdo real`.

## Como editar

- **Dados da empresa** (telefone, WhatsApp, e-mail, endereço, redes, CNPJ, CRECI, horários): `src/config/site.config.js`.
  O WhatsApp usa o formato `55` + DDD + número, só dígitos (ex.: `5511900000000`).
- **Textos** de serviços, diferenciais, números e história: `src/data/content.js`.
- **Projetos**: `src/data/projects.js`. Copie um item, ajuste e pronto (a lista, os filtros e a página de detalhe se atualizam sozinhos). Os projetos em destaque da Home são escolhidos por `slug` em `src/pages/Home.jsx`.
- **Mensagens de WhatsApp** de cada serviço: campo `whatsappMessage` em `src/data/content.js`.

## Como trocar imagens

As imagens são do Unsplash (provisórias). Troque a URL por um arquivo próprio (coloque em `public/img/` e use `/img/arquivo.webp`):
- Hero, "A Caragi", região e imagem de compartilhamento: `images` em `site.config.js`.
- Serviços: campo `image` em `content.js`. Projetos: `images` em `projects.js`.
Mantenha o `alt` descritivo. Prefira WebP ou AVIF.

## Como trocar cores

Edite `colors` em `site.config.js`. Os valores viram variáveis CSS (`--c-*`) e tokens do Tailwind (`bg-accent`, `text-primary` etc.) automaticamente. Ao trocar, confira o contraste (mínimo 4,5:1 para texto).

## Conectar o formulário

O envio passa por um único ponto: [`src/lib/sendForm.js`](src/lib/sendForm.js), configurado em `site.config.js > form`.

**Formspree (mais simples):**
1. Crie um formulário em formspree.io e copie o endpoint (`https://formspree.io/f/xxxxxxx`).
2. Em `site.config.js`, preencha `form.endpoint`.

Sem endpoint, o formulário funciona em **modo demonstração** (simula o envio). Para **EmailJS** ou **Resend**, substitua o corpo de `sendContactForm` mantendo a assinatura (resolver em sucesso, lançar erro em falha). No caso do Resend, use uma função serverless (Vercel/Netlify) para não expor a chave de API no navegador.

## SEO

- Título, descrição e Open Graph por página: componente `Seo`.
- JSON-LD `RealEstateAgent`/`LocalBusiness` gerado de `site.config.js` (`JsonLd.jsx`).
- **Antes de publicar**, troque o domínio `https://www.caragi.com.br` em `site.config.js` (`url`), `public/sitemap.xml` e `public/robots.txt`. Adicione as URLs de `/projetos/slug` ao sitemap.
- Como é uma SPA, o conteúdo é renderizado no navegador (o Google indexa, mas outros robôs podem não ler as metatags por página). Se precisar de pré-renderização, considere `vite-plugin-ssg` ou migrar para Next.js/Astro.

## Publicar

**Vercel:** importe o repositório, framework "Vite" (build `npm run build`, saída `dist`). `vercel.json` já cuida das rotas.
**Netlify:** build `npm run build`, publish `dist`. `public/_redirects` já cuida das rotas.

## Acessibilidade e performance

HTML semântico, link "pular para o conteúdo", foco visível, navegação por teclado (menu, filtros, lightbox com ←/→/Esc), `aria-*`, `alt` em todas as imagens, `prefers-reduced-motion` respeitado e sem carrosséis automáticos. Páginas carregadas sob demanda e imagens com `loading="lazy"`.
Rode o Lighthouse em `npm run preview` e ajuste as imagens para arquivos próprios em WebP para atingir 90+.
