import type { Metadata } from 'next'
import { MenuBrowser } from '@/components/menu/menu-browser'

export const metadata: Metadata = {
  title: 'Menu — Just Burger',
  description:
    'Esplora la nostra selezione artigianale di burger premium, contorni, drink e dessert. Creati con passione, cotti alla perfezione.',
}

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-10 md:pt-36">
      <header className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-balance text-primary md:text-6xl">
          Il Nostro Menu
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Creati con passione, cotti alla perfezione. Esplora la nostra
          selezione artigianale di burger premium e contorni.
        </p>
      </header>

      <div className="mt-10">
        <MenuBrowser />
      </div>
    </div>
  )
}
