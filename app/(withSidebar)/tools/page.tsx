import { Metadata } from 'next'
import { ExternalLink, Star, Download, Heart, Code, Palette, Database, Terminal, Globe, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'My development toolkit and configurations'
}

const toolCategories = [
  { name: 'All', count: 24, icon: Code, active: true },
  { name: 'Development', count: 8, icon: Code, active: false },
  { name: 'Design', count: 6, icon: Palette, active: false },
  { name: 'Database', count: 4, icon: Database, active: false },
  { name: 'Terminal', count: 3, icon: Terminal, active: false },
  { name: 'Web', count: 3, icon: Globe, active: false },
]

const tools = [
  {
    id: 1,
    name: 'Visual Studio Code',
    description: 'My primary code editor with extensive customization and extensions for optimal productivity.',
    category: 'Development',
    rating: 5,
    isFavorite: true,
    website: 'https://code.visualstudio.com',
    price: 'Free',
    icon: Code,
    tags: ['Editor', 'Extensions', 'Productivity'],
    lastUsed: '2024-01-15'
  },
  {
    id: 2,
    name: 'Figma',
    description: 'Collaborative design tool for creating user interfaces, prototypes, and design systems.',
    category: 'Design',
    rating: 5,
    isFavorite: true,
    website: 'https://figma.com',
    price: 'Freemium',
    icon: Palette,
    tags: ['Design', 'Prototyping', 'Collaboration'],
    lastUsed: '2024-01-14'
  },
  {
    id: 3,
    name: 'PostgreSQL',
    description: 'Powerful, open-source relational database system with advanced features and reliability.',
    category: 'Database',
    rating: 5,
    isFavorite: true,
    website: 'https://postgresql.org',
    price: 'Free',
    icon: Database,
    tags: ['Database', 'SQL', 'Open Source'],
    lastUsed: '2024-01-13'
  },
  {
    id: 4,
    name: 'iTerm2',
    description: 'Feature-rich terminal emulator for macOS with split panes, search, and customization.',
    category: 'Terminal',
    rating: 4,
    isFavorite: false,
    website: 'https://iterm2.com',
    price: 'Free',
    icon: Terminal,
    tags: ['Terminal', 'macOS', 'Productivity'],
    lastUsed: '2024-01-15'
  },
  {
    id: 5,
    name: 'Vercel',
    description: 'Platform for deploying and hosting modern web applications with excellent developer experience.',
    category: 'Web',
    rating: 5,
    isFavorite: true,
    website: 'https://vercel.com',
    price: 'Freemium',
    icon: Globe,
    tags: ['Deployment', 'Hosting', 'CI/CD'],
    lastUsed: '2024-01-12'
  },
  {
    id: 6,
    name: 'Postman',
    description: 'API development and testing platform for building, testing, and documenting APIs.',
    category: 'Development',
    rating: 4,
    isFavorite: false,
    website: 'https://postman.com',
    price: 'Freemium',
    icon: Code,
    tags: ['API', 'Testing', 'Documentation'],
    lastUsed: '2024-01-11'
  },
  {
    id: 7,
    name: 'Docker',
    description: 'Containerization platform for developing, shipping, and running applications consistently.',
    category: 'Development',
    rating: 4,
    isFavorite: false,
    website: 'https://docker.com',
    price: 'Freemium',
    icon: Code,
    tags: ['Containers', 'DevOps', 'Deployment'],
    lastUsed: '2024-01-10'
  },
  {
    id: 8,
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, wikis, and project management.',
    category: 'Productivity',
    rating: 4,
    isFavorite: true,
    website: 'https://notion.so',
    price: 'Freemium',
    icon: Code,
    tags: ['Notes', 'Documentation', 'Organization'],
    lastUsed: '2024-01-09'
  }
]

const configurations = [
  {
    name: 'VS Code Settings',
    description: 'Custom settings.json with theme, extensions, and productivity configurations',
    type: 'JSON',
    lastUpdated: '2024-01-15'
  },
  {
    name: 'Zsh Configuration',
    description: 'Oh My Zsh setup with custom aliases, functions, and prompt theme',
    type: 'Shell',
    lastUpdated: '2024-01-10'
  },
  {
    name: 'Git Config',
    description: 'Global Git configuration with aliases and helpful defaults',
    type: 'Config',
    lastUpdated: '2024-01-05'
  }
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Tools</h1>
        <p className="text-muted-foreground">
          An overview of the tools and configurations I use in my development workflow.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {toolCategories.map((category) => {
          const IconComponent = category.icon
          return (
            <button
              key={category.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category.active
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              {category.name} ({category.count})
            </button>
          )
        })}
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const IconComponent = tool.icon
          return (
            <div
              key={tool.id}
              className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">{tool.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {tool.isFavorite && (
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  )}
                  <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                    {tool.price}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {tool.description}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < tool.rating
                        ? 'text-yellow-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {tool.rating}/5
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-xs text-muted-foreground">
                  Last used: {new Date(tool.lastUsed).toLocaleDateString()}
                </span>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Visit
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Configurations Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Configurations</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {configurations.map((config, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{config.name}</h3>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {config.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {config.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Updated: {new Date(config.lastUpdated).toLocaleDateString()}
                </span>
                <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                  <Download className="h-3 w-3" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">24</div>
          <div className="text-sm text-muted-foreground">Total Tools</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-sm text-muted-foreground">Favorites</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">6</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-sm text-muted-foreground">Configs</div>
        </div>
      </div>
    </div>
  )
} 