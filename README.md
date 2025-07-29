# Dynamic Pages API - Next.js App

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern Next.js application that creates brand-new pages on demand through a powerful REST API. Built with the latest Next.js version and featuring 5 beautifully designed, reusable components with a signature blue-and-white theme.

## Live Demo

** Live URL**: [Your deployed URL here]  
** bino.bot Integration**: This app is designed to integrate with bino.bot services

##  Key Features

- ** 5 Reusable Components**: Card, ImageBlock, TextSection, StatsBox, CTA
- ** Dynamic Page Creation**: Create pages on-demand via REST API
- ** Immediate Serving**: New pages are instantly available at `/{slug}`
- ** Modern UI**: Beautiful, responsive design with smooth animations
- ** Image Support**: Optimized image display with Next.js Image component
- ** Interactive Builder**: Visual page creation interface at `/create`
- ** Type-Safe Components**: Well-structured component props and validation

##  Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.4.4 | React framework with App Router |
| **React** | 19.1.0 | UI library |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework |
| **Node.js** | 18+ | Runtime environment |

##  API Endpoints

### `POST /api/pages`

Creates a new page with the specified components.

**Request Body:**
```json
{
  "slug": "my-page",
  "components": [
    {
      "type": "TextSection",
      "props": {
        "title": "My Page Title",
        "content": "This is the content of my page."
      }
    },
    {
      "type": "ImageBlock",
      "props": {
        "src": "https://example.com/image.jpg",
        "alt": "Description"
      }
    },
    {
      "type": "Card",
      "props": {
        "title": "Card Title",
        "text": "Card description",
        "url": "https://example.com",
        "imageSrc": "https://example.com/card-image.jpg"
      }
    },
    {
      "type": "StatsBox",
      "props": {
        "value": "42",
        "label": "Users"
      }
    },
    {
      "type": "CTA",
      "props": {
        "text": "Get Started",
        "url": "https://example.com"
      }
    }
  ]
}
```

**Response:**
```json
{
  "message": "Page created",
  "path": "/my-page"
}
```

### `GET /api/pages`

Retrieves all existing pages.

**Response:**
```json
[
  {
    "slug": "welcome",
    "components": [...]
  }
]
```

##  Sample cURL Commands

### Create a new page:
```bash
curl -X POST https://your-app.vercel.app/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "test-page",
    "components": [
      {
        "type": "TextSection",
        "props": {
          "title": "Welcome",
          "content": "This is a test page created via API."
        }
      },
      {
        "type": "StatsBox",
        "props": {
          "value": "100",
          "label": "Visitors"
        }
      }
    ]
  }'
```

### Get all pages:
```bash
curl https://your-app.vercel.app/api/pages
```

## Available Components

### 1. TextSection
Displays text content with title and description.
```json
{
  "type": "TextSection",
  "props": {
    "title": "Section Title",
    "content": "Section content goes here..."
  }
}
```

### 2. ImageBlock
Displays an optimized image with hover effects.
```json
{
  "type": "ImageBlock",
  "props": {
    "src": "https://example.com/image.jpg",
    "alt": "Image description"
  }
}
```

### 3. Card
Displays an interactive card with image, title, text, and link.
```json
{
  "type": "Card",
  "props": {
    "title": "Card Title",
    "text": "Card description",
    "url": "https://example.com",
    "imageSrc": "https://example.com/image.jpg"
  }
}
```

### 4. StatsBox
Displays statistics with large numbers and labels.
```json
{
  "type": "StatsBox",
  "props": {
    "value": "1,234",
    "label": "Total Users"
  }
}
```

### 5. CTA (Call-to-Action)
Displays a prominent call-to-action button with animations.
```json
{
  "type": "CTA",
  "props": {
    "text": "Get Started",
    "url": "https://example.com"
  }
}
```

##  Demo Pages

Pre-created example pages to showcase the functionality:

- ** Welcome Page**: `/welcome` - Introduction to the platform
- ** Features Page**: `/features` - Platform features overview
- ** Example Page**: `/page` - Additional example with all components

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone [your-repo-url]
   cd bino
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up demo pages:**
   ```bash
   node setup-demo-pages.js
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

##  Deployment

This app is ready for deployment on Vercel:

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Deploy automatically**

The app will be available at your Vercel URL with full API functionality.

### Environment Variables
No environment variables required for basic functionality.

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Support

- ** Documentation**: Check the API documentation above
- ** Issues**: Create an issue in the repository
- ** Questions**: Open a discussion in the repository

##  Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

** Star this repository if you find it helpful!**

