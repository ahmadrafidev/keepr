import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 bg-grid-pattern z-0 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <header className="container flex h-20 items-center justify-between px-4 md:px-8 relative z-10">
        <Link passHref href="/" className="flex flex-row items-center gap-1 font-bold">
            <Bookmark className="h-10 w-8" />
            <span className="text-4xl tracking-tighter">Keepr</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button size="lg">
            <Link href="/home" className="text-sm font-medium hover:underline">
              Get Started
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="flex-1 relative z-10">
        <section className="container flex flex-col items-center justify-center py-16 md:py-28">
          <div className="flex max-w-[50rem] flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
              Save what matters, find it when you need
            </h1>
            <p className="max-w-[38rem] text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
              A lightweight and intuitive platform to bookmark and manage your favorite content in one elegant space
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 shadow-md transition-all hover:shadow-lg">
                <Link href="/home" className="text-sm font-medium hover:underline">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-gray-200 px-8">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-gray-100 dark:border-gray-800 py-8 relative z-10">
        <div className="container flex flex-col items-center justify-center space-y-2 text-center text-sm text-gray-500">
          <p>
            Built with care by{" "}
            <Link href="https://x.com/rafiwiranaa" className="text-primary hover:underline" aria-label="Visit Rafi's Twitter">
              Rafi
            </Link>
          </p>
          <p>© {new Date().getFullYear()} Keepr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}