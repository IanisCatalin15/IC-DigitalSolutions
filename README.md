# IC Digital Solutions

A professional AI consulting and automation services website built with Next.js, featuring a modern design with animations and responsive components.

## Features

- **Modern Design**: Professional AI consulting website with sleek animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hero section with typewriter effect, animated navigation, and footer
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Smooth animations and transitions
- **TypeScript**: Full type safety and better development experience

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── hero-section.tsx   # Hero section with animations
│   ├── navigation.tsx     # Navigation bar
│   └── footer.tsx         # Footer component
├── lib/                    # Utility functions
│   └── utils.ts           # Helper functions
└── public/                 # Static assets
```

## Design Features

- **Hero Section**: Animated gradient background with typewriter text effect
- **Navigation**: Fixed navigation with scroll effects and mobile menu
- **Color Scheme**: Professional dark blue and tech purple theme
- **Animations**: Smooth hover effects, fade-ins, and floating elements
- **Typography**: Poppins for headings, Inter for body text

## Deployment

This project is configured to work on Vercel and other hosting platforms. The build process creates optimized static assets that can be deployed anywhere.

## License

Private project - All rights reserved.