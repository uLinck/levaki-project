import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Catalog, type CatalogSearchParams } from "@/components/catalog/Catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<CatalogSearchParams>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description ?? `Produtos de ${category.name} no LevAki.`,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((product) => product.categoryId === category.id);
  const resolvedSearchParams = await searchParams;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">{category.name}</h1>
        {category.description && (
          <p className="mt-1 text-sm text-muted">{category.description}</p>
        )}
      </div>
      <Catalog
        products={categoryProducts}
        categories={categories}
        searchParams={resolvedSearchParams}
        categoryId={category.id}
      />
    </div>
  );
}
