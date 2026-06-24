'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-colors duration-300',
          scrolled || open
            ? 'bg-background/85 backdrop-blur-xl border-b border-border'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Just Burger — Home"
          >
            <Image
              src="/images/just-burger-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain md:h-10 md:w-10"
              priority
            />
            <span className="font-heading text-lg font-bold text-primary md:text-xl">
              Just Burger
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative text-sm font-semibold transition-colors hover:text-primary',
                      active ? 'text-primary' : 'text-foreground/90',
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/menu"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] md:inline-block"
            >
              Ordina Ora
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 pb-6 pt-2">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-base font-semibold transition-colors',
                          active
                            ? 'bg-secondary text-primary'
                            : 'text-foreground/90 hover:bg-secondary',
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="mt-2">
                  <Link
                    href="/menu"
                    className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
                  >
                    Ordina Ora
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
