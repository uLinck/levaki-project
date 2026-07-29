import { Star } from "lucide-react";
import { formatReviewCount } from "@/lib/format";

type StarRatingProps = {
  rating: number;
  reviewCount: number;
};

export function StarRating({ rating, reviewCount }: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, rating));

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`Nota ${clamped.toFixed(1)} de 5, ${reviewCount} avaliações`}
    >
      <div className="relative flex" aria-hidden>
        <div className="flex text-border">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <div
          className="absolute inset-0 flex overflow-hidden text-gold"
          style={{ width: `${(clamped / 5) * 100}%` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
      </div>
      <span className="text-xs text-muted">
        <span className="font-mono font-medium text-foreground">{clamped.toFixed(1)}</span>{" "}
        ({formatReviewCount(reviewCount)} avaliações)
      </span>
    </div>
  );
}
