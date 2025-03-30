import BookmarkList from "@/components/bookmark-list"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BookmarkList />
      </main>
    </div>
  )
}
