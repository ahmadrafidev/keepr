import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup',
  description: 'My development environment and hardware'
}

export default function SetupPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Setup</h1>
      <p className="text-muted-foreground">
        A detailed look at my development environment, hardware, and workspace configuration.
      </p>
    </div>
  )
}