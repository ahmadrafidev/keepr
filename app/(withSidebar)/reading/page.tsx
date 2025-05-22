import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reading List',
  description: 'Articles, books, and resources that inspire me'
}

export default function ReadingPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Reading List</h1>
      <p className="text-muted-foreground">
        A collection of articles, books, and resources that have shaped my knowledge and perspective.
      </p>
    </div>
  )
} 