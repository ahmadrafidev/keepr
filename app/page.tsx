import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-blue-950 overflow-hidden">
      {/* background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-yellow-400 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float animation-delay-1000" />
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-400 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <main className="w-full grid place-items-center relative z-10">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-32">
          <div className="text-center space-y-8 lg:space-y-12">
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
