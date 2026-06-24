'use client'

import { useState } from 'react'
import { DishImage } from '@/components/dish-image'
import { DishBadge } from '@/components/dish-badge'
import { MENU_ITEMS, MENU_CATEGORIES } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export default function AppMenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('tutti')

  const filtered =
    activeCategory === 'tutti'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <div className="pb-4">
      {/* Heading */}
      <div className="px-5 py-6">
        <h1 className="font-heading text-2xl font-bold">Il Nostro Menu</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Ingredienti selezionati, gusto autentico.
        </p>
      </div>

      {/* Category filter — sticky with blur */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'flex-shrink-0 rounded-full text-xs font-semibold py-1.5 px-3.5 transition-colors',
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface text-muted-foreground hover:text-foreground',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items list */}
      <ul>
        {filtered.map((item) => (
          <li key={item.id} className="flex gap-4 border-b border-border px-5 py-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <DishImage
                src={item.image}
                alt={item.name}
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
              <p className="truncate font-semibold">{item.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-bold text-primary">
                  {item.price}
                </span>
                {item.badge && <DishBadge badge={item.badge} />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
