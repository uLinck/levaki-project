import { test } from "node:test";
import assert from "node:assert/strict";
import { formatPrice, formatDiscountPercent, formatReviewCount } from "./format.ts";

test("formatPrice formata em BRL", () => {
  assert.equal(formatPrice(1299.9), "R$ 1.299,90");
});

test("formatDiscountPercent arredonda a porcentagem de desconto", () => {
  assert.equal(formatDiscountPercent(80, 100), 20);
});

test("formatReviewCount abrevia mil e milhão, mantém números pequenos exatos", () => {
  assert.equal(formatReviewCount(850), "850");
  assert.equal(formatReviewCount(5200), "+5k");
  assert.equal(formatReviewCount(1_200_000), "+1M");
});
