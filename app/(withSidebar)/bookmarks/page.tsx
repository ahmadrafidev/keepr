import { Metadata } from 'next'
import { Bookmark, ExternalLink, Search, Tag, Calendar, Star, Globe, Code, Palette, Book, Video, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bookmarks',
  description: 'Curated collection of interesting finds'
}

const bookmarkCategories = [
  { name: 'All', count: 156, active: true },
  { name: 'Development', count: 68, active: false },
  { name: 'Design', count: 32, active: false },
  { name: 'Tools', count: 24, active: false },
  { name: 'Learning', count: 18, active: false },
  { name: 'Inspiration', count: 14, active: false },
]

const bookmarks = [
  {
    id: 1,
    title: 'React Server Components: A Comprehensive Guide',
    url: 'https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023',
    description: 'Official React team blog post explaining the concepts and implementation of React Server Components',
    category: 'Development',
    tags: ['React', 'SSR', 'Performance', 'Next.js'],
    dateAdded: '2024-01-15',
    isStarred: true,
    type: 'Article',
    domain: 'react.dev',
    readTime: '15 min',
    icon: Code
  },
  {
    id: 2,
    title: 'Figma to Code - Best Practices',
    url: 'https://www.figma.com/blog/figma-to-code-best-practices',
    description: 'Guidelines for translating Figma designs into clean, maintainable code',
    category: 'Design',
    tags: ['Figma', 'Design Systems', 'Frontend', 'Workflow'],
    dateAdded: '2024-01-14',
    isStarred: false,
    type: 'Article',
    domain: 'figma.com',
    readTime: '8 min',
    icon: Palette
  },
  {
    id: 3,
    title: 'TypeScript Utility Types Explained',
    url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
    description: 'Complete reference for TypeScript utility types with practical examples',
    category: 'Development',
    tags: ['TypeScript', 'Types', 'Reference', 'Documentation'],
    dateAdded: '2024-01-13',
    isStarred: true,
    type: 'Documentation',
    domain: 'typescriptlang.org',
    readTime: '20 min',
    icon: Code
  },
  {
    id: 4,
    title: 'Raycast - Supercharged Productivity',
    url: 'https://raycast.com',
    description: 'Blazingly fast, totally extendable launcher for macOS',
    category: 'Tools',
    tags: ['Productivity', 'macOS', 'Launcher', 'Automation'],
    dateAdded: '2024-01-12',
    isStarred: true,
    type: 'Tool',
    domain: 'raycast.com',
    readTime: '5 min',
    icon: Zap
  },
  {
    id: 5,
    title: 'CSS Grid Generator',
    url: 'https://cssgrid-generator.netlify.app',
    description: 'Interactive tool to generate CSS Grid layouts with visual interface',
    category: 'Tools',
    tags: ['CSS', 'Grid', 'Generator', 'Layout'],
    dateAdded: '2024-01-11',
    isStarred: false,
    type: 'Tool',
    domain: 'netlify.app',
    readTime: '2 min',
    icon: Palette
  },
  {
    id: 6,
    title: 'The Art of Readable Code',
    url: 'https://www.oreilly.com/library/view/the-art-of/9780596802295',
    description: 'Book about writing code that humans can understand and maintain',
    category: 'Learning',
    tags: ['Clean Code', 'Best Practices', 'Book', 'Software Engineering'],
    dateAdded: '2024-01-10',
    isStarred: true,
    type: 'Book',
    domain: 'oreilly.com',
    readTime: '300 min',
    icon: Book
  },
  {
    id: 7,
    title: 'Dribbble - Design Inspiration',
    url: 'https://dribbble.com/shots/popular/web-design',
    description: 'Popular web design shots for UI/UX inspiration',
    category: 'Inspiration',
    tags: ['Design', 'UI', 'UX', 'Inspiration', 'Web Design'],
    dateAdded: '2024-01-09',
    isStarred: false,
    type: 'Gallery',
    domain: 'dribbble.com',
    readTime: '10 min',
    icon: Palette
  },
  {
    id: 8,
    title: 'JavaScript Algorithms and Data Structures',
    url: 'https://github.com/trekhleb/javascript-algorithms',
    description: 'Comprehensive collection of algorithms and data structures implemented in JavaScript',
    category: 'Learning',
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'GitHub'],
    dateAdded: '2024-01-08',
    isStarred: true,
    type: 'Repository',
    domain: 'github.com',
    readTime: '60 min',
    icon: Code
  },
  {
    id: 9,
    title: 'Fireship - Web Development Videos',
    url: 'https://www.youtube.com/c/Fireship',
    description: 'High-intensity web development tutorials and tech news',
    category: 'Learning',
    tags: ['YouTube', 'Tutorials', 'Web Development', 'JavaScript'],
    dateAdded: '2024-01-07',
    isStarred: false,
    type: 'Video',
    domain: 'youtube.com',
    readTime: '10 min',
    icon: Video
  },
  {
    id: 10,
    title: 'Tailwind CSS Components',
    url: 'https://tailwindui.com/components',
    description: 'Beautiful UI components built with Tailwind CSS',
    category: 'Design',
    tags: ['Tailwind CSS', 'Components', 'UI', 'CSS'],
    dateAdded: '2024-01-06',
    isStarred: true,
    type: 'Resource',
    domain: 'tailwindui.com',
    readTime: '15 min',
    icon: Palette
  },
  {
    id: 11,
    title: 'Vercel Edge Functions',
    url: 'https://vercel.com/docs/concepts/functions/edge-functions',
    description: 'Documentation for Vercel Edge Functions and serverless computing',
    category: 'Development',
    tags: ['Vercel', 'Edge Functions', 'Serverless', 'Performance'],
    dateAdded: '2024-01-05',
    isStarred: false,
    type: 'Documentation',
    domain: 'vercel.com',
    readTime: '12 min',
    icon: Code
  },
  {
    id: 12,
    title: 'Coolors - Color Palette Generator',
    url: 'https://coolors.co',
    description: 'Generate beautiful color palettes for your design projects',
    category: 'Tools',
    tags: ['Colors', 'Palette', 'Design', 'Generator'],
    dateAdded: '2024-01-04',
    isStarred: false,
    type: 'Tool',
    domain: 'coolors.co',
    readTime: '5 min',
    icon: Palette
  }
]

const popularTags = [
  { name: 'React', count: 24 },
  { name: 'TypeScript', count: 18 },
  { name: 'CSS', count: 16 },
  { name: 'JavaScript', count: 15 },
  { name: 'Design', count: 12 },
  { name: 'Tools', count: 11 },
  { name: 'Performance', count: 9 },
  { name: 'Next.js', count: 8 },
]

const typeColors = {
  'Article': 'bg-blue-100 text-blue-800',
  'Documentation': 'bg-green-100 text-green-800',
  'Tool': 'bg-purple-100 text-purple-800',
  'Book': 'bg-orange-100 text-orange-800',
  'Video': 'bg-red-100 text-red-800',
  'Repository': 'bg-gray-100 text-gray-800',
  'Gallery': 'bg-pink-100 text-pink-800',
  'Resource': 'bg-yellow-100 text-yellow-800'
}

export default function BookmarksPage() {
  const starredBookmarks = bookmarks.filter(bookmark => bookmark.isStarred)
  const recentBookmarks = bookmarks.slice(0, 6)

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Bookmarks</h1>
        <p className="text-muted-foreground">
          A curated collection of interesting finds from around the web.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{bookmarks.length}</div>
          <div className="text-sm text-muted-foreground">Total Bookmarks</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{starredBookmarks.length}</div>
          <div className="text-sm text-muted-foreground">Starred</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{bookmarkCategories.length - 1}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{popularTags.length}</div>
          <div className="text-sm text-muted-foreground">Popular Tags</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-6">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Bookmark className="h-4 w-4" />
            Add Bookmark
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            <Star className="h-4 w-4" />
            View Starred
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            <Tag className="h-4 w-4" />
            Manage Tags
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            <ExternalLink className="h-4 w-4" />
            Export Bookmarks
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search bookmarks..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {bookmarkCategories.map((category) => (
            <button
              key={category.name}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                category.active
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recently Added</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentBookmarks.map((bookmark) => {
            const IconComponent = bookmark.icon
            return (
              <div
                key={bookmark.id}
                className="group bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {bookmark.title}
                      </h3>
                      {bookmark.isStarred && (
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {bookmark.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Globe className="h-3 w-3" />
                      {bookmark.domain}
                      <span>•</span>
                      <span>{bookmark.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:bg-primary/10 rounded transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {bookmark.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        <Tag className="h-2 w-2" />
                        {tag}
                      </span>
                    ))}
                    {bookmark.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{bookmark.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${typeColors[bookmark.type as keyof typeof typeColors]}`}>
                    {bookmark.type}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* All Bookmarks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">All Bookmarks</h2>
        <div className="space-y-3">
          {bookmarks.map((bookmark) => {
            const IconComponent = bookmark.icon
            return (
              <div
                key={bookmark.id}
                className="group bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {bookmark.title}
                      </h3>
                      {bookmark.isStarred && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <span className={`text-xs px-2 py-1 rounded ${typeColors[bookmark.type as keyof typeof typeColors]}`}>
                        {bookmark.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {bookmark.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {bookmark.domain}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(bookmark.dateAdded).toLocaleDateString()}
                      </div>
                      <span>{bookmark.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {bookmark.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          <Tag className="h-2 w-2" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <a
                      href={bookmark.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {bookmark.category}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag.name}
              className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Tag className="h-3 w-3" />
              {tag.name}
              <span className="text-xs bg-background px-2 py-1 rounded">
                {tag.count}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
} 