import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/just-burger-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 object-contain"
          />
          <span className="font-heading text-lg font-bold text-primary">
            Just Burger
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/80">
          <Link href="/ristoranti" className="transition-colors hover:text-primary">
            Ristoranti
          </Link>
          <Link href="/contatti" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <MapPin className="h-4 w-4" /> Sedi
          </Link>
          <Link href="/contatti" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <Clock className="h-4 w-4" /> Orari di Apertura
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <InstagramIcon className="h-4 w-4" /> Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <FacebookIcon className="h-4 w-4" /> Facebook
          </a>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground md:px-10">
          © {new Date().getFullYear()} Just Burger. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
