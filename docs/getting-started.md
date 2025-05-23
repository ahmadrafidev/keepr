# Getting Started with Keepr

This guide will help you set up Keepr on your local machine and get it running in no time.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or later)
- **pnpm** (recommended) or npm/yarn
- **Git**

### Check Your Setup

```bash
node --version  # Should be 18.17+
pnpm --version  # Should be 8.0+
git --version   # Any recent version
```

## Installation

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/ahmadrafidev/Keepr

# Using SSH (if you have SSH keys set up)
git clone git@github.com:ahmadrafidev/Keepr.git

# Navigate to the project directory
cd keepr
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### 3. Start the Development Server

```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will start on [http://localhost:3000](http://localhost:3000).

## Project Structure

Here's an overview of the key directories and files:

```
keepr/
├── app/                          # Next.js App Router
│   ├── (withSidebar)/           # Route group with sidebar layout
│   │   ├── home/                # Home page
│   │   ├── bookmarks/           # Bookmarks section
│   │   ├── blog/                # Blog posts
│   │   └── ...                  # Other sections
│   ├── about/                   # About page (no sidebar)
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable components
│   ├── ui/                      # Shadcn UI components
│   ├── home/                    # Home page components
│   ├── sidebar/                 # Sidebar components
│   ├── types/                   # TypeScript type definitions
│   └── custom-sidebar.tsx       # Main sidebar component
├── docs/                        # Documentation (this folder)
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## First Steps After Installation

### 1. Verify Everything Works

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. You should see the Keepr landing page
3. Click "Get Started" to navigate to the main dashboard
4. Test the sidebar navigation and theme toggle

### 2. Check for Errors

If you encounter any issues:

1. Check the terminal for error messages
2. Ensure all dependencies installed correctly
3. Verify Node.js version compatibility
4. See the [Troubleshooting Guide](./troubleshooting.md) for common issues

## Development Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Environment Setup

Keepr works out of the box without additional environment variables. However, you can create a `.env.local` file for custom configurations:

```bash
# Optional: Analytics or other integrations
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Optional: Custom app URL for deployment
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Next Steps

Now that you have Keepr running locally, you can:

1. **Customize Your Content** - Follow the [Customization Guide](./customization-guide.md)
2. **Configure Settings** - Check the [Configuration Guide](./configuration.md)
3. **Deploy Your Site** - See the [Deployment Guide](./deployment.md)

## Troubleshooting

If you run into issues during setup:

- **Port already in use**: Change the port with `pnpm dev -p 3001`
- **Module not found**: Delete `node_modules` and reinstall dependencies
- **Type errors**: Ensure you're using TypeScript 5+
- **Build failures**: Check Node.js version (should be 18.17+)

For more detailed troubleshooting, see the [Troubleshooting Guide](./troubleshooting.md).

---

**You're all set!** 🎉 Ready to customize your personal knowledge management system. 