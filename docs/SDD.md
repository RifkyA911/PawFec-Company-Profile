# Software Design Document (SDD)
# Pawfec Care - Cat Care Website

## Document Information

- **Project Name**: Pawfec Care
- **Document Version**: 1.0.0
- **Last Updated**: June 8, 2026
- **Author**: Development Team
- **Status**: Active

## Table of Contents

1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Component Design](#component-design)
4. [Data Flow](#data-flow)
5. [State Management](#state-management)
6. [Design Patterns](#design-patterns)
7. [Security Considerations](#security-considerations)
8. [Performance Optimization](#performance-optimization)
9. [Accessibility](#accessibility)
10. [Testing Strategy](#testing-strategy)
11. [Deployment Architecture](#deployment-architecture)
12. [Maintenance and Scalability](#maintenance-and-scalability)

---

## 1. Introduction

### 1.1 Purpose

This Software Design Document (SDD) provides a comprehensive technical overview of the Pawfec Care website architecture, component structure, data flow, and design patterns. It serves as a blueprint for developers, architects, and stakeholders to understand the system's technical implementation.

### 1.2 Scope

This document covers:
- System architecture and technology stack
- Component hierarchy and relationships
- Data flow and state management
- Design patterns and best practices
- Security, performance, and accessibility considerations
- Deployment and maintenance strategies

### 1.3 Definitions and Acronyms

- **Astro**: Modern static site generator
- **SSG**: Static Site Generation
- **CSR**: Client-Side Rendering
- **SSR**: Server-Side Rendering
- **GSAP**: GreenSock Animation Platform
- **shadcn/ui**: UI component library
- **Radix UI**: Accessible component primitives
- **OKLCH**: Color space for consistent theming

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP/HTTPS
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                      │
│                    (CDN & Edge Functions)                    │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              Static Assets (HTML/CSS/JS/Images)              │
│                    Served from CDN                           │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              Build Time (Astro Build Process)                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Astro SSG  │→ │  React Hydr │→ │  Asset Opt  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Technology Stack Architecture

#### 2.2.1 Framework Layer
- **Astro.js 5.16.6**: Core framework for static site generation
- **React 19.2.3**: Interactive component framework
- **TypeScript**: Type-safe development layer

#### 2.2.2 Styling Layer
- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Variables**: Design token system
- **OKLCH Color Space**: Modern color management

#### 2.2.3 Component Layer
- **shadcn/ui**: Pre-built UI components
- **Radix UI**: Accessible primitives
- **Custom Components**: Business-specific components

#### 2.2.4 Animation Layer
- **GSAP 3.14.2**: Animation engine
- **ScrollTrigger**: Scroll-based animations

#### 2.2.5 Deployment Layer
- **Vercel Adapter**: Deployment optimization
- **Edge Network**: Global CDN distribution

### 2.3 Architecture Principles

#### 2.3.1 Static-First Approach
- Pre-render HTML at build time for optimal performance
- Hydrate only interactive components with React
- Minimize JavaScript bundle size

#### 2.3.2 Component Isolation
- Each component is self-contained
- Clear separation of concerns
- Reusable and composable architecture

#### 2.3.3 Progressive Enhancement
- Core content available without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers

#### 2.3.4 Mobile-First Design
- Responsive design starting from mobile
- Touch-friendly interactions
- Optimized for various screen sizes

---

## 3. Component Design

### 3.1 Component Hierarchy

```
Layout.astro (Root Layout)
├── Global Styles
├── HTML Structure
└── Slot for Page Content
    └── index.astro (Home Page)
        ├── Navbar.tsx (Organism)
        │   ├── Button (UI Component)
        │   ├── Menu Icon (Lucide)
        │   └── X Icon (Lucide)
        ├── hero.astro (Section)
        │   ├── Heading
        │   └── Image
        ├── services.astro (Section)
        │   ├── Service Cards
        │   └── GSAP Animations
        ├── whyChooseUs.astro (Section)
        │   ├── Benefit Cards
        │   └── GSAP Animations
        ├── tips.astro (Section)
        │   ├── Expert Card
        │   ├── Tips List
        │   └── Stethoscope Icon
        ├── getToKnow.astro (Section)
        │   ├── Team Cards
        │   └── Profile Images
        ├── testimonials.astro (Section)
        │   ├── Testimonial Cards
        │   └── GSAP Animations
        ├── cta.astro (Organism)
        │   ├── Email Input
        │   ├── Subscribe Button
        │   └── GSAP Animations
        └── footer.astro (Organism)
            ├── Brand Section
            ├── Services Links
            ├── Shop Links
            ├── Working Hours
            └── Contact Info
```

### 3.2 Component Categories

#### 3.2.1 Layout Components
**Layout.astro**
- **Purpose**: Root layout wrapper for all pages
- **Responsibilities**:
  - HTML structure and meta tags
  - Global styles import
  - Container for page content
- **Props**: None (uses slot)
- **Client Hydration**: None (static)

#### 3.2.2 Organism Components
**Navbar.tsx**
- **Purpose**: Navigation bar with responsive menu
- **Responsibilities**:
  - Display navigation links
  - Handle mobile menu toggle
  - Active link highlighting
  - Responsive design (desktop/mobile)
- **State**:
  - `open`: Mobile menu open/closed
  - `active`: Current active route
- **Client Hydration**: `client:load`
- **Dependencies**: Button, Lucide icons

**cta.astro**
- **Purpose**: Call-to-action section for email subscription
- **Responsibilities**:
  - Display subscription form
  - GSAP animation on scroll
- **Client Hydration**: `client:load`
- **Dependencies**: GSAP, ScrollTrigger

**footer.astro**
- **Purpose**: Footer with links and contact information
- **Responsibilities**:
  - Display brand information
  - Service links
  - Shop links
  - Working hours
  - Contact information
- **Client Hydration**: `client:load`
- **Dependencies**: None (static)

#### 3.2.3 Section Components
**hero.astro**
- **Purpose**: Landing hero section
- **Responsibilities**:
  - Display main heading
  - Show hero image
  - Brand messaging
- **Client Hydration**: None (static)
- **Dependencies**: Astro assets

**services.astro**
- **Purpose**: Services showcase section
- **Responsibilities**:
  - Display service cards
  - GSAP scroll animations
  - Service descriptions
- **Data**: Array of service objects
- **Client Hydration**: `client:load` (for GSAP)
- **Dependencies**: GSAP, ScrollTrigger

**whyChooseUs.astro**
- **Purpose**: Benefits and differentiators section
- **Responsibilities**:
  - Display benefit cards
  - GSAP stagger animations
  - Unique value propositions
- **Data**: Array of benefit objects
- **Client Hydration**: `client:load` (for GSAP)
- **Dependencies**: GSAP, ScrollTrigger

**tips.astro**
- **Purpose**: Expert tips section
- **Responsibilities**:
  - Display expert profile
  - Show cat care tips
  - Professional credibility
- **Data**: Array of tip objects
- **Client Hydration**: None (static)
- **Dependencies**: Lucide icons

**getToKnow.astro**
- **Purpose**: Team introduction section
- **Responsibilities**:
  - Display team member cards
  - Show professional profiles
  - Build trust with visitors
- **Data**: Array of team member objects
- **Client Hydration**: None (static)
- **Dependencies**: None

**testimonials.astro**
- **Purpose**: Customer testimonials section
- **Responsibilities**:
  - Display testimonial cards
  - GSAP animations
  - Social proof
- **Data**: Array of testimonial objects
- **Client Hydration**: `client:load` (for GSAP)
- **Dependencies**: GSAP, ScrollTrigger

#### 3.2.4 UI Components (shadcn/ui)
The project includes 50+ UI components from shadcn/ui, including:
- **button.tsx**: Reusable button with variants
- **card.tsx**: Card container component
- **input.tsx**: Form input field
- **dialog.tsx**: Modal dialog
- **dropdown-menu.tsx**: Dropdown menu
- And many more...

### 3.3 Component Interfaces

#### 3.3.1 Service Data Structure
```typescript
interface Service {
  image: string;
  title: string;
  description: string;
}
```

#### 3.3.2 Benefit Data Structure
```typescript
interface Benefit {
  image: string;
  title: string;
  description: string;
}
```

#### 3.3.3 Team Member Data Structure
```typescript
interface TeamMember {
  image: string;
  title: string;
  description: string;
}
```

#### 3.3.4 Testimonial Data Structure
```typescript
interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}
```

### 3.4 Component Communication

#### 3.4.1 Parent-Child Communication
- **Props Down**: Parent components pass data to children via props
- **Events Up**: Child components emit events to parents (currently not used)

#### 3.4.2 Cross-Component Communication
- **Context API**: Not currently used (could be added for theme management)
- **URL State**: Navigation links use URL routing
- **Local State**: Each component manages its own state

---

## 4. Data Flow

### 4.1 Data Flow Diagram

```
┌─────────────┐
│   User      │
│  Interaction│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Event     │
│  Handler    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Component  │
│   State     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   UI Update │
│  (Re-render)│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   User      │
│  Feedback   │
└─────────────┘
```

### 4.2 Data Sources

#### 4.2.1 Static Data
- **Services**: Hardcoded array in `services.astro`
- **Benefits**: Hardcoded array in `whyChooseUs.astro`
- **Team Members**: Hardcoded array in `getToKnow.astro`
- **Testimonials**: Hardcoded array in `testimonials.astro`
- **Tips**: Hardcoded array in `tips.astro`

#### 4.2.2 External Assets
- **Images**: External URLs from image hosting services
- **Fonts**: Loaded from @fontsource packages
- **Icons**: Lucide React icon library

### 4.3 Data Transformation

#### 4.3.1 Build-Time Transformation
- Astro components process data at build time
- Static HTML is generated with data embedded
- No runtime data fetching required

#### 4.3.2 Client-Side Transformation
- GSAP transforms DOM elements for animations
- React state updates trigger UI re-renders
- No complex data transformation on client

### 4.4 Data Validation

#### 4.4.1 TypeScript Type Checking
- All data structures have TypeScript interfaces
- Compile-time type safety
- No runtime validation currently implemented

#### 4.4.2 Future Validation (Planned)
- Zod schemas for runtime validation
- Form validation with React Hook Form
- API response validation (if backend added)

---

## 5. State Management

### 5.1 State Architecture

```
┌─────────────────────────────────────────┐
│         Component State                  │
│  ┌─────────────┐  ┌─────────────┐       │
│  │  Navbar     │  │   Other     │       │
│  │  (open,     │  │  Components │       │
│  │   active)   │  │             │       │
│  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│         URL State                       │
│  (Route, Hash, Query Params)           │
└─────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│         Local Storage                   │
│  (Not Currently Used)                  │
└─────────────────────────────────────────┘
```

### 5.2 State Management Strategies

#### 5.2.1 Local Component State
- **React useState**: Used in interactive components
- **Example**: Navbar menu open/close state
- **Scope**: Component-level only

#### 5.2.2 URL State
- **Window.location**: Used for active route detection
- **Hash navigation**: Used for section linking
- **Scope**: Global across application

#### 5.2.3 Global State (Not Currently Used)
- **Context API**: Available but not implemented
- **State Management Libraries**: Not needed currently
- **Future**: Could be added for theme, user auth, etc.

### 5.3 State Persistence

#### 5.3.1 Current Implementation
- No state persistence
- State resets on page refresh
- Suitable for static website

#### 5.3.2 Future Enhancements
- **LocalStorage**: For theme preference
- **SessionStorage**: For temporary user data
- **Cookies**: For authentication tokens

---

## 6. Design Patterns

### 6.1 Component Patterns

#### 6.1.1 Atomic Design Pattern
```
Atoms (UI Components)
  ↓
Molecules (Combined UI Components)
  ↓
Organisms (Complex Components)
  ↓
Templates (Page Layouts)
  ↓
Pages (Complete Views)
```

**Implementation**:
- **Atoms**: Button, Input, Icon (shadcn/ui)
- **Molecules**: Form fields, Card with content
- **Organisms**: Navbar, Footer, CTA
- **Templates**: Layout.astro
- **Pages**: index.astro and section components

#### 6.1.2 Container/Presentational Pattern
- **Presentational Components**: Focus on UI, receive props
- **Container Components**: Handle logic and state
- **Current Usage**: Mixed (could be improved)

#### 6.1.3 Higher-Order Components (HOCs)
- Not currently used
- Could be used for:
  - Authentication wrappers
  - Theme providers
  - Analytics tracking

### 6.2 Architecture Patterns

#### 6.2.1 Static Site Generation (SSG)
- Pre-render HTML at build time
- Optimal for performance and SEO
- No server-side rendering needed

#### 6.2.2 Progressive Hydration
- Static HTML served immediately
- Interactive components hydrated on demand
- Improves perceived performance

#### 6.2.3 Island Architecture
- Static "ocean" of content
- Interactive "islands" of React components
- Astro's core architecture pattern

### 6.3 Code Patterns

#### 6.3.1 Utility-First CSS
- Tailwind CSS classes for styling
- Consistent design system
- Rapid development

#### 6.3.2 Composition over Inheritance
- Components composed of smaller components
- Reusable building blocks
- Flexible architecture

#### 6.3.3 Single Responsibility Principle
- Each component has one clear purpose
- Easier to maintain and test
- Better code organization

### 6.4 Animation Patterns

#### 6.4.1 Scroll-Triggered Animations
- GSAP ScrollTrigger for scroll-based effects
- Animations trigger when elements enter viewport
- Smooth, performant animations

#### 6.4.2 Staggered Animations
- Sequential animation of multiple elements
- Creates visual flow
- Used in services and testimonials sections

#### 6.4.3 GPU-Accelerated Properties
- Use transform and opacity for animations
- Avoid layout thrashing
- Smooth 60fps animations

---

## 7. Security Considerations

### 7.1 Current Security Measures

#### 7.1.1 Static Site Security
- No server-side code execution
- No database connections
- Reduced attack surface
- No server-side vulnerabilities

#### 7.1.2 Content Security
- No user-generated content currently
- No form submissions (frontend only)
- No authentication required

#### 7.1.3 Dependency Security
- Regular dependency updates
- Bun lock file for integrity
- TypeScript for type safety

### 7.2 Security Best Practices

#### 7.2.1 Content Security Policy (CSP)
- **Current**: Not implemented
- **Recommendation**: Add CSP header
- **Purpose**: Prevent XSS attacks

#### 7.2.2 HTTPS
- **Current**: Enforced by Vercel
- **Purpose**: Encrypt data in transit
- **Status**: Implemented

#### 7.2.3 Input Validation
- **Current**: Not needed (no forms)
- **Future**: Zod validation for forms
- **Purpose**: Prevent injection attacks

#### 7.2.4 External Resources
- **Images**: From trusted sources
- **Fonts**: From @fontsource (trusted)
- **CDNs**: Vercel edge network

### 7.3 Future Security Enhancements

#### 7.3.1 Form Security
- CSRF protection
- Rate limiting
- Input sanitization
- Honeypot fields

#### 7.3.2 Authentication (if added)
- JWT tokens
- Secure cookie handling
- OAuth integration
- Session management

#### 7.3.3 API Security (if added)
- API keys in environment variables
- Rate limiting
- Request validation
- CORS configuration

---

## 8. Performance Optimization

### 8.1 Build-Time Optimizations

#### 8.1.1 Static Site Generation
- Pre-render HTML at build time
- No server-side processing
- Instant page loads

#### 8.1.2 Asset Optimization
- Image optimization (automatic with Astro)
- CSS minification
- JavaScript bundling and tree-shaking

#### 8.1.3 Code Splitting
- Automatic code splitting by Astro
- Route-based splitting
- Component-level splitting

### 8.2 Runtime Optimizations

#### 8.2.1 Lazy Loading
- Images lazy loaded
- Components hydrated on demand
- Reduce initial bundle size

#### 8.2.2 Client Directives
- `client:load`: Critical interactive components
- `client:visible`: Load when in viewport
- `client:idle`: Load when browser idle

#### 8.2.3 Caching Strategy
- Static assets cached by CDN
- Long cache headers for assets
- Service worker (future enhancement)

### 8.3 Animation Performance

#### 8.3.1 GPU Acceleration
- Use transform and opacity
- Avoid layout thrashing
- Smooth 60fps animations

#### 8.3.2 ScrollTrigger Optimization
- Refresh triggers after layout changes
- Debounce scroll events
- Efficient viewport calculations

#### 8.3.3 Animation Cleanup
- Kill animations on unmount
- Prevent memory leaks
- Clean up event listeners

### 8.4 Monitoring and Metrics

#### 8.4.1 Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### 8.4.2 Performance Budgets
- JavaScript bundle: < 100KB
- CSS bundle: < 50KB
- Images: Optimized and compressed

#### 8.4.3 Monitoring Tools
- Lighthouse audits
- WebPageTest
- Vercel Analytics

---

## 9. Accessibility

### 9.1 Current Accessibility Features

#### 9.1.1 Semantic HTML
- Proper heading hierarchy
- Semantic elements (nav, main, footer, section)
- Logical document structure

#### 9.1.2 Keyboard Navigation
- All interactive elements keyboard accessible
- Tab order follows logical flow
- Focus indicators visible

#### 9.1.3 Screen Reader Support
- Alt text for images
- ARIA labels where needed
- Descriptive link text

#### 9.1.4 Color Contrast
- WCAG AA compliant color ratios
- OKLCH color space for consistency
- Dark mode support

### 9.2 Accessibility Standards

#### 9.2.1 WCAG 2.1 Compliance
- **Level A**: Basic accessibility
- **Level AA**: Enhanced accessibility (target)
- **Level AAA**: Highest accessibility (future)

#### 9.2.2 ARIA Attributes
- Used in shadcn/ui components
- Proper roles and states
- Descriptive labels

#### 9.2.3 Focus Management
- Visible focus indicators
- Logical tab order
- Focus trapping in modals

### 9.3 Accessibility Enhancements

#### 9.3.1 Skip Links
- **Current**: Not implemented
- **Recommendation**: Add skip to main content
- **Purpose**: Keyboard navigation efficiency

#### 9.3.2 Reduced Motion
- **Current**: Not implemented
- **Recommendation**: Respect prefers-reduced-motion
- **Purpose**: Accessibility for motion-sensitive users

#### 9.3.3 Error Handling
- **Current**: Not applicable (no forms)
- **Future**: Clear error messages
- **Purpose**: Form accessibility

---

## 10. Testing Strategy

### 10.1 Testing Levels

#### 10.1.1 Unit Testing
- **Current**: Not implemented
- **Recommendation**: Add for utility functions
- **Tools**: Vitest, Jest

#### 10.1.2 Component Testing
- **Current**: Not implemented
- **Recommendation**: Test React components
- **Tools**: React Testing Library, Playwright

#### 10.1.3 Integration Testing
- **Current**: Not implemented
- **Recommendation**: Test component interactions
- **Tools**: Playwright, Cypress

#### 10.1.4 E2E Testing
- **Current**: Not implemented
- **Recommendation**: Test user flows
- **Tools**: Playwright

### 10.2 Testing Strategy

#### 10.2.1 Static Analysis
- **TypeScript**: Compile-time type checking
- **ESLint**: Code quality and style
- **Prettier**: Code formatting

#### 10.2.2 Visual Regression
- **Current**: Not implemented
- **Recommendation**: Visual testing
- **Tools**: Percy, Chromatic

#### 10.2.3 Performance Testing
- **Current**: Manual Lighthouse audits
- **Recommendation**: Automated performance tests
- **Tools**: Lighthouse CI

### 10.3 Testing Roadmap

#### 10.3.1 Phase 1: Unit Tests
- Test utility functions
- Test helper functions
- Achieve 80% coverage

#### 10.3.2 Phase 2: Component Tests
- Test React components
- Test Astro components
- Test user interactions

#### 10.3.3 Phase 3: E2E Tests
- Test critical user flows
- Test navigation
- Test forms (when added)

---

## 11. Deployment Architecture

### 11.1 Deployment Pipeline

```
┌─────────────┐
│   Code      │
│  Push/PR    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   CI/CD     │
│  (Vercel)   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Build     │
│  (Astro)    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Deploy    │
│  (Vercel)   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Edge      │
│  Network    │
└─────────────┘
```

### 11.2 Deployment Configuration

#### 11.2.1 Vercel Configuration
- **Adapter**: @astrojs/vercel
- **Build Command**: `bun build`
- **Output Directory**: `dist`
- **Framework Preset**: Astro

#### 11.2.2 Environment Variables
- **Current**: None required
- **Future**: API keys, feature flags

#### 11.2.3 Edge Functions
- **Current**: Not used
- **Future**: API routes, dynamic features

### 11.3 CDN and Caching

#### 11.3.1 Vercel Edge Network
- Global CDN distribution
- Automatic HTTPS
- Edge caching

#### 11.3.2 Cache Strategy
- Static assets: Long cache (1 year)
- HTML: Short cache (revalidate)
- Images: Optimized and cached

#### 11.3.3 Cache Headers
```http
Cache-Control: public, max-age=31536000, immutable
```

### 11.4 Monitoring and Logging

#### 11.4.1 Vercel Analytics
- Page views
- Web Vitals
- User demographics

#### 11.4.2 Error Tracking
- **Current**: Not implemented
- **Recommendation**: Sentry
- **Purpose**: Runtime error monitoring

#### 11.4.3 Uptime Monitoring
- **Current**: Vercel built-in
- **Recommendation**: Uptime Robot
- **Purpose**: Site availability

---

## 12. Maintenance and Scalability

### 12.1 Maintenance Strategy

#### 12.1.1 Dependency Updates
- Regular security updates
- Feature updates (careful testing)
- Automated dependency bots (Dependabot)

#### 12.1.2 Code Quality
- Regular code reviews
- Refactoring sessions
- Technical debt tracking

#### 12.1.3 Documentation
- Keep README updated
- Update SDD with changes
- Inline code comments

### 12.2 Scalability Considerations

#### 12.2.1 Content Scalability
- **Current**: Hardcoded content
- **Future**: CMS integration (Contentful, Sanity)
- **Benefit**: Easy content updates

#### 12.2.2 Feature Scalability
- **Current**: Static website
- **Future**: Dynamic features, user accounts
- **Benefit**: Enhanced functionality

#### 12.2.3 Traffic Scalability
- **Current**: Vercel handles scaling automatically
- **Capacity**: Millions of visitors
- **Cost**: Pay-as-you-go pricing

### 12.3 Future Enhancements

#### 12.3.1 CMS Integration
- Headless CMS for content management
- API integration for dynamic content
- Preview mode for content editors

#### 12.3.2 E-commerce Integration
- Product catalog
- Shopping cart
- Payment processing
- Order management

#### 12.3.3 User Features
- User authentication
- User profiles
- Booking system
- Customer portal

#### 12.3.4 Advanced Features
- Multi-language support
- Blog functionality
- Social media integration
- Analytics dashboard

### 12.4 Migration Strategy

#### 12.4.1 Framework Updates
- Follow Astro upgrade guides
- Test in staging environment
- Gradual rollout

#### 12.4.2 Dependency Upgrades
- Semantic versioning
- Breaking change analysis
- Automated testing

#### 12.4.3 Platform Migration
- Export build artifacts
- DNS configuration
- SSL certificate transfer

---

## Appendix

### A. Configuration Files

#### A.1 astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel(),
});
```

#### A.2 components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/global.css",
    "baseColor": "gray",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### B. Key Dependencies

#### B.1 Core Dependencies
- astro: ^5.16.6
- react: ^19.2.3
- react-dom: ^19.2.3
- @astrojs/react: ^4.4.2

#### B.2 Styling Dependencies
- tailwindcss: ^4.1.18
- @tailwindcss/vite: ^4.1.18
- tw-animate-css: ^1.4.0

#### B.3 UI Dependencies
- @radix-ui/*: Multiple packages
- lucide-react: ^0.562.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- tailwind-merge: ^3.4.0

#### B.4 Animation Dependencies
- gsap: ^3.14.2

### C. Resources

#### C.1 Documentation
- Astro Docs: https://docs.astro.build
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- GSAP: https://greensock.com

#### C.2 Community
- Astro Discord: https://astro.build/chat
- React Community: https://react.dev/community
- Tailwind CSS Discord: https://tailwindcss.com/discord

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | June 8, 2026 | Development Team | Initial SDD creation |

---

**End of Software Design Document**
