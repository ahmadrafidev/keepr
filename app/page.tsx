import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="container flex h-16 items-center justify-between p-8">
        <div className="flex flex-row items-center gap-1 font-bold">
          <Bookmark className="h-10 w-8" />
          <span className="text-4xl tracking-tighter">Keepr</span>
        </div>
        <div className="flex items-center gap-4">
          <Button size="lg">Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-16 space-y-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Easily save, organize, and revisit the products you love, all in one place.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A lightweight and intuitive platform to help you bookmark and manage your favorite blogs or products
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="outline">
                <Link href="/about" className="text-sm font-medium hover:underline">
                  About Keepr
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-gray-600 py-8 md:py-12">
          <p>Built with care by{" "}
            <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">
              Rafi
            </Link> © {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

