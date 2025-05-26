import { Metadata } from 'next'
import { Twitter, Github, Globe, Heart, Star, Users, Code, Palette, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inspirations',
  description: 'People and projects that inspire my work'
}

const inspirationCategories = [
  { name: 'All', count: 12, active: true },
  { name: 'Developers', count: 6, active: false },
  { name: 'Designers', count: 3, active: false },
  { name: 'Entrepreneurs', count: 2, active: false },
  { name: 'Educators', count: 1, active: false },
]

const inspirations = [
  {
    id: 1,
    name: 'Dan Abramov',
    role: 'Software Engineer at Meta',
    category: 'Developers',
    avatar: '👨‍💻',
    description: 'Co-creator of Redux and Create React App. His deep understanding of React internals and ability to explain complex concepts simply has shaped how I think about state management and component architecture.',
    whyInspiring: 'His commitment to open source, thoughtful approach to problem-solving, and ability to make complex topics accessible to everyone.',
    achievements: ['Co-created Redux', 'Built Create React App', 'React Core Team member'],
    links: {
      twitter: 'https://twitter.com/dan_abramov',
      github: 'https://github.com/gaearon',
      website: 'https://overreacted.io'
    },
    tags: ['React', 'Redux', 'Open Source', 'Education']
  },
  {
    id: 2,
    name: 'Vercel Team',
    role: 'Next.js Creators',
    category: 'Developers',
    avatar: '▲',
    description: 'The team behind Next.js and Vercel platform. Their focus on developer experience and pushing the boundaries of what\'s possible with React and web development continues to inspire my work.',
    whyInspiring: 'Their relentless focus on developer experience, innovation in web development, and building tools that make developers more productive.',
    achievements: ['Created Next.js', 'Built Vercel platform', 'Pioneered edge computing'],
    links: {
      twitter: 'https://twitter.com/vercel',
      github: 'https://github.com/vercel',
      website: 'https://vercel.com'
    },
    tags: ['Next.js', 'Developer Experience', 'Innovation', 'Platform']
  },
  {
    id: 3,
    name: 'Kent C. Dodds',
    role: 'Full Stack Developer & Educator',
    category: 'Educators',
    avatar: '🧑‍🏫',
    description: 'Creator of Testing Library and Epic React. His teaching philosophy and emphasis on practical, real-world development practices have greatly influenced my approach to testing and learning.',
    whyInspiring: 'His dedication to teaching, focus on practical skills, and building tools that improve code quality and developer confidence.',
    achievements: ['Created Testing Library', 'Built Epic React course', 'Prolific educator'],
    links: {
      twitter: 'https://twitter.com/kentcdodds',
      github: 'https://github.com/kentcdodds',
      website: 'https://kentcdodds.com'
    },
    tags: ['Testing', 'Education', 'React', 'Best Practices']
  },
  {
    id: 4,
    name: 'Figma Team',
    role: 'Design Tool Innovators',
    category: 'Designers',
    avatar: '🎨',
    description: 'The team that revolutionized design collaboration. Their approach to building intuitive, powerful tools and fostering design-developer collaboration inspires my work on user interfaces.',
    whyInspiring: 'Their innovation in design tools, focus on collaboration, and ability to make complex design workflows simple and accessible.',
    achievements: ['Revolutionized design collaboration', 'Built web-based design tool', 'Improved design-dev handoff'],
    links: {
      twitter: 'https://twitter.com/figma',
      github: 'https://github.com/figma',
      website: 'https://figma.com'
    },
    tags: ['Design', 'Collaboration', 'Innovation', 'Tools']
  },
  {
    id: 5,
    name: 'Guillermo Rauch',
    role: 'CEO of Vercel',
    category: 'Entrepreneurs',
    avatar: '🚀',
    description: 'Founder of Vercel and creator of Socket.io. His vision for the future of web development and focus on developer experience continues to shape the industry.',
    whyInspiring: 'His entrepreneurial spirit, technical vision, and commitment to improving the developer experience across the entire web development ecosystem.',
    achievements: ['Founded Vercel', 'Created Socket.io', 'Pioneered real-time web'],
    links: {
      twitter: 'https://twitter.com/rauchg',
      github: 'https://github.com/rauchg',
      website: 'https://rauchg.com'
    },
    tags: ['Entrepreneurship', 'Vision', 'Real-time', 'Leadership']
  },
  {
    id: 6,
    name: 'Addy Osmani',
    role: 'Engineering Manager at Google',
    category: 'Developers',
    avatar: '⚡',
    description: 'Google Chrome team member focused on web performance. His work on performance optimization and developer tools has shaped how I think about building fast, efficient web applications.',
    whyInspiring: 'His deep expertise in web performance, commitment to making the web faster, and ability to translate complex performance concepts into actionable insights.',
    achievements: ['Chrome DevTools contributor', 'Web performance expert', 'Author of multiple books'],
    links: {
      twitter: 'https://twitter.com/addyosmani',
      github: 'https://github.com/addyosmani',
      website: 'https://addyosmani.com'
    },
    tags: ['Performance', 'Chrome', 'Optimization', 'Tools']
  },
  {
    id: 7,
    name: 'Sarah Drasner',
    role: 'VP of Developer Experience at Netlify',
    category: 'Developers',
    avatar: '🌟',
    description: 'Expert in Vue.js, SVG animations, and developer experience. Her creative approach to web development and focus on making development more enjoyable inspires my work.',
    whyInspiring: 'Her creativity in web development, expertise in animations, and dedication to improving developer experience and making coding more accessible.',
    achievements: ['Vue.js core team', 'SVG animation expert', 'Developer experience leader'],
    links: {
      twitter: 'https://twitter.com/sarah_edo',
      github: 'https://github.com/sdras',
      website: 'https://sarah.dev'
    },
    tags: ['Vue.js', 'Animation', 'Developer Experience', 'Creativity']
  },
  {
    id: 8,
    name: 'Tobias Koppers',
    role: 'Creator of Webpack',
    category: 'Developers',
    avatar: '📦',
    description: 'Creator of Webpack and Turbopack. His work on build tools and module bundling has fundamentally changed how we develop and deploy web applications.',
    whyInspiring: 'His technical innovation in build tools, solving complex problems that affect millions of developers, and continuous push for better developer tooling.',
    achievements: ['Created Webpack', 'Built Turbopack', 'Revolutionized bundling'],
    links: {
      twitter: 'https://twitter.com/wSokra',
      github: 'https://github.com/sokra',
      website: 'https://github.com/sokra'
    },
    tags: ['Webpack', 'Build Tools', 'Innovation', 'Performance']
  },
  {
    id: 9,
    name: 'Stripe Team',
    role: 'Payment Infrastructure',
    category: 'Entrepreneurs',
    avatar: '💳',
    description: 'The team that made online payments simple and developer-friendly. Their API design, documentation quality, and developer experience set the gold standard for B2B products.',
    whyInspiring: 'Their exceptional API design, world-class documentation, and focus on making complex financial infrastructure simple and accessible for developers.',
    achievements: ['Simplified online payments', 'Set API design standards', 'Built developer-first platform'],
    links: {
      twitter: 'https://twitter.com/stripe',
      github: 'https://github.com/stripe',
      website: 'https://stripe.com'
    },
    tags: ['API Design', 'Documentation', 'Developer Experience', 'Fintech']
  },
  {
    id: 10,
    name: 'Dribbble Community',
    role: 'Design Inspiration',
    category: 'Designers',
    avatar: '🏀',
    description: 'The global design community that shares creative work daily. The quality and creativity of designs shared on Dribbble constantly pushes me to improve my UI/UX skills.',
    whyInspiring: 'The incredible creativity, attention to detail, and innovative design solutions shared by the community inspire me to think differently about user interfaces.',
    achievements: ['Global design community', 'Platform for creative inspiration', 'Showcase of design excellence'],
    links: {
      twitter: 'https://twitter.com/dribbble',
      website: 'https://dribbble.com'
    },
    tags: ['Design', 'Community', 'Inspiration', 'Creativity']
  },
  {
    id: 11,
    name: 'Linear Team',
    role: 'Product Design Excellence',
    category: 'Designers',
    avatar: '📐',
    description: 'The team behind Linear\'s exceptional product design and user experience. Their attention to detail, performance, and user-centric design philosophy inspires my approach to building products.',
    whyInspiring: 'Their obsession with performance, beautiful design, and creating products that users genuinely love to use every day.',
    achievements: ['Built Linear project management tool', 'Set new standards for product design', 'Exceptional user experience'],
    links: {
      twitter: 'https://twitter.com/linear',
      website: 'https://linear.app'
    },
    tags: ['Product Design', 'Performance', 'User Experience', 'Attention to Detail']
  },
  {
    id: 12,
    name: 'Evan You',
    role: 'Creator of Vue.js',
    category: 'Developers',
    avatar: '💚',
    description: 'Creator of Vue.js and Vite. His approach to building developer-friendly frameworks and tools, along with his dedication to the open-source community, continues to inspire my work.',
    whyInspiring: 'His ability to create intuitive, powerful tools that make development more enjoyable, and his commitment to open-source and community building.',
    achievements: ['Created Vue.js', 'Built Vite', 'Independent open-source maintainer'],
    links: {
      twitter: 'https://twitter.com/youyuxi',
      github: 'https://github.com/yyx990803',
      website: 'https://evanyou.me'
    },
    tags: ['Vue.js', 'Vite', 'Open Source', 'Framework Design']
  }
]

export default function InspirationsPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Inspirations</h1>
        <p className="text-muted-foreground">
          People, teams, and projects that inspire my development journey and shape how I think about building great software.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{inspirations.length}</div>
          <div className="text-sm text-muted-foreground">Inspirations</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{inspirationCategories.length - 1}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{inspirations.filter(i => i.links.github).length}</div>
          <div className="text-sm text-muted-foreground">Open Source</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{inspirations.reduce((sum, i) => sum + i.achievements.length, 0)}</div>
          <div className="text-sm text-muted-foreground">Achievements</div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {inspirationCategories.map((category) => (
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

      {/* Inspirations Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {inspirations.map((inspiration) => (
          <div
            key={inspiration.id}
            className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{inspiration.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{inspiration.name}</h3>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">
                    {inspiration.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{inspiration.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {inspiration.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  Why They Inspire Me
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {inspiration.whyInspiring}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {inspiration.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {inspiration.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                {inspiration.links.website && (
                  <a
                    href={inspiration.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    Website
                  </a>
                )}
                {inspiration.links.twitter && (
                  <a
                    href={inspiration.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-3 w-3" />
                    Twitter
                  </a>
                )}
                {inspiration.links.github && (
                  <a
                    href={inspiration.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration Philosophy */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-8">
        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          What Inspires Me
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-500" />
              Technical Excellence
            </h4>
            <p className="text-sm text-muted-foreground">
              People who push the boundaries of what&apos;s possible with technology, create innovative solutions, and share their knowledge with the community.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-green-500" />
              Community Impact
            </h4>
            <p className="text-sm text-muted-foreground">
              Individuals and teams who contribute to open source, educate others, and help build a more inclusive and collaborative developer community.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Palette className="h-4 w-4 text-purple-500" />
              Design Thinking
            </h4>
            <p className="text-sm text-muted-foreground">
              Creators who prioritize user experience, pay attention to details, and understand that great software is not just functional but also beautiful and intuitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 