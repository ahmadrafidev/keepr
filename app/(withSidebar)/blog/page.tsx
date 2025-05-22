import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Manage your articles and drafts',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
            Manage your articles and drafts in one place
          </p>
        </div>

        <div className="grid gap-6">
          {/* Drafts Section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Drafts</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border bg-background"
                >
                  <div className="space-y-1">
                    <h3 className="font-medium">Untitled Draft {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Last edited 2 hours ago
                    </p>
                  </div>
                  <button className="text-sm text-primary hover:underline">
                    View article
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Published Articles Section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Published Articles</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border bg-background"
                >
                  <div className="space-y-1">
                    <h3 className="font-medium">Article Title {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Published 3 days ago
                    </p>
                  </div>
                  <button className="text-sm text-primary hover:underline">
                    View article
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 