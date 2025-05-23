# Development Guide

This guide covers the development workflow, architecture, best practices, and contribution guidelines for Keepr.

## 🏗️ Architecture Overview

Keepr is built using modern web technologies with a focus on performance, maintainability, and user experience.

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with CSS variables
- **UI Components**: Shadcn UI + Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Package Manager**: pnpm (recommended)

### Project Structure

```
keepr/
├── app/                     # Next.js App Router
│   ├── (withSidebar)/      # Route group with sidebar layout
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Landing page
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   ├── home/               # Home page specific components
│   ├── sidebar/            # Sidebar related components
│   ├── types/              # TypeScript type definitions
│   ├── custom-sidebar.tsx  # Main sidebar component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Theme switcher component
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
├── docs/                   # Documentation
└── config files           # Configuration files
```

## 🚀 Development Workflow

### Setting Up Development Environment

1. **Prerequisites**
   ```bash
   # Check versions
   node --version  # Should be 18.17+
   pnpm --version  # Should be 8.0+
   ```

2. **Clone and Install**
   ```bash
   git clone https://github.com/yourusername/keepr.git
   cd keepr
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```

### Development Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript compiler check |

### Recommended VSCode Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### VSCode Settings

```json
// .vscode/settings.json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "'([^']*)'"],
    ["clsx\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```

## 🎯 Development Best Practices

### Component Development

#### 1. Component Structure

```typescript
// components/example/example-component.tsx
import { memo, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ExampleComponentProps {
  className?: string
  children?: React.ReactNode
  variant?: 'default' | 'secondary'
  // Always define prop types
}

export const ExampleComponent = memo<ExampleComponentProps>(
  function ExampleComponent({ 
    className, 
    children, 
    variant = 'default',
    ...props 
  }) {
    return (
      <div 
        className={cn(
          // Base styles
          "flex items-center space-x-2",
          // Variant styles
          {
            'bg-primary text-primary-foreground': variant === 'default',
            'bg-secondary text-secondary-foreground': variant === 'secondary',
          },
          // User className
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
```

#### 2. Server Components vs Client Components

```typescript
// Prefer Server Components (default)
// app/(withSidebar)/section/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Section Title',
  description: 'Section description',
}

export default function SectionPage() {
  // Server component - can fetch data, no client-side JS
  return (
    <div>
      <h1>Section Content</h1>
    </div>
  )
}

// Use Client Components only when needed
// components/interactive-component.tsx
'use client'

import { useState } from 'react'

export function InteractiveComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}
```

#### 3. Custom Hooks

```typescript
// hooks/use-local-storage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
```

### Styling Guidelines

#### 1. Tailwind CSS Best Practices

```typescript
// ❌ Avoid: Conditional classes in template
<div className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}>

// ✅ Good: Use cn utility with conditional objects
<div className={cn(
  "p-4",
  {
    'bg-blue-500': isActive,
    'bg-gray-500': !isActive,
  }
)}>

// ✅ Even better: Use semantic CSS variables
<div className={cn(
  "p-4",
  {
    'bg-primary': isActive,
    'bg-muted': !isActive,
  }
)}>
```

#### 2. CSS Variables Usage

```css
/* Use semantic color names */
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
}

/* Avoid magic numbers */
/* ❌ */ --custom-color: #3b82f6;
/* ✅ */ --primary: 221.2 83.2% 53.3%;
```

### TypeScript Guidelines

#### 1. Type Definitions

```typescript
// types/index.ts
export interface SidebarItem {
  title: string
  path?: string
  external?: boolean
  icon?: string
  description?: string
}

export interface SidebarSection {
  title: string
  items: SidebarItem[]
}

// Use strict typing
export interface ComponentProps {
  children: React.ReactNode        // Not ReactNode
  className?: string               // Optional props with ?
  onClick?: (event: MouseEvent) => void  // Specific event types
}
```

#### 2. Generic Types

```typescript
// utils/data.ts
export interface APIResponse<T> {
  data: T
  status: 'success' | 'error'
  message?: string
}

export function fetchData<T>(url: string): Promise<APIResponse<T>> {
  // Implementation
}

// Usage
const userResponse = await fetchData<User>('/api/user')
const postsResponse = await fetchData<Post[]>('/api/posts')
```

### Performance Best Practices

#### 1. Component Optimization

```typescript
// Use memo for expensive components
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return expensiveDataProcessing(data)
  }, [data])
  
  const handleClick = useCallback((id: string) => {
    // Handle click
  }, [])
  
  return <div>{/* Component JSX */}</div>
})

// Use dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // If component doesn't need SSR
})
```

#### 2. Image Optimization

```typescript
import Image from 'next/image'
import { memo } from 'react'

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      className={className}
      priority={false}  // Set to true for above-the-fold images
      placeholder="blur" // Add blur placeholder
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..." // Low-res base64
    />
  )
})
```

## 🧪 Testing Guidelines

### Component Testing

```typescript
// components/__tests__/example-component.test.tsx
import { render, screen } from '@testing-library/react'
import { ExampleComponent } from '../example-component'

describe('ExampleComponent', () => {
  it('renders children correctly', () => {
    render(<ExampleComponent>Test content</ExampleComponent>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <ExampleComponent className="custom-class">Content</ExampleComponent>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
```

### Testing Setup

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

## 📁 File Organization

### Naming Conventions

```
components/
├── ui/                     # Shadcn UI components (kebab-case)
│   ├── button.tsx
│   ├── dialog.tsx
│   └── input.tsx
├── feature/                # Feature-specific components (kebab-case)
│   ├── feature-component.tsx
│   └── feature-utils.ts
└── shared/                 # Shared components (kebab-case)
    ├── layout-header.tsx
    └── navigation-menu.tsx
```

### Import Organization

```typescript
// 1. React imports
import { useState, useEffect, memo } from 'react'

// 2. Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// 3. Third-party libraries
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

// 4. Internal utilities
import { cn } from '@/lib/utils'

// 5. Internal components
import { Button } from '@/components/ui/button'
import { CustomComponent } from '@/components/custom-component'

// 6. Types
import type { ComponentProps } from '@/types'
```

## 🔄 Git Workflow

### Branch Naming

```bash
# Feature branches
git checkout -b feature/sidebar-improvements
git checkout -b feature/add-search-functionality

# Bug fixes
git checkout -b fix/navigation-mobile-issue
git checkout -b fix/theme-toggle-bug

# Documentation
git checkout -b docs/update-readme
git checkout -b docs/add-deployment-guide
```

### Commit Messages

```bash
# Format: type(scope): description

# Features
git commit -m "feat(sidebar): add collapsible navigation"
git commit -m "feat(theme): implement dark mode toggle"

# Fixes
git commit -m "fix(mobile): resolve sidebar overlay issue"
git commit -m "fix(build): resolve TypeScript compilation errors"

# Documentation
git commit -m "docs(readme): update installation instructions"
git commit -m "docs(api): add component prop documentation"

# Refactoring
git commit -m "refactor(components): extract reusable button component"
git commit -m "refactor(utils): optimize className utility function"
```

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All existing tests pass

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Changes are documented
- [ ] No new warnings or errors introduced
```

## 🚀 Deployment Considerations

### Build Optimization

```typescript
// next.config.ts
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Bundle analysis
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Add bundle analyzer in development
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: process.env.ANALYZE === 'true',
        })
      )
    }
    return config
  },
}
```

### Environment-Specific Configurations

```typescript
// lib/config.ts
const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

export const config = {
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Keepr',
  },
  features: {
    analytics: isProduction && process.env.NEXT_PUBLIC_GA_ID,
    debug: isDevelopment,
  },
}
```

## 📝 Documentation Standards

### Component Documentation

```typescript
/**
 * A reusable button component with multiple variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** The visual style variant */
  variant?: 'primary' | 'secondary' | 'outline'
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** Whether the button is disabled */
  disabled?: boolean
  /** Click handler function */
  onClick?: (event: MouseEvent) => void
  /** Button content */
  children: React.ReactNode
}
```

### README Structure

Each feature should include:

1. **Purpose**: What the component/feature does
2. **Usage**: How to use it with examples
3. **Props**: All available props with types
4. **Examples**: Code examples with different use cases
5. **Notes**: Any important considerations

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Update documentation
6. Submit a pull request

### Code Review Process

1. **Automated Checks**: Ensure all CI checks pass
2. **Code Quality**: Follow established patterns and conventions
3. **Performance**: Consider performance implications
4. **Accessibility**: Ensure components are accessible
5. **Documentation**: Update relevant documentation

---

Happy coding! 🎉 Remember that good code is not just working code, but code that others can easily understand, maintain, and extend. 