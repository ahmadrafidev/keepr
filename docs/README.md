# Keepr Documentation

Welcome to the Keepr documentation! This guide will help you understand, customize, and deploy your personal knowledge management system.

## 📋 Table of Contents

- [Getting Started](./getting-started.md) - Setup and installation guide
- [Customization Guide](./customization-guide.md) - How to customize content and branding
- [Configuration](./configuration.md) - Detailed configuration options
- [Deployment](./deployment.md) - Deploy to various platforms
- [Development](./development.md) - Development workflow and best practices
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
- [Contributing](./contributing.md) - How to contribute to the project

## 🚀 Quick Start

1. **Clone and Setup**
   ```bash
   git clone https://github.com/ahmadrafidev/Keepr
   cd keepr
   pnpm install
   pnpm dev
   ```

2. **Customize Your Content**
   - Edit personal information in `/components/home/home-content.tsx`
   - Update sidebar navigation in `/components/types/sidebar.ts`
   - Modify theme and styling preferences

3. **Deploy**
   - Deploy to Vercel, Netlify, or your preferred platform
   - Configure custom domain (optional)

## 🎯 What is Keepr?

Keepr is a modern, elegant personal knowledge management system built with Next.js 15, TypeScript, and Tailwind CSS. It serves as your digital workspace for:

- **Bookmarking** interesting articles and resources
- **Note-taking** and knowledge management
- **Project showcasing** with portfolio features
- **Personal branding** with customizable content
- **Learning tracking** for your development journey

## 🛠️ Built With

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **UI Components**: Shadcn UI + Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 📁 Key Files to Customize

| File | Purpose |
|------|---------|
| `/components/types/sidebar.ts` | Navigation structure and links |
| `/components/home/home-content.tsx` | Personal information and bio |
| `/app/page.tsx` | Landing page content |
| `/app/(withSidebar)/*/page.tsx` | Individual section pages |

## 🤝 Need Help?

- Check the [Troubleshooting Guide](./troubleshooting.md)
- Review the [Customization Guide](./customization-guide.md)
- Open an issue on GitHub if you encounter problems

---

**Happy building!** 🎉 