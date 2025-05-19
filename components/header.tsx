"use client"

import Link from "next/link"
import { Bookmark } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/home" className="flex items-center gap-1">
          <Bookmark className="h-10 w-8" />
          <div className="text-4xl tracking-tighter font-bold text-primary">Keepr</div>
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Beta</span>
        </Link>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
