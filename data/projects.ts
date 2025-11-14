export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  year?: string
  role?: string
  tools?: string[]
  highlights?: string[]
  videos?: string[]
  links?: { label: string; url: string }[]
  images?: string[]
  pdfs?: { label: string; url: string; thumbnail?: string }[]
  brandContext?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'troutwood-website',
    title: 'Troutwood Website',
    category: 'web',
    description: 'Run and maintain the Troutwood website, coded fully by myself using CSS, HTML, and JavaScript. For the most recent iteration, I built the site from designs created by our UX/UI contract designer. I previously helped design earlier iterations of the website, creating visual identity, user flows, and interface designs.',
    longDescription: 'I currently build and maintain the Troutwood website using pure CSS, HTML, and JavaScript. For the most recent iteration, I focused solely on development—translating designs created by our UX/UI contract designer into fully functional, responsive code. In previous iterations, I contributed to the design process, helping create the visual identity, user flows, and interface designs. This project showcases my ability to both design and develop, as well as collaborate effectively with designers to bring visions to life. I focus on creating intuitive navigation, engaging visual storytelling, and seamless user experiences that make financial education accessible and engaging for younger audiences.',
    image: '/images/Screenshot 2025-11-13 at 10.18.52 PM.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UX/UI Design'],
    year: '2021 - Present',
    role: 'Front-End Developer (Current Iteration - Build Only) & Designer (Previous Iterations)',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Git'],
    highlights: [
      'Built most recent website iteration from designs (development only)',
      'Translated UX/UI contract designer\'s designs into functional code using vanilla JavaScript',
      'Designed previous website iterations, including visual identity and user flows',
      'Created fully responsive layouts that work across all devices',
      'Maintained and updated site continuously for 3+ years'
    ],
    images: [
      '/images/ss1.png',
      '/images/ss2.png',
      '/images/ss3.png',
      '/images/Video Library.png',
      '/images/Investors.png',
      '/images/Group 1000004928.png'
    ],
    brandContext: 'Recent work reflects Troutwood\'s brand redesign. Earlier iterations featured our previous brand identity.'
  },
  {
    id: 2,
    slug: 'scalable-design-system',
    title: 'Scalable Design System',
    category: 'web',
    description: 'Defined and implemented a scalable front-end design system for brand consistency across web and mobile platforms, improving session time and user conversion rates.',
    longDescription: 'I developed a comprehensive design system that ensures visual and functional consistency across all Troutwood platforms. This system includes reusable components, typography scales, color palettes, and interaction patterns. The implementation resulted in improved development efficiency, better user experience consistency, and increased conversion rates.',
    image: '/api/placeholder/600/400',
    tags: ['Design Systems', 'Figma', 'Component Library', 'Brand Consistency'],
    year: '2022 - 2024',
    role: 'Design System Lead',
    tools: ['Figma', 'HTML/CSS', 'JavaScript', 'Design Tokens'],
    highlights: [
      'Created comprehensive component library',
      'Established design tokens and guidelines',
      'Improved development workflow efficiency',
      'Increased brand consistency across platforms'
    ]
  },
  {
    id: 3,
    slug: 'ai-assisted-design-workflows',
    title: 'AI-Assisted Design Workflows',
    category: 'web',
    description: 'Integrated AI tools (ChatGPT, Cursor) into content generation, wireframing, and design ideation workflows to accelerate prototyping and enhance creative exploration.',
    longDescription: 'I integrated AI tools like ChatGPT and Cursor into my design and development workflow to accelerate ideation, content generation, and prototyping. This innovative approach has allowed me to explore more design variations, generate content faster, and prototype ideas more efficiently while maintaining high quality standards.',
    image: '/api/placeholder/600/400',
    tags: ['AI Tools', 'Prototyping', 'Workflow Optimization', 'ChatGPT'],
    year: '2024',
    role: 'Designer & Developer',
    tools: ['ChatGPT', 'Cursor', 'Figma', 'Prototyping Tools'],
    highlights: [
      'Streamlined design ideation process',
      'Accelerated content generation',
      'Enhanced prototyping capabilities',
      'Maintained quality while increasing speed'
    ]
  },
  {
    id: 4,
    slug: 'animations-adobe-lottie',
    title: 'Animations with Adobe & Lottie',
    category: 'animation',
    description: 'Created animations and microinteractions using Adobe Animate, Adobe After Effects, Lottie, and GSAP. Developed engaging motion graphics that humanized complex topics and enhanced user experiences across web and social platforms.',
    longDescription: 'I create engaging animations and microinteractions using a combination of Adobe Animate, Adobe After Effects, Lottie, and GSAP. These animations help humanize complex financial topics, making them more accessible and engaging for educational audiences. The animations are optimized for web performance and work seamlessly across different platforms.',
    image: '/api/placeholder/600/400',
    tags: ['Adobe After Effects', 'Adobe Animate', 'Lottie', 'GSAP', 'Motion Graphics'],
    year: '2021 - Present',
    role: 'Motion Designer',
    tools: ['Adobe After Effects', 'Adobe Animate', 'Lottie', 'GSAP', 'JavaScript'],
    highlights: [
      'Created educational animations that simplify complex topics',
      'Optimized animations for web performance',
      'Developed reusable animation libraries',
      'Enhanced user engagement through motion'
    ]
  },
  {
    id: 7,
    slug: 'social-media-newsletter-design',
    title: 'Social Media & Newsletter Design',
    category: 'graphic',
    description: 'Design and create visual content for social media campaigns and email newsletters. Develop cohesive brand visuals that engage audiences and maintain consistency across digital marketing channels.',
    longDescription: 'I design and create all visual content for Troutwood\'s social media campaigns and email newsletters. This includes creating cohesive brand visuals, designing engaging graphics, and maintaining consistency across all digital marketing channels. My designs help communicate complex financial concepts in an accessible and visually appealing way.',
    image: '/images/Jump$tart Post.png',
    tags: ['Social Media Design', 'Newsletter Design', 'Brand Design', 'Content Creation'],
    year: '2021 - Present',
    role: 'Graphic Designer & Content Creator',
    tools: ['Canva', 'Adobe Creative Suite', 'Figma', 'Email Design Tools'],
    highlights: [
      'Created engaging social media content',
      'Designed responsive email newsletters',
      'Maintained brand consistency across channels',
      'Increased engagement through visual storytelling'
    ],
    images: [
      '/images/Jump$tart Post.png'
    ],
    brandContext: 'Recent social media content uses Troutwood\'s new brand identity following our brand redesign. Earlier designs featured our previous branding.'
  },
  {
    id: 9,
    slug: 'branded-materials-flyers',
    title: 'Branded Materials & Flyers',
    category: 'graphic',
    description: 'Design and create branded flyers, PDFs, and print materials for marketing campaigns, events, and educational purposes. Develop cohesive visual materials that maintain brand consistency.',
    longDescription: 'I design and create branded flyers, PDFs, and print materials for Troutwood\'s marketing campaigns, events, and educational initiatives. These materials include event flyers, informational PDFs, promotional materials, and other print collateral. Each piece is designed to maintain brand consistency while effectively communicating key messages to target audiences.',
    image: '/api/placeholder/600/400',
    tags: ['Print Design', 'Flyer Design', 'PDF Design', 'Brand Design', 'Layout Design'],
    year: '2021 - Present',
    role: 'Graphic Designer',
    tools: ['Adobe Creative Suite', 'Canva', 'Figma', 'PDF Design Tools'],
    highlights: [
      'Created branded flyers for events and campaigns',
      'Designed informational and promotional PDFs',
      'Maintained brand consistency across all materials',
      'Developed print-ready designs for various formats'
    ],
    pdfs: [
      {
        label: 'Wellness Page 2',
        url: '/pdfs/Wellness Page 2.pdf'
      },
      {
        label: 'Wellness Page 3',
        url: '/pdfs/Wellness Page 3.pdf'
      }
    ],
    brandContext: 'Recent branded materials use Troutwood\'s new brand identity. Some older materials featured our previous branding system.'
  },
  {
    id: 8,
    slug: 'video-production-editing',
    title: 'Video Production & Editing',
    category: 'animation',
    description: 'Create and edit video content for marketing and educational purposes. Combine video production skills with motion graphics to produce engaging multimedia content.',
    longDescription: 'I produce and edit video content for marketing campaigns and educational materials. Combining video production skills with motion graphics, I create engaging multimedia content that effectively communicates messages and educates audiences. This includes planning, shooting, editing, and post-production work. All videos are filmed and edited by me, showcasing my ability to handle the complete video production pipeline.',
    image: '/api/placeholder/600/400',
    tags: ['Video Production', 'Video Editing', 'Motion Graphics', 'Multimedia'],
    year: '2021 - Present',
    role: 'Video Producer & Editor',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Video Editing Software'],
    highlights: [
      'Produced educational video content',
      'Created marketing video campaigns',
      'Combined video with motion graphics',
      'Enhanced storytelling through multimedia',
      'Filmed and edited all video content independently'
    ],
    videos: [
     'https://www.youtube.com/watch?v=qgRGZvt5mU4',
      'https://www.youtube.com/watch?v=jnk-MFdH4R4',
      'https://www.youtube.com/watch?v=GICyaLbbXK8',
      'https://www.youtube.com/watch?v=F2FP6aDbjp8',
      'https://www.youtube.com/watch?v=gCRt_6pCS6I',
      'https://www.youtube.com/watch?v=_jo79P-SnDk',
      'https://www.youtube.com/watch?v=ld4Ek_HJ9jY'
    ]
  },
  {
    id: 5,
    slug: 'brand-visuals-prototypes',
    title: 'Brand Visuals & Prototypes',
    category: 'graphic',
    description: 'Developed early brand visuals, storyboards, and prototype interfaces for investor presentations during Troutwood\'s startup phase at Carnegie Mellon University.',
    longDescription: 'During Troutwood\'s early startup phase at Carnegie Mellon University\'s Swartz Center for Entrepreneurship, I developed the initial brand visuals, created storyboards, and designed prototype interfaces for investor presentations. This foundational work helped establish Troutwood\'s visual identity and communicate the product vision effectively.',
    image: '/api/placeholder/600/400',
    tags: ['Branding', 'Prototyping', 'Storyboarding', 'Visual Design'],
    year: '2019 - 2021',
    role: 'Brand Designer & Prototyper',
    tools: ['Figma', 'Adobe Creative Suite', 'Prototyping Tools'],
    highlights: [
      'Established initial brand identity',
      'Created investor presentation materials',
      'Designed early product prototypes',
      'Developed visual storytelling framework'
    ]
  },
  {
    id: 6,
    slug: 'analytics-integration-design-impact',
    title: 'Analytics Integration & Design Impact',
    category: 'web',
    description: 'Collaborated with marketing and product teams to integrate analytics and measure design impact. Completed SEO certification courses and implemented SEO optimizations that significantly improved website traffic. Translated product requirements into interactive web features that increase accessibility and user engagement.',
    longDescription: 'I collaborated closely with marketing and product teams to integrate analytics and measure the impact of design decisions. After completing SEO certification courses (Google SEO Capstone Project and Optimizing a Website for Google Search from UC Davis), I applied SEO best practices to the Troutwood website, resulting in a significant increase in website traffic. By translating product requirements into interactive web features, I helped increase accessibility and improve user engagement metrics such as session duration, pages per session, and return visitor rates. This data-driven approach ensures that design decisions are backed by user insights and measurable outcomes.',
    image: '/api/placeholder/600/400',
    tags: ['Analytics', 'SEO', 'Product Strategy', 'Accessibility', 'Data-Driven Design'],
    year: '2022 - Present',
    role: 'Product Designer & Analyst',
    tools: ['Google Analytics', 'SEO Optimization', 'Data Analysis Tools', 'A/B Testing', 'Accessibility Tools'],
    highlights: [
      'Completed SEO certification courses (UC Davis) and applied learnings to website',
      'Significantly improved website traffic through SEO optimizations',
      'Integrated analytics into design process',
      'Measured and improved design impact using user engagement metrics',
      'Increased accessibility across platform',
      'Improved user engagement (session duration, pages per session, return visitor rates)'
    ]
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

