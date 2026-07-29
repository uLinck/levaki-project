"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Select } from "@/components/ui/Select";
import type { SortOption } from "@/lib/filters";

const options: { value: SortOption; label: string }[] = [
  { value: "relevancia", label: "Relevância" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "melhor-avaliado", label: "Mais bem avaliado" },
  { value: "mais-avaliacoes", label: "Mais avaliações" },
];

export function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "relevancia") params.delete("ordenar");
    else params.set("ordenar", value);
    router.push(params.size ? `${pathname}?${params.toString()}` : pathname);
  }

  return (
    <Select
      aria-label="Ordenar por"
      value={searchParams.get("ordenar") ?? "relevancia"}
      onChange={(event) => handleChange(event.target.value)}
      className="w-auto"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
