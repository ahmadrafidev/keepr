import { Metadata } from 'next'
import { Code, Database, Globe, Smartphone, Server, Palette, Shield, Heart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stack',
  description: 'My technology stack and preferences'
}

const stackCategories = [
  { name: 'Frontend', icon: Globe, color: 'bg-blue-500' },
  { name: 'Backend', icon: Server, color: 'bg-green-500' },
  { name: 'Database', icon: Database, color: 'bg-purple-500' },
  { name: 'Mobile', icon: Smartphone, color: 'bg-orange-500' },
  { name: 'DevOps', icon: Shield, color: 'bg-red-500' },
  { name: 'Design', icon: Palette, color: 'bg-pink-500' },
]

const technologies = [
  // Frontend
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Primary language for type-safe JavaScript development',
    experience: 'Expert',
    experienceYears: 4,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '🔷',
    pros: ['Type safety', 'Better IDE support', 'Scalable codebase'],
    cons: ['Learning curve', 'Compilation overhead']
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'Go-to library for building user interfaces',
    experience: 'Expert',
    experienceYears: 5,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '⚛️',
    pros: ['Component reusability', 'Large ecosystem', 'Virtual DOM'],
    cons: ['Steep learning curve', 'Frequent updates']
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'Full-stack React framework with excellent DX',
    experience: 'Advanced',
    experienceYears: 3,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '▲',
    pros: ['SSR/SSG', 'File-based routing', 'API routes'],
    cons: ['Vendor lock-in', 'Complex configuration']
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first CSS framework for rapid UI development',
    experience: 'Advanced',
    experienceYears: 2,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '🎨',
    pros: ['Rapid development', 'Consistent design', 'Small bundle size'],
    cons: ['HTML bloat', 'Learning curve']
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript runtime for server-side development',
    experience: 'Advanced',
    experienceYears: 4,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '🟢',
    pros: ['JavaScript everywhere', 'NPM ecosystem', 'Fast development'],
    cons: ['Single-threaded', 'Callback complexity']
  },
  {
    name: 'Express.js',
    category: 'Backend',
    description: 'Minimal and flexible Node.js web framework',
    experience: 'Advanced',
    experienceYears: 3,
    isFavorite: false,
    usageFrequency: 'Weekly',
    icon: '🚂',
    pros: ['Lightweight', 'Flexible', 'Large middleware ecosystem'],
    cons: ['Minimal structure', 'Security concerns']
  },
  {
    name: 'Prisma',
    category: 'Backend',
    description: 'Next-generation ORM for Node.js and TypeScript',
    experience: 'Intermediate',
    experienceYears: 2,
    isFavorite: true,
    usageFrequency: 'Weekly',
    icon: '🔺',
    pros: ['Type safety', 'Auto-generated client', 'Migration system'],
    cons: ['Learning curve', 'Limited customization']
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Advanced open-source relational database',
    experience: 'Advanced',
    experienceYears: 3,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '🐘',
    pros: ['ACID compliance', 'JSON support', 'Extensible'],
    cons: ['Complex setup', 'Resource intensive']
  },
  {
    name: 'Redis',
    category: 'Database',
    description: 'In-memory data structure store for caching',
    experience: 'Intermediate',
    experienceYears: 2,
    isFavorite: false,
    usageFrequency: 'Weekly',
    icon: '🔴',
    pros: ['Fast performance', 'Multiple data types', 'Pub/Sub'],
    cons: ['Memory limitations', 'Data persistence']
  },

  // DevOps
  {
    name: 'Docker',
    category: 'DevOps',
    description: 'Containerization platform for consistent deployments',
    experience: 'Intermediate',
    experienceYears: 2,
    isFavorite: false,
    usageFrequency: 'Weekly',
    icon: '🐳',
    pros: ['Environment consistency', 'Easy deployment', 'Scalability'],
    cons: ['Resource overhead', 'Complexity']
  },
  {
    name: 'Vercel',
    category: 'DevOps',
    description: 'Platform for deploying modern web applications',
    experience: 'Advanced',
    experienceYears: 3,
    isFavorite: true,
    usageFrequency: 'Daily',
    icon: '▲',
    pros: ['Zero config', 'Global CDN', 'Automatic HTTPS'],
    cons: ['Vendor lock-in', 'Pricing for scale']
  },

  // Design
  {
    name: 'Figma',
    category: 'Design',
    description: 'Collaborative design tool for UI/UX',
    experience: 'Intermediate',
    experienceYears: 2,
    isFavorite: true,
    usageFrequency: 'Weekly',
    icon: '🎨',
    pros: ['Real-time collaboration', 'Component system', 'Prototyping'],
    cons: ['Internet dependency', 'Learning curve']
  }
]

const experienceColors = {
  'Beginner': 'bg-yellow-100 text-yellow-800',
  'Intermediate': 'bg-blue-100 text-blue-800',
  'Advanced': 'bg-green-100 text-green-800',
  'Expert': 'bg-purple-100 text-purple-800'
}

const frequencyColors = {
  'Daily': 'bg-green-100 text-green-800',
  'Weekly': 'bg-blue-100 text-blue-800',
  'Monthly': 'bg-yellow-100 text-yellow-800',
  'Rarely': 'bg-gray-100 text-gray-800'
}

export default function StackPage() {
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, typeof technologies>)

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Stack</h1>
        <p className="text-muted-foreground">
          An overview of my preferred technologies, tools, and development stack.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{technologies.length}</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{technologies.filter(t => t.isFavorite).length}</div>
          <div className="text-sm text-muted-foreground">Favorites</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{stackCategories.length}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{Math.round(technologies.reduce((acc, t) => acc + t.experienceYears, 0) / technologies.length)}</div>
          <div className="text-sm text-muted-foreground">Avg Experience</div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stackCategories.map((category) => {
          const IconComponent = category.icon
          const techCount = groupedTechnologies[category.name]?.length || 0
          return (
            <div
              key={category.name}
              className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{techCount} tools</p>
            </div>
          )
        })}
      </div>

      {/* Technologies by Category */}
      {Object.entries(groupedTechnologies).map(([categoryName, techs]) => {
        const category = stackCategories.find(c => c.name === categoryName)
        const IconComponent = category?.icon || Code
        
        return (
          <div key={categoryName} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                <IconComponent className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold">{categoryName}</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{tech.name}</h3>
                          {tech.isFavorite && (
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-xs px-2 py-1 rounded ${experienceColors[tech.experience as keyof typeof experienceColors]}`}>
                      {tech.experience}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${frequencyColors[tech.usageFrequency as keyof typeof frequencyColors]}`}>
                      {tech.usageFrequency}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {tech.experienceYears} years
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-green-700 mb-1">Pros</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {tech.pros.map((pro, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-red-700 mb-1">Cons</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {tech.cons.map((con, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* Preferences */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Development Preferences</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Code Editor</h3>
            <p className="text-sm text-muted-foreground mb-2">Visual Studio Code with custom extensions and themes</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Operating System</h3>
            <p className="text-sm text-muted-foreground mb-2">macOS for development, Linux for servers</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Architecture</h3>
            <p className="text-sm text-muted-foreground mb-2">Microservices with API-first approach</p>
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
              ))}
              <Star className="h-3 w-3 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 