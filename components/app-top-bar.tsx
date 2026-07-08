'use client'

import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import { CartButton } from '@/components/cart-button'

export function AppTopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-surface/90 px-5 backdrop-blur-md">
      <CartButton />
      <Link href="/app" className="flex items-center gap-2">
        <Image
          src="/images/just-burger-logo.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
        <span className="font-heading text-lg font-bold text-primary">
          Just Burger
        </span>
      </Link>
      <Link
        href="/app/profilo"
        className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
        aria-label="Profilo"
      >
        <User className="h-5 w-5" />
      </Link>
    </header>
  )
}
