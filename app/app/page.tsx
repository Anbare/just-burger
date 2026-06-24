import Link from 'next/link'
import { ArrowRight, Percent } from 'lucide-react'
import { DishImage } from '@/components/dish-image'
import { DishBadge } from '@/components/dish-badge'
import { BEST_SELLERS, MENU_ITEMS } from '@/lib/site-data'

const FEATURED = BEST_SELLERS[0]

const CAROUSEL_ITEMS = [
  ...BEST_SELLERS,
  ...MENU_ITEMS.filter(
    (i) => !BEST_SELLERS.find((b) => b.id === i.id),
  ).slice(0, 3),
]

export default function AppHomePage() {
  return (
    <div className="space-y-8 px-5 py-6">

      {/* 1. Hero card prodotto in evidenza */}
      <section>
        <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border">
          <DishImage
            src={FEATURED.image}
            alt={FEATURED.name}
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            {FEATURED.badge && <DishBadge badge={FEATURED.badge} className="mb-3" />}
            <h2 className="font-heading text-2xl font-bold text-white">
              {FEATURED.name}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-white/75">
              {FEATURED.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-heading text-xl font-bold text-primary">
                {FEATURED.price}
              </span>
              <Link
                href="/app/menu"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground active:scale-[0.97]"
              >
                Ordina Ora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Carousel "I Più Amati" */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold">I Più Amati</h3>
          <Link
            href="/app/menu"
            className="flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Vedi tutti <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CAROUSEL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="w-[160px] flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-square">
                <DishImage
                  src={item.image}
                  alt={item.name}
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-semibold">{item.name}</p>
                <p className="mt-1 font-heading text-sm font-bold text-primary">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Banner promo canale diretto */}
      <section>
        <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/[0.08] p-5">
          <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
            <Percent className="h-6 w-6" />
          </div>
          <div>
            <p className="font-heading font-semibold text-foreground">
              Ordina Diretto, Risparmia il 10%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Niente commissioni. Solo qualità.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
