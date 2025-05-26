import { Metadata } from 'next'
import { Calendar, Clock, Eye, Heart, MessageCircle, Search, Tag, TrendingUp, Edit, Plus, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development'
}

const blogCategories = [
  { name: 'All', count: 24, active: true },
  { name: 'React', count: 8, active: false },
  { name: 'TypeScript', count: 6, active: false },
  { name: 'Next.js', count: 5, active: false },
  { name: 'CSS', count: 3, active: false },
  { name: 'Career', count: 2, active: false },
]

const featuredPost = {
  id: 1,
  title: 'Building Scalable React Applications with TypeScript',
  excerpt: 'A comprehensive guide to structuring large React applications using TypeScript, covering best practices, patterns, and real-world examples.',
  content: 'In this deep dive, we explore advanced TypeScript patterns that make React applications more maintainable and scalable...',
  category: 'React',
  tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
  publishedAt: '2024-01-15',
  readTime: '12 min',
  views: 2847,
  likes: 156,
  comments: 23,
  author: 'Ahmad Rafi',
  status: 'published',
  featured: true,
  coverImage: '🚀'
}

const blogPosts = [
  {
    id: 2,
    title: 'Mastering CSS Grid: From Basics to Advanced Layouts',
    excerpt: 'Learn how to create complex, responsive layouts using CSS Grid with practical examples and real-world use cases.',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Layout', 'Responsive'],
    publishedAt: '2024-01-12',
    readTime: '8 min',
    views: 1923,
    likes: 89,
    comments: 15,
    author: 'Ahmad Rafi',
    status: 'published',
    featured: false,
    coverImage: '🎨'
  },
  {
    id: 3,
    title: 'Next.js 14: What\'s New and How to Migrate',
    excerpt: 'Exploring the latest features in Next.js 14 including Server Actions, improved caching, and migration strategies.',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Server Components', 'Migration'],
    publishedAt: '2024-01-10',
    readTime: '10 min',
    views: 3156,
    likes: 201,
    comments: 34,
    author: 'Ahmad Rafi',
    status: 'published',
    featured: false,
    coverImage: '⚡'
  },
  {
    id: 4,
    title: 'TypeScript Utility Types: A Practical Guide',
    excerpt: 'Deep dive into TypeScript utility types with real-world examples and when to use each one effectively.',
    category: 'TypeScript',
    tags: ['TypeScript', 'Types', 'Utilities', 'Advanced'],
    publishedAt: '2024-01-08',
    readTime: '15 min',
    views: 2234,
    likes: 134,
    comments: 28,
    author: 'Ahmad Rafi',
    status: 'published',
    featured: false,
    coverImage: '🔷'
  },
  {
    id: 5,
    title: 'Building a Design System with React and Storybook',
    excerpt: 'Step-by-step guide to creating a scalable design system using React components and Storybook for documentation.',
    category: 'React',
    tags: ['React', 'Design System', 'Storybook', 'Components'],
    publishedAt: '2024-01-05',
    readTime: '18 min',
    views: 1876,
    likes: 98,
    comments: 19,
    author: 'Ahmad Rafi',
    status: 'published',
    featured: false,
    coverImage: '🎯'
  },
  {
    id: 6,
    title: 'Career Growth as a Frontend Developer',
    excerpt: 'Insights and strategies for advancing your career in frontend development, from junior to senior roles.',
    category: 'Career',
    tags: ['Career', 'Frontend', 'Growth', 'Tips'],
    publishedAt: '2024-01-03',
    readTime: '6 min',
    views: 1567,
    likes: 87,
    comments: 12,
    author: 'Ahmad Rafi',
    status: 'published',
    featured: false,
    coverImage: '📈'
  }
]

const drafts = [
  {
    id: 7,
    title: 'Advanced React Patterns: Compound Components',
    excerpt: 'Exploring compound component patterns in React for building flexible and reusable UI components.',
    category: 'React',
    tags: ['React', 'Patterns', 'Components'],
    lastEdited: '2024-01-16',
    status: 'draft',
    progress: 75
  },
  {
    id: 8,
    title: 'Performance Optimization in Next.js Applications',
    excerpt: 'Comprehensive guide to optimizing Next.js applications for better performance and user experience.',
    category: 'Next.js',
    tags: ['Next.js', 'Performance', 'Optimization'],
    lastEdited: '2024-01-14',
    status: 'draft',
    progress: 45
  },
  {
    id: 9,
    title: 'CSS-in-JS vs Traditional CSS: A Comparison',
    excerpt: 'Comparing different styling approaches in modern web development and when to use each.',
    category: 'CSS',
    tags: ['CSS', 'CSS-in-JS', 'Styling'],
    lastEdited: '2024-01-11',
    status: 'draft',
    progress: 20
  }
]

const blogStats = {
  totalPosts: blogPosts.length,
  totalViews: blogPosts.reduce((sum, post) => sum + post.views, 0),
  totalLikes: blogPosts.reduce((sum, post) => sum + post.likes, 0),
  avgReadTime: Math.round(blogPosts.reduce((sum, post) => sum + parseInt(post.readTime), 0) / blogPosts.length)
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" />
            New Post
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{blogStats.totalPosts}</div>
          <div className="text-sm text-muted-foreground">Published Posts</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{(blogStats.totalViews / 1000).toFixed(1)}K</div>
          <div className="text-sm text-muted-foreground">Total Views</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{blogStats.totalLikes}</div>
          <div className="text-sm text-muted-foreground">Total Likes</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{blogStats.avgReadTime} min</div>
          <div className="text-sm text-muted-foreground">Avg Read Time</div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {blogCategories.map((category) => (
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

      {/* Featured Post */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-8">
        <div className="flex items-start gap-6">
          <div className="text-6xl">{featuredPost.coverImage}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                Featured
              </span>
              <span className="text-xs bg-secondary px-2 py-1 rounded">
                {featuredPost.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
              {featuredPost.title}
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(featuredPost.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {featuredPost.views.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {featuredPost.likes}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredPost.tags.map((tag) => (
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
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Recent Drafts */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <Edit className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Recent Drafts</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {drafts.map((draft) => (
            <div
              key={draft.id}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Draft
                </span>
                <span className="text-xs text-muted-foreground">
                  {draft.progress}% complete
                </span>
              </div>
              
              <h3 className="font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                {draft.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {draft.excerpt}
              </p>
              
              <div className="mb-3">
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${draft.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last edited: {new Date(draft.lastEdited).toLocaleDateString()}</span>
                <span className="bg-secondary px-2 py-1 rounded">{draft.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Published Articles */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Published Articles</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{post.coverImage}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Published
                    </span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {post.views.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.comments}
                  </div>
                </div>
                <button className="text-sm text-primary hover:underline">
                  Read More
                </button>
              </div>

              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.map((tag) => (
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
          ))}
        </div>
      </div>

      {/* Writing Goals */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border rounded-lg p-6">
        <h3 className="font-semibold mb-4">2024 Writing Goals</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Articles Goal</div>
            <div className="text-xs text-muted-foreground mt-1">{blogPosts.length}/24 published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50K</div>
            <div className="text-sm text-muted-foreground">Views Goal</div>
            <div className="text-xs text-muted-foreground mt-1">{(blogStats.totalViews / 1000).toFixed(1)}K/50K views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Topics Covered</div>
            <div className="text-xs text-muted-foreground mt-1">6/12 topics</div>
          </div>
        </div>
      </div>
    </div>
  )
} 