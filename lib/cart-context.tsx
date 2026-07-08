'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import type { MenuItem } from '@/lib/site-data'
import { parsePrice } from '@/lib/utils'

export type CartLine = {
  item: MenuItem
  quantity: number
}

type CartState = {
  lines: CartLine[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD'; item: MenuItem }
  | { type: 'REMOVE'; id: string }
  | { type: 'SET_QUANTITY'; id: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'HYDRATE'; lines: CartLine[] }

const STORAGE_KEY = 'just-burger-cart'

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.lines.find((l) => l.item.id === action.item.id)
      const lines = existing
        ? state.lines.map((l) =>
            l.item.id === action.item.id
              ? { ...l, quantity: l.quantity + 1 }
              : l,
          )
        : [...state.lines, { item: action.item, quantity: 1 }]
      return { ...state, lines }
    }
    case 'REMOVE':
      return { ...state, lines: state.lines.filter((l) => l.item.id !== action.id) }
    case 'SET_QUANTITY': {
      if (action.quantity <= 0) {
        return { ...state, lines: state.lines.filter((l) => l.item.id !== action.id) }
      }
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.item.id === action.id ? { ...l, quantity: action.quantity } : l,
        ),
      }
    }
    case 'CLEAR':
      return { ...state, lines: [] }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'HYDRATE':
      return { ...state, lines: action.lines }
    default:
      return state
  }
}

type CartContextValue = {
  lines: CartLine[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clear: () => void
  open: () => void
  close: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [], isOpen: false })
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        dispatch({ type: 'HYDRATE', lines: JSON.parse(raw) })
      }
    } catch {
      // localStorage non disponibile o dati corrotti: ignora
    } finally {
      setHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines))
  }, [state.lines, hydrated])

  const value = useMemo<CartContextValue>(() => {
    const totalItems = state.lines.reduce((sum, l) => sum + l.quantity, 0)
    const totalPrice = state.lines.reduce(
      (sum, l) => sum + parsePrice(l.item.price) * l.quantity,
      0,
    )
    return {
      lines: state.lines,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addItem: (item) => dispatch({ type: 'ADD', item }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      setQuantity: (id, quantity) => dispatch({ type: 'SET_QUANTITY', id, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
      open: () => dispatch({ type: 'OPEN' }),
      close: () => dispatch({ type: 'CLOSE' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve essere usato dentro un CartProvider')
  return ctx
}
