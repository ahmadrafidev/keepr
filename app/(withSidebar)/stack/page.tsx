import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack',
  description: 'My technology stack and preferences'
}

export default function StackPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Stack</h1>
      <p className="text-muted-foreground">
        An overview of my preferred technologies, tools, and development stack.
      </p>
    </div>
  )
} 