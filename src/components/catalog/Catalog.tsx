import type { Product, Category } from "@/data/types";
import { applyCatalog, type ProductFilters, type SortOption } from "@/lib/filters";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterBar } from "@/components/filters/FilterBar";
import { SortSelect } from "@/components/filters/SortSelect";

export type CatalogSearchParams = {
  categoria?: string;
  minRating?: string;
  maxPrice?: string;
  badge?: string;
  ordenar?: string;
  q?: string;
};

type CatalogProps = {
  products: Product[];
  categories: Category[];
  searchParams: CatalogSearchParams;
  // Quando definido, trava a categoria (usado em /categoria/[slug]) e esconde o seletor.
  categoryId?: string;
};

const sortOptions: SortOption[] = [
  "relevancia",
  "menor-preco",
  "maior-preco",
  "melhor-avaliado",
  "mais-avaliacoes",
];

export function Catalog({ products, categories, searchParams, categoryId }: CatalogProps) {
  const resolvedCategoryId =
    categoryId ?? categories.find((category) => category.slug === searchParams.categoria)?.id;

  const filters: ProductFilters = {
    categoryId: resolvedCategoryId,
    minRating: searchParams.minRating ? Number(searchParams.minRating) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    badge: searchParams.badge,
    query: searchParams.q,
  };

  const sort = sortOptions.includes(searchParams.ordenar as SortOption)
    ? (searchParams.ordenar as SortOption)
    : "relevancia";

  const results = applyCatalog(products, filters, sort);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FilterBar categories={categories} showCategoryFilter={!categoryId} />
        <SortSelect />
      </div>

      {results.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
          Nenhum produto encontrado com esses filtros.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
