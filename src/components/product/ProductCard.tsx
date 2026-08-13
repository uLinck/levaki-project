import type { Product } from "@/data/types";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";
import { ProductJsonLd } from "./ProductJsonLd";
import { ProductGallery } from "./ProductGallery";

export function ProductCard({ product }: { product: Product }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
      <ProductJsonLd product={product} />
      <div className="relative aspect-square overflow-hidden bg-background">
        <ProductGallery images={images} alt={product.name} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        )}
        <h3 className="line-clamp-2 min-h-10 text-sm font-medium text-foreground">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="mt-auto inline-flex items-center justify-center rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ember-foreground transition-colors hover:bg-ember/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver mais detalhes
        </a>
      </div>
    </article>
  );
}
