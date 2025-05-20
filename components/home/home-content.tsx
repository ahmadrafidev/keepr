import { cn } from "@/lib/utils"

interface WelcomeContentProps {
  className?: string
}

export function HomeContent({ className }: WelcomeContentProps) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <h1 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent dark:text-gray-100">
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
  )
} 