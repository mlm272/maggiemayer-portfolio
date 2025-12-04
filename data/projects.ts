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
  videos?: (string | { url: string; description?: string })[]
  links?: { label: string; url: string }[]
  images?: string[]
  categorizedImages?: { category: string; images: string[] }[] // For organizing images into sections
  pdfs?: { label: string; url: string; thumbnail?: string }[]
  lottieAnimations?: string[] // LottieFiles animation IDs
  brandContext?: string
  // Case study format fields
  problem?: string
  whatIDid?: string[]
  result?: string
  context?: string
  outcome?: string
  featured?: boolean // Mark featured projects
  whatIOwned?: string[] // What I owned section
  problemsAndSolutions?: Array<{ problem: string; solution: string; outcome: string }> // Multiple problems/solutions
  takeaways?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'troutwood-website',
    title: 'Troutwood Website',
    category: 'web',
    description: 'Sole front-end owner of Troutwood website. Built and maintain entire site using HTML/CSS/JS, handle SEO + analytics, and ship ongoing improvements that drove +265% YoY organic traffic growth.',
    longDescription: 'I fully owned Troutwood\'s marketing website, managing everything from day-to-day updates to major feature builds and performance improvements. My work blended front-end development with technical SEO and analytics-driven UX iteration to increase discoverability of core tools and grow organic traffic.',
    context: 'I fully owned Troutwood\'s marketing website, managing everything from day-to-day updates to major feature builds and performance improvements. My work blended front-end development with technical SEO and analytics-driven UX iteration to increase discoverability of core tools and grow organic traffic.',
    problem: 'The site faced three key challenges: 1) Low discoverability of key tools due to navigation friction, 2) Need for scalable organic growth through better search visibility, and 3) Performance and UX consistency across devices as the site grew in complexity.',
    whatIOwned: [
      'End-to-end website management: built new pages, maintained existing pages, fixed bugs, updated content, and ensured consistent styling and branding across the site',
      'Front-end feature development using HTML/CSS/JavaScript, focusing on responsive design, accessibility, and cross-browser reliability',
      'Technical + on-page SEO strategy: metadata, internal linking, structured data, site architecture improvements, keyword optimization, and content support',
      'Analytics + iteration loop: monitored GA4/Search Console trends, identified drop-offs or underperforming pages, shipped UX fixes, and tracked lift'
    ],
    whatIDid: [
      'Redesigned entry points and added clearer CTAs (example: adding prominent Map button when users weren\'t reaching the Map tool)',
      'Implemented technical SEO improvements, rebuilt page metadata systems, improved site structure, added schema/structured data, and aligned content to keyword/search intent',
      'Optimized front-end patterns, ensured responsive layouts, fixed accessibility gaps, and continuously improved UI consistency across pages'
    ],
    problemsAndSolutions: [
      {
        problem: 'Low discoverability of key tools: Analytics showed that some high-value tools were under-visited due to navigation friction.',
        solution: 'I redesigned entry points and added clearer CTAs (example: adding a prominent Map button when users weren\'t reaching the Map tool).',
        outcome: 'Improved click-through and engagement on strategic pages; continued monitoring ensured steady gains over time.'
      },
      {
        problem: 'Need for scalable organic growth: The site needed a stronger foundation for search visibility and sustainable traffic growth.',
        solution: 'I implemented technical SEO improvements, rebuilt page metadata systems, improved site structure, added schema/structured data, and aligned content to keyword/search intent.',
        outcome: 'Significant search growth and expanded reach internationally.'
      },
      {
        problem: 'Performance and UX consistency across devices: Site had to remain fast, clean, and reliable while growing in size and complexity.',
        solution: 'I optimized front-end patterns, ensured responsive layouts, fixed accessibility gaps, and continuously improved UI consistency across pages.',
        outcome: 'Better usability and a smoother experience across mobile and desktop.'
      }
    ],
    result: 'Organic traffic growth was driven by holistic improvements to Troutwood.com — technical SEO foundations, clearer site architecture, stronger internal linking, accessibility upgrades, and continuous UX refinement. As the website became faster, more reliable, and more authoritative, search visibility increased across the entire domain, leading to compounding growth in organic sessions and new users.\n\nResults:\n• +265% YoY organic traffic growth (92K organic sessions)\n• +79K new users (+188% YoY)\n• 200–400% YoY international growth across multiple regions\n\nMetrics reflect performance on the site version I owned and optimized. After a company-wide redesign, site architecture and analytics baselines shifted, so post-redesign performance is measured from a new starting point.',
    takeaways: [
      'Owning the website solo required me to think like both a developer and a growth strategist',
      'Biggest contributions: building reliable front-end systems, using analytics to guide UX improvements, and executing SEO work that produced measurable, sustained traffic gains'
    ],
    outcome: '+265% YoY organic traffic growth (92K organic sessions) • +79K new users (+188% YoY) • 200–400% YoY growth internationally across multiple regions',
    image: '/images/website design photos/ss1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'GA4', 'Search Console', 'Structured Data', 'SEO', 'Analytics'],
    year: '2021–2025',
    role: 'Sole Front-End Developer & Website Owner • End-to-end website development, UX/UI updates, SEO strategy, analytics, ongoing maintenance & releases',
    tools: ['HTML', 'CSS', 'JavaScript', 'GA4', 'Google Search Console', 'Structured Data/Schema', 'Git'],
    highlights: [
      'Owning the website solo required me to think like both a developer and a growth strategist',
      'Biggest contributions: building reliable front-end systems, using analytics to guide UX improvements, and executing SEO work that produced measurable, sustained traffic gains',
      'Metrics reflect performance on the site version I owned and optimized'
    ],
    images: [
      '/images/website design photos/ss1.png',
      '/images/website design photos/ss2.png',
      '/images/website design photos/ss3.png',
      '/images/website design photos/Video Library.png',
      '/images/website design photos/Investors.png',
      '/images/website design photos/Group 1000004928.png',
      '/images/website design photos/Organizations.png',
      '/images/website design photos/App page - V2.jpg',
      '/images/website design photos/idea2.0again.png',
      '/images/website design photos/IRALogix.png',
      '/images/website design photos/IRALogix-2.png',
      '/images/website design photos/LandingIdea4.png'
    ],
    videos: [
      {
        url: '/images/website design photos/junehome.mov',
        description: 'Website scroll-through showcasing GSAP animations'
      }
    ],
    links: [
      {
        label: 'View Live Website',
        url: 'https://troutwood.com'
      }
    ],
    featured: true
  },
  {
    id: 2,
    slug: 'the-missing-semester',
    title: 'The Missing Semester',
    category: 'web',
    description: 'Designed and developed themissingsemester.com from concept to launch. Created complete visual identity, user experience, and front-end implementation using modern web technologies.',
    longDescription: 'I designed and developed themissingsemester.com as a complete end-to-end project. This involved creating the visual identity, designing the user experience and interface, and building the entire front-end from scratch. The website showcases my ability to handle both design and development, creating a cohesive, functional, and visually appealing web experience.',
    context: 'The Missing Semester needed a website to showcase their educational content. The project required both strong visual design and robust front-end development to create an engaging, user-friendly experience.',
    problem: 'Needed a complete website that effectively communicates the educational mission while providing an intuitive user experience. Required both compelling visual design and functional, responsive front-end development.',
    whatIDid: [
      'Designed complete visual identity and brand system for the website',
      'Created user experience flows and wireframes',
      'Designed responsive UI/UX for all pages and components',
      'Developed front-end using HTML, CSS, and JavaScript',
      'Implemented responsive design for mobile and desktop',
      'Ensured cross-browser compatibility and accessibility',
      'Optimized for performance and user experience'
    ],
    whatIOwned: [
      'End-to-end website design: visual identity, UI/UX design, wireframing, and prototyping',
      'Complete front-end development: HTML, CSS, JavaScript implementation',
      'Responsive design and cross-browser compatibility',
      'Performance optimization and accessibility'
    ],
    result: 'Successfully launched a fully functional, beautifully designed website that effectively communicates The Missing Semester\'s educational mission. The site provides an intuitive user experience across all devices.',
    outcome: 'Launched complete website with custom design and full front-end implementation. Created cohesive visual identity and seamless user experience.',
    image: '/images/themissingsemester.png',
    tags: ['Web Design', 'Front-End Development', 'UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    year: '2024',
    role: 'Designer & Developer • End-to-end design and development',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Responsive Design'],
    highlights: [
      'Complete end-to-end project: design and development',
      'Created visual identity and brand system',
      'Designed intuitive user experience',
      'Built fully responsive front-end',
      'Optimized for performance and accessibility'
    ],
    images: [
      '/images/themissingsemester.png',
      '/images/Screenshot 2025-12-04 at 2.13.26 PM.png'
    ],
    links: [
      {
        label: 'View Live Website',
        url: 'https://themissingsemester.com'
      }
    ],
    featured: true
  },
  {
    id: 3,
    slug: 'ai-chatbot-ui',
    title: 'AI Chatbot UI (Web + App)',
    category: 'web',
    description: 'Built complete front-end for AI-powered chatbot across web and mobile platforms. Handled request/response flow, state management, and collaborated with backend/AI teams.',
    longDescription: 'I built the entire front-end for an AI-powered chatbot that works seamlessly across web and mobile platforms. This project showcases my ability to build intuitive conversation interfaces and handle complex state management for real-time AI interactions.',
    context: 'Troutwood needed an AI chatbot to help users get instant answers to financial questions. The interface needed to feel natural, handle errors gracefully, and work consistently across platforms.',
    problem: 'No existing chatbot interface. Needed to build conversation interface from scratch, handle typing states, loading/error states, and ensure consistent experience across web and mobile.',
    whatIDid: [
      'Built complete front-end UI for web and mobile platforms',
      'Implemented conversation flow with typing indicators and message formatting',
      'Built request/response handling with proper error states and loading indicators',
      'Created multi-platform consistent UI components',
      'Built message formatting system for code blocks, lists, and rich text',
      'Handled edge cases: network errors, timeout states, empty responses',
      'Collaborated with backend/AI teams on API integration and response structure'
    ],
    result: 'Successfully launched chatbot that provides instant, helpful responses. Users can get answers to financial questions quickly, improving engagement and reducing support burden.',
    outcome: 'Launched AI chatbot with seamless experience across platforms. Improved user engagement and reduced support queries.',
    image: '/images/ask-finn.png',
    tags: ['React', 'React Native', 'API Integration', 'State Management'],
    year: '2024',
    role: 'Front-End Developer',
    tools: ['React', 'React Native', 'JavaScript', 'Figma', 'API Integration'],
    images: [
      '/images/ask-finn.png'
    ],
    featured: true
  },
  {
    id: 4,
    slug: 'react-native-app-features',
    title: 'React Native App Features',
    category: 'mobile',
    description: 'Built key features and components for Troutwood mobile app using React Native. Owned state management, API integration, and polished UX for multiple user-facing features.',
    longDescription: 'I developed several key features for the Troutwood mobile app using React Native. This work demonstrates my ability to build native-feeling mobile experiences, handle complex state management, and create polished, responsive UI components.',
    context: 'The Troutwood mobile app needed new features to improve user engagement and provide better financial education tools on mobile devices.',
    problem: 'App needed new features built quickly with consistent UX. Required proper state management, API integration, and responsive design that works across iOS and Android.',
    whatIDid: [
      'Built multiple screens and components using React Native',
      'Implemented state management for complex user flows',
      'Integrated REST APIs with proper error handling and loading states',
      'Created responsive layouts that work across iOS and Android',
      'Polished UX with smooth animations and transitions',
      'Handled edge cases: offline states, slow networks, data validation',
      'Collaborated with design and backend teams on feature specifications'
    ],
    result: 'Successfully shipped multiple app features that improved user engagement and provided better mobile experience. Features work seamlessly across platforms with polished UX.',
    outcome: 'Shipped multiple app features with consistent UX. Improved mobile user engagement.',
    image: '/images/mobile/IMG_1726.PNG',
    images: [
      '/images/mobile/IMG_1726.PNG',
      '/images/mobile/IMG_1727.PNG',
      '/images/mobile/IMG_1728.PNG',
      '/images/mobile/IMG_1729.PNG'
    ],
    tags: ['React Native', 'Mobile Development', 'State Management', 'API Integration'],
    year: '2023 - Present',
    role: 'Mobile Developer • Feature Owner',
    tools: ['React Native', 'JavaScript', 'State Management', 'REST APIs'],
    featured: true
  },
  {
    id: 5,
    slug: 'animations-graphic-design',
    title: 'Animations & Graphic Design',
    category: 'animation',
    description: 'Created engaging animations and microinteractions using Adobe Animate, Adobe After Effects, Adobe Character Animator, Lottie, and GSAP. Developed motion graphics and animated company mascot that humanize complex topics and enhance user experiences.',
    longDescription: 'I create engaging animations and microinteractions using a combination of Adobe Animate, Adobe After Effects, Adobe Character Animator, Lottie, and GSAP. I animated the company mascot using Character Animator, bringing personality and life to brand communications. These animations help humanize complex financial topics, making them more accessible and engaging for educational audiences. The animations are optimized for web performance and work seamlessly across different platforms.',
    context: 'Troutwood needed engaging animations and motion graphics to make complex financial concepts more accessible and visually appealing. Animations needed to work across web and mobile platforms while maintaining performance.',
    problem: 'Static content and interfaces needed more engaging, dynamic elements. Complex financial concepts required visual storytelling through animation to improve user understanding and engagement.',
    whatIDid: [
      'Animated company mascot using Adobe Character Animator, bringing personality and life to brand communications',
      'Created Lottie animations for web integration using Adobe After Effects',
      'Developed motion graphics and microinteractions using GSAP and JavaScript',
      'Built animations in Adobe Animate for interactive web experiences',
      'Optimized animations for web performance and file size',
      'Designed animation sequences that enhance UX without overwhelming users',
      'Integrated animations seamlessly into existing web and mobile interfaces',
      'Maintained brand consistency across all animated content'
    ],
    result: 'Created multiple engaging animations that improve user engagement and make complex topics more accessible. Animations enhance the user experience across web and mobile platforms while maintaining fast load times.',
    outcome: 'Developed engaging animations that improve user engagement and make complex financial concepts more accessible and visually appealing.',
    image: '/images/animation.png',
    tags: ['Adobe After Effects', 'Adobe Animate', 'Adobe Character Animator', 'Lottie', 'GSAP', 'Motion Graphics', 'Animation', 'Character Animation'],
    year: '2021 - Present',
    role: 'Motion Designer • Animator',
    tools: ['Adobe After Effects', 'Adobe Animate', 'Adobe Character Animator', 'Lottie', 'GSAP', 'JavaScript'],
    images: [
      '/images/animation.png'
    ],
    lottieAnimations: [
      '6213873c-fb3b-4d24-b088-07820781f6c0',
      '439cd762-9102-4912-8229-575fe6b7bf06',
      'fc1dd80b-ba08-46b2-acec-c3ff3b4b60f7',
      '225c8e6e-50a2-478a-b3c1-be58e43f6764',
      '4e702e65-a12e-4397-a49d-2a5ccdcd518a'
    ],
    videos: [
      {
        url: '/images/animations/findtry2.mp4',
        description: 'Created using Rotato for the laptop animation and Adobe Character Animator for the Finn graphic. Edited in Premiere Pro.'
      },
      {
        url: '/images/animations/tw-app-page-graphic.mp4',
        description: 'Created with After Effects & Lottie for the website'
      },
      {
        url: '/images/animations/Scene 1.mp4',
        description: 'Finn animation created with Adobe Character Animator'
      }
    ],
    featured: true
  },
  {
    id: 6,
    slug: 'creative-marketing-design',
    title: 'Creative / Marketing Design Work',
    category: 'graphic',
    description: 'Designed visual content for product launches and social growth. Created social graphics, flyers, campaign visuals, and UI-support graphics aligned with brand system.',
    longDescription: 'I design and create all visual content for Troutwood\'s marketing campaigns, social media, and brand materials. This includes social graphics, email newsletters, event flyers, campaign visuals, and UI-support graphics. All work is aligned with our brand system and designed to communicate complex financial concepts in an accessible, visually appealing way.',
    context: 'Troutwood needed consistent, engaging visual content for marketing campaigns, social media growth, and product launches. Content needed to align with brand identity and effectively communicate financial education concepts.',
    problem: 'Needed cohesive visual content across multiple channels. Social media, email newsletters, and marketing materials required consistent branding and engaging design that could communicate complex topics simply.',
    whatIDid: [
      'Designed social media graphics for campaigns and product launches',
      'Created responsive email newsletter templates and designs',
      'Developed event flyers and promotional materials',
      'Designed campaign visuals for marketing initiatives',
      'Created UI-support graphics and illustrations',
      'Maintained brand consistency across all materials',
      'Filmed and edited podcast videos (audio and video editing) with team collaboration',
      'Produced video content and motion graphics for campaigns',
      'Created and edited TikTok content leveraging current trends to increase engagement'
    ],
    result: 'Created cohesive visual identity across all marketing channels. Social engagement improved, and brand recognition increased through consistent, high-quality design work. Contributed to TikTok content creation that generated good engagement and interactions.',
    outcome: 'Improved social engagement and brand recognition through consistent, high-quality design across all marketing channels. Contributed to TikTok content that generated good engagement and interactions.',
    image: '/images/social posts/Jump$tart Post.png',
    tags: ['Graphic Design', 'Social Media Design', 'Brand Design', 'Marketing Materials'],
    year: '2021 - Present',
    role: 'Graphic Designer • Content Creator',
    tools: ['Canva', 'Adobe Creative Suite', 'Figma', 'Adobe After Effects'],
    images: [
      '/images/social posts/Jump$tart Post.png',
      '/images/social posts/1100+ New Companies added.png',
      '/images/social posts/feature-spotlight-college2.png',
      '/images/social posts/finmoji-post.png',
      '/images/social posts/other-try2.png',
      '/images/social posts/tw-panthersfw.png',
      '/images/social posts/tw-pro-image.png',
      '/images/social posts/1.png',
      '/images/social posts/4.png',
      '/images/social posts/holidays 2024.png',
      '/images/social posts/map jr. post.png',
      '/images/social posts/Copy of barbie vs oppenheimer.png',
      '/images/social posts/Financial Literacy month.png',
      '/images/newsletters/Fall Update.png',
      '/images/newsletters/option-webbased2.png',
      '/images/newsletters/Plaid - Pro Users.png',
      '/images/newsletters/Transactions Updates.png',
      '/images/design/menu (5 × 7 in).png',
      '/images/design/You are coordinally invited.png',
      '/images/photography/img1.png',
      '/images/photography/maia.jpg',
      '/images/photography/maia4-1.jpg',
      '/images/photography/promise1.png',
      '/images/photography/Sequence 01.00_01_04_07.Still014.png'
    ],
    categorizedImages: [
      {
        category: 'Social Media Posts',
        images: [
          '/images/social posts/Jump$tart Post.png',
          '/images/social posts/1100+ New Companies added.png',
          '/images/social posts/feature-spotlight-college2.png',
          '/images/social posts/finmoji-post.png',
          '/images/social posts/other-try2.png',
          '/images/social posts/tw-panthersfw.png',
          '/images/social posts/tw-pro-image.png',
          '/images/social posts/1.png',
          '/images/social posts/4.png',
          '/images/social posts/holidays 2024.png',
          '/images/social posts/map jr. post.png',
          '/images/social posts/Copy of barbie vs oppenheimer.png',
          '/images/social posts/Financial Literacy month.png'
        ]
      },
      {
        category: 'Newsletters',
        images: [
          '/images/newsletters/Fall Update.png',
          '/images/newsletters/option-webbased2.png',
          '/images/newsletters/Plaid - Pro Users.png',
          '/images/newsletters/Transactions Updates.png'
        ]
      },
      {
        category: 'Extracurricular Design',
        images: [
          '/images/design/menu (5 × 7 in).png',
          '/images/design/You are coordinally invited.png'
        ]
      },
      {
        category: 'Photography',
        images: [
          '/images/photography/img1.png',
          '/images/photography/maia.jpg',
          '/images/photography/maia4-1.jpg',
          '/images/photography/promise1.png',
          '/images/photography/Sequence 01.00_01_04_07.Still014.png'
        ]
      }
    ],
    videos: [
      'https://www.youtube.com/watch?v=qgRGZvt5mU4',
      'https://www.youtube.com/watch?v=jnk-MFdH4R4',
      'https://www.youtube.com/watch?v=GICyaLbbXK8',
      'https://www.youtube.com/watch?v=F2FP6aDbjp8',
      'https://www.youtube.com/watch?v=gCRt_6pCS6I',
      'https://www.youtube.com/watch?v=_jo79P-SnDk',
      'https://www.youtube.com/watch?v=ld4Ek_HJ9jY',
      '/images/social-videos/linkedin-whatistwapp.mp4',
      '/images/social-videos/Our first notification.mp4',
      '/images/videos/atlas first draft.mp4',
      'https://www.tiktok.com/@troutwoodapp/video/7185591875414412587',
      'https://www.tiktok.com/@troutwoodapp/video/7141106125730041130',
      'https://www.tiktok.com/@troutwoodapp/video/7136299239969312046',
      'https://www.tiktok.com/@troutwoodapp/video/7301755944399129898',
      'https://www.tiktok.com/@troutwoodapp/video/7168930641340304686',
      'https://www.tiktok.com/@troutwoodapp/video/7171932885254016299',
      'https://www.tiktok.com/@troutwoodapp/video/7137669238805761326',
      'https://www.tiktok.com/@troutwoodapp/video/6922859789236194565'
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
    featured: true
  },
  {
    id: 7,
    slug: 'brand-assets',
    title: 'Brand Assets & Guidelines',
    category: 'brand',
    description: 'Created comprehensive brand assets and guidelines including color palettes, typography, and brand guidelines documentation.',
    longDescription: 'I developed comprehensive brand assets and guidelines that establish visual consistency across all touchpoints. This includes color systems, typography guidelines, and detailed brand documentation that ensures cohesive brand expression.',
    context: 'Troutwood needed a comprehensive brand system to ensure visual consistency across all platforms, marketing materials, and digital experiences.',
    problem: 'Lacked a unified brand system, leading to inconsistent visual identity across different materials and platforms. Needed comprehensive brand guidelines and assets to maintain consistency.',
    whatIDid: [
      'Developed comprehensive color palette with primary, secondary, and accent colors',
      'Established typography system and hierarchy',
      'Created brand guidelines documentation',
      'Designed brand asset library with all variations',
      'Developed usage guidelines for colors and typography',
      'Created presentation materials for brand guidelines'
    ],
    whatIOwned: [
      'Complete brand asset creation: color systems, typography',
      'Brand guidelines documentation and presentation',
      'Brand asset library and usage guidelines'
    ],
    result: 'Created comprehensive brand system that ensures visual consistency across all platforms. Brand guidelines provide clear direction for all future design work and maintain cohesive brand identity.',
    outcome: 'Established comprehensive brand system with guidelines and assets. Ensured visual consistency across all platforms and materials.',
    image: '/brand/tw-brand.png',
    tags: ['Brand Design', 'Brand Guidelines', 'Visual Identity', 'Design Systems'],
    year: '2021 - Present',
    role: 'Brand Designer • Visual Identity Lead',
    tools: ['Figma', 'Adobe Creative Suite', 'Brand Guidelines', 'Design Systems'],
    highlights: [
      'Created comprehensive brand guidelines',
      'Established color and typography systems',
      'Created brand asset library',
      'Documented usage guidelines for all brand elements'
    ],
    images: [
      '/brand/tw-brand.png'
    ],
    pdfs: [
      {
        label: 'Brand Guidelines Presentation',
        url: '/brand/Brand Guidelines Presentation.pdf'
      }
    ],
    featured: true
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

