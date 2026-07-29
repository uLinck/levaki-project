import { formatPrice, formatDiscountPercent } from "@/lib/format";

type PriceTagProps = {
  price: number;
  originalPrice?: number;
  currency?: string;
};

export function PriceTag({ price, originalPrice, currency = "BRL" }: PriceTagProps) {
  const hasDiscount = originalPrice !== undefined && originalPrice > price;

  return (
    <div className="flex flex-col gap-0.5">
      {hasDiscount && (
        <span className="font-mono text-xs text-muted line-through">
          {formatPrice(originalPrice, currency)}
        </span>
      )}
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-lg font-bold text-foreground">
          {formatPrice(price, currency)}
        </span>
        {hasDiscount && (
          <span className="rounded bg-ember/10 px-1.5 py-0.5 text-xs font-semibold text-ember">
            -{formatDiscountPercent(price, originalPrice)}%
          </span>
        )}
      </div>
    </div>
  );
}
