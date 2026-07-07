'use client'

import { type ReactNode } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react'
import { useRef } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** vertical travel distance in px */
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/** Fade + slide-up element that animates once when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
}: RevealProps) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Wraps a group of children that should reveal one after another on scroll. */
export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={
        prefersReduced
          ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
          : staggerChild
      }
    >
      {children}
    </motion.div>
  )
}

/** Subtle vertical parallax for images as the user scrolls. */
export function Parallax({
  children,
  className,
  strength = 40,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [strength, -strength],
  )

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          y,
          height: '120%',
          width: '100%',
          position: 'relative',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
