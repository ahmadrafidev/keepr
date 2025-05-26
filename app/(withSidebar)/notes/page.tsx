import { Metadata } from 'next'
import { Search, Plus, Tag, Calendar, BookOpen, Code, Lightbulb, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Personal knowledge base and quick thoughts'
}

const noteCategories = [
  { name: 'All', count: 24, active: true },
  { name: 'Development', count: 12, active: false },
  { name: 'Ideas', count: 8, active: false },
  { name: 'Learning', count: 4, active: false },
]

const notes = [
  {
    id: 1,
    title: 'React Server Components Best Practices',
    content: 'Key insights on implementing RSC effectively: 1) Minimize client components, 2) Use proper data fetching patterns, 3) Optimize for performance...',
    category: 'Development',
    tags: ['React', 'Next.js', 'Performance'],
    date: '2024-01-15',
    isPinned: true,
    icon: Code
  },
  {
    id: 2,
    title: 'Product Idea: Developer Productivity Tool',
    content: 'A tool that automatically tracks coding patterns and suggests optimizations. Could integrate with VS Code and provide real-time feedback...',
    category: 'Ideas',
    tags: ['Product', 'Developer Tools', 'Productivity'],
    date: '2024-01-14',
    isPinned: false,
    icon: Lightbulb
  },
  {
    id: 3,
    title: 'TypeScript Advanced Patterns',
    content: 'Exploring conditional types, mapped types, and template literal types. These patterns can significantly improve type safety and developer experience...',
    category: 'Learning',
    tags: ['TypeScript', 'Advanced', 'Types'],
    date: '2024-01-13',
    isPinned: true,
    icon: BookOpen
  },
  {
    id: 4,
    title: 'Database Optimization Techniques',
    content: 'Notes from performance optimization session: indexing strategies, query optimization, connection pooling, and caching mechanisms...',
    category: 'Development',
    tags: ['Database', 'Performance', 'SQL'],
    date: '2024-01-12',
    isPinned: false,
    icon: Code
  },
  {
    id: 5,
    title: 'UI/UX Design Principles',
    content: 'Key principles for better user interfaces: consistency, hierarchy, feedback, accessibility, and progressive disclosure...',
    category: 'Learning',
    tags: ['Design', 'UX', 'UI'],
    date: '2024-01-11',
    isPinned: false,
    icon: BookOpen
  },
  {
    id: 6,
    title: 'API Design Guidelines',
    content: 'RESTful API best practices: proper HTTP methods, status codes, error handling, versioning, and documentation standards...',
    category: 'Development',
    tags: ['API', 'REST', 'Backend'],
    date: '2024-01-10',
    isPinned: false,
    icon: Code
  }
]

export default function NotesPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notes</h1>
          <p className="text-muted-foreground">
            A collection of thoughts, learnings, and quick references from my development journey.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          New Note
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          {noteCategories.map((category) => (
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
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => {
          const IconComponent = note.icon
          return (
            <div
              key={note.id}
              className="group relative bg-card border rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {note.isPinned && (
                <Star className="absolute top-3 right-3 h-4 w-4 text-yellow-500 fill-current" />
              )}
              
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(note.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {note.content}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {note.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      <Tag className="h-2 w-2" />
                      {tag}
                    </span>
                  ))}
                  {note.tags.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{note.tags.length - 2} more
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {note.category}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Notes Summary Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border rounded-lg p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Notes Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Total Notes</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">Pinned</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">18</div>
            <div className="text-sm text-muted-foreground">Tags</div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Recent Activity</p>
              <p className="text-xs text-muted-foreground">Last note added 2 hours ago</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                <Plus className="h-3 w-3" />
                Quick Note
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-white/70 text-gray-700 rounded-lg hover:bg-white/90 transition-colors text-sm">
                <Search className="h-3 w-3" />
                Search All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 