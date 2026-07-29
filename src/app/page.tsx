import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Catalog, type CatalogSearchParams } from "@/components/catalog/Catalog";
import { ProductCard } from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: "LevAki — Achados com os melhores preços",
  description:
    "Descubra produtos em destaque e o catálogo completo do LevAki, com os melhores preços e avaliações.",
};

type HomeProps = {
  searchParams: Promise<CatalogSearchParams>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const featured = products.filter((product) => product.featured);

  return (
    <div className="flex flex-col gap-10">
      {featured.length > 0 && (
        <section aria-labelledby="destaques-heading" className="flex flex-col gap-3">
          <h2 id="destaques-heading" className="font-display text-lg font-bold text-foreground">
            Em destaque
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="catalogo-heading" className="flex flex-col gap-3">
        <h2 id="catalogo-heading" className="font-display text-lg font-bold text-foreground">
          Todos os produtos
        </h2>
        <Catalog products={products} categories={categories} searchParams={params} />
      </section>
    </div>
  );
}
