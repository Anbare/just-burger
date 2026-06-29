import type { Metadata } from 'next'
import { Leaf, MapPin, Phone } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion-primitives'
import { LOCATIONS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'I Nostri Locali — Just Burger',
  description:
    'Quattro indirizzi in Italia, un\'unica ossessione per la qualità. Trova il Just Burger più vicino a te: Napoli, Roma, Milano, Firenze.',
}

export default function RistorantiPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative flex min-h-[50svh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-24 text-center md:px-10">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-sage px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sage-foreground">
              4 Locali in Italia
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-balance text-primary md:text-6xl">
              I Nostri Locali
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-foreground/80 md:text-lg">
              Tre indirizzi, un&apos;unica ossessione per la qualità.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Location cards */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-10 md:py-28">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <StaggerItem key={loc.id}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="absolute right-5 top-5">
                    {loc.comingSoon ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/30">
                        Prossima Apertura
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sage text-sage-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                        <Leaf className="h-3 w-3" aria-hidden />
                        Aperto
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading text-xl font-semibold pr-20">
                    {loc.name}
                  </h2>

                  <div className="mt-5 space-y-3 text-sm text-foreground/90">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <span className="block">{loc.address}</span>
                        <span className="block text-muted-foreground">{loc.zip}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, '')}`}
                        className="transition-colors hover:text-primary"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border pt-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Orari
                    </p>
                    {loc.comingSoon ? (
                      <p className="text-sm text-muted-foreground italic">
                        Apertura prevista prossimamente
                      </p>
                    ) : (
                      <table className="w-full text-sm">
                        <tbody>
                          {loc.hours.map((h) => (
                            <tr key={h.days}>
                              <td className="py-0.5 text-foreground/80">{h.days}</td>
                              <td className="py-0.5 text-right text-muted-foreground">{h.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}
