import type { Category } from "./types";

// Para adicionar uma categoria: inclua um novo objeto aqui com um "slug" único
// (usado na URL /categoria/[slug]) e um "icon" com o nome de um ícone de
// https://lucide.dev/icons — nenhum componente precisa ser tocado.
export const categories: Category[] = [
  {
    id: "eletronicos",
    name: "Eletrônicos",
    slug: "eletronicos",
    icon: "Smartphone",
    description: "Gadgets e eletrônicos para o dia a dia.",
  },
  {
    id: "casa",
    name: "Casa e Decoração",
    slug: "casa-e-decoracao",
    icon: "Home",
    description: "Itens para deixar sua casa mais confortável.",
  },
  {
    id: "beleza",
    name: "Beleza e Cuidados",
    slug: "beleza-e-cuidados",
    icon: "Sparkles",
    description: "Cuidados pessoais e produtos de beleza.",
  },
  {
    id: "fitness",
    name: "Esporte e Fitness",
    slug: "esporte-e-fitness",
    icon: "Dumbbell",
    description: "Equipamentos e acessórios para treinar.",
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    slug: "ferramentas",
    icon: "Wrench",
    description: "Ferramentas e equipamentos para casa e trabalho.",
  },
];
