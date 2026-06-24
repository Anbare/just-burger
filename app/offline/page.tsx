export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-6xl" role="img" aria-label="burger">🍔</span>
      <h1 className="font-heading text-2xl font-bold text-primary">
        Sei offline
      </h1>
      <p className="max-w-xs text-muted-foreground">
        Controlla la connessione. Nel frattempo, il burger ti aspetta.
      </p>
      <a
        href="/app"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground active:scale-[0.97] transition-transform"
      >
        Riprova
      </a>
    </div>
  )
}
