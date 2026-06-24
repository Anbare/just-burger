'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, UtensilsCrossed, MapPin, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = [
  { href: '/app',            label: 'Home',   icon: Home            },
  { href: '/app/menu',       label: 'Menu',   icon: UtensilsCrossed },
  { href: '/app/ristoranti', label: 'Locali', icon: MapPin          },
  { href: '/app/profilo',    label: 'Profilo', icon: User           },
] as const

export function AppBottomNav() {
  const pathname = usePathname()
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="flex h-[4.5rem] items-center justify-around">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active =
            href === '/app' ? pathname === '/app' : pathname.startsWith(href)
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <Icon
                  className={cn('h-5 w-5', active && 'stroke-[2.5]')}
                  aria-hidden
                />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
