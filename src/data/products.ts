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
    image: "/products/antena-starlink-2.png",
    images: [
      "/products/antena-starlink-2.png",
      "/products/antena-starlink-1.png",
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
  {
    id: "parafusadeira-zper-21v",
    name: "ZPER Parafusadeira Furadeira 21V A Bateria Elétrica Kit Maleta Estuche Organizador e 27 Acessórios",
    slug: "parafusadeira-zper-21v",
    categoryId: "ferramentas",
    image: "/products/parafusadeira-zper-21v-3.png",
    images: [
      "/products/parafusadeira-zper-21v-3.png",
      "/products/parafusadeira-zper-21v-1.png",
      "/products/parafusadeira-zper-21v-2.png",
    ],
    price: 160.55,
    originalPrice: 169.0,
    rating: 4.9,
    reviewCount: 1900,
    affiliateLink:
      "https://shopee.com.br/ZPER-Furadeira-Parafusadeira-A-Bateria-21V-Com-Duas-Bateria-Maleta-Kit-Ferramentas-Completo-i.1538458269.23294207241?extraParams=%7B%22display_model_id%22%3A229424697364%2C%22model_selection_logic%22%3A3%7D",
    tags: ["parafusadeira", "furadeira", "elétrica", "bateria", "ferramentas"],
    badges: ["+3 mil vendidos"],
    description:
      "O conjunto inclui: 1 furadeira elétrica recarregável de 21V, 2 baterias de 21V, 9 brocas e porta-brocas magnético, 10 brocas de chave de fenda, 6 brocas serrilhadas, 1 eixo flexível universal, 1 manual de instruções e 1 caixa plástica.",
    featured: true,
  },
];
