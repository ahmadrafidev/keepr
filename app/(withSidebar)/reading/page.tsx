import { Metadata } from 'next'
import { BookOpen, ExternalLink, Star, Clock, CheckCircle, Bookmark, TrendingUp, User, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reading List',
  description: 'Articles, books, and resources that inspire me'
}

const readingCategories = [
  { name: 'All', count: 28, active: true },
  { name: 'Books', count: 12, active: false },
  { name: 'Articles', count: 16, active: false },
  { name: 'Technical', count: 18, active: false },
  { name: 'Business', count: 6, active: false },
  { name: 'Design', count: 4, active: false },
]

const books = [
  {
    id: 1,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    type: 'Book',
    category: 'Technical',
    status: 'Reading',
    progress: 65,
    totalPages: 590,
    currentPage: 384,
    rating: 5,
    dateStarted: '2024-01-01',
    estimatedFinish: '2024-02-15',
    description: 'The big ideas behind reliable, scalable, and maintainable systems',
    cover: '📚',
    tags: ['Databases', 'System Design', 'Architecture'],
    notes: 'Excellent insights on data consistency and distributed systems. Chapter 7 on transactions is particularly enlightening.',
    isRecommended: true
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    type: 'Book',
    category: 'Technical',
    status: 'Completed',
    progress: 100,
    totalPages: 464,
    currentPage: 464,
    rating: 4,
    dateStarted: '2023-11-15',
    dateCompleted: '2023-12-20',
    description: 'A handbook of agile software craftsmanship',
    cover: '🧹',
    tags: ['Clean Code', 'Best Practices', 'Software Engineering'],
    notes: 'Great principles for writing maintainable code. Some examples feel dated but core concepts are timeless.',
    isRecommended: true
  },
  {
    id: 3,
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    type: 'Book',
    category: 'Technical',
    status: 'Completed',
    progress: 100,
    totalPages: 352,
    currentPage: 352,
    rating: 5,
    dateStarted: '2023-09-01',
    dateCompleted: '2023-10-15',
    description: 'Your journey to mastery',
    cover: '🔧',
    tags: ['Programming', 'Career', 'Best Practices'],
    notes: 'Timeless advice for software developers. The DRY principle and orthogonality concepts are game-changers.',
    isRecommended: true
  }
]

const articles = [
  {
    id: 1,
    title: 'React Server Components: A Comprehensive Guide',
    author: 'Dan Abramov',
    type: 'Article',
    category: 'Technical',
    status: 'Completed',
    url: 'https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023',
    readTime: '15 min',
    dateRead: '2024-01-12',
    rating: 5,
    description: 'Deep dive into React Server Components and their benefits',
    tags: ['React', 'SSR', 'Performance'],
    notes: 'Excellent explanation of RSC architecture. Key insight: server components run on the server, not in the browser.',
    isBookmarked: true
  },
  {
    id: 2,
    title: 'The State of JavaScript 2023',
    author: 'Sacha Greif',
    type: 'Article',
    category: 'Technical',
    status: 'Completed',
    url: 'https://2023.stateofjs.com',
    readTime: '30 min',
    dateRead: '2024-01-08',
    rating: 4,
    description: 'Annual survey results on JavaScript ecosystem trends',
    tags: ['JavaScript', 'Trends', 'Survey'],
    notes: 'Interesting trends: TypeScript adoption continues to grow, React remains dominant, Vite gaining popularity.',
    isBookmarked: true
  }
]

const allItems = [...books, ...articles].sort((a, b) => {
  const dateA = new Date(a.dateStarted || a.dateRead || a.dateAdded || '2024-01-01')
  const dateB = new Date(b.dateStarted || b.dateRead || b.dateAdded || '2024-01-01')
  return dateB.getTime() - dateA.getTime()
})

const statusColors = {
  'Reading': 'bg-blue-100 text-blue-800',
  'Completed': 'bg-green-100 text-green-800',
  'Planned': 'bg-yellow-100 text-yellow-800'
}

export default function ReadingPage() {
  const completedItems = allItems.filter(item => item.status === 'Completed')
  const readingItems = allItems.filter(item => item.status === 'Reading')

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Reading List</h1>
        <p className="text-muted-foreground">
          A collection of articles, books, and resources that have shaped my knowledge and perspective.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{allItems.length}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{completedItems.length}</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{readingItems.length}</div>
          <div className="text-sm text-muted-foreground">Currently Reading</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{books.length}</div>
          <div className="text-sm text-muted-foreground">Books</div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {readingCategories.map((category) => (
          <button
            key={category.name}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              category.active
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Currently Reading */}
      {readingItems.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Currently Reading</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {readingItems.map((item) => (
              <div
                key={item.id}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{item.type === 'Book' ? (item as any).cover : '📄'}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <User className="h-3 w-3" />
                      {item.author}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${statusColors[item.status as keyof typeof statusColors]}`}>
                    {item.status}
                  </span>
                </div>

                {item.type === 'Book' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {(item as any).currentPage}/{(item as any).totalPages} pages
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(item as any).notes && (
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground italic">"{(item as any).notes}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recently Completed */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recently Completed</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">{item.type === 'Book' ? (item as any).cover : '📄'}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <User className="h-3 w-3" />
                    {item.author}
                  </div>
                  {item.rating && (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < item.rating!
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>

              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-1 rounded">{item.category}</span>
                <span>
                  {new Date((item as any).dateCompleted || (item as any).dateRead || '').toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading Goals */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">2024 Reading Goals</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Books</h3>
                <p className="text-sm text-muted-foreground">Technical & Business</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Progress</span>
                <span className="text-sm font-medium">8/12</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }} />
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Reading Time</h3>
                <p className="text-sm text-muted-foreground">Hours per week</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">This week</span>
                <span className="text-sm font-medium">6/8 hours</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Knowledge Areas</h3>
                <p className="text-sm text-muted-foreground">Diverse topics</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Categories</span>
                <span className="text-sm font-medium">5/6</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '83%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 