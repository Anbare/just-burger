'use client'

import { useState } from 'react'
import Image from 'next/image'

type DishImageProps = {
  src: string
  alt: string
  /** width/height used to build the fallback placeholder */
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
}

/**
 * Renders a dish photo from the given local path. While the real photo is not
 * present (file missing → load error) it falls back to a labeled placeholder,
 * so images stay easy to swap: just drop your file at the `src` path.
 */
export function DishImage({
  src,
  alt,
  width = 800,
  height = 800,
  className,
  sizes = '(max-width: 768px) 100vw, 33vw',
  priority,
}: DishImageProps) {
  const placeholder = `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(
    alt,
  )}`
  const [current, setCurrent] = useState(src)

  return (
    <Image
      src={current || placeholder}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => {
        if (current !== placeholder) setCurrent(placeholder)
      }}
    />
  )
}
