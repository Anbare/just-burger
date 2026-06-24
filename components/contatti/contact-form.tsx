'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/30'
  const labelClass =
    'mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Mario Rossi"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Indirizzo Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="mario@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Oggetto
          </label>
          <select id="subject" name="subject" className={fieldClass}>
            <option>Richiesta Generale</option>
            <option>Prenotazione Evento</option>
            <option>Feedback</option>
            <option>Collaborazioni</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Come possiamo aiutarti oggi?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={sent}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-default disabled:opacity-80"
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" />
              Messaggio Inviato
            </>
          ) : (
            <>
              Invia Messaggio
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        {sent && (
          <p className="text-center text-sm text-sage-foreground">
            Grazie! Ti risponderemo al più presto.
          </p>
        )}
      </div>
    </form>
  )
}
