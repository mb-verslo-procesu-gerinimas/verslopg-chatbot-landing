# ERPrompt.lt

ERPrompt.lt is a Lithuanian virtual assistant chatbot landing page for business management systems. Built with Next.js 14, Tailwind CSS, and modern web technologies.

## Features

- 🤖 Virtual assistant for business management systems
- 🌐 Lithuanian language support
- 📱 Responsive design with Tailwind CSS
- ⚡ Next.js 14 with App Router
- 🎨 Modern UI components with Headless UI
- 🚀 Optimized performance and SEO

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd verslopg-chatbot-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (auth)/         # Authentication pages
│   ├── layout.jsx      # Root layout
│   └── page.jsx        # Landing page
├── components/         # Reusable React components
├── images/            # Static assets
└── styles/           # Tailwind CSS styles
```

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI
- **Fonts**: Inter & Lexend (Google Fonts)
- **Language**: JavaScript/JSX

## Customization

The landing page is built with modular components in `src/components/`. Key sections include:

- `Hero.jsx` - Main hero section with Lithuanian text
- `Header.jsx` - Navigation header
- `Footer.jsx` - Site footer
- Additional sections (currently commented out in main page)

## License

This project is based on the Salient template and is subject to the [Tailwind Plus license](https://tailwindcss.com/plus/license).
