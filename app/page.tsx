import Link from 'next/link'
import { ArrowRight, Beef, Flame, Leaf, Sparkles } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { MenuCard } from '@/components/menu-card'
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  Parallax,
} from '@/components/motion-primitives'
import { DishImage } from '@/components/dish-image'
import { BEST_SELLERS, STATS } from '@/lib/site-data'

const VALUES = [
  {
    icon: Beef,
    title: 'Carne Selezionata',
    text: 'Manzo allevato al pascolo, macinato fresco ogni giorno per un sapore profondo e autentico.',
  },
  {
    icon: Flame,
    title: 'Cottura Perfetta',
    text: 'Ogni burger è cotto alla griglia al punto esatto per esaltare succosità e crosta caramellata.',
  },
  {
    icon: Leaf,
    title: 'Ingredienti Locali',
    text: 'Pane sfornato in casa e verdure da fattorie locali entro 50 miglia dalle nostre cucine.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Best sellers */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
              I Nostri Più Venduti
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              I pesi massimi del nostro menu, amati da tutti.
            </p>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Vedi il menu completo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEST_SELLERS.map((item, i) => (
            <StaggerItem key={item.id}>
              <MenuCard item={item} priority={i === 0} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-10">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <StaggerItem key={stat.label}>
                <div
                  className={`flex flex-col items-center py-8 text-center ${
                    i % 2 === 0 ? 'border-r' : ''
                  } ${i < STATS.length - 1 ? 'md:border-r' : 'md:border-r-0'}`}
                >
                  <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Philosophy band with parallax image */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <Reveal>
            <Parallax
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border"
              strength={36}
            >
              <DishImage
                src="/images/La-nostra-filosofia.jpg"
                alt="La nostra filosofia"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-4 w-4" /> La Nostra Filosofia
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Nessuna scorciatoia, solo dedizione assoluta alla qualità.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Abbiamo capito che il vero lusso non è sempre l&apos;alta cucina;
                a volte è prendere un comfort food universalmente amato ed
                eseguirlo con precisione intransigente.
              </p>
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-4">
              {VALUES.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-10 md:py-28">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-10 md:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <DishImage
              src="/images/cta-bg.jpg"
              alt=""
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
              Pronto a vivere il morso perfetto?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Ordina online o trova il locale Just Burger più vicino a te.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Ordina Ora
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary/70 px-7 py-3.5 text-sm font-bold text-primary transition-colors duration-200 hover:bg-primary/10"
              >
                Scopri di Più
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
