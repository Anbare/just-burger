import { Flame, Leaf, Star } from 'lucide-react'
import type { Badge } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const ICONS = {
  sage: Leaf,
  spicy: Flame,
  neutral: Star,
} as const

export function DishBadge({
  badge,
  className,
}: {
  badge: Badge
  className?: string
}) {
  const Icon = ICONS[badge.variant]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md',
        badge.variant === 'sage' && 'bg-sage text-sage-foreground',
        badge.variant === 'spicy' && 'bg-destructive/90 text-destructive-foreground',
        badge.variant === 'neutral' && 'bg-background/70 text-foreground/90 border border-border',
        className,
      )}
    >
      <Icon className="h-3 w-3" aria-hidden />
      {badge.label}
    </span>
  )
}
