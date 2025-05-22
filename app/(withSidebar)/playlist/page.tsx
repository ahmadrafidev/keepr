import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playlist',
  description: 'Development-focused music and podcasts'
}

export default function PlaylistPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Playlist</h1>
      <p className="text-muted-foreground">
        A curated collection of music and podcasts that fuel my development sessions.
      </p>
    </div>
  )
} 