import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Principles',
  description: 'Core development principles and philosophies'
}

export default function PrinciplesPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Principles</h1>
      <p className="text-muted-foreground">
        The core principles and philosophies that guide my development practices.
      </p>
    </div>
  )
} 