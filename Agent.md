# Agent Configuration and Guidelines
# Pawfec Care - Cat Care Website

## Document Information

- **Project Name**: Pawfec Care
- **Document Version**: 1.0.0
- **Last Updated**: June 8, 2026
- **Purpose**: AI Agent Configuration and Development Guidelines

---

## Table of Contents

1. [Agent Overview](#agent-overview)
2. [Project Context](#project-context)
3. [Technology Stack](#technology-stack)
4. [Development Guidelines](#development-guidelines)
5. [Code Style Standards](#code-style-standards)
6. [Component Development](#component-development)
7. [Common Tasks](#common-tasks)
8. [Testing Guidelines](#testing-guidelines)
9. [Deployment Procedures](#deployment-procedures)
10. [Troubleshooting](#troubleshooting)
11. [Best Practices](#best-practices)
12. [Resources](#resources)

---

## 1. Agent Overview

### 1.1 Agent Role

This AI agent is configured to assist with development, maintenance, and enhancement of the Pawfec Care website. The agent should:

- Understand the project architecture and codebase
- Follow established coding standards and patterns
- Provide accurate technical guidance
- Assist with debugging and problem-solving
- Suggest improvements and optimizations
- Help with documentation and knowledge sharing

### 1.2 Agent Capabilities

- **Code Analysis**: Understand and analyze existing code
- **Feature Development**: Implement new features following project patterns
- **Bug Fixing**: Identify and resolve issues
- **Code Review**: Provide constructive feedback on code changes
- **Documentation**: Help maintain and update documentation
- **Optimization**: Suggest performance improvements
- **Testing**: Assist with test implementation

### 1.3 Agent Constraints

- **No Destructive Actions**: Never delete files without explicit confirmation
- **Backup First**: Always suggest backing up before major changes
- **Test Changes**: Recommend testing before deploying
- **Follow Patterns**: Adhere to existing project patterns
- **Type Safety**: Maintain TypeScript type safety
- **Performance**: Consider performance implications of changes

---

## 2. Project Context

### 2.1 Project Description

Pawfec Care is a modern, responsive cat care website built with Astro.js, React, and Tailwind CSS. The website showcases cat care services, expert tips, team profiles, and customer testimonials with beautiful animations and a user-friendly interface.

### 2.2 Project Goals

- **Primary Goal**: Provide information about cat care services
- **Secondary Goals**:
  - Build trust with potential customers
  - Showcase expertise and professionalism
  - Generate leads through contact forms
  - Provide valuable cat care tips
  - Display customer testimonials

### 2.3 Target Audience

- Cat owners seeking professional care services
- People looking for cat care advice
- Potential customers interested in services
- Cat enthusiasts browsing for information

### 2.4 Key Features

- Responsive design (mobile, tablet, desktop)
- Interactive components with React
- GSAP scroll-triggered animations
- Custom typography (Balsamiq Sans, Chewy, Dynapuff, Fredoka)
- shadcn/ui component library
- Dark mode support
- Accessible and SEO-friendly

---

## 3. Technology Stack

### 3.1 Core Technologies

#### Astro.js 5.16.6
- **Purpose**: Static site generator
- **Key Features**:
  - Static site generation (SSG)
  - Partial hydration with React
  - File-based routing
  - Built-in optimization
- **Usage**: Main framework for the project

#### React 19.2.3
- **Purpose**: Interactive components
- **Key Features**:
  - Component-based architecture
  - Hooks for state management
  - Client-side hydration
- **Usage**: Interactive components (Navbar, animations)

#### TypeScript
- **Purpose**: Type safety
- **Key Features**:
  - Static type checking
  - Better IDE support
  - Reduced runtime errors
- **Usage**: All .tsx and .ts files

### 3.2 Styling Technologies

#### Tailwind CSS v4.1.18
- **Purpose**: Utility-first CSS framework
- **Key Features**:
  - Utility classes for rapid development
  - Responsive design utilities
  - Dark mode support
  - Custom design tokens
- **Usage**: All styling in the project

#### CSS Variables
- **Purpose**: Design token system
- **Key Features**:
  - OKLCH color space
  - Theme variables
  - Custom radius values
- **Usage**: Global theming in `src/styles/global.css`

### 3.3 Component Libraries

#### shadcn/ui
- **Purpose**: Pre-built UI components
- **Key Features**:
  - Accessible components
  - Customizable with Tailwind
  - Radix UI primitives
  - TypeScript support
- **Usage**: 50+ UI components in `src/components/ui/`

#### Radix UI
- **Purpose**: Accessible component primitives
- **Key Features**:
  - WCAG compliant
  - Keyboard navigation
  - Screen reader support
- **Usage**: Underlying primitives for shadcn/ui

#### Lucide React
- **Purpose**: Icon library
- **Key Features**:
  - Beautiful, consistent icons
  - Tree-shakeable
  - Customizable
- **Usage**: Icons throughout the project

### 3.4 Animation Technologies

#### GSAP 3.14.2
- **Purpose**: Animation library
- **Key Features**:
  - High-performance animations
  - ScrollTrigger plugin
  - Timeline support
  - GPU acceleration
- **Usage**: Scroll-triggered animations in sections

### 3.5 Development Tools

#### Bun
- **Purpose**: Package manager and runtime
- **Key Features**:
  - Fast installation
  - Compatible with npm
  - Built-in test runner
- **Usage**: Package management and scripts

#### Vite
- **Purpose**: Build tool
- **Key Features**:
  - Fast HMR (Hot Module Replacement)
  - Optimized builds
  - Plugin system
- **Usage**: Astro's default build tool

---

## 4. Development Guidelines

### 4.1 Development Workflow

#### 4.1.1 Setting Up Development Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cat-web
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:4321`
   - Verify the site loads correctly

#### 4.1.2 Making Changes

1. **Identify the component to modify**
   - Check `src/components/` for reusable components
   - Check `src/pages/` for page sections
   - Check `src/layouts/` for layout components

2. **Make changes**
   - Edit the appropriate file
   - Follow existing code patterns
   - Maintain TypeScript type safety

3. **Test changes**
   - Check the browser for hot-reload
   - Verify the changes work as expected
   - Test on different screen sizes

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   ```

#### 4.1.3 Building for Production

1. **Build the project**
   ```bash
   bun build
   ```

2. **Preview the build**
   ```bash
   bun preview
   ```

3. **Deploy**
   - Push to repository (triggers Vercel deployment)
   - Or deploy manually with Vercel CLI

### 4.2 File Organization

#### 4.2.1 Component Organization

```
src/components/
├── organisms/          # Complex, page-level components
│   ├── Navbar.tsx     # Navigation bar
│   ├── cta.astro      # Call-to-action
│   └── footer.astro   # Footer
├── ui/                # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── ... (50+ components)
└── Welcome.astro      # Welcome component
```

#### 4.2.2 Page Organization

```
src/pages/
├── index.astro         # Home page (main)
├── hero.astro          # Hero section
├── services.astro      # Services section
├── whyChooseUs.astro   # Why choose us section
├── tips.astro          # Expert tips section
├── getToKnow.astro     # Team section
└── testimonials.astro  # Testimonials section
```

#### 4.2.3 Utility Organization

```
src/
├── hooks/              # Custom React hooks
│   └── use-mobile.ts   # Mobile detection
├── lib/                # Utility libraries
│   └── utils.ts        # Utility functions
├── layouts/            # Layout components
│   └── Layout.astro    # Main layout
└── styles/             # Global styles
    └── global.css      # Global CSS
```

### 4.3 Naming Conventions

#### 4.3.1 File Names
- **Components**: PascalCase (e.g., `Navbar.tsx`, `Button.tsx`)
- **Pages**: kebab-case (e.g., `hero.astro`, `services.astro`)
- **Utilities**: kebab-case (e.g., `use-mobile.ts`, `utils.ts`)
- **Styles**: kebab-case (e.g., `global.css`)

#### 4.3.2 Component Names
- **React Components**: PascalCase (e.g., `Navbar`, `Button`)
- **Astro Components**: PascalCase (e.g., `Hero`, `Services`)
- **Functions**: camelCase (e.g., `useMobile`, `cn`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MOBILE_BREAKPOINT`)

#### 4.3.3 CSS Classes
- **Tailwind**: Use utility classes directly
- **Custom**: kebab-case (e.g., `.font-fredoka`, `.service-card`)
- **State modifiers**: Use Tailwind modifiers (e.g., `hover:bg-amber-500`)

---

## 5. Code Style Standards

### 5.1 TypeScript Guidelines

#### 5.1.1 Type Definitions
- Always define interfaces for data structures
- Use type aliases for union types
- Avoid `any` type - use `unknown` if necessary
- Use generic types for reusable components

**Example:**
```typescript
interface Service {
  image: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}
```

#### 5.1.2 Component Props
- Define interfaces for component props
- Use optional props with `?`
- Provide default values when appropriate
- Use TypeScript for prop validation

**Example:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}
```

#### 5.1.3 Hooks
- Use TypeScript for hook parameters and return values
- Define custom hooks with proper types
- Use generic types when appropriate

**Example:**
```typescript
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  // ... implementation
  return isMobile;
}
```

### 5.2 React Guidelines

#### 5.2.1 Component Structure
```typescript
// 1. Imports
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces
interface ComponentProps {
  // prop definitions
}

// 3. Component
export default function Component({ prop }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(initialValue);

  // 5. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 6. Effects
  useEffect(() => {
    // effect logic
  }, [dependencies]);

  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

#### 5.2.2 Hooks Usage
- Use `useState` for local component state
- Use `useEffect` for side effects
- Use `useCallback` for memoized callbacks
- Use `useMemo` for memoized values
- Custom hooks for reusable logic

#### 5.2.3 Event Handlers
- Use descriptive names for handlers
- Pass event objects when needed
- Use arrow functions for inline handlers
- Extract complex handlers to functions

**Example:**
```typescript
const handleMenuToggle = () => {
  setOpen((prev) => !prev);
};

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // submit logic
};
```

### 5.3 Astro Guidelines

#### 5.3.1 Astro Component Structure
```astro
---
// 1. Frontmatter (server-side code)
import Component from '../components/Component';
const data = [/* data */];
---

<!-- 2. Template (HTML) -->
<div>
  <Component />
</div>

<!-- 3. Scripts (client-side code) -->
<script>
  // client-side JavaScript
</script>

<!-- 4. Styles (component-specific) -->
<style>
  /* component-specific CSS */
</style>
```

#### 5.3.2 Client Directives
- `client:load`: Load on page load (critical interactive components)
- `client:visible`: Load when visible in viewport
- `client:idle`: Load when browser is idle
- Use the least aggressive directive needed

**Example:**
```astro
<Navbar client:load />
<Services client:visible />
```

#### 5.3.3 Script Tags
- Use `<script>` for inline scripts
- Use `<script is:inline>` for critical scripts
- Import GSAP in script tags for animations

**Example:**
```astro
<script is:inline>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".element", {
    opacity: 0,
    y: 80,
    scrollTrigger: {
      trigger: ".section",
      start: "top 85%",
    },
  });
</script>
```

### 5.4 CSS Guidelines

#### 5.4.1 Tailwind CSS
- Use utility classes for styling
- Avoid custom CSS when possible
- Use Tailwind's responsive prefixes
- Use Tailwind's state modifiers

**Example:**
```astro
<div class="bg-white p-6 rounded-4xl hover:bg-amber-500 transition">
  Content
</div>
```

#### 5.4.2 Custom CSS
- Use custom CSS for complex animations
- Use CSS variables for theming
- Keep custom CSS in `global.css` or component `<style>` tags
- Follow BEM naming for custom classes

**Example:**
```css
.service-card {
  @apply bg-white p-6 rounded-4xl;
}

.service-card:hover {
  @apply bg-amber-500 text-white;
}
```

#### 5.4.3 Responsive Design
- Mobile-first approach
- Use Tailwind's responsive prefixes
- Test on multiple screen sizes
- Use breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

**Example:**
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  Cards
</div>
```

---

## 6. Component Development

### 6.1 Creating New Components

#### 6.1.1 React Component Template

```typescript
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Component({ className, children }: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  );
}
```

#### 6.1.2 Astro Component Template

```astro
---
import Component from '../components/Component';

const data = [
  // data here
];
---

<section class="section-classes">
  <Component />
</section>
```

### 6.2 Using shadcn/ui Components

#### 6.2.1 Available Components
The project includes 50+ shadcn/ui components:
- button, card, input, dialog
- dropdown-menu, popover, tooltip
- accordion, tabs, carousel
- form, select, checkbox
- And many more...

#### 6.2.2 Importing Components
```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
```

#### 6.2.3 Component Variants
Most shadcn/ui components support variants:
```typescript
<Button variant="default" size="default">
  Click me
</Button>

<Button variant="destructive" size="lg">
  Delete
</Button>
```

### 6.3 Adding GSAP Animations

#### 6.3.1 Basic Animation
```astro
<script is:inline>
  import gsap from "gsap";
  
  gsap.from(".element", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
  });
</script>
```

#### 6.3.2 ScrollTrigger Animation
```astro
<script is:inline>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".element", {
    opacity: 0,
    y: 80,
    scrollTrigger: {
      trigger: ".section",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
</script>
```

#### 6.3.3 Staggered Animation
```astro
<script is:inline>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".card", {
    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".section",
      start: "top 85%",
    },
  });
</script>
```

### 6.4 Adding New Sections

#### 6.4.1 Section Template
```astro
---
const data = [
  // section data
];
---

<section id="section-id" class="section-classes">
  <div class="container">
    <h2 class="heading">Section Title</h2>
    <p class="subheading">Section description</p>
    
    <div class="content">
      {data.map((item) => (
        <div class="item" key={item.id}>
          {/* item content */}
        </div>
      ))}
    </div>
  </div>
</section>

<script is:inline>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".item", {
    opacity: 0,
    y: 80,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#section-id",
      start: "top 85%",
    },
  });
</script>
```

#### 6.4.2 Adding to Main Page
```astro
---
import NewSection from "./newSection.astro";
---

<Layout>
  <Navbar client:load />
  <Hero />
  <Services />
  <NewSection />
  {/* other sections */}
  <Footer client:load />
</Layout>
```

---

## 7. Common Tasks

### 7.1 Adding a New Page

#### 7.1.1 Create Page File
```bash
# Create new page in src/pages/
touch src/pages/new-page.astro
```

#### 7.1.2 Page Template
```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/organisms/Navbar.tsx';
import Footer from '../components/organisms/footer.astro';
---

<Layout title="Page Title">
  <Navbar client:load />
  <main>
    <!-- Page content -->
  </main>
  <Footer client:load />
</Layout>
```

#### 7.1.3 Add Navigation Link
```typescript
// In Navbar.tsx
const links = [
  { label: "Home", href: "/" },
  { label: "New Page", href: "/new-page" },
  // other links
];
```

### 7.2 Updating Content

#### 7.2.1 Updating Services
Edit `src/pages/services.astro`:
```astro
---
const services = [
  {
    image: "image-url",
    title: "Service Title",
    description: "Service description",
  },
  // add/update services
];
---
```

#### 7.2.2 Updating Team Members
Edit `src/pages/getToKnow.astro`:
```astro
---
const getToKnows = [
  {
    image: "image-url",
    title: "Name",
    description: "Role",
  },
  // add/update team members
};
---
```

#### 7.2.3 Updating Testimonials
Edit `src/pages/testimonials.astro`:
```astro
---
const testimonials = [
  {
    name: "Customer Name",
    role: "Customer Role",
    image: "image-url",
    text: "Testimonial text",
    rating: 5,
  },
  // add/update testimonials
];
---
```

### 7.3 Adding Images

#### 7.3.1 Local Images
1. Place image in `public/images/`
2. Reference in component:
```astro
<img src="/images/filename.png" alt="Description" />
```

#### 7.3.2 External Images
Use external URLs directly:
```astro
<img src="https://example.com/image.png" alt="Description" />
```

#### 7.3.3 Astro Assets
Import in frontmatter:
```astro
---
import image from '../assets/image.svg';
---

<img src={image.src} alt="Description" />
```

### 7.4 Modifying Styles

#### 7.4.1 Global Styles
Edit `src/styles/global.css`:
```css
/* Add custom styles or modify CSS variables */
```

#### 7.4.2 Component Styles
Add `<style>` tag in component:
```astro
<style>
  .custom-class {
    /* custom styles */
  }
</style>
```

#### 7.4.3 Tailwind Classes
Modify Tailwind classes directly in components:
```astro
<div class="bg-white p-6 rounded-4xl">
  Content
</div>
```

### 7.5 Adding Icons

#### 7.5.1 Lucide Icons
Import from `lucide-react`:
```typescript
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6" />
```

#### 7.5.2 Custom Icons
Add custom SVG inline:
```astro
<svg className="w-6 h-6" viewBox="0 0 24 24">
  {/* SVG paths */}
</svg>
```

### 7.6 Updating Fonts

#### 7.6.1 Current Fonts
- Balsamiq Sans
- Chewy
- Dynapuff
- Fredoka

#### 7.6.2 Adding New Fonts
1. Install font package:
```bash
bun add @fontsource/font-name
```

2. Import in `src/styles/global.css`:
```css
@import "@fontsource/font-name";
```

3. Add utility class:
```css
@layer utilities {
  .font-font-name {
    font-family: 'Font Name', sans-serif;
  }
}
```

---

## 8. Testing Guidelines

### 8.1 Manual Testing

#### 8.1.1 Testing Checklist
- [ ] Visual inspection on desktop
- [ ] Visual inspection on tablet
- [ ] Visual inspection on mobile
- [ ] Test all interactive elements
- [ ] Test navigation links
- [ ] Test animations
- [ ] Check console for errors
- [ ] Verify accessibility (keyboard navigation)

#### 8.1.2 Browser Testing
Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers (iOS Safari, Chrome Mobile)

#### 8.1.3 Responsive Testing
Test at different viewport sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1536px, 1920px

### 8.2 Automated Testing (Future)

#### 8.2.1 Unit Testing Setup
```bash
bun add -D vitest @testing-library/react @testing-library/jest-dom
```

#### 8.2.2 Component Test Example
```typescript
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

#### 8.2.3 Running Tests
```bash
bun test
```

### 8.3 Performance Testing

#### 8.3.1 Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Check scores:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

#### 8.3.2 Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 9. Deployment Procedures

### 9.1 Vercel Deployment

#### 9.1.1 Automatic Deployment
1. Push changes to GitHub
2. Vercel automatically deploys
3. Check deployment status in Vercel dashboard

#### 9.1.2 Manual Deployment
```bash
# Build project
bun build

# Deploy with Vercel CLI
vercel --prod
```

#### 9.1.3 Environment Variables
Currently no environment variables are needed. If added:
1. Go to Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add variables
4. Redeploy

### 9.2 Pre-Deployment Checklist

- [ ] All changes committed
- [ ] Build succeeds locally
- [ ] Preview build works
- [ ] Manual testing completed
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Accessibility verified

### 9.3 Post-Deployment Verification

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Animations work
- [ ] Forms functional (if any)
- [ ] No broken links
- [ ] Images load correctly
- [ ] Mobile responsive

### 9.4 Rollback Procedure

If deployment fails or has issues:
1. Go to Vercel dashboard
2. Navigate to Deployments
3. Find previous successful deployment
4. Click "Promote to Production"

---

## 10. Troubleshooting

### 10.1 Common Issues

#### 10.1.1 Build Fails
**Problem**: Build command fails
**Solutions**:
- Check for TypeScript errors: `bun astro check`
- Check for missing dependencies: `bun install`
- Check for syntax errors in components
- Clear Astro cache: Delete `.astro/` folder

#### 10.1.2 Styles Not Loading
**Problem**: Tailwind styles not applied
**Solutions**:
- Check Tailwind import in `global.css`
- Verify Tailwind plugin in `astro.config.mjs`
- Check CSS file path in `components.json`
- Restart dev server

#### 10.1.3 Animations Not Working
**Problem**: GSAP animations not triggering
**Solutions**:
- Check GSAP import in script tag
- Verify ScrollTrigger registration
- Check element selector matches DOM
- Verify scroll trigger configuration
- Check console for GSAP errors

#### 10.1.4 Images Not Loading
**Problem**: Images not displaying
**Solutions**:
- Check image path is correct
- Verify image exists in `public/` folder
- Check image URL for external images
- Verify image file format

#### 10.1.5 TypeScript Errors
**Problem**: TypeScript compilation errors
**Solutions**:
- Check type definitions
- Verify imports are correct
- Check for missing dependencies
- Use `any` type temporarily to debug

### 10.2 Debugging Techniques

#### 10.2.1 Console Logging
```typescript
console.log('Debug info', variable);
console.error('Error occurred', error);
```

#### 10.2.2 React DevTools
1. Install React DevTools browser extension
2. Open DevTools
3. Go to Components tab
4. Inspect component state and props

#### 10.2.3 Astro DevTools
1. Open browser DevTools
2. Check Network tab for asset loading
3. Check Console for errors
4. Use Astro's built-in error overlay

#### 10.2.4 GSAP DevTools
```javascript
// Add to script tag for debugging
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: true });
```

### 10.3 Performance Issues

#### 10.3.1 Slow Load Times
**Solutions**:
- Optimize images (compress, use WebP)
- Reduce JavaScript bundle size
- Implement lazy loading
- Use CDN for assets
- Minimize external requests

#### 10.3.2 Animation Performance
**Solutions**:
- Use GPU-accelerated properties (transform, opacity)
- Reduce animation complexity
- Use `will-change` CSS property
- Limit number of animated elements
- Debounce scroll events

---

## 11. Best Practices

### 11.1 Code Quality

#### 11.1.1 Write Clean Code
- Use meaningful variable names
- Keep functions small and focused
- Avoid code duplication
- Add comments for complex logic
- Follow DRY (Don't Repeat Yourself)

#### 11.1.2 Type Safety
- Always use TypeScript
- Define interfaces for data structures
- Avoid `any` type
- Use strict mode in TypeScript config

#### 11.1.3 Component Design
- Single responsibility principle
- Reusable components
- Clear prop interfaces
- Proper component composition

### 11.2 Performance

#### 11.2.1 Optimize Images
- Use appropriate image formats
- Compress images
- Use lazy loading
- Implement responsive images

#### 11.2.2 Minimize JavaScript
- Use Astro's partial hydration
- Lazy load components
- Tree-shake unused code
- Minimize bundle size

#### 11.2.3 CSS Optimization
- Use Tailwind utilities
- Minimize custom CSS
- Use CSS variables
- Avoid inline styles

### 11.3 Accessibility

#### 11.3.1 Semantic HTML
- Use proper heading hierarchy
- Use semantic elements
- Provide alt text for images
- Use ARIA labels when needed

#### 11.3.2 Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Provide visible focus indicators
- Logical tab order
- Skip to main content link

#### 11.3.3 Color Contrast
- WCAG AA compliant colors
- Test color contrast ratios
- Provide text alternatives for color-coded information

### 11.4 Security

#### 11.4.1 Dependency Security
- Keep dependencies updated
- Use `bun audit` to check vulnerabilities
- Review third-party packages
- Use lock files

#### 11.4.2 Content Security
- Validate user input (if forms added)
- Sanitize user-generated content
- Use HTTPS
- Implement CSP headers

### 11.5 SEO

#### 11.5.1 Meta Tags
- Add descriptive title tags
- Add meta descriptions
- Use semantic HTML
- Add Open Graph tags

#### 11.5.2 Performance
- Fast load times
- Mobile-friendly
- Optimized images
- Clean URL structure

---

## 12. Resources

### 12.1 Documentation

#### 12.1.1 Official Documentation
- **Astro**: https://docs.astro.build
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **GSAP**: https://greensock.com/docs
- **Radix UI**: https://www.radix-ui.com/docs
- **Lucide**: https://lucide.dev

#### 12.1.2 Project Documentation
- **README.md**: Project overview and setup
- **SDD.md**: Software design document
- **Agent.md**: This file (agent configuration)

### 12.2 Tools

#### 12.2.1 Development Tools
- **VS Code**: Recommended IDE
- **Bun**: Package manager
- **Git**: Version control
- **GitHub**: Code hosting

#### 12.2.2 Browser Tools
- **Chrome DevTools**: Debugging
- **React DevTools**: React inspection
- **Lighthouse**: Performance auditing
- ** axe DevTools**: Accessibility testing

#### 12.2.3 Deployment Tools
- **Vercel**: Hosting platform
- **Vercel CLI**: Command-line deployment

### 12.3 Community

#### 12.3.1 Forums and Discords
- **Astro Discord**: https://astro.build/chat
- **React Discord**: https://react.dev/community
- **Tailwind CSS Discord**: https://tailwindcss.com/discord
- **Stack Overflow**: Q&A platform

#### 12.3.2 Learning Resources
- **Astro Tutorials**: https://docs.astro.build/en/tutorial/
- **React Tutorial**: https://react.dev/learn
- **Tailwind CSS Tutorial**: https://tailwindcss.com/docs/installation

### 12.4 Quick Reference

#### 12.4.1 Common Commands
```bash
# Development
bun dev              # Start dev server
bun build            # Build for production
bun preview          # Preview production build
bun astro check      # Type check

# Dependencies
bun install          # Install dependencies
bun add package      # Add dependency
bun remove package   # Remove dependency

# Git
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to remote
git pull             # Pull from remote
```

#### 12.4.2 File Locations
- **Components**: `src/components/`
- **Pages**: `src/pages/`
- **Layouts**: `src/layouts/`
- **Styles**: `src/styles/`
- **Hooks**: `src/hooks/`
- **Utils**: `src/lib/`
- **Assets**: `src/assets/`
- **Public**: `public/`

#### 12.4.3 Configuration Files
- **Astro Config**: `astro.config.mjs`
- **TypeScript Config**: `tsconfig.json`
- **shadcn Config**: `components.json`
- **Package JSON**: `package.json`

---

## Appendix

### A. Component Props Reference

#### A.1 Navbar Props
```typescript
// No props - uses internal state
```

#### A.2 Section Components
```typescript
// Most sections use hardcoded data arrays
// Can be refactored to accept props for flexibility
```

### B. Animation Patterns

#### B.1 Fade In Up
```javascript
gsap.from(element, {
  opacity: 0,
  y: 80,
  duration: 1,
  ease: "power3.out",
});
```

#### B.2 Fade In Scale
```javascript
gsap.from(element, {
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "power3.out",
});
```

#### B.3 Slide In Right
```javascript
gsap.from(element, {
  opacity: 0,
  x: 80,
  duration: 1,
  ease: "power3.out",
});
```

### C. Tailwind Utility Classes

#### C.1 Common Classes
- **Spacing**: `p-4`, `m-4`, `gap-8`
- **Colors**: `bg-white`, `text-gray-600`, `bg-amber-500`
- **Typography**: `text-xl`, `font-bold`, `text-center`
- **Layout**: `flex`, `grid`, `flex-col`, `items-center`
- **Borders**: `rounded-4xl`, `border`, `shadow-lg`
- **Transitions**: `transition`, `hover:bg-amber-500`

#### C.2 Responsive Classes
- **Mobile**: Default (no prefix)
- **Tablet**: `md:`
- **Desktop**: `lg:`
- **Large Desktop**: `xl:`

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | June 8, 2026 | Development Team | Initial Agent configuration |

---

**End of Agent Configuration Document**
