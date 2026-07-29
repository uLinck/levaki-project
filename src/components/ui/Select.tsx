import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

export function Select({ className, children, ...props }: ComponentPropsWithoutRef<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          "w-full appearance-none rounded-full border border-border bg-surface py-2 pl-4 pr-9 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
