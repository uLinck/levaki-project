export type Category = {
  id: string;
  name: string;
  slug: string;
  icon?: string; // nome do ícone lucide-react (ex: "Smartphone")
  description?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string; // referência a Category.id
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number; // presente => exibe riscado + % de desconto
  currency?: string; // default "BRL"
  rating: number; // 0 a 5
  reviewCount: number; // ex: 5200 → formatado como "+5k avaliações"
  affiliateLink: string;
  tags?: string[]; // usadas na busca/filtro
  badges?: string[]; // ex: "Mais vendido", "Frete grátis"
  description?: string;
  featured?: boolean; // aparece em destaque na home
};
