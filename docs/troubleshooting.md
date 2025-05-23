# Troubleshooting Guide

This guide covers common issues you might encounter while setting up, customizing, or deploying Keepr, along with their solutions.

## 🚨 Common Setup Issues

### Node.js Version Problems

**Issue**: Build fails with Node.js version errors
```
Error: You are using Node.js 16.x. Please upgrade to Node.js 18.17 or higher.
```

**Solution**:
```bash
# Check your Node.js version
node --version

# Install/update Node.js using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Or download from nodejs.org
# https://nodejs.org/en/download/
```

### Package Manager Issues

**Issue**: `pnpm` command not found
```
bash: pnpm: command not found
```

**Solution**:
```bash
# Install pnpm globally
npm install -g pnpm

# Or use alternative installation
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Alternative: Use npm instead
npm install
npm run dev
```

**Issue**: Lock file conflicts
```
Error: Cannot resolve workspace dependencies
```

**Solution**:
```bash
# Delete lock files and node_modules
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json

# Reinstall dependencies
pnpm install  # or npm install
```

## 🔧 Development Issues

### Port Already in Use

**Issue**: Port 3000 is already in use
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution**:
```bash
# Option 1: Use a different port
pnpm dev -p 3001

# Option 2: Kill the process using port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000  # Windows (then kill the PID)

# Option 3: Set PORT environment variable
PORT=3001 pnpm dev
```

### TypeScript Errors

**Issue**: TypeScript compilation errors
```
Type error: Cannot find module '@/components/ui/button'
```

**Solution**:
```bash
# Check TypeScript configuration
cat tsconfig.json

# Ensure paths are configured correctly
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}

# Restart TypeScript server in your IDE
# VS Code: Ctrl+Shift+P > "TypeScript: Restart TS Server"
```

**Issue**: Module not found errors
```
Module not found: Can't resolve '@/lib/utils'
```

**Solution**:
```bash
# Check if the file exists
ls lib/utils.ts

# Verify import paths are correct
# Should be relative to project root due to @ alias

# If file is missing, create it:
mkdir -p lib
echo 'export function cn(...args: any[]) { return args.join(" ") }' > lib/utils.ts
```

### Styling Issues

**Issue**: Tailwind CSS not working
```
Styles not applying, classes appear as plain text
```

**Solution**:
```bash
# Check Tailwind config
cat tailwind.config.ts

# Ensure content paths include all component files
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ...
}

# Check if Tailwind is imported in globals.css
head -n 5 app/globals.css
# Should include:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
```

## 🎨 Customization Issues

### Sidebar Navigation Problems

**Issue**: New sidebar items not appearing
```
Added new items to sidebar config but they don't show up
```

**Solution**:
```typescript
// Check components/types/sidebar.ts
// Ensure your new items follow the correct structure:
{
  title: 'Your Item',
  path: '/your-path',     // Must start with /
  icon: 'ValidIconName',  // Must be valid Lucide icon
  description: 'Description'
}

// Check if the corresponding page exists:
// app/(withSidebar)/your-path/page.tsx
```

**Issue**: Icons not displaying
```
Sidebar shows text instead of icons
```

**Solution**:
```typescript
// Verify icon names are correct Lucide React icons
// Check: https://lucide.dev/icons/

// Common icon names:
// Home, User, Settings, BookOpen, etc.

// In components/sidebar/navigation-item.tsx
// Ensure icon rendering logic is correct
```

### Theme Issues

**Issue**: Dark/light mode not working
```
Theme toggle doesn't switch colors
```

**Solution**:
```bash
# Check if next-themes is properly configured
# In app/layout.tsx:
import { ThemeProvider } from '@/components/theme-provider'

# Ensure CSS variables are defined
# Check app/globals.css for :root and .dark selectors

# Test theme provider
console.log(document.documentElement.classList)
# Should show 'dark' class when in dark mode
```

### Content Updates Not Reflecting

**Issue**: Changes to content files not showing
```
Updated HomeContent but changes don't appear
```

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Restart development server
pnpm dev

# Check if you're editing the correct file
# Main content is in: components/home/home-content.tsx
# Not in: app/(withSidebar)/home/page.tsx
```

## 📦 Build Issues

### Build Failures

**Issue**: Production build fails
```
Error: Failed to compile with errors
```

**Solution**:
```bash
# Check for TypeScript errors first
pnpm type-check  # If you have this script

# Run build with verbose output
pnpm build --debug

# Check for common issues:
# 1. Unused imports
# 2. Missing dependencies
# 3. Environment variable issues
# 4. File path case sensitivity
```

**Issue**: Image optimization errors
```
Error: Invalid src prop on Image component
```

**Solution**:
```typescript
// For static export, disable image optimization
// next.config.ts
const nextConfig = {
  images: {
    unoptimized: true
  }
}

// Or use proper image imports
import Image from 'next/image'
import myImage from '/public/image.jpg'

<Image
  src={myImage}
  alt="Description"
  width={500}
  height={300}
/>
```

### Environment Variable Issues

**Issue**: Environment variables not working
```
process.env.NEXT_PUBLIC_* is undefined
```

**Solution**:
```bash
# Check .env.local exists and has correct format
cat .env.local

# Environment variables must be prefixed with NEXT_PUBLIC_
NEXT_PUBLIC_API_URL=https://api.example.com

# Restart development server after adding env vars
pnpm dev

# For production, ensure platform has env vars set
```

## 🚀 Deployment Issues

### Vercel Deployment Problems

**Issue**: Vercel build fails
```
Error: Command "pnpm build" exited with 1
```

**Solution**:
```bash
# Check Vercel build logs for specific errors
# Common fixes:

# 1. Ensure Node.js version is specified
# Create vercel.json:
{
  "functions": {
    "app/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}

# 2. Check environment variables in Vercel dashboard
# 3. Verify build command in project settings
```

### Netlify Deployment Issues

**Issue**: Netlify build fails with "command not found"
```
bash: pnpm: command not found
```

**Solution**:
```bash
# Create netlify.toml with custom build settings:
[build]
  command = "npm install -g pnpm && pnpm install && pnpm build"
  publish = "out"  # or ".next" for serverless

[build.environment]
  NODE_VERSION = "18.17.0"
```

### GitHub Pages Issues

**Issue**: GitHub Pages deployment fails
```
Error: Process completed with exit code 1
```

**Solution**:
```bash
# Check GitHub Actions logs
# Common issues:

# 1. Permissions not set correctly
# Repository Settings > Actions > General > Workflow permissions
# Select "Read and write permissions"

# 2. Pages not enabled
# Repository Settings > Pages > Source: GitHub Actions

# 3. Check .github/workflows/deploy.yml syntax
```

## 🔍 Performance Issues

### Slow Loading

**Issue**: Application loads slowly
```
Performance issues in development or production
```

**Solution**:
```bash
# Analyze bundle size
pnpm build --analyze  # If you have webpack-bundle-analyzer

# Common optimizations:
# 1. Enable dynamic imports
const Component = dynamic(() => import('./Component'))

# 2. Optimize images
# Use WebP format and proper sizing

# 3. Remove unused dependencies
pnpm audit

# 4. Check for memory leaks in useEffect hooks
```

### Large Bundle Size

**Issue**: Build size is too large
```
Warning: Exceeded maximum bundle size
```

**Solution**:
```bash
# Analyze what's in your bundle
pnpm build

# Remove unused imports and dependencies
# Use dynamic imports for heavy components
# Consider code splitting strategies
```

## 🧰 Debug Tools

### Development Debugging

```bash
# Enable verbose logging
DEBUG=* pnpm dev

# Check Next.js build info
pnpm build --debug

# Analyze bundle
pnpm add -D @next/bundle-analyzer
```

### Browser Debugging

```javascript
// Add to any component for debugging
console.log('Debug info:', { props, state, env: process.env })

// Check theme state
console.log('Theme:', document.documentElement.classList)

// Check sidebar state
console.log('Sidebar:', localStorage.getItem('sidebar-collapsed'))
```

## 📞 Getting Help

If you're still experiencing issues:

1. **Check the Console**: Browser console often shows helpful error messages
2. **Review Documentation**: Double-check setup instructions
3. **Search Issues**: Look for similar problems in GitHub issues
4. **Create Issue**: Open a new issue with:
   - Error message
   - Steps to reproduce
   - Environment details (OS, Node.js version, etc.)
   - Relevant code snippets

### Useful Commands for Bug Reports

```bash
# System information
node --version
pnpm --version
# or npm --version

# Project information
cat package.json | grep version
cat next.config.ts

# Error logs
pnpm build 2>&1 | tee build.log
```

---

Most issues have simple solutions. Don't hesitate to ask for help! 🤝 