import type { Metadata } from 'next'
import { Clock, MapPin, Store } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'
import { ContactForm } from '@/components/contatti/contact-form'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { CONTACT_INFO } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contatti — Just Burger',
  description:
    'Hai una domanda sui nostri ingredienti artigianali, vuoi prenotare per un grande evento o semplicemente salutarci? Scrivici un messaggio.',
}

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-10 md:pt-36">
      <Reveal className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl">
          Contattaci
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Hai una domanda sui nostri ingredienti artigianali, vuoi prenotare per
          un grande evento o semplicemente salutarci? Scrivici un messaggio.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Info column */}
        <Reveal className="flex flex-col gap-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Mappa Just Burger"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.228%2C40.832%2C14.280%2C40.875&layer=mapnik&marker=40.8518%2C14.2681"
              className="h-full w-full grayscale"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-background/85 px-3 py-2 text-sm font-semibold backdrop-blur-md">
              <MapPin className="h-4 w-4 text-primary" />
              Via Toledo, Napoli
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <Store className="h-4 w-4" /> Vieni a Trovarci
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-foreground/90">
                {CONTACT_INFO.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <Clock className="h-4 w-4" /> Orari di Apertura
              </h2>
              <ul className="mt-3 space-y-2">
                {CONTACT_INFO.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between text-sm text-foreground/90"
                  >
                    <span>{h.days}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
                Seguici
              </h2>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
