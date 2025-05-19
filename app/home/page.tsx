'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import CustomSidebar from '@/components/sidebar'
import { Header } from '@/components/header'
import { DEFAULT_SIDEBAR_CONFIG } from '@/components/types/sidebar'

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="w-60 shrink-0">
            <CustomSidebar sidebarConfig={DEFAULT_SIDEBAR_CONFIG} />
          </div>
          <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                Welcome to Keepr.
              </h1>
              <p className="mb-6 text-muted-foreground text-lg">
                This is your new digital shelf—where articles, ideas, tools, and notes stay safe, tidy, and always within reach.
              </p>
              <p className="mb-6 text-muted-foreground text-lg">
                Whether you&apos;re exploring something new or simply bookmarking things you love, Keepr is built to help you capture and come back—without the clutter.
              </p>
              <p className="mb-12 text-muted-foreground text-lg">
                Take a look around. Add a few links. Make it yours. You&apos;ll feel at home in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
