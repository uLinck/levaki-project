import type { Product } from "@/data/types";

// Product + AggregateRating (schema.org) — sem página de detalhe própria,
// então o Offer aponta direto para o link de afiliado.
export function ProductJsonLd({ product }: { product: Product }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description ?? product.name,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency ?? "BRL",
      price: product.price,
      url: product.affiliateLink,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
