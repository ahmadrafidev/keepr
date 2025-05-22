import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookmarks',
  description: 'Curated collection of interesting finds'
}

export default function BookmarksPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>
      <p className="text-muted-foreground">
        A curated collection of interesting finds from around the web.
      </p>
    </div>
  )
} 