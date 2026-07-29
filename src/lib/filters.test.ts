import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProducts, sortProducts, searchProducts } from "./filters.ts";
import type { Product } from "../data/types.ts";

const mock: Product[] = [
  { id: "a", name: "Fone Bluetooth", slug: "a", categoryId: "eletronicos", image: "", price: 100, rating: 4.5, reviewCount: 10, affiliateLink: "#", tags: ["fone", "audio"] },
  { id: "b", name: "Panela de Ferro", slug: "b", categoryId: "casa", image: "", price: 50, rating: 4.9, reviewCount: 100, affiliateLink: "#", tags: ["cozinha"] },
  { id: "c", name: "Tapete de Yoga", slug: "c", categoryId: "fitness", image: "", price: 75, rating: 4.0, reviewCount: 50, affiliateLink: "#", tags: ["yoga"] },
];

test("filterProducts filtra por categoria e avaliação mínima", () => {
  assert.deepEqual(filterProducts(mock, { categoryId: "casa" }).map((p) => p.id), ["b"]);
  assert.deepEqual(filterProducts(mock, { minRating: 4.5 }).map((p) => p.id), ["a", "b"]);
});

test("sortProducts ordena por preço e avaliação", () => {
  assert.deepEqual(sortProducts(mock, "menor-preco").map((p) => p.id), ["b", "c", "a"]);
  assert.deepEqual(sortProducts(mock, "melhor-avaliado").map((p) => p.id), ["b", "a", "c"]);
});

test("searchProducts tolera erro de digitação", () => {
  assert.deepEqual(searchProducts(mock, "bluetoth").map((p) => p.id), ["a"]);
});
