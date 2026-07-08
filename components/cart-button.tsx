'use client'

import { ShoppingCart } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

export function CartButton({ className }: { className?: string }) {
  const { totalItems, open } = useCart()

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Apri carrello${totalItems > 0 ? `, ${totalItems} articoli` : ''}`}
      className={cn(
        'relative grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:text-primary',
        className,
      )}
    >
      <ShoppingCart className="h-5 w-5" />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key={totalItems}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
          >
            {totalItems > 9 ? '9+' : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
