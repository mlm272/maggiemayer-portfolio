# Maggie Mayer Portfolio

A modern, responsive portfolio website showcasing web design, animations, and graphic design work.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## 📁 Project Structure

```
maggiemayer-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── Navigation.tsx     # Fixed navigation bar
│   ├── Hero.tsx          # Hero/landing section
│   ├── Work.tsx          # Portfolio showcase section
│   ├── About.tsx         # About me section
│   └── Contact.tsx       # Contact form section
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works beautifully on all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Animations**: Powered by Framer Motion for engaging interactions
- **Project Filtering**: Filter portfolio projects by category (Web, Animation, Graphic Design)
- **Contact Form**: Ready-to-customize contact form

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions

## ✏️ Customization

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`): Update the title and description
2. **About Section** (`components/About.tsx`): Replace the placeholder text with your bio
3. **Work Section** (`components/Work.tsx`): Replace the sample projects with your actual work
4. **Contact Section** (`components/Contact.tsx`): Update email and social links

### Set Up Contact Form (EmailJS)

The contact form uses EmailJS to send emails. To set it up:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/) (free tier available)

2. **Create an Email Service**:
   - Go to Email Services → Add New Service
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates → Create New Template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your Template ID

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy your Public Key

5. **Set up environment variables**:
   - For local development: Create a `.env.local` file in the root directory:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - For GitHub Pages deployment: Add these as secrets in your GitHub repository:
     - Go to Settings → Secrets and variables → Actions
     - Add `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` as secrets

### Add Your Projects

Edit the `projects` array in `components/Work.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'web', // 'web', 'animation', or 'graphic'
    description: 'Project description',
    image: '/path/to/image.jpg', // Add images to public folder
    tags: ['React', 'Next.js'],
  },
  // Add more projects...
]
```

### Add Project Images

1. Create a `public` folder in the root directory
2. Add your project images there
3. Reference them in your projects array (e.g., `/project1.jpg`)

### Customize Colors

Edit `tailwind.config.js` to change the color scheme. The primary color is currently set to a blue palette.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

This portfolio is ready to deploy on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with additional configuration)

For Vercel deployment:
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

## 📝 License

This project is open source and available for personal use.


