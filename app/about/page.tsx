import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center relative bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-300">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 opacity-20 blur-[120px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-blue-300 to-purple-300 opacity-20 blur-[90px]" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-[120px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 opacity-20 blur-[90px]" />
            </div>
          </div>
        </div>
      </div>

      <header className="container flex h-20 items-center justify-between px-4 md:px-8 relative z-10">
        <Link passHref href="/" className="flex flex-row items-center gap-1 font-bold">
            <Bookmark className="h-10 w-8 text-gray-900 dark:text-white" />
            <span className="text-4xl tracking-tighter text-gray-900 dark:text-white">Keepr</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button size="lg" variant="outline" className="border-gray-200 bg-white/50 text-gray-900 hover:bg-gray-100 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
            <Link href="/" className="text-sm font-medium">
              Get Started
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section className="container py-8 md:py-16 space-y-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-white/80">
              About Keepr
            </h1>
            <p className="max-w-[42rem] leading-normal text-gray-600 dark:text-gray-400 sm:text-xl sm:leading-8">
              Keepr is a simple yet powerful bookmarking tool that helps you save and organize your favorite blogs, 
              products, and articles with ease. Designed for minimalism and efficiency, Keepr ensures that you never 
              lose track of content that matters to you.
            </p>
            <p className="max-w-[42rem] leading-normal text-gray-600 dark:text-gray-400 sm:text-xl sm:leading-8">
              Whether you are researching, shopping, or just curating inspiring content, Keepr provides a seamless experience 
              to store, retrieve, and categorize your saved items efficiently.
            </p>
          </div>
        </section>
      </main>
      <footer className="py-8 relative z-10 w-full border-t border-gray-200 dark:border-white/10">
        <div className="container flex flex-col items-center justify-center space-y-2 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Built with care by{" "}
            <Link href="https://x.com/rafiwiranaa" className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-white/80" aria-label="Visit Rafi's Twitter">
              Rafi
            </Link>{" "}
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
