import { Ticket } from "lucide-react";

const marqueeItems = [
  "Avaliação real dos compradores",
  "Direto pro link oficial da loja",
  "Sem cadastro, sem enrolação",
  "Garimpo atualizado toda semana",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-brand/10 via-transparent to-transparent px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-10">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-brand">
        <Ticket className="size-3.5" aria-hidden />
        Curadoria LevAki
      </span>

      <h1 className="mt-3 max-w-xl text-balance font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
        A gente <span className="text-brand">acha</span>.
        <br />
        Você <span className="text-ember">leva</span>.
      </h1>

      <p className="mt-3 max-w-md text-base text-muted sm:text-lg">
        Sem comparar preço, sem perder tempo: a oferta de verdade está sempre no link do
        parceiro. Você só clica.
      </p>

      <div className="mt-6 overflow-hidden border-y border-dashed border-border/70 py-2.5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-8 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap px-2 text-xs font-semibold uppercase tracking-wide text-muted"
            >
              <span className="size-1 rounded-full bg-gold" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
