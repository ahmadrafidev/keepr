# Deployment Guide

This guide covers deploying your Keepr instance to various platforms. We'll focus on the most popular and easiest options for static site deployment.

## 🎯 Overview

Keepr is a Next.js application that can be deployed to any platform that supports Node.js or static site generation. We recommend:

- **Vercel** (Recommended) - Seamless Next.js deployment
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for public repositories
- **Self-hosting** - VPS or dedicated server

## 🚀 Vercel (Recommended)

Vercel is the company behind Next.js and offers the best Next.js deployment experience.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/keepr)

### Manual Deployment

1. **Create Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your GitHub account

2. **Import Project**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from your project directory
   vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Scope: Choose your account/team
   - Link to existing project: `N`
   - Project name: `keepr` (or your custom name)
   - Directory: `./` (current directory)
   - Auto-detected settings: `Y`

4. **Custom Domain (Optional)**
   - Go to your Vercel dashboard
   - Select your project
   - Navigate to Settings > Domains
   - Add your custom domain

### Environment Variables

If you need environment variables:

```bash
# Set production environment variables
vercel env add NEXT_PUBLIC_ANALYTICS_ID production
vercel env add NEXT_PUBLIC_APP_URL production
```

## 🌐 Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/keepr)

### Manual Deployment

1. **Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `out` (for static export) or `.next` (for serverless)
   - Node version: `18.17.0` or later

2. **Deploy via Git**
   ```bash
   # Connect your repository to Netlify
   # Netlify will auto-deploy on every push
   ```

3. **Environment Variables**
   - Go to Site settings > Environment variables
   - Add your environment variables

### Netlify Static Export

For static export (if you don't need server-side features):

```javascript
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## 📄 GitHub Pages

For free hosting with GitHub Pages:

### Setup

1. **Enable Static Export**
   ```javascript
   // next.config.ts
   const nextConfig = {
     output: 'export',
     basePath: '/keepr', // Your repository name
     assetPrefix: '/keepr',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Create GitHub Action**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'pnpm'
         
         - name: Install dependencies
           run: pnpm install
         
         - name: Build
           run: pnpm build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out
     
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - Save

## 🖥️ Self-Hosting

### Using PM2 (Process Manager)

1. **Setup Server**
   ```bash
   # Install Node.js and pnpm on your server
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   
   # Clone your repository
   git clone https://github.com/yourusername/keepr.git
   cd keepr
   
   # Install dependencies
   pnpm install
   
   # Build for production
   pnpm build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Create PM2 Config**
   ```javascript
   // ecosystem.config.js
   module.exports = {
     apps: [{
       name: 'keepr',
       script: 'pnpm',
       args: 'start',
       cwd: '/path/to/keepr',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   }
   ```

4. **Start Application**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   COPY package.json pnpm-lock.yaml* ./
   RUN npm install -g pnpm && pnpm install --frozen-lockfile
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   RUN npm install -g pnpm && pnpm build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t keepr .
   docker run -p 3000:3000 keepr
   ```

## 🔧 Environment Configuration

### Required Environment Variables

```bash
# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Optional: App URL for production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Optional: Database (if you add dynamic features)
DATABASE_URL=your_database_url
```

### Platform-Specific Variables

**Vercel**:
- Automatically detects Next.js settings
- No additional configuration needed

**Netlify**:
- Build command: `pnpm build`
- Publish directory: `out` or `.next`
- Node version: `18.17.0`

**GitHub Pages**:
- Requires static export configuration
- No server-side features available

## 🚦 Build Optimization

### Production Build

```bash
# Build and check for errors
pnpm build

# Test production build locally
pnpm start
```

### Performance Checklist

- [ ] Optimize images (WebP format)
- [ ] Enable compression (Gzip/Brotli)
- [ ] Minimize bundle size
- [ ] Configure caching headers
- [ ] Set up CDN (Vercel/Netlify handle this automatically)

## 🔍 Monitoring and Analytics

### Add Analytics

1. **Google Analytics**
   ```bash
   # Add to environment variables
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. **Vercel Analytics**
   ```bash
   pnpm add @vercel/analytics
   ```

3. **Plausible Analytics**
   ```typescript
   // Add to layout.tsx
   <Script
     defer
     data-domain="your-domain.com"
     src="https://plausible.io/js/script.js"
   />
   ```

## 🚨 Troubleshooting

### Common Issues

**Build Failures**:
- Check Node.js version (18.17+)
- Verify all dependencies are installed
- Check for TypeScript errors

**Deployment Errors**:
- Review build logs for specific errors
- Ensure environment variables are set
- Check file path case sensitivity

**Static Export Issues**:
- Remove server-side only features
- Use `unoptimized: true` for images
- Check dynamic routes compatibility

### Platform-Specific Issues

**Vercel**:
- Check function timeout limits
- Review memory usage
- Verify domain configuration

**Netlify**:
- Check build command and directory
- Review redirect rules
- Verify Node.js version

**GitHub Pages**:
- Ensure static export is configured
- Check basePath and assetPrefix
- Verify GitHub Actions permissions

## 🎯 Production Checklist

Before going live:

- [ ] Test all functionality in production build
- [ ] Verify responsive design on all devices
- [ ] Check all internal and external links
- [ ] Test theme switching (dark/light mode)
- [ ] Verify SEO metadata is correct
- [ ] Set up monitoring and analytics
- [ ] Configure custom domain (if applicable)
- [ ] Test performance with Lighthouse
- [ ] Set up backup strategy
- [ ] Document any custom configuration

---

Your Keepr is now ready for the world! 🌍 