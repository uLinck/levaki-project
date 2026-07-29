"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const query = value.trim();
    router.push(query ? `/busca?q=${encodeURIComponent(query)}` : "/busca");
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="relative w-full">
      <Search
        aria-hidden
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Buscar produtos..."
        aria-label="Buscar produtos"
        className="pl-10"
      />
    </form>
  );
}
