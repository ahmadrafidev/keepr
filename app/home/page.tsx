'use client'

import { SidebarProvider, useSidebar } from '@/components/ui/sidebar'
import CustomSidebar from '@/components/sidebar'
import { HomeContent } from '@/components/home/home-content'
import { DEFAULT_SIDEBAR_CONFIG } from '@/components/types/sidebar'
import { cn } from '@/lib/utils'

function HomeLayout() {
  const { state } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <div className={cn(
          "shrink-0 transition-all duration-300",
          state === "collapsed" ? "w-16" : "w-60"
        )}>
          <CustomSidebar sidebarConfig={DEFAULT_SIDEBAR_CONFIG} />
        </div>
        <main className={cn(
          "flex-1 p-8 transition-all duration-300",
          state === "collapsed" ? "ml-0" : "ml-0"
        )}>
          <HomeContent />
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <SidebarProvider>
      <HomeLayout />
    </SidebarProvider>
  )
}
