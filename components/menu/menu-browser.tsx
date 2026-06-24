'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Flame } from 'lucide-react'
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/site-data'
import { MenuCard } from '@/components/menu-card'
import { cn } from '@/lib/utils'

const CATEGORY_LABELS: Record<string, string> = {
  burger: 'Burger',
  contorni: 'Contorni',
  drink: 'Drink',
  dessert: 'Dessert',
}

export function MenuBrowser() {
  const [active, setActive] = useState<string>('tutti')

  const chefPicks = useMemo(
    () => MENU_ITEMS.filter((i) => i.chef),
    [],
  )

  const grouped = useMemo(() => {
    const items =
      active === 'tutti'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((i) => i.category === active)

    const order = ['burger', 'contorni', 'drink', 'dessert']
    return order
      .map((cat) => ({
        cat,
        label: CATEGORY_LABELS[cat],
        items: items.filter((i) => i.category === cat),
      }))
      .filter((g) => g.items.length > 0)
  }, [active])

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Categorie menu">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = active === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.id)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200',
                isActive
                  ? 'border-primary bg-primary/12 text-primary'
                  : 'border-border text-foreground/80 hover:border-primary/50 hover:text-primary',
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Chef picks (only on "Tutti") */}
      <AnimatePresence initial={false}>
        {active === 'tutti' && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 overflow-hidden"
          >
            <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold md:text-3xl">
              <Flame className="h-6 w-6 text-primary" />I Consigli dello Chef
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {chefPicks.map((item, i) => (
                <MenuCard key={item.id} item={item} priority={i === 0} />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Grouped categories */}
      <div className="mt-14 space-y-16">
        {grouped.map((group) => (
          <motion.section
            key={group.cat}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="border-b border-border pb-3 font-heading text-2xl font-semibold md:text-3xl">
              {group.label}
            </h2>
            <motion.div
              layout
              className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </>
  )
}
