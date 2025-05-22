import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Current learning goals and resources'
}

export default function LearningPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Learning</h1>
      <p className="text-muted-foreground">
        Tracking my learning journey and educational goals in software development.
      </p>
    </div>
  )
} 