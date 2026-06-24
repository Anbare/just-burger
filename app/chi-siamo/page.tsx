import type { Metadata } from 'next'
import { ChefHat, Clock, Leaf, Sprout, Wheat } from 'lucide-react'
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  Parallax,
} from '@/components/motion-primitives'
import { DishImage } from '@/components/dish-image'
import { DishBadge } from '@/components/dish-badge'

export const metadata: Metadata = {
  title: 'Chi Siamo — Just Burger',
  description:
    'Siamo partiti con una semplice ossessione: elevare l\'umile hamburger in un\'esperienza culinaria premium. Nessuna scorciatoia, solo dedizione alla qualità.',
}

const SOURCING = [
  {
    icon: Sprout,
    title: '100% Allevati al Pascolo',
    text: 'Provenienti direttamente da pascoli storici, garantendo un profilo aromatico più ricco e profondo che la carne di manzo finita a cereali non può eguagliare.',
  },
  {
    icon: Wheat,
    title: 'Pane Sfornato Ogni Giorno',
    text: 'I nostri caratteristici panini ibridi brioche-patate vengono sfornati in casa ogni mattina per garantire la perfetta integrità strutturale.',
  },
  {
    icon: Leaf,
    title: 'Prodotti Locali',
    text: 'Reperiamo la nostra lattuga croccante, i pomodori antichi e le cipolle da fattorie biologiche entro un raggio di 50 miglia dalle nostre cucine.',
    badge: true,
  },
]

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <DishImage
            src="/images/kitchen-fire.jpg"
            alt="La nostra cucina con la griglia a fuoco vivo"
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-24 text-center md:px-10">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-sage px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sage-foreground">
              Est. 2019
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-balance text-primary md:text-6xl">
              L&apos;Arte del Morso Perfetto
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-foreground/80 md:text-lg">
              Siamo partiti con una semplice ossessione: elevare l&apos;umile
              hamburger in un&apos;esperienza culinaria premium. Nessuna
              scorciatoia, solo dedizione assoluta alla qualità.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <Parallax
              className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-border"
              strength={34}
            >
              <DishImage
                src="/images/chefs-portrait.jpg"
                alt="I fondatori di Just Burger in cucina"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Dove Tutto Ha Avuto Inizio
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Non si trattava di aprire un altro ristorante. Nel 2019, Just
                Burger è nato da innumerevoli notti passate a sperimentare
                diverse macinature, livelli di idratazione dei panini e a
                trovare il punto di fusione esatto dei formaggi artigianali.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Abbiamo capito che il vero lusso non è sempre l&apos;alta cucina;
                a volte, è prendere un comfort food universalmente amato ed
                eseguirlo con assoluta e intransigente precisione.
              </p>
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <ChefHat className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    Processo Artigianale
                  </h3>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    Tempi Perfetti
                  </h3>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-10 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-primary md:text-5xl">
              La Nostra Materia Prima
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Un hamburger è buono quanto la sua base. Collaboriamo
              esclusivamente con fattorie locali che condividono il nostro
              impegno per l&apos;allevamento etico e le pratiche sostenibili.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {SOURCING.map((s) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  {s.badge && (
                    <div className="absolute right-5 top-5">
                      <DishBadge badge={{ label: 'Sostenibile', variant: 'sage' }} />
                    </div>
                  )}
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}
