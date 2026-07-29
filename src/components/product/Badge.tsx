import { cn } from "@/lib/cn";

const badgeStyles: Record<string, string> = {
  "Mais vendido": "bg-ember/15 text-ember",
  "Frete grátis": "bg-brand/15 text-brand",
};

export function Badge({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[11px] font-medium",
        badgeStyles[label] ?? "bg-foreground/10 text-foreground"
      )}
    >
      {label}
    </span>
  );
}
