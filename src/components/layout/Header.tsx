import Link from "next/link";
import { Smartphone, Home, Sparkles, Dumbbell, Wrench, Tag, type LucideIcon } from "lucide-react";
import { categories } from "@/data/categories";
import { SearchBar } from "@/components/filters/SearchBar";
import { ThemeToggle } from "./ThemeToggle";

const iconMap: Record<string, LucideIcon> = { Smartphone, Home, Sparkles, Dumbbell, Wrench };

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="font-display text-xl font-bold text-brand">
            Lev<span className="text-ember">Aki</span>
          </Link>
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>
      <nav aria-label="Categorias" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
          {categories.map((category) => {
            const Icon = iconMap[category.icon ?? ""] ?? Tag;
            return (
              <Link
                key={category.id}
                href={`/categoria/${category.slug}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="size-3.5" aria-hidden />
                {category.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
