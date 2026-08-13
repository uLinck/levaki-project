import { Ticket } from "lucide-react";
import type { Product } from "@/data/types";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";
import { ProductJsonLd } from "./ProductJsonLd";
import { ProductGallery } from "./ProductGallery";

export function ProductCard({ product }: { product: Product }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [stickerLabel, ...extraBadges] = product.badges ?? [];

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <ProductJsonLd product={product} />
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-background">
        <ProductGallery images={images} alt={product.name} />
        {stickerLabel && (
          <span className="pointer-events-none absolute left-3 top-3 z-20 -rotate-3 rounded-sm bg-ember px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ember-foreground shadow-md transition-transform duration-300 group-hover:-rotate-6">
            {stickerLabel}
            <span className="absolute -bottom-1 left-0 size-0 border-x-4 border-t-4 border-x-transparent border-t-black/20" />
          </span>
        )}
      </div>

      <div
        aria-hidden
        className="relative border-t border-dashed border-border/70"
      >
        <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-background" />
        <span className="absolute -right-1.5 -top-1.5 size-3 rounded-full bg-background" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        {extraBadges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {extraBadges.map((badge) => (
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
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-ember px-4 py-2.5 text-sm font-semibold text-ember-foreground shadow-sm transition-colors hover:bg-ember/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Ticket className="size-4" aria-hidden />
          Ver oferta
        </a>
      </div>
    </article>
  );
}
