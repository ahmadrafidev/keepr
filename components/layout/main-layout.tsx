"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: ReactNode
  sidebar?: ReactNode
}

export function MainLayout({ children, sidebar }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {sidebar && (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-background">
          {sidebar}
        </aside>
      )}
      <main className={cn(
        "flex-1",
        sidebar && "ml-64"
      )}>
        {children}
      </main>
    </div>
  )
}