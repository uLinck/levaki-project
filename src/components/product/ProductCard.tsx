import Image from "next/image";
import type { Product } from "@/data/types";
import { formatDiscountPercent } from "@/lib/format";
import { StarRating } from "./StarRating";
import { PriceTag } from "./PriceTag";
import { Badge } from "./Badge";
import { ProductJsonLd } from "./ProductJsonLd";

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.originalPrice !== undefined && product.originalPrice > product.price;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
      <ProductJsonLd product={product} />
      <div className="relative aspect-square overflow-hidden bg-background">
        {hasDiscount && (
          <span className="absolute left-0 top-3 z-10 bg-ember px-3 py-1 text-xs font-bold text-ember-foreground shadow-sm [clip-path:polygon(0_0,100%_0,85%_50%,100%_100%,0_100%)]">
            -{formatDiscountPercent(product.price, product.originalPrice as number)}%
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
        <PriceTag
          price={product.price}
          originalPrice={product.originalPrice}
          currency={product.currency}
        />
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
