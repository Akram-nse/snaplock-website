# SnapLock Website

Official marketing website for SnapLock - An app blocker that actually works.

## Overview

This is a modern Next.js website that serves as the landing page for the SnapLock iOS app. The site features:

- **Modern Design**: Dark theme with purple gradients matching the app's visual identity
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Apple Compliant**: Includes required Privacy Policy and Terms of Service pages

## Features

- 🎨 **Brand Consistent**: Matches SnapLock app's dark/purple theme with green accents
- 📱 **Mobile First**: Responsive design optimized for all devices
- ⚡ **Fast Performance**: Next.js with Tailwind CSS for optimal loading speeds
- 🔍 **SEO Optimized**: Proper metadata, OpenGraph, and Twitter cards
- 📄 **Legal Pages**: Privacy Policy and Terms of Service for App Store compliance
- 🚀 **Vercel Ready**: Configured for easy deployment to Vercel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── privacy/page.tsx  # Privacy Policy
│   ├── terms/page.tsx    # Terms of Service
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
public/                   # Static assets
```

## Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

2. **Custom Domain**
   - Configure domain in Vercel settings
   - Update DNS records as instructed

### Environment Variables

No environment variables required for the basic setup.

## Customization

### Brand Colors
The site uses SnapLock's brand colors:
- **Background**: Black (`#000000`)
- **Accent**: Purple gradients (`purple-600` to `purple-900`)
- **Primary Action**: Green (`green-500`)
- **Text**: White and gray variants

### Content Updates
- Update pricing in `src/app/page.tsx`
- Modify legal content in `privacy/` and `terms/` pages
- Add new sections to the main landing page

## SEO & Analytics

The site includes:
- Complete OpenGraph metadata
- Twitter Card configuration
- Structured data for search engines
- Mobile-optimized viewport settings

Add your analytics tracking codes to `layout.tsx` when ready.

## App Store Compliance

The website includes:
- ✅ Privacy Policy page (`/privacy`)
- ✅ Terms of Service page (`/terms`)
- ✅ Contact information
- ✅ Subscription pricing disclosure
- ✅ App Store link placeholders

## Performance

The site is optimized for:
- **Core Web Vitals**: Fast loading and interaction scores
- **Mobile Performance**: Responsive design and touch-friendly UI
- **SEO Rankings**: Proper meta tags and semantic HTML

## Support

For questions about the website:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact the development team

---

Built with ❤️ for SnapLock users
