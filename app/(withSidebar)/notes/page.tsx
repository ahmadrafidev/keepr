import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Personal knowledge base and quick thoughts'
}

export default function NotesPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <p className="text-muted-foreground">
        A collection of thoughts, learnings, and quick references from my development journey.
      </p>
    </div>
  )
} 