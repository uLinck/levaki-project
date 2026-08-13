"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Select } from "@/components/ui/Select";
import type { Category } from "@/data/types";

const ratingOptions = [4.5, 4, 3.5, 3];

type FilterBarProps = {
  categories: Category[];
  badgeOptions: string[];
  showCategoryFilter?: boolean;
};

export function FilterBar({ categories, badgeOptions, showCategoryFilter = true }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(params.size ? `${pathname}?${params.toString()}` : pathname);
  }

  const hasActiveFilters = ["categoria", "minRating", "badge"].some((key) =>
    searchParams.get(key)
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      {showCategoryFilter && (
        <Select
          aria-label="Categoria"
          value={searchParams.get("categoria") ?? ""}
          onChange={(event) => updateParam("categoria", event.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </Select>
      )}

      <Select
        aria-label="Avaliação mínima"
        value={searchParams.get("minRating") ?? ""}
        onChange={(event) => updateParam("minRating", event.target.value)}
      >
        <option value="">Qualquer avaliação</option>
        {ratingOptions.map((rating) => (
          <option key={rating} value={rating}>
            {rating}★ ou mais
          </option>
        ))}
      </Select>

      {badgeOptions.length > 0 && (
        <Select
          aria-label="Selo do produto"
          value={searchParams.get("badge") ?? ""}
          onChange={(event) => updateParam("badge", event.target.value)}
        >
          <option value="">Todos os produtos</option>
          {badgeOptions.map((badge) => (
            <option key={badge} value={badge}>
              {badge}
            </option>
          ))}
        </Select>
      )}

      {hasActiveFilters && (
        <button
          type="button"
          onClick={() => router.push(pathname)}
          className="text-xs font-medium text-muted underline-offset-2 hover:text-foreground hover:underline"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}
