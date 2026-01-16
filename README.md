# Personal Portfolio & Blog

A minimal, editorial-style photography portfolio and blog built with Astro for deployment on Cloudflare Pages.

## Features

- Blog with markdown content support
- Photography gallery with lightbox
- Light/Dark/System theme toggle
- Mobile-responsive design
- Cloudflare Web Analytics integration
- Optimized for Cloudflare Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # Astro components
│   ├── content/
│   │   └── blog/         # Markdown blog posts
│   ├── layouts/          # Layout templates
│   ├── pages/            # Route pages
│   └── styles/           # Global styles
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with the following frontmatter:

```md
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2026-01-15
tags: ["tag1", "tag2"]
heroImage: "/path/to/image.jpg"
draft: false
---

Your content here...
```

## Adding Gallery Images

Edit `src/pages/gallery/index.astro` and add images to the `images` array:

```js
const images = [
  { 
    src: '/path/to/image.jpg', 
    alt: 'Image description', 
    title: 'Image Title', 
    category: 'Landscapes' 
  },
  // ...more images
];
```

## Cloudflare Pages Deployment

### Option 1: Via Cloudflare Dashboard

1. Push your code to a GitHub/GitLab repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" > "Connect to Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## Setting Up Cloudflare Web Analytics

1. Go to your Cloudflare dashboard
2. Navigate to **Analytics & Logs** > **Web Analytics**
3. Click "Add a site" and enter your domain
4. Copy the analytics token from the provided JS snippet
5. Add to your environment:
   - Create a `.env` file (for local dev):
     ```
     PUBLIC_CF_ANALYTICS_TOKEN=your_token_here
     ```
   - Or set in Cloudflare Pages dashboard under **Settings** > **Environment variables**

## Customization

### Updating Site Info

1. Update `astro.config.mjs` with your actual site URL
2. Edit component content in:
   - `src/components/Header.astro` - Site name and navigation
   - `src/components/Footer.astro` - Footer links and social media
3. Update meta information in `src/layouts/BaseLayout.astro`

### Changing Theme Colors

Edit the CSS custom properties in `src/styles/global.css`:

```css
:root {
  --background: #fafafa;
  --foreground: #171717;
  /* ...other variables */
}

:root.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  /* ...other variables */
}
```

### Changing Fonts

1. Update the Google Fonts import in `src/styles/global.css`
2. Modify the `--font-sans` and `--font-serif` variables

## License

MIT
