import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

interface HomeContentProps {
  className?: string
}

export function HomeContent({ className }: HomeContentProps) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto space-y-8", className)}>
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent dark:text-gray-100">
          Hey, I'm Ahmad Rafi
        </h1>
        <p className="text-lg text-muted-foreground">
          Software Engineer based in Jakarta, Indonesia. I build accessible, inclusive products and digital experiences for the web.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank">
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground">
          I'm passionate about building software that helps people. Currently, I'm focused on creating intuitive web applications 
          using modern technologies like React, Next.js, and TypeScript. When I'm not coding, you'll find me reading tech blogs, 
          contributing to open source, or exploring new coffee shops.
        </p>
      </section>

      {/* Work Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Senior Software Engineer @ Company</h3>
            <p className="text-sm text-muted-foreground">2022 - Present</p>
            <p className="text-muted-foreground">
              Leading the development of scalable web applications using Next.js and TypeScript. 
              Implementing modern UI/UX practices and optimizing application performance.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Software Engineer @ Previous Company</h3>
            <p className="text-sm text-muted-foreground">2020 - 2022</p>
            <p className="text-muted-foreground">
              Developed and maintained multiple client-facing applications. 
              Collaborated with cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Project One</h3>
            <p className="text-muted-foreground">
              A description of your first featured project and the technologies used.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Project Two</h3>
            <p className="text-muted-foreground">
              A description of your second featured project and its impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 