import Link from "next/link"

import { ArrowRight, Bookmark } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-blue-950 overflow-hidden">
      {/* background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float animation-delay-1000" />
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float animation-delay-2000" />
      </div>

      {/* Navigation */}
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
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-black border-0 rounded-lg px-3 lg:px-4 shadow-sm hover:shadow-md transition-all duration-300 focus-ring"
            >
              <Link href="/home" className="flex items-center gap-1.5">
                <span className="hidden sm:inline text-sm font-medium">Get Started</span>
                <span className="sm:hidden text-sm font-medium">Start</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full relative z-10">
        <section className="container px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8 lg:space-y-12">
            {/* Main heading */}
            <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
              <h1 className="text-responsive-xl font-bold tracking-tight leading-tight text-gray-900 dark:text-gray-100">
                Save what matters,
                <br />
                <span className="text-gray-700 dark:text-gray-300">
                  find it instantly
                </span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-responsive leading-relaxed text-gray-600 dark:text-gray-400">
                The most intuitive way to organize, bookmark, and rediscover your favorite content across the web
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 pt-4 lg:pt-8 animate-fade-in-up animation-delay-300">
              <Link href="/home">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-black border-0 rounded-full px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg font-semibold shadow-xl hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 dark:hover:ring-gray-500 dark:hover:ring-offset-gray-900 focus-ring flex items-center gap-3"
                >
                  Start Organizing
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/70 dark:bg-black/40 backdrop-blur-sm border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-black/60 hover:border-gray-400 dark:hover:border-gray-500 rounded-full px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg font-medium transition-all duration-300 hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 dark:hover:ring-gray-500 dark:hover:ring-offset-gray-900 shadow-lg hover:shadow-xl focus-ring"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full animate-fade-in-up animation-delay-700">
        <div className="container px-4 md:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col items-center space-y-3 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with care by{" "}
              <Link
                href="https://x.com/rafiwiranaa"
                className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 font-medium transition-colors focus-ring rounded"
                aria-label="Visit Rafi's Twitter"
              >
                Rafi
              </Link>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Keepr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
