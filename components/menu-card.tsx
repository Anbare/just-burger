'use client'

import { useState } from 'react'
import { Check, ShoppingCart } from 'lucide-react'
import { motion } from 'motion/react'
import type { MenuItem } from '@/lib/site-data'
import { DishImage } from '@/components/dish-image'
import { DishBadge } from '@/components/dish-badge'
import { useCart } from '@/lib/cart-context'

export function MenuCard({
  item,
  priority,
}: {
  item: MenuItem
  priority?: boolean
}) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <DishImage
          src={item.image}
          alt={item.name}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {item.badge && (
          <div className="absolute left-3 top-3">
            <DishBadge badge={item.badge} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {item.name}
          </h3>
          <span className="font-heading text-lg font-bold text-primary">
            {item.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/60 px-4 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98] disabled:pointer-events-none"
          disabled={added}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              Aggiunto
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Aggiungi all&apos;Ordine
            </>
          )}
        </button>
      </div>
    </motion.article>
  )
}
