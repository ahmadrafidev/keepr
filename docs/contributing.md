# Contributing to Keepr

Thank you for your interest in contributing to Keepr! This guide will help you get started with contributing to this personal knowledge management system.

## 🎯 Types of Contributions

We welcome various types of contributions:

- **🐛 Bug Reports**: Help us identify and fix issues
- **✨ Feature Requests**: Suggest new features or improvements
- **📖 Documentation**: Improve or expand documentation
- **🔧 Code Contributions**: Fix bugs or implement new features
- **🎨 Design Improvements**: Enhance UI/UX or visual design
- **🧪 Testing**: Add or improve tests
- **🌐 Translations**: Help make Keepr available in more languages

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** 18.17 or higher
- **pnpm** (recommended package manager)
- **Git** for version control
- A **GitHub account**

### Setting Up Your Development Environment

1. **Fork the Repository**
   ```bash
   # Visit https://github.com/ahmadrafidev/Keepr.git and click "Fork"
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/ahmadrafidev/Keepr.git
   cd keepr
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/ahmadrafidev/Keepr.git
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

6. **Verify Setup**
   - Open [http://localhost:3000](http://localhost:3000)
   - Ensure the application loads correctly
   - Test theme toggle and navigation

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

1. **Check Existing Issues**: Search for similar issues in the [GitHub Issues](https://github.com/yourusername/keepr/issues)
2. **Verify the Bug**: Ensure the issue exists in the latest version
3. **Check Documentation**: Review the [Troubleshooting Guide](./troubleshooting.md)

### How to Submit a Bug Report

Use the following template when creating a bug report:

```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
A clear description of what you expected to happen.

## Actual Behavior
A clear description of what actually happened.

## Screenshots
If applicable, add screenshots to help explain the problem.

## Environment
- OS: [e.g. macOS 12.6, Windows 10, Ubuntu 20.04]
- Browser: [e.g. Chrome 95, Firefox 94, Safari 15]
- Node.js version: [e.g. 18.17.0]
- Keepr version: [e.g. 1.0.0]

## Additional Context
Add any other context about the problem here.

## Possible Solution
If you have suggestions on how to fix the bug, please include them.
```

## ✨ Suggesting Features

### Before Submitting a Feature Request

1. **Check Existing Requests**: Look for similar feature requests
2. **Consider the Scope**: Ensure the feature aligns with Keepr's goals
3. **Think About Implementation**: Consider how the feature might work

### Feature Request Template

```markdown
## Feature Summary
A brief summary of the feature you'd like to see.

## Problem Statement
What problem does this feature solve? Why is it needed?

## Proposed Solution
Describe your proposed solution in detail.

## Alternatives Considered
Describe any alternative solutions you've considered.

## Additional Context
Add any other context, mockups, or examples about the feature.

## Implementation Notes
If you have ideas about how this could be implemented, share them here.
```

## 🔧 Code Contributions

### Workflow for Code Contributions

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make Your Changes**
   - Follow the [Development Guide](./development.md)
   - Write clean, readable code
   - Follow existing code patterns
   - Add comments for complex logic

3. **Test Your Changes**
   ```bash
   # Run the development server
   pnpm dev
   
   # Build to check for errors
   pnpm build
   
   # Run linting
   pnpm lint
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat(component): add new feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill out the PR template

### Code Style Guidelines

#### TypeScript
```typescript
// ✅ Good: Use explicit types
interface ComponentProps {
  title: string
  isVisible?: boolean
  onClick: (id: string) => void
}

// ✅ Good: Use meaningful names
const handleUserClick = (userId: string) => {
  // Implementation
}

// ❌ Avoid: Unclear abbreviations
const handleUC = (uid: string) => {
  // Implementation
}
```

#### React Components
```typescript
// ✅ Good: Functional component with proper typing
export const UserCard = memo<ComponentProps>(function UserCard({
  title,
  isVisible = true,
  onClick,
}) {
  return (
    <div className={cn("p-4", { hidden: !isVisible })}>
      <h3>{title}</h3>
      <button onClick={() => onClick('user-id')}>Click me</button>
    </div>
  )
})
```

#### Styling
```typescript
// ✅ Good: Use semantic class names and cn utility
<div className={cn(
  "flex items-center space-x-2",
  {
    'bg-primary text-primary-foreground': isActive,
    'bg-muted text-muted-foreground': !isActive,
  }
)}>

// ❌ Avoid: Inline styles or magic values
<div style={{ backgroundColor: '#3b82f6', padding: '16px' }}>
```

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format: type(scope): description

# Types:
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks

# Examples:
git commit -m "feat(sidebar): add collapsible navigation"
git commit -m "fix(theme): resolve dark mode toggle issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "refactor(utils): improve className utility performance"
```

## 📖 Documentation Contributions

### Types of Documentation

- **User Documentation**: Guides for end users
- **Developer Documentation**: Technical guides for contributors
- **API Documentation**: Component and function documentation
- **Examples**: Code examples and tutorials

### Documentation Standards

1. **Clear Structure**: Use headings, lists, and sections
2. **Code Examples**: Include working code snippets
3. **Screenshots**: Add visuals when helpful
4. **Up-to-date**: Ensure information is current
5. **Accessible**: Write for all skill levels

### Documentation Template

```markdown
# Feature/Component Name

Brief description of what this feature or component does.

## Overview

More detailed explanation of the purpose and functionality.

## Usage

### Basic Example

```typescript
// Simple usage example
<Component prop="value" />
```

### Advanced Example

```typescript
// More complex usage with multiple props
<Component
  prop1="value1"
  prop2="value2"
  onAction={handleAction}
>
  Content
</Component>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prop1` | `string` | - | Description of prop1 |
| `prop2` | `boolean` | `false` | Description of prop2 |

## Notes

Any important notes, limitations, or considerations.
```

## 🧪 Testing Contributions

### Types of Tests

1. **Unit Tests**: Test individual components/functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows

### Writing Tests

```typescript
// components/__tests__/user-card.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { UserCard } from '../user-card'

describe('UserCard', () => {
  const mockOnClick = jest.fn()

  beforeEach(() => {
    mockOnClick.mockClear()
  })

  it('renders the title correctly', () => {
    render(<UserCard title="Test User" onClick={mockOnClick} />)
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('calls onClick when button is clicked', () => {
    render(<UserCard title="Test User" onClick={mockOnClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockOnClick).toHaveBeenCalledWith('user-id')
  })

  it('hides when isVisible is false', () => {
    render(<UserCard title="Test User" isVisible={false} onClick={mockOnClick} />)
    expect(screen.getByText('Test User').parentElement).toHaveClass('hidden')
  })
})
```

## 🎨 Design Contributions

### Design Guidelines

1. **Consistency**: Follow existing design patterns
2. **Accessibility**: Ensure designs are accessible
3. **Responsive**: Design for all screen sizes
4. **Performance**: Consider performance implications

### Design Process

1. **Research**: Understand the problem and users
2. **Ideate**: Brainstorm multiple solutions
3. **Prototype**: Create mockups or prototypes
4. **Feedback**: Get input from maintainers
5. **Implement**: Work with developers to implement

### Design Tools

Recommended tools for design contributions:

- **Figma**: For UI/UX design and prototyping
- **Sketch**: Alternative design tool
- **Adobe XD**: For design and prototyping
- **Canva**: For simple graphics and assets

## 📋 Pull Request Process

### Pull Request Template

```markdown
## Description

Brief description of the changes made.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Design improvement
- [ ] Performance improvement
- [ ] Code refactoring

## Related Issues

Closes #[issue number]

## Changes Made

- [ ] Added new component
- [ ] Updated existing functionality
- [ ] Fixed bug in navigation
- [ ] Improved documentation
- [ ] Added tests

## Testing

- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All existing tests pass
- [ ] Tested on different screen sizes
- [ ] Tested dark/light mode

## Screenshots

Add screenshots to show the changes (if applicable).

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs automatically
2. **Manual Review**: Maintainers review the code
3. **Feedback**: Address any feedback or requests
4. **Approval**: PR gets approved by maintainers
5. **Merge**: Changes are merged into main branch

## 🏷️ Issue Labels

Understanding our label system:

### Type Labels
- `bug`: Something isn't working
- `feature`: New feature or enhancement
- `documentation`: Documentation improvements
- `question`: Further information is requested

### Priority Labels
- `priority: high`: Critical issues
- `priority: medium`: Important but not urgent
- `priority: low`: Nice to have

### Difficulty Labels
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `advanced`: Requires deep knowledge

### Component Labels
- `component: sidebar`: Sidebar related
- `component: theme`: Theme/styling related
- `component: navigation`: Navigation related

## 🤝 Community Guidelines

### Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

1. **Be Respectful**: Treat everyone with respect and kindness
2. **Be Inclusive**: Welcome newcomers and different perspectives
3. **Be Constructive**: Provide helpful feedback and suggestions
4. **Be Patient**: Remember that everyone has different experience levels
5. **Be Professional**: Keep discussions focused and productive

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and community chat
- **Pull Request Comments**: For code-specific discussions

## 🎉 Recognition

Contributors will be recognized in the following ways:

1. **Contributors List**: Added to the project's contributors list
2. **Release Notes**: Mentioned in release notes for significant contributions
3. **Special Thanks**: Highlighted for exceptional contributions

## 📚 Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)

### Tools

- [Keepr Development Guide](./development.md)
- [Keepr Configuration Guide](./configuration.md)
- [Keepr Troubleshooting Guide](./troubleshooting.md)

## ❓ Questions?

If you have questions about contributing:

1. Check the [documentation](./README.md)
2. Search [existing issues](https://github.com/yourusername/keepr/issues)
3. Create a new [discussion](https://github.com/yourusername/keepr/discussions)
4. Open a new issue with the `question` label

---

Thank you for contributing to Keepr! Your contributions help make this project better for everyone. 🙏 