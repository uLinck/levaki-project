import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Catalog, type CatalogSearchParams } from "@/components/catalog/Catalog";

export const metadata: Metadata = {
  title: "Busca",
  description: "Resultados de busca no catálogo do LevAki.",
};

type SearchPageProps = {
  searchParams: Promise<CatalogSearchParams>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-display text-2xl font-bold text-foreground">
        {params.q ? `Resultados para "${params.q}"` : "Buscar produtos"}
      </h1>
      <Catalog products={products} categories={categories} searchParams={params} />
    </div>
  );
}
