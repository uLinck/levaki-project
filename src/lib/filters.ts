import Fuse from "fuse.js";
import type { Product } from "@/data/types";

export type SortOption =
  | "relevancia"
  | "menor-preco"
  | "maior-preco"
  | "melhor-avaliado"
  | "mais-avaliacoes";

export type ProductFilters = {
  categoryId?: string;
  minRating?: number;
  minPrice?: number;
  maxPrice?: number;
  badge?: string;
  query?: string;
};

const fuseOptions = {
  keys: ["name", "tags"],
  threshold: 0.35,
  ignoreLocation: true,
};

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  const fuse = new Fuse(products, fuseOptions);
  return fuse.search(query).map((result) => result.item);
}

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  return products.filter((product) => {
    if (filters.categoryId && product.categoryId !== filters.categoryId) return false;
    if (filters.minRating !== undefined && product.rating < filters.minRating) return false;
    if (filters.minPrice !== undefined && product.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) return false;
    if (filters.badge && !(product.badges ?? []).includes(filters.badge)) return false;
    return true;
  });
}

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "menor-preco":
      return sorted.sort((a, b) => a.price - b.price);
    case "maior-preco":
      return sorted.sort((a, b) => b.price - a.price);
    case "melhor-avaliado":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "mais-avaliacoes":
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    case "relevancia":
    default:
      return sorted;
  }
}

// Engine compartilhada: busca (se houver query) -> filtros -> ordenação.
export function applyCatalog(
  products: Product[],
  filters: ProductFilters,
  sort: SortOption
): Product[] {
  const searched = filters.query ? searchProducts(products, filters.query) : products;
  const filtered = filterProducts(searched, filters);
  return sortProducts(filtered, sort);
}
