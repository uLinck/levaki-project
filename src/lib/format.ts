export function formatPrice(value: number, currency = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(value);
}

export function formatDiscountPercent(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// 850 -> "850" | 5200 -> "+5k" | 1200000 -> "+1M"
export function formatReviewCount(count: number): string {
  if (count >= 1_000_000) return `+${Math.floor(count / 1_000_000)}M`;
  if (count >= 1_000) return `+${Math.floor(count / 1_000)}k`;
  return `${count}`;
}
