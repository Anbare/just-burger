import { Award, Percent, Leaf } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Passaporto Digitale',
    desc: 'Traccia i pasti e guadagna punti',
  },
  {
    icon: Percent,
    title: 'Ordini Diretti -10%',
    desc: 'Commissione zero sul canale proprietario',
  },
  {
    icon: Leaf,
    title: 'Ingredienti Tracciati',
    desc: 'Dal campo al piatto, ogni passaggio',
  },
]

export default function AppProfiloPage() {
  return (
    <div className="px-5 py-8 space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-surface-raised">
          <span className="font-heading text-2xl font-bold text-primary">JB</span>
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold">Ospite</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Accedi per il tuo Passaporto Digitale
          </p>
        </div>
        <button className="w-full rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground active:scale-[0.97] transition-transform">
          Accedi / Registrati
        </button>
      </div>

      <section>
        <h2 className="font-heading text-base font-semibold mb-4">I tuoi vantaggi</h2>
        <div className="space-y-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
