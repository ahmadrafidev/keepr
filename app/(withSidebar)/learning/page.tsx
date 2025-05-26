import { Metadata } from 'next'
import { BookOpen, Target, Clock, CheckCircle, PlayCircle, ExternalLink, TrendingUp, Award, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Current learning goals and resources'
}

const learningPaths = [
  {
    id: 1,
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into advanced TypeScript features and design patterns',
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    estimatedTime: '6 weeks',
    difficulty: 'Advanced',
    category: 'Programming',
    status: 'In Progress',
    nextLesson: 'Conditional Types in Practice',
    instructor: 'Matt Pocock',
    platform: 'TypeScript Wizardry'
  },
  {
    id: 2,
    title: 'System Design Fundamentals',
    description: 'Learn to design scalable and reliable distributed systems',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    estimatedTime: '8 weeks',
    difficulty: 'Intermediate',
    category: 'Architecture',
    status: 'In Progress',
    nextLesson: 'Database Sharding Strategies',
    instructor: 'Alex Xu',
    platform: 'System Design Interview'
  },
  {
    id: 3,
    title: 'React Performance Optimization',
    description: 'Master React performance optimization techniques and best practices',
    progress: 100,
    totalLessons: 16,
    completedLessons: 16,
    estimatedTime: '4 weeks',
    difficulty: 'Advanced',
    category: 'Frontend',
    status: 'Completed',
    nextLesson: null,
    instructor: 'Kent C. Dodds',
    platform: 'Epic React'
  },
  {
    id: 4,
    title: 'AWS Cloud Architecture',
    description: 'Build and deploy scalable applications on AWS cloud platform',
    progress: 20,
    totalLessons: 40,
    completedLessons: 8,
    estimatedTime: '10 weeks',
    difficulty: 'Intermediate',
    category: 'Cloud',
    status: 'In Progress',
    nextLesson: 'EC2 Instance Types and Selection',
    instructor: 'Stephane Maarek',
    platform: 'AWS Certified Solutions Architect'
  }
]

const currentGoals = [
  {
    id: 1,
    title: 'Complete TypeScript Advanced Course',
    description: 'Finish the remaining 6 lessons by end of month',
    deadline: '2024-01-31',
    priority: 'High',
    progress: 75,
    category: 'Skill Development'
  },
  {
    id: 2,
    title: 'Build a Full-Stack Project',
    description: 'Create a complete application using Next.js, TypeScript, and PostgreSQL',
    deadline: '2024-02-15',
    priority: 'Medium',
    progress: 30,
    category: 'Project'
  },
  {
    id: 3,
    title: 'Read "Designing Data-Intensive Applications"',
    description: 'Complete reading and take comprehensive notes',
    deadline: '2024-02-28',
    priority: 'Medium',
    progress: 60,
    category: 'Reading'
  },
  {
    id: 4,
    title: 'Contribute to Open Source',
    description: 'Make meaningful contributions to 3 open source projects',
    deadline: '2024-03-31',
    priority: 'Low',
    progress: 15,
    category: 'Community'
  }
]

const resources = [
  {
    id: 1,
    title: 'TypeScript Handbook',
    type: 'Documentation',
    url: 'https://typescriptlang.org/docs',
    category: 'Programming',
    rating: 5,
    isBookmarked: true
  },
  {
    id: 2,
    title: 'System Design Primer',
    type: 'GitHub Repository',
    url: 'https://github.com/donnemartin/system-design-primer',
    category: 'Architecture',
    rating: 5,
    isBookmarked: true
  },
  {
    id: 3,
    title: 'React Beta Docs',
    type: 'Documentation',
    url: 'https://react.dev',
    category: 'Frontend',
    rating: 5,
    isBookmarked: true
  },
  {
    id: 4,
    title: 'AWS Well-Architected Framework',
    type: 'Guide',
    url: 'https://aws.amazon.com/architecture/well-architected',
    category: 'Cloud',
    rating: 4,
    isBookmarked: false
  }
]

const achievements = [
  {
    title: 'TypeScript Expert',
    description: 'Completed advanced TypeScript certification',
    date: '2024-01-10',
    icon: Award
  },
  {
    title: 'React Performance Master',
    description: 'Finished React Performance Optimization course',
    date: '2024-01-05',
    icon: TrendingUp
  },
  {
    title: 'Consistent Learner',
    description: '30-day learning streak achieved',
    date: '2023-12-25',
    icon: Target
  }
]

export default function LearningPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning</h1>
        <p className="text-muted-foreground">
          Tracking my learning journey and educational goals in software development.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">4</div>
          <div className="text-sm text-muted-foreground">Active Courses</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">58%</div>
          <div className="text-sm text-muted-foreground">Avg Progress</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">112</div>
          <div className="text-sm text-muted-foreground">Hours Learned</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-sm text-muted-foreground">Achievements</div>
        </div>
      </div>

      {/* Current Learning Paths */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Current Learning Paths</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{path.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{path.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {path.completedLessons}/{path.totalLessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {path.estimatedTime}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    path.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {path.status}
                  </span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">
                    {path.difficulty}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{path.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Instructor:</span>
                  <span className="font-medium">{path.instructor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="font-medium">{path.platform}</span>
                </div>
                {path.nextLesson && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Next:</span>
                    <span className="font-medium text-primary">{path.nextLesson}</span>
                  </div>
                )}
              </div>

              {path.status !== 'Completed' && (
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  <PlayCircle className="h-4 w-4" />
                  Continue Learning
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Learning Goals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {currentGoals.map((goal) => (
            <div
              key={goal.id}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  goal.priority === 'High' 
                    ? 'bg-red-100 text-red-800'
                    : goal.priority === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {goal.priority}
                </span>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Due: {new Date(goal.deadline).toLocaleDateString()}
                </div>
                <span className="text-xs bg-secondary px-2 py-1 rounded">
                  {goal.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Learning Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm">{resource.title}</h3>
                {resource.isBookmarked && (
                  <BookOpen className="h-4 w-4 text-primary" />
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-3">{resource.type}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-secondary px-2 py-1 rounded">
                  {resource.category}
                </span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  Visit
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Achievements</h2>
        <div className="space-y-3">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-card border rounded-lg p-4"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(achievement.date).toLocaleDateString()}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 