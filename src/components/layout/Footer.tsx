export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
        <p className="max-w-2xl">
          O LevAki pode receber comissão pelas compras realizadas através dos links exibidos
          neste site, sem custo adicional para você.
        </p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} LevAki. Todos os produtos são vendidos e entregues pelos
          parceiros.
        </p>
      </div>
    </footer>
  );
}
