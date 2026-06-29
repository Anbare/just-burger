'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'

const LINE_ONE = ['Burger', 'Artigianali,']
const LINE_TWO = ['Creati', 'con', 'Passione.']

export function Hero() {
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.45 },
    },
  }
  const word = {
    hidden: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, y: '110%', rotate: 2 },
    show: {
      opacity: 1,
      y: '0%',
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background video (loop). Drop your file at /videos/hero.mp4 to replace. */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920&query=premium%20artisanal%20cheeseburger%20dark%20moody"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md"
        >
          Qualità Artigianale Premium
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mb-5 font-heading text-sm italic tracking-[0.15em] text-primary"
        >
          Il Gusto Non Mente
        </motion.p>

        <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="block"
          >
            <span className="block overflow-hidden">
              {LINE_ONE.map((w) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <motion.span variants={word} className="inline-block text-foreground">
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block">
              {LINE_TWO.map((w) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <motion.span
                    variants={word}
                    className="inline-block italic text-primary pr-[0.12em]"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: 'easeOut' }}
          className="mt-6 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          Vivi l&apos;esperienza definitiva del comfort food. Selezioniamo solo i
          migliori ingredienti locali per creare burger che meritano rispetto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: 'easeOut' }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Vedi il Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/70 px-7 py-3.5 text-sm font-bold text-primary transition-colors duration-200 hover:bg-primary/10"
          >
            <MapPin className="h-4 w-4" />
            Trova un Locale
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Scorri
          </span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
