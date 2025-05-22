import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiments',
  description: 'Playground for ideas and proof of concepts'
}

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Experiments</h1>
      <p className="text-muted-foreground">
        A playground for testing new ideas, technologies, and proof of concepts.
      </p>
    </div>
  )
} 