# Pawfec Care - Cat Care Website

A modern, responsive cat care website built with Astro.js, React, and Tailwind CSS. This project showcases expert cat care services, tips, and testimonials with beautiful animations and a user-friendly interface.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Component Architecture](#component-architecture)
- [Styling & Design System](#styling--design-system)
- [Animations](#animations)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

Pawfec Care is a comprehensive cat care website designed to provide expert advice, services, and resources for cat owners. The website features:

- **Hero Section**: Eye-catching introduction with cat-themed branding
- **Services Section**: Detailed information about grooming, health checks, pet sitting, and nutrition services
- **Why Choose Us**: Highlights the unique benefits of choosing Pawfec Care
- **Expert Tips**: Valuable advice from veterinary professionals
- **Team Section**: Introduction to the cat care experts
- **Testimonials**: Customer reviews and experiences
- **Call-to-Action**: Email subscription for updates
- **Footer**: Contact information, working hours, and service links

The website is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## ✨ Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, intuitive interface with smooth transitions and animations
- **Interactive Components**: Dynamic elements powered by React and GSAP
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with Astro's static site generation
- **SEO Friendly**: Optimized meta tags and structured data

### Technical Features
- **Component-Based Architecture**: Modular, reusable components using React and Astro
- **Tailwind CSS v4**: Utility-first CSS framework for rapid development
- **shadcn/ui Components**: Pre-built, accessible UI components
- **GSAP Animations**: Smooth scroll-triggered animations
- **Custom Fonts**: Balsamiq Sans, Chewy, Dynapuff, and Fredoka for unique typography
- **Dark Mode Support**: Built-in dark mode with CSS variables
- **TypeScript**: Type-safe development with full TypeScript support

### Business Features
- **Service Showcase**: Detailed presentation of cat care services
- **Expert Team**: Professional profiles of veterinarians and care specialists
- **Customer Testimonials**: Social proof with customer reviews
- **Contact Information**: Easy access to contact details and working hours
- **Email Subscription**: Newsletter signup for updates and tips

## 🛠 Technology Stack

### Core Framework
- **Astro.js 5.16.6**: Modern static site generator with partial hydration
- **React 19.2.3**: JavaScript library for building interactive UIs
- **TypeScript**: Superset of JavaScript for type safety

### Styling
- **Tailwind CSS v4.1.18**: Utility-first CSS framework
- **@tailwindcss/vite**: Tailwind CSS integration with Vite
- **tw-animate-css**: Additional animation utilities
- **CSS Variables**: Custom design tokens for theming

### UI Components
- **shadcn/ui**: Collection of reusable, accessible UI components
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Beautiful, consistent icons
- **class-variance-authority**: Utility for component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### Animation
- **GSAP 3.14.2**: Professional-grade animation library
- **GSAP ScrollTrigger**: Scroll-based animations

### Forms & Validation
- **React Hook Form 7.69.0**: Performant form library
- **@hookform/resolvers 5.2.2**: Validation resolvers
- **Zod 4.2.1**: TypeScript-first schema validation

### Data Visualization
- **Recharts 2.15.4**: Composable charting library
- **react-day-picker 9.13.0**: Date picker component

### Additional Libraries
- **date-fns 4.1.0**: Modern JavaScript date utility library
- **next-themes 0.4.6**: Theme management for React
- **sonner 2.0.7**: Toast notification library
- **embla-carousel-react 8.6.0**: Carousel slider component
- **react-resizable-panels 4.0.15**: Resizable panel components
- **vaul 1.1.2**: Drawer component
- **input-otp 1.4.2**: One-time password input component
- **cmdk 1.1.1**: Command palette component

### Deployment
- **Vercel Adapter**: Optimized deployment for Vercel platform
- **@astrojs/vercel 9.0.2**: Vercel integration for Astro

### Package Manager
- **Bun**: Fast JavaScript package manager and runtime

### Fonts
- **@fontsource/balsamiq-sans**: Hand-drawn style font
- **@fontsource/chewy**: Playful display font
- **@fontsource/dynapuff**: Rounded, friendly font
- **@fontsource/fredoka**: Modern, rounded sans-serif

## 📁 Project Structure

```
cat-web/
├── public/                      # Static assets served directly
│   ├── favicon.svg             # Site favicon
│   └── images/                 # Image assets
├── src/
│   ├── assets/                 # Project assets
│   │   ├── astro.svg          # Astro logo
│   │   └── background.svg     # Background graphics
│   ├── components/            # Reusable components
│   │   ├── organisms/         # Complex, page-level components
│   │   │   ├── Navbar.tsx     # Navigation bar with mobile menu
│   │   │   ├── cta.astro      # Call-to-action section
│   │   │   └── footer.astro   # Footer with links and info
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button-group.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── empty.tsx
│   │   │   ├── field.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-group.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── item.tsx
│   │   │   ├── kbd.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   └── tooltip.tsx
│   │   └── Welcome.astro       # Welcome component
│   ├── hooks/                  # Custom React hooks
│   │   └── use-mobile.ts       # Mobile detection hook
│   ├── layouts/                # Layout components
│   │   └── Layout.astro        # Main layout wrapper
│   ├── lib/                    # Utility libraries
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── pages/                  # Page components
│   │   ├── index.astro         # Home page
│   │   ├── hero.astro          # Hero section
│   │   ├── services.astro      # Services section
│   │   ├── whyChooseUs.astro   # Why choose us section
│   │   ├── tips.astro          # Expert tips section
│   │   ├── getToKnow.astro     # Team section
│   │   └── testimonials.astro  # Testimonials section
│   └── styles/                 # Global styles
│       └── global.css          # Global CSS and theme variables
├── .astro/                     # Astro build cache
├── .git/                       # Git repository
├── .gitignore                  # Git ignore rules
├── .vscode/                    # VS Code configuration
├── astro.config.mjs            # Astro configuration
├── bun.lock                    # Bun lock file
├── components.json             # shadcn/ui configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🚀 Installation

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **Bun**: Latest version (recommended) or npm/yarn

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd cat-web
```

### Step 2: Install Dependencies
Using Bun (recommended):
```bash
bun install
```

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### Step 3: Start Development Server
```bash
bun dev
```

The development server will start at `http://localhost:4321`

## 💻 Development

### Available Scripts

| Command | Action |
|---------|--------|
| `bun dev` | Starts local development server at `localhost:4321` |
| `bun build` | Builds your production site to `./dist/` |
| `bun preview` | Preview your production build locally |
| `bun astro ...` | Run Astro CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI |

### Development Workflow

1. **Start Development Server**
   ```bash
   bun dev
   ```

2. **Make Changes**
   - Edit components in `src/components/`
   - Modify pages in `src/pages/`
   - Update styles in `src/styles/`
   - Astro will automatically hot-reload your changes

3. **Type Checking**
   ```bash
   bun astro check
   ```

4. **Linting** (if configured)
   ```bash
   bun run lint
   ```

### Code Style
- Use TypeScript for type safety
- Follow the existing component structure
- Use Tailwind CSS for styling
- Keep components small and focused
- Use meaningful variable and function names

## 🏗 Building for Production

### Build Command
```bash
bun build
```

This will:
1. Compile all Astro components
2. Optimize and bundle assets
3. Generate static HTML/CSS/JS
4. Output to the `./dist/` directory

### Preview Production Build
```bash
bun preview
```

This starts a local server to preview the production build.

### Build Output
The build process creates a `dist/` directory containing:
- Optimized HTML files
- Minified CSS and JavaScript
- Compressed images
- Static assets

## 🚢 Deployment

### Vercel Deployment (Recommended)

This project is configured for Vercel deployment using the `@astrojs/vercel` adapter.

#### Automatic Deployment
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Astro and deploy

#### Manual Deployment
```bash
bun build
vercel --prod
```

### Other Platforms

#### Netlify
1. Build command: `bun build`
2. Publish directory: `dist`
3. Install the Netlify CLI: `bun install -g netlify-cli`
4. Deploy: `netlify deploy --prod`

#### Cloudflare Pages
1. Build command: `bun build`
2. Publish directory: `dist`
3. Use Cloudflare Pages dashboard or Wrangler CLI

#### Static Hosting
For static hosting (GitHub Pages, S3, etc.):
1. Build the project: `bun build`
2. Upload the contents of `dist/` to your hosting provider

## ⚙️ Configuration

### Astro Configuration (`astro.config.mjs`)
```javascript
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel(),
});
```

### Tailwind CSS Configuration
Tailwind CSS v4 is configured via `src/styles/global.css` with:
- Custom font utilities
- CSS variables for theming
- Dark mode support
- Custom radius values

### TypeScript Configuration (`tsconfig.json`)
TypeScript is configured for:
- Strict type checking
- Path aliases (@/ for src/)
- React component support
- Astro component support

### shadcn/ui Configuration (`components.json`)
```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/global.css",
    "baseColor": "gray",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

## 🧩 Component Architecture

### Component Hierarchy

```
Layout.astro (Root Layout)
├── Navbar.tsx (Navigation)
├── hero.astro (Hero Section)
├── services.astro (Services Section)
├── whyChooseUs.astro (Why Choose Us Section)
├── tips.astro (Expert Tips Section)
├── getToKnow.astro (Team Section)
├── testimonials.astro (Testimonials Section)
├── cta.astro (Call-to-Action)
└── footer.astro (Footer)
```

### Component Types

#### Organisms (Page-Level Components)
- **Navbar.tsx**: Responsive navigation with mobile menu
- **cta.astro**: Email subscription CTA section
- **footer.astro**: Footer with links and contact info

#### Pages (Section Components)
- **hero.astro**: Landing hero section
- **services.astro**: Service cards with GSAP animations
- **whyChooseUs.astro**: Benefits section with staggered animations
- **tips.astro**: Expert advice section
- **getToKnow.astro**: Team member profiles
- **testimonials.astro**: Customer reviews

#### UI Components (shadcn/ui)
- 50+ reusable UI components for buttons, forms, dialogs, etc.

### Client Hydration
Components that need interactivity use Astro's client directives:
- `client:load`: Load on page load (Navbar, CTA, Footer)
- `client:visible`: Load when visible in viewport
- `client:idle`: Load when browser is idle

## 🎨 Styling & Design System

### Color Palette
The design system uses CSS variables with OKLCH color space for consistent theming:

#### Light Mode
- **Background**: `oklch(1 0 0)` (White)
- **Foreground**: `oklch(0.13 0.028 261.692)` (Dark gray)
- **Primary**: `oklch(0.21 0.034 264.665)` (Purple)
- **Accent**: Orange/Amber tones for CTAs

#### Dark Mode
- **Background**: `oklch(0.13 0.028 261.692)` (Dark)
- **Foreground**: `oklch(0.985 0.002 247.839)` (Light)
- **Primary**: `oklch(0.928 0.006 264.531)` (Light purple)

### Typography
Four custom fonts are used for a playful, cat-friendly aesthetic:

- **Balsamiq Sans**: Hand-drawn style for headings
- **Chewy**: Playful display font
- **Dynapuff**: Rounded, friendly font
- **Fredoka**: Modern, rounded sans-serif for body text

### Spacing & Layout
- **Container**: Max width 1536px (max-w-[1536px])
- **Responsive Grid**: Mobile-first approach
- **Border Radius**: Custom radius values from sm to 4xl

### Design Tokens
CSS variables are used for:
- Colors (background, foreground, primary, secondary, etc.)
- Border radius (sm, md, lg, xl, 2xl, 3xl, 4xl)
- Chart colors
- Sidebar colors

## 🎬 Animations

### GSAP Integration
GSAP (GreenSock Animation Platform) is used for smooth, performant animations:

#### ScrollTrigger Animations
Animations are triggered when elements enter the viewport:

```javascript
gsap.from(".element", {
  opacity: 0,
  y: 80,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section",
    start: "top 85%",
    toggleActions: "play none none none",
  },
});
```

#### Animation Examples
- **Services Section**: Cards fade in and slide up with stagger
- **Why Choose Us**: Cards slide in from the right
- **Testimonials**: Cards fade in and slide up
- **CTA Section**: Scale and fade in effect

#### Performance
- Animations use GPU-accelerated properties (transform, opacity)
- ScrollTrigger refreshes after layout changes
- Stagger effects for smooth sequential animations

## 🤝 Contributing

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Standards
- Follow existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

### Reporting Issues
When reporting issues, please include:
- Description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Astro Team**: For the amazing static site generator
- **shadcn**: For the beautiful UI components
- **Radix UI**: For accessible component primitives
- **GSAP**: For the powerful animation library
- **Tailwind CSS**: For the utility-first CSS framework
- **Fontsource**: For the beautiful fonts

## 📞 Support

For support, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team
- Check the Astro documentation: https://docs.astro.build

## 🗺 Roadmap

### Planned Features
- [ ] Blog section for cat care articles
- [ ] Online booking system
- [ ] User authentication
- [ ] Customer dashboard
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Social media integration

### Enhancements
- [ ] Performance optimization
- [ ] Enhanced accessibility
- [ ] More animation effects
- [ ] Dark mode toggle
- [ ] PWA support
- [ ] Offline functionality

---

**Built with ❤️ for cat lovers everywhere**
