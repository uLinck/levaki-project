import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-ember text-ember-foreground hover:bg-ember/90",
  secondary: "bg-brand text-brand-foreground hover:bg-brand/90",
  ghost: "bg-transparent text-foreground border border-border hover:bg-foreground/5",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
