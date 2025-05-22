import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspirations',
  description: 'People and projects that inspire my work'
}

export default function InspirationsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Inspirations</h1>
      <p className="text-muted-foreground">
        A showcase of people, projects, and works that inspire my development journey.
      </p>
    </div>
  )
} 