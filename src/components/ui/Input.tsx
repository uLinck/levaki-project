import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "w-full rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className
      )}
      {...props}
    />
  );
}
