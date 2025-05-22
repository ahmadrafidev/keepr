import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'My development toolkit and configurations'
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Tools</h1>
      <p className="text-muted-foreground">
        An overview of the tools and configurations I use in my development workflow.
      </p>
    </div>
  )
} 