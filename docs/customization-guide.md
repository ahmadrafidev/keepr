# Customization Guide

This guide will show you how to customize Keepr to make it truly yours. We'll cover personalizing content, changing the navigation, updating branding, and more.

## 🎯 Overview

Keepr is designed to be easily customizable. The main areas you'll want to personalize are:

1. **Personal Information** - Your bio, work experience, and projects
2. **Navigation Structure** - Sidebar sections and links
3. **Visual Branding** - Colors, fonts, and styling
4. **Content Pages** - Individual section content
5. **Landing Page** - Main marketing page

## 👤 Personal Information

### Update Your Profile

Edit your personal information in `/components/home/home-content.tsx`:

```typescript
export function HomeContent({ className }: HomeContentProps) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto space-y-8", className)}>
      {/* Update the hero section with your information */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent dark:text-gray-100">
          Hey, I'm Your Name  {/* 👈 Change this */}
        </h1>
        <p className="text-lg text-muted-foreground">
          Your personal introduction and what you do... {/* 👈 Change this */}
        </p>
      </div>

      {/* Update the about section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground">
          Your detailed bio and background... {/* 👈 Change this */}
        </p>
      </section>
      
      {/* Continue customizing work experience and projects... */}
    </div>
  )
}
```


## 🧭 Navigation Structure

### Customize Sidebar Navigation

The sidebar is configured in `/components/types/sidebar.ts`. Here's how to customize it:

```typescript
export const DEFAULT_SIDEBAR_CONFIG: SidebarSection[] = [
  {
    title: 'Main',  // Section title
    items: [
      { 
        title: 'Home',           // 👈 Navigation item title
        path: '/home',           // 👈 Internal route
        icon: 'Home',            // 👈 Lucide icon name
        description: 'Your dashboard'  // 👈 Tooltip description
      },
      { 
        title: 'Blog', 
        path: '/blog',
        icon: 'PenLine',
        description: 'Your articles and drafts'
      },
    ],
  },
  {
    title: 'Personal',  // 👈 Add/rename sections
    items: [
      { 
        title: 'Bookmarks', 
        path: '/bookmarks',
        icon: 'Bookmark',
        description: 'Curated collection of interesting finds'
      },
      // Add more items...
    ],
  },
  {
    title: 'External Projects',  // External links section
    items: [
      {
        title: 'Your Project',        // 👈 Project name
        path: 'https://your-site.com', // 👈 External URL
        icon: 'ExternalLink',         // 👈 Icon
        description: 'Project description',
        external: true,               // 👈 Mark as external
      },
    ],
  },
];
```

### Add New Pages

To add a new section:

1. **Create the route folder**:
   ```bash
   mkdir app/\(withSidebar\)/your-section
   ```

2. **Create the page component**:
   ```typescript
   // app/(withSidebar)/your-section/page.tsx
   import { Metadata } from 'next'

   export const metadata: Metadata = {
     title: 'Your Section',
     description: 'Description for your section',
   }

   export default function YourSection() {
     return (
       <div className="w-full max-w-3xl mx-auto space-y-8">
         <h1 className="text-4xl font-bold tracking-tight">Your Section</h1>
         <p className="text-muted-foreground">Content for your section...</p>
       </div>
     )
   }
   ```

3. **Add to sidebar configuration**:
   ```typescript
   // In components/types/sidebar.ts
   {
     title: 'Your Section',
     path: '/your-section',
     icon: 'YourIcon',
     description: 'Description of your section'
   }
   ```

## 🎨 Visual Branding

### Update Colors and Theme

Customize the color palette in `/app/globals.css`:

```css
@layer base {
  :root {
    /* Light mode colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;      /* 👈 Change primary color */
    --primary-foreground: 210 40% 98%;
    /* Add more custom colors... */
  }

  .dark {
    /* Dark mode colors */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;             /* 👈 Change dark mode primary */
    --primary-foreground: 222.2 47.4% 11.2%;
    /* Add more custom dark colors... */
  }
}
```

### Customize Typography

Update font settings in `/tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],  // 👈 Add custom fonts
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
}
```

### Update Favicon and Branding

1. **Replace favicon**: Replace `/app/favicon.ico` with your own
2. **Update app name**: Change "Keepr" to your app name in:
   - `/components/custom-sidebar.tsx` (sidebar title)
   - `/app/layout.tsx` (metadata)
   - `/app/page.tsx` (landing page)

## 📝 Content Pages

### Customize Individual Sections

Each section page can be customized. For example, to update the bookmarks page:

```typescript
// app/(withSidebar)/bookmarks/page.tsx
export default function Bookmarks() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">My Bookmarks</h1>
        <p className="text-muted-foreground">
          A curated collection of resources I find valuable...
        </p>
      </div>

      {/* Add your bookmarks content */}
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Resource Title</h3>
          <p className="text-muted-foreground">Description of the resource</p>
          <a href="https://example.com" className="text-primary hover:underline">
            Visit Resource
          </a>
        </div>
        {/* Add more bookmarks... */}
      </div>
    </div>
  )
}
```

### Add Dynamic Content

You can also make content dynamic by fetching from APIs or using MDX:

```typescript
// Example: Fetch bookmarks from an API
async function getBookmarks() {
  // Fetch from your API or CMS
  return bookmarks
}

export default async function Bookmarks() {
  const bookmarks = await getBookmarks()
  
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Render dynamic content */}
      {bookmarks.map(bookmark => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  )
}
```

## 🔗 Social Links

### Update Social Media Links

Update your social links in the sidebar configuration:

```typescript
{
  title: 'Online',
  items: [
    { 
      title: 'Twitter', 
      path: 'https://twitter.com/yourusername',  // 👈 Your Twitter
      icon: 'Twitter', 
      external: true 
    },
    { 
      title: 'GitHub', 
      path: 'https://github.com/yourusername',   // 👈 Your GitHub
      icon: 'Github', 
      external: true 
    },
    { 
      title: 'LinkedIn', 
      path: 'https://linkedin.com/in/yourprofile',  // 👈 Your LinkedIn
      icon: 'Linkedin', 
      external: true 
    },
  ],
},
```

## 📱 SEO and Metadata

### Update Site Metadata

Update the site metadata in `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Personal Knowledge Base',  // 👈 Change title
    template: '%s | Your Name'
  },
  description: 'Your personal description...',        // 👈 Change description
  keywords: ['your', 'keywords', 'here'],             // 👈 Add keywords
  authors: [{ name: 'Your Name' }],                   // 👈 Your name
  creator: 'Your Name',                                // 👈 Your name
  openGraph: {
    title: 'Your Name - Personal Knowledge Base',     // 👈 OG title
    description: 'Your description...',               // 👈 OG description
    url: 'https://your-domain.com',                   // 👈 Your domain
    siteName: 'Your Site Name',                       // 👈 Site name
    // Add more OG tags...
  },
}
```

## 🎯 Quick Customization Checklist

- [ ] Update personal information in `HomeContent`
- [ ] Customize landing page content
- [ ] Update sidebar navigation structure
- [ ] Add/remove sections as needed
- [ ] Update social media links
- [ ] Customize color scheme
- [ ] Replace favicon and branding
- [ ] Update site metadata for SEO
- [ ] Add your own content to each section
- [ ] Test all links and navigation

## Next Steps

After customization:

1. **Test Everything**: Run `pnpm dev` and test all functionality
2. **Build for Production**: Run `pnpm build` to ensure no errors
3. **Deploy**: Follow the [Deployment Guide](./deployment.md)

---

Your Keepr instance should now feel uniquely yours! 🎉 