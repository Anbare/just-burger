import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parsePrice(price: string): number {
  const normalized = price.replace(/[^0-9.,]/g, '').replace(',', '.')
  return Number.parseFloat(normalized) || 0
}

export function formatPrice(value: number): string {
  return `€${value.toFixed(2).replace(/\.00$/, '')}`
}
