import { Metadata } from 'next'
import { CheckCircle, Code, Users, Zap, Target, Heart, Brain, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Principles',
  description: 'Core development principles and philosophies'
}

const principles = [
  {
    id: 1,
    title: 'Code for Humans, Not Just Machines',
    description: 'Write code that tells a story. Every line should be clear, intentional, and easy for the next developer (including future you) to understand.',
    category: 'Code Quality',
    icon: Code,
    color: 'bg-blue-500',
    practices: [
      'Use descriptive variable and function names',
      'Write self-documenting code with clear intent',
      'Prefer readability over cleverness',
      'Add comments for complex business logic'
    ]
  },
  {
    id: 2,
    title: 'Embrace Continuous Learning',
    description: 'Technology evolves rapidly. Stay curious, experiment with new tools, and never stop learning. Every project is an opportunity to grow.',
    category: 'Growth',
    icon: Brain,
    color: 'bg-purple-500',
    practices: [
      'Dedicate time weekly to learning new technologies',
      'Build side projects to experiment',
      'Share knowledge through writing and teaching',
      'Learn from failures and mistakes'
    ]
  },
  {
    id: 3,
    title: 'User-Centric Development',
    description: 'Every feature, every optimization, every decision should ultimately serve the user. Build with empathy and focus on solving real problems.',
    category: 'User Experience',
    icon: Heart,
    color: 'bg-red-500',
    practices: [
      'Test applications with real users',
      'Prioritize accessibility and inclusivity',
      'Optimize for performance and usability',
      'Gather and act on user feedback'
    ]
  },
  {
    id: 4,
    title: 'Start Simple, Iterate Fast',
    description: 'Begin with the simplest solution that works. Avoid over-engineering. Build, measure, learn, and improve incrementally.',
    category: 'Development Process',
    icon: Zap,
    color: 'bg-yellow-500',
    practices: [
      'Build MVPs before full features',
      'Use progressive enhancement',
      'Refactor when complexity grows',
      'Ship early and often'
    ]
  },
  {
    id: 5,
    title: 'Collaborate and Communicate',
    description: 'Great software is built by teams. Share knowledge, ask questions, give constructive feedback, and help others succeed.',
    category: 'Teamwork',
    icon: Users,
    color: 'bg-green-500',
    practices: [
      'Write clear commit messages and PR descriptions',
      'Participate actively in code reviews',
      'Document decisions and share context',
      'Mentor junior developers'
    ]
  },
  {
    id: 6,
    title: 'Quality is Non-Negotiable',
    description: 'Invest in testing, monitoring, and code quality from day one. Technical debt compounds quickly and slows down future development.',
    category: 'Quality Assurance',
    icon: Shield,
    color: 'bg-indigo-500',
    practices: [
      'Write comprehensive tests',
      'Use linting and formatting tools',
      'Monitor application performance',
      'Address technical debt regularly'
    ]
  },
  {
    id: 7,
    title: 'Solve Real Problems',
    description: 'Focus on building solutions that matter. Understand the problem deeply before jumping to implementation. Technology should serve purpose.',
    category: 'Problem Solving',
    icon: Target,
    color: 'bg-orange-500',
    practices: [
      'Research and validate problems before building',
      'Talk to users and stakeholders',
      'Question requirements and assumptions',
      'Measure impact and success metrics'
    ]
  },
  {
    id: 8,
    title: 'Security by Design',
    description: 'Security is not an afterthought. Build secure applications from the ground up, considering privacy, data protection, and user safety.',
    category: 'Security',
    icon: Shield,
    color: 'bg-gray-500',
    practices: [
      'Follow security best practices',
      'Validate and sanitize all inputs',
      'Use HTTPS and secure authentication',
      'Regular security audits and updates'
    ]
  }
]

const categories = [
  'All',
  'Code Quality',
  'Growth',
  'User Experience',
  'Development Process',
  'Teamwork',
  'Quality Assurance',
  'Problem Solving',
  'Security'
]

export default function PrinciplesPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Principles</h1>
        <p className="text-muted-foreground">
          The core principles and philosophies that guide my development practices and decision-making.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{principles.length}</div>
          <div className="text-sm text-muted-foreground">Core Principles</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{principles.reduce((sum, p) => sum + p.practices.length, 0)}</div>
          <div className="text-sm text-muted-foreground">Practices</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-sm text-muted-foreground">Years Applied</div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              index === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Principles Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((principle) => {
          const IconComponent = principle.icon
          return (
            <div
              key={principle.id}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${principle.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{principle.title}</h3>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {principle.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">Key Practices:</h4>
                <div className="space-y-2">
                  {principle.practices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Philosophy Summary */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-8">
        <h3 className="font-semibold text-xl mb-4">Development Philosophy</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-medium mb-3">What I Believe</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Software should make people's lives better
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Simple solutions are often the best solutions
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Continuous learning is essential for growth
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Collaboration leads to better outcomes
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">How I Work</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Start with understanding the problem
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Build incrementally and iterate quickly
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Prioritize code quality and maintainability
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                Share knowledge and help others succeed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 