# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Creates production build
- **Production server**: `npm run start` - Runs production server (requires build first)
- **Lint**: `npm run lint` - Runs ESLint with Next.js configuration

## Project Architecture

This is a Next.js 14 application using the App Router pattern. The codebase follows a component-based architecture with Tailwind CSS for styling.

### Key Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.jsx` - Landing page 
  - `layout.jsx` - Root layout with Inter/Lexend fonts
  - `(auth)/` - Authentication pages (login, register)
- `src/components/` - Reusable React components for landing page sections
- `src/styles/` - Tailwind CSS configuration
- `src/images/` - Static assets (avatars, logos, screenshots)

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with @tailwindcss/forms
- **UI Components**: Headless UI (@headlessui/react)
- **Fonts**: Inter and Lexend via next/font/google
- **Utilities**: clsx for conditional classes

### Component Architecture
The landing page is built with modular components: Hero, PrimaryFeatures, SecondaryFeatures, CallToAction, Testimonials, Pricing, Faqs, Header, Footer. Each component is self-contained in the `src/components/` directory.

### Branding
The app title is "ERPrompt.lt" as defined in the root layout metadata. This appears to be a chatbot landing page template customized from the original Salient template.