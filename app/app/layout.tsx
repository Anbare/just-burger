import { AppTopBar } from '@/components/app-top-bar'
import { AppBottomNav } from '@/components/app-bottom-nav'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <AppTopBar />
      <div className="flex-1 overflow-y-auto pt-16 pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
        {children}
      </div>
      <AppBottomNav />
    </div>
  )
}
