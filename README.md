# LevAki

Catálogo de afiliados estilo marketplace. O LevAki não vende nem processa pagamentos — cada
produto redireciona, em nova aba, para o link do parceiro (`affiliateLink`).

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros scripts:

```bash
npm run build   # build de produção
npm run lint    # eslint
npm run test    # self-check de src/lib/format.ts e src/lib/filters.ts
```

## Adicionar um produto ou categoria

Tudo fica em `src/data/` — nenhum componente precisa ser tocado:

- **Categoria nova**: adicione um objeto em `src/data/categories.ts` (veja o comentário no topo
  do arquivo). O `icon` deve ser o nome de um ícone de https://lucide.dev/icons; se for um ícone
  novo, adicione-o também ao `iconMap` em `src/components/layout/Header.tsx`.
- **Produto novo**: adicione um objeto em `src/data/products.ts`, apontando `categoryId` para o
  `id` de uma categoria existente.

## Trocar links e imagens reais

- `affiliateLink` de cada produto em `src/data/products.ts` — hoje aponta para
  `https://exemplo-parceiro.com/...` (placeholder).
- `image`/`images` de cada produto — hoje usam `https://placehold.co/...` (placeholder). Ao trocar
  por imagens reais hospedadas em outro domínio, adicione o hostname em `images.remotePatterns`
  no `next.config.ts`.

## Deploy no Vercel

Projeto Next.js padrão, sem configuração extra necessária no Vercel (zero-config).

- Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) com o domínio de
  produção — ela é usada em `metadata.metadataBase`, `sitemap.ts` e `robots.ts`. Sem essa
  variável, o site cai automaticamente para a URL do próprio deployment do Vercel (útil em
  previews), e para `http://localhost:3000` em desenvolvimento — ver `src/lib/site.ts`.
- Não é necessário `vercel.json`.
