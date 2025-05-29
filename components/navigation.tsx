import Link from "next/link"
import { ArrowRight, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <header className="w-full sticky top-0 z-50 animate-slide-in-left">
      <div className="container flex h-16 lg:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group focus-ring rounded-lg p-1">
          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gray-900 dark:bg-gray-100 rounded-md flex items-center justify-center group-hover:bg-gray-800 dark:group-hover:bg-gray-200 transition-colors duration-300">
            <Bookmark className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white dark:text-black" />
          </div>
          <span className="text-lg md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            Keepr
          </span>
        </Link>
        
        <div className="flex items-center gap-3 lg:gap-4 animate-slide-in-right">
          <ThemeToggle />
          <Link href="/home">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-black border-0 rounded-lg px-3 lg:px-4 shadow-sm hover:shadow-md transition-all duration-300 focus-ring flex items-center gap-1.5"
            >
              <span className="hidden sm:inline text-sm font-medium">Get Started</span>
              <span className="sm:hidden text-sm font-medium">Start</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 