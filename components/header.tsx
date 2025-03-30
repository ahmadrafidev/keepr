import { Search, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-1">
          <Bookmark className="h-10 w-8" />
          <div className="text-4xl tracking-tighter font-bold text-primary">Keepr</div>
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-white">Beta</span>
        </div>
        <div className="relative hidden w-full max-w-md md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search your bookmarks..." className="w-full bg-gray-50 pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            Settings
          </Button>
        </div>
      </div>
    </header>
  )
}

