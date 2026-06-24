'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function ConditionalChrome({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isApp = pathname.startsWith('/app')

  return (
    <>
      {!isApp && <Navbar />}
      <main>{children}</main>
      {!isApp && <Footer />}
    </>
  )
}
