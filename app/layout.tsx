import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Comfortaa, Montserrat } from 'next/font/google'
import { ConditionalChrome } from '@/components/conditional-chrome'
import './globals.css'

const comfortaa = Comfortaa({
  variable: '--font-comfortaa',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Just Burger — Burger Artigianali Premium',
  description:
    "Vivi l'esperienza definitiva del comfort food. Selezioniamo solo i migliori ingredienti locali per creare burger artigianali che meritano rispetto.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Just Burger',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#131313',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${comfortaa.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ConditionalChrome>{children}</ConditionalChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
