'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice, parsePrice } from '@/lib/utils'

export function CartDrawer() {
  const { lines, isOpen, totalPrice, close, setQuantity, removeItem, clear } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  function handleConfirm() {
    setConfirmed(true)
    setTimeout(() => {
      clear()
      setConfirmed(false)
      close()
    }, 1800)
  }

  function handleClose() {
    close()
    if (confirmed) setConfirmed(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Carrello"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed inset-x-0 bottom-0 z-[70] flex max-h-[85vh] flex-col rounded-t-2xl border-t border-border bg-background md:inset-y-0 md:right-0 md:left-auto md:h-full md:max-h-none md:w-full md:max-w-md md:rounded-none md:rounded-l-2xl md:border-l md:border-t-0"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Il Tuo Ordine
              </h2>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Chiudi carrello"
                className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {confirmed ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <p className="font-heading text-xl font-bold text-foreground">
                  Ordine confermato!
                </p>
                <p className="text-sm text-muted-foreground">
                  Grazie, il tuo ordine è stato ricevuto.
                </p>
              </div>
            ) : lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Il tuo carrello è vuoto. Aggiungi qualcosa dal menu!
                </p>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-5 py-4">
                  {lines.map(({ item, quantity }) => (
                    <li
                      key={item.id}
                      className="flex gap-3 border-b border-border py-4 first:pt-0 last:border-b-0"
                    >
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-surface">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {item.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Rimuovi ${item.name}`}
                            className="text-muted-foreground transition-colors hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setQuantity(item.id, quantity - 1)}
                              aria-label="Diminuisci quantità"
                              className="grid h-6 w-6 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-4 text-center text-sm font-semibold">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(item.id, quantity + 1)}
                              aria-label="Aumenta quantità"
                              className="grid h-6 w-6 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-heading text-sm font-bold text-primary">
                            {formatPrice(parsePrice(item.price) * quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border px-5 py-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Totale
                    </span>
                    <span className="font-heading text-xl font-bold text-foreground">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Conferma Ordine
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
