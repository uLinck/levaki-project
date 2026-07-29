# LevAki — Prompt de Desenvolvimento (Claude Code)

## 1. Visão geral

Crie uma **landing page / catálogo de afiliados** chamada **LevAki**. O site funciona como um **funil**: ele exibe produtos em um layout no estilo marketplace (Mercado Livre / Amazon) e, ao clicar em um produto, o usuário é redirecionado para o **site parceiro**, onde a compra é efetivamente realizada. O LevAki **não processa vendas nem pagamentos** — ele apenas apresenta, filtra e encaminha.

O objetivo do projeto é **maximizar cliques qualificados** nos links de afiliado, oferecendo uma navegação impecável, moderna e intuitiva.

## 2. Modelo de negócio (guia as decisões de UX)

- Cada produto possui um **link de parceria (afiliado)**.
- O CTA principal de cada produto é **"Ver mais detalhes"**, que abre o link do parceiro em **nova aba**.
- **Não** haverá página de review própria. Os cards exibem apenas **prova social**: nota em estrelas + contador de avaliações (ex: `4,8` e `+5k avaliações`). As reviews completas e a compra ficam no site parceiro.
- Todo link de afiliado deve usar os atributos corretos: `target="_blank"` e `rel="noopener noreferrer sponsored nofollow"`.
- Incluir, no rodapé, um aviso curto de **divulgação de afiliados** (ex: "O LevAki pode receber comissão pelas compras realizadas através dos links.").

## 3. Stack técnica

- **Next.js (App Router) + TypeScript** — obrigatório (o site precisa ranquear no Google).
- **Tailwind CSS** para estilização.
- **next-themes** para dark/light mode com persistência.
- **next/image** para imagens otimizadas.
- Ícones: **lucide-react**.
- Componentes de UI: fique à vontade para usar **shadcn/ui** ou construir do zero — escolha o que deixar a manutenção mais simples.
- Fica a seu critério adicionar libs auxiliares (ex: fuse.js para busca fuzzy, clsx/tailwind-merge para classes), desde que justifique brevemente a escolha e mantenha o projeto enxuto.

## 4. Requisitos de design

- **Mobile-first e obrigatório**: a experiência no celular precisa ser impecável antes de tudo. Teste mentalmente cada componente em telas pequenas primeiro.
- Layout moderno, limpo e **intuitivo**, inspirado em marketplaces (Mercado Livre / Amazon), mas com identidade própria — não copie, apenas se inspire na usabilidade (header com busca, grid de produtos, filtros, categorias, cards).
- **Dark mode e light mode** com um toggle visível e acessível, respeitando a preferência do sistema por padrão.
- Boa hierarquia visual, espaçamento generoso, tipografia legível.
- Micro-interações discretas (hover, transições) sem exagero.
- Acessibilidade (a11y): contraste adequado, navegação por teclado, `alt` em imagens, labels em inputs.

## 5. Funcionalidades

### Navegação e descoberta
- **Home**: seções de categorias, produtos em destaque (`featured`) e/ou mais bem avaliados.
- **Busca completa**: campo de busca por nome e tags, com resultados rápidos e tolerância a erros de digitação, se possível.
- **Filtros** (o foco do site — devem ser completos e intuitivos):
  - Por categoria
  - Por faixa de preço
  - Por avaliação mínima (ex: 4★ ou mais)
  - (opcional) por badges como "Mais vendido", "Frete grátis"
- **Ordenação**: relevância, menor preço, maior preço, mais bem avaliado, mais avaliações.
- Filtros e ordenação devem funcionar bem juntos e ser fáceis de limpar/resetar.

### Card de produto
Cada card deve exibir:
- Imagem
- Título
- Nota em estrelas + contador de avaliações formatado (ex: `+5k avaliações`)
- Preço (e preço original riscado + % de desconto, quando houver)
- Badges (ex: "Mais vendido", "Frete grátis")
- Botão **"Ver mais detalhes"** → abre o link de afiliado em nova aba

## 6. Estrutura de dados (arquivo de constantes)

Toda a fonte de dados fica em um **arquivo separado, tipado, organizado por categoria**, para que adicionar/editar produtos seja tão simples quanto editar esse arquivo — **sem tocar em nenhum componente**.

Sugestão de estrutura (`/src/data/`), com tipos em TypeScript:

```ts
// src/data/types.ts
export type Category = {
  id: string;
  name: string;
  slug: string;
  icon?: string;        // nome do ícone lucide-react
  description?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;   // referência à Category
  image: string;        // URL ou caminho em /public
  images?: string[];    // opcional, galeria
  price: number;
  originalPrice?: number; // para mostrar desconto
  currency?: string;      // default "BRL"
  rating: number;         // 0 a 5
  reviewCount: number;    // ex: 5200 → exibir como "+5k avaliações"
  affiliateLink: string;  // link de parceria (destino do CTA)
  tags?: string[];        // usadas na busca/filtro
  badges?: string[];      // ex: "Mais vendido", "Frete grátis"
  description?: string;
  featured?: boolean;     // aparece na home
};
```

- Crie um **helper** para formatar `reviewCount` (ex: `5200 → "+5k"`, `1200000 → "+1M"`).
- Crie um **helper** para formatar preço em BRL (`R$ 1.299,90`).
- Deixe **dados de exemplo (mock)** já preenchidos e **imagens placeholder** para o site funcionar de ponta a ponta desde já. Os links e imagens reais serão fornecidos depois e substituídos direto no arquivo de dados.
- Documente no topo do arquivo, em comentário, **como adicionar um novo produto ou categoria**.

## 7. SEO (importante)

- Metadata por página (`title`, `description`) via Metadata API do Next.
- Open Graph e Twitter cards.
- HTML semântico.
- `next/image` com `alt` descritivo e dimensões corretas (bom Core Web Vitals).
- **JSON-LD structured data** para produtos (`Product` + `AggregateRating` usando `rating` e `reviewCount`).
- `sitemap.xml` e `robots.txt` gerados.
- URLs limpas por categoria/produto (ex: `/categoria/[slug]`).
- Performance: lazy-load onde fizer sentido, evitar JS desnecessário.

## 8. Arquitetura e manutenção

- Separação clara de responsabilidades: **dados** (`/data`), **componentes reutilizáveis** (`/components`), **utils/helpers** (`/lib`), **tipos** (`/types` ou junto dos dados).
- Componentes pequenos e reutilizáveis (Card, StarRating, PriceTag, Badge, FilterBar, SearchBar, ThemeToggle, etc.).
- Código legível, tipado e comentado onde a lógica não for óbvia.
- Adicionar um produto novo deve exigir **apenas** editar o arquivo de dados.

Sugestão de estrutura de pastas (ajuste se achar melhor):

```
src/
  app/
    layout.tsx
    page.tsx              # home
    categoria/[slug]/     # listagem por categoria
    busca/                # resultados de busca (se aplicável)
  components/
    product/              # Card, StarRating, PriceTag, Badge...
    layout/               # Header, Footer, ThemeToggle...
    filters/              # FilterBar, SortSelect, SearchBar...
    ui/                   # componentes base (botão, input...)
  data/
    types.ts
    categories.ts
    products.ts
  lib/
    format.ts             # helpers de preço/reviews
    filters.ts            # lógica de filtro/ordenação/busca
```

## 9. Entregáveis

1. Projeto Next.js funcional, rodando com `npm run dev`.
2. Dados mock + placeholders já preenchidos.
3. Dark/light mode funcionando.
4. Busca, filtros e ordenação completos.
5. README curto explicando: como rodar, como adicionar produtos/categorias, e onde trocar os links/imagens reais depois.

## 10. Observações finais

- Comece pela estrutura de dados e pelos componentes base, depois monte a home, filtros e busca.
- Priorize sempre a experiência mobile.
- Quando houver dúvida de design, escolha a opção mais simples e intuitiva para o usuário final.
- Os **links de afiliado e imagens reais serão fornecidos posteriormente** — deixe tudo pronto para essa substituição ser trivial.
