import type { Product } from "./types";

// Para adicionar um produto: inclua um novo objeto aqui.
// - "categoryId" deve corresponder a um Category.id de categories.ts.
// - "affiliateLink" é o link de afiliado real do produto.
export const products: Product[] = [
  {
    id: "antena-starlink-standard-v4",
    name: "Antena Starlink Internet Via Satélite Standard V4",
    slug: "antena-starlink-standard-v4",
    categoryId: "eletronicos",
    image: "/products/antena-starlink-1.png",
    images: [
      "/products/antena-starlink-1.png",
      "/products/antena-starlink-2.png",
      "/products/antena-starlink-3.png",
    ],
    price: 1968.21,
    originalPrice: 2383.41,
    rating: 4.9,
    reviewCount: 1172,
    affiliateLink: "https://meli.la/2S51SM2",
    tags: ["antena", "starlink", "internet via satélite", "satélite"],
    badges: ["+5 mil vendidos"],
    description:
      "O que você precisa saber sobre este produto: Unidades por kit: 1. Formato de venda: Unidade. É uma antena de internet via satélite. É necessário contratar um plano mensal para usá-la. Verifique a disponibilidade na sua região pelo site da Starlink.",
    featured: true,
  },
];
