import { Metadata } from 'next'
import { ExternalLink, Github, Play, Code, Palette, Zap, Smartphone, Monitor, Calendar, Star, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experiments',
  description: 'Playground for ideas and proof of concepts'
}

const experimentCategories = [
  { name: 'All', count: 12, active: true },
  { name: 'UI Components', count: 5, active: false },
  { name: 'Animations', count: 3, active: false },
  { name: 'Web APIs', count: 2, active: false },
  { name: 'Mobile', count: 1, active: false },
  { name: 'AI/ML', count: 1, active: false },
]

const experiments = [
  {
    id: 1,
    title: 'Glassmorphism Card Component',
    description: 'A modern card component with glassmorphism design, backdrop blur effects, and smooth hover animations.',
    category: 'UI Components',
    thumbnail: '🪟',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
    createdAt: '2024-01-15',
    views: 1247,
    likes: 89,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/glassmorphism-card',
    codeUrl: 'https://github.com/username/glassmorphism-card',
    features: ['Backdrop blur', 'Hover animations', 'Responsive design', 'Dark mode support']
  },
  {
    id: 2,
    title: 'Particle System Animation',
    description: 'Interactive particle system using Canvas API with mouse interaction and dynamic color schemes.',
    category: 'Animations',
    thumbnail: '✨',
    techStack: ['JavaScript', 'Canvas API', 'CSS3'],
    status: 'Completed',
    createdAt: '2024-01-12',
    views: 892,
    likes: 156,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/particle-system',
    codeUrl: 'https://github.com/username/particle-system',
    features: ['Mouse interaction', 'Dynamic colors', 'Performance optimized', 'Configurable parameters']
  },
  {
    id: 3,
    title: 'Voice Command Interface',
    description: 'Web Speech API experiment for voice-controlled navigation and commands in web applications.',
    category: 'Web APIs',
    thumbnail: '🎤',
    techStack: ['Web Speech API', 'React', 'TypeScript'],
    status: 'In Progress',
    createdAt: '2024-01-10',
    views: 634,
    likes: 67,
    isStarred: false,
    demoUrl: 'https://experiments.example.com/voice-commands',
    codeUrl: 'https://github.com/username/voice-commands',
    features: ['Voice recognition', 'Command mapping', 'Visual feedback', 'Browser compatibility']
  },
  {
    id: 4,
    title: 'Morphing Button Collection',
    description: 'A collection of creative button animations and morphing effects using CSS transforms and transitions.',
    category: 'UI Components',
    thumbnail: '🔘',
    techStack: ['CSS3', 'SCSS', 'JavaScript'],
    status: 'Completed',
    createdAt: '2024-01-08',
    views: 1456,
    likes: 203,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/morphing-buttons',
    codeUrl: 'https://github.com/username/morphing-buttons',
    features: ['Multiple animations', 'Customizable', 'Lightweight', 'Cross-browser']
  },
  {
    id: 5,
    title: 'Fluid Typography System',
    description: 'Responsive typography that scales smoothly across all screen sizes using CSS clamp() and viewport units.',
    category: 'UI Components',
    thumbnail: '📝',
    techStack: ['CSS3', 'SCSS', 'PostCSS'],
    status: 'Completed',
    createdAt: '2024-01-05',
    views: 789,
    likes: 124,
    isStarred: false,
    demoUrl: 'https://experiments.example.com/fluid-typography',
    codeUrl: 'https://github.com/username/fluid-typography',
    features: ['Responsive scaling', 'Accessibility friendly', 'Easy integration', 'Performance optimized']
  },
  {
    id: 6,
    title: 'CSS Grid Art Gallery',
    description: 'Dynamic photo gallery using CSS Grid with masonry layout and smooth image transitions.',
    category: 'UI Components',
    thumbnail: '🖼️',
    techStack: ['CSS Grid', 'JavaScript', 'Intersection Observer'],
    status: 'Completed',
    createdAt: '2024-01-03',
    views: 1123,
    likes: 178,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/grid-gallery',
    codeUrl: 'https://github.com/username/grid-gallery',
    features: ['Masonry layout', 'Lazy loading', 'Lightbox effect', 'Touch gestures']
  },
  {
    id: 7,
    title: 'Scroll-Triggered Animations',
    description: 'Collection of scroll-triggered animations using Intersection Observer API for performance optimization.',
    category: 'Animations',
    thumbnail: '📜',
    techStack: ['Intersection Observer', 'CSS3', 'GSAP'],
    status: 'Completed',
    createdAt: '2024-01-01',
    views: 967,
    likes: 145,
    isStarred: false,
    demoUrl: 'https://experiments.example.com/scroll-animations',
    codeUrl: 'https://github.com/username/scroll-animations',
    features: ['Performance optimized', 'Multiple triggers', 'Customizable timing', 'Accessibility options']
  },
  {
    id: 8,
    title: 'WebGL Shader Playground',
    description: 'Interactive WebGL shader experiments with real-time editing and visual effects.',
    category: 'Animations',
    thumbnail: '🌈',
    techStack: ['WebGL', 'GLSL', 'Three.js'],
    status: 'In Progress',
    createdAt: '2023-12-28',
    views: 543,
    likes: 89,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/webgl-shaders',
    codeUrl: 'https://github.com/username/webgl-shaders',
    features: ['Real-time editing', 'Shader library', 'Export functionality', 'Performance monitoring']
  },
  {
    id: 9,
    title: 'Progressive Web App Template',
    description: 'Modern PWA template with offline support, push notifications, and app-like experience.',
    category: 'Mobile',
    thumbnail: '📱',
    techStack: ['Service Worker', 'Web App Manifest', 'IndexedDB'],
    status: 'Completed',
    createdAt: '2023-12-25',
    views: 1834,
    likes: 267,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/pwa-template',
    codeUrl: 'https://github.com/username/pwa-template',
    features: ['Offline support', 'Push notifications', 'App install prompt', 'Background sync']
  },
  {
    id: 10,
    title: 'Geolocation Weather App',
    description: 'Weather application using Geolocation API with beautiful weather animations and forecasts.',
    category: 'Web APIs',
    thumbnail: '🌤️',
    techStack: ['Geolocation API', 'Weather API', 'CSS Animations'],
    status: 'Completed',
    createdAt: '2023-12-22',
    views: 1267,
    likes: 198,
    isStarred: false,
    demoUrl: 'https://experiments.example.com/weather-app',
    codeUrl: 'https://github.com/username/weather-app',
    features: ['Location detection', 'Weather animations', '7-day forecast', 'Offline caching']
  },
  {
    id: 11,
    title: 'AI Text Summarizer',
    description: 'Text summarization tool using machine learning models with real-time processing.',
    category: 'AI/ML',
    thumbnail: '🤖',
    techStack: ['TensorFlow.js', 'Natural Language Processing', 'Web Workers'],
    status: 'In Progress',
    createdAt: '2023-12-20',
    views: 756,
    likes: 134,
    isStarred: true,
    demoUrl: 'https://experiments.example.com/ai-summarizer',
    codeUrl: 'https://github.com/username/ai-summarizer',
    features: ['Real-time processing', 'Multiple algorithms', 'Adjustable length', 'Export options']
  },
  {
    id: 12,
    title: 'Custom Video Player',
    description: 'Feature-rich HTML5 video player with custom controls, subtitles, and playback speed control.',
    category: 'UI Components',
    thumbnail: '🎬',
    techStack: ['HTML5 Video', 'JavaScript', 'CSS3'],
    status: 'Completed',
    createdAt: '2023-12-18',
    views: 1445,
    likes: 221,
    isStarred: false,
    demoUrl: 'https://experiments.example.com/video-player',
    codeUrl: 'https://github.com/username/video-player',
    features: ['Custom controls', 'Subtitle support', 'Keyboard shortcuts', 'Picture-in-picture']
  }
]

const statusColors = {
  'Completed': 'bg-green-100 text-green-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  'Planned': 'bg-blue-100 text-blue-800'
}

export default function ExperimentsPage() {
  const completedExperiments = experiments.filter(exp => exp.status === 'Completed').length
  const totalViews = experiments.reduce((sum, exp) => sum + exp.views, 0)
  const totalLikes = experiments.reduce((sum, exp) => sum + exp.likes, 0)
  const starredExperiments = experiments.filter(exp => exp.isStarred).length

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Experiments</h1>
        <p className="text-muted-foreground">
          A playground for testing new ideas, technologies, and proof of concepts. Each experiment explores different aspects of web development.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{experiments.length}</div>
          <div className="text-sm text-muted-foreground">Total Experiments</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{completedExperiments}</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{(totalViews / 1000).toFixed(1)}K</div>
          <div className="text-sm text-muted-foreground">Total Views</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{starredExperiments}</div>
          <div className="text-sm text-muted-foreground">Starred</div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {experimentCategories.map((category) => (
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

      {/* Experiments Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment) => (
          <div
            key={experiment.id}
            className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            {/* Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-6xl">{experiment.thumbnail}</span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1">{experiment.title}</h3>
                    {experiment.isStarred && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${statusColors[experiment.status as keyof typeof statusColors]}`}>
                    {experiment.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {experiment.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-medium mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {experiment.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-medium mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {experiment.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                  {experiment.features.length > 3 && (
                    <li className="text-xs text-muted-foreground">
                      +{experiment.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {experiment.views.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {experiment.likes}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(experiment.createdAt).toLocaleDateString()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={experiment.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm flex-1 justify-center"
                >
                  <Play className="h-3 w-3" />
                  Demo
                </a>
                <a
                  href={experiment.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm flex-1 justify-center"
                >
                  <Code className="h-3 w-3" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experiment Philosophy */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-8">
        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Experimentation Philosophy
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-500" />
              Learn by Building
            </h4>
            <p className="text-sm text-muted-foreground">
              Every experiment is an opportunity to learn new technologies, explore different approaches, and push the boundaries of what's possible.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Palette className="h-4 w-4 text-purple-500" />
              Creative Expression
            </h4>
            <p className="text-sm text-muted-foreground">
              Experiments allow for creative freedom to try unconventional ideas, explore artistic coding, and create unique user experiences.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-green-500" />
              Real-World Application
            </h4>
            <p className="text-sm text-muted-foreground">
              Each experiment aims to solve real problems or explore concepts that could be applied to production applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 