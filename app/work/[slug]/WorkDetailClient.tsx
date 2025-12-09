'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getProjectBySlug, projects, Project } from '@/data/projects'
import Link from 'next/link'
import Lottie from 'lottie-react'

// Declare TikTok embed type
declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: () => void
      }
    }
  }
}

// Helper function to encode image paths with special characters
function encodeImagePath(path: string): string {
  // For Next.js static files, encode the entire path
  // This handles spaces and special characters in filenames
  try {
    // Split path into parts, encode each part separately, then rejoin
    const parts = path.split('/')
    const encodedParts = parts.map((part, index) => {
      // Don't encode the first empty string (for absolute paths starting with /)
      if (index === 0 && part === '') return ''
      // Encode each part
      return encodeURIComponent(part)
    })
    return encodedParts.join('/')
  } catch (e) {
    // Fallback to simple encoding
    return encodeURI(path)
  }
}

// Simple arrow icon component
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url
}

// Lottie Animation Card Component
function LottieAnimationCard({ animationId, projectTitle, index }: { animationId: string; projectTitle: string; index: number }) {
  const [animationData, setAnimationData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const lottieRef = useRef<any>(null)

  // Map animation IDs to JSON file paths
  const animationInfo: { [key: string]: { path: string; description: string; speed?: number } } = {
    '6213873c-fb3b-4d24-b088-07820781f6c0': {
      path: '/images/animations/json/ask finn 11.38.44 AM.json',
      description: 'Ask Finn - Website chatbot animation (Created with After Effects & Lottie)',
      speed: 0.3
    },
    '439cd762-9102-4912-8229-575fe6b7bf06': {
      path: '/images/animations/json/Comp 1.json',
      description: 'Website animation (Created with After Effects & Lottie)'
    },
    'fc1dd80b-ba08-46b2-acec-c3ff3b4b60f7': {
      path: '/images/animations/json/finpulse blue.json',
      description: 'FinPulse Blue - App animation (Created with After Effects & Lottie)'
    },
    '225c8e6e-50a2-478a-b3c1-be58e43f6764': {
      path: '/images/animations/json/finpulse green.json',
      description: 'FinPulse Green - App animation (Created with After Effects & Lottie)'
    },
    '1f3e3787-9c9f-42b0-9a0a-8485731f95ac': {
      path: '/images/animations/json/loading dots.json',
      description: 'Loading Dots - App loading animation (Created with After Effects & Lottie)'
    },
  }

  const info = animationInfo[animationId] || { path: `/images/animations/json/${animationId}.json`, description: 'Animation' }
  const animationSpeed = info.speed || 1

  useEffect(() => {
    const jsonPath = encodeImagePath(info.path)
    
    fetch(jsonPath)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        setAnimationData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading animation:', err)
        setError(true)
        setLoading(false)
      })
  }, [animationId, info.path])

  // Set speed when animation is ready
  useEffect(() => {
    if (lottieRef.current && animationSpeed !== 1) {
      lottieRef.current.setSpeed(animationSpeed)
    }
  }, [animationData, animationSpeed])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 + index * 0.1 }}
      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-primary-200 transition-all bg-white"
    >
      <div className="aspect-video bg-gray-50 flex items-center justify-center relative overflow-hidden">
        {loading && (
          <div className="w-full h-full flex items-center justify-center absolute inset-0 z-10 bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}
        {error && (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 p-4">
            <p className="text-gray-600 text-sm mb-2">Animation failed to load</p>
            <a
              href={`https://app.lottiefiles.com/animation/${animationId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-xs"
            >
              View on LottieFiles →
            </a>
          </div>
        )}
        {animationData && !loading && !error && (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{info.description}</p>
      </div>
    </motion.div>
  )
}

// Helper function to convert TikTok URL to embed URL
function getTikTokEmbedUrl(url: string): string {
  // Extract video ID from TikTok URL
  // Format: https://www.tiktok.com/@username/video/1234567890
  const videoIdMatch = url.match(/\/video\/(\d+)/)
  if (videoIdMatch) {
    const videoId = videoIdMatch[1]
    // Clean URL (remove query params)
    const cleanUrl = url.split('?')[0]
    // Use TikTok's embed iframe format
    return `https://www.tiktok.com/embed/v2/${videoId}`
  }
  return url
}

// Helper function to detect video platform
function getVideoType(url: string): 'youtube' | 'tiktok' | 'local' | 'other' {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
  if (url.includes('tiktok.com') || url.includes('vm.tiktok.com')) return 'tiktok'
  if (url.startsWith('/') && (url.endsWith('.mp4') || url.endsWith('.mov'))) return 'local'
  return 'other'
}

// TikTok Embed Component
function TikTokEmbed({ url, index }: { url: string; index: number }) {
  const embedRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if TikTok embed script is already loaded
    if ((window as any).tiktokEmbed) {
      setScriptLoaded(true)
      return
    }

    // Check if script tag exists
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
    
    if (existingScript) {
      // Script exists, wait for it to load
      existingScript.addEventListener('load', () => {
        setScriptLoaded(true)
        setTimeout(() => {
          if ((window as any).tiktokEmbed && (window as any).tiktokEmbed.lib) {
            (window as any).tiktokEmbed.lib.render()
          }
        }, 100)
      })
      // If already loaded
      if ((window as any).tiktokEmbed) {
        setScriptLoaded(true)
      }
    } else {
      // Load the script
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      script.onload = () => {
        setScriptLoaded(true)
        setTimeout(() => {
          if ((window as any).tiktokEmbed && (window as any).tiktokEmbed.lib) {
            (window as any).tiktokEmbed.lib.render()
          }
        }, 100)
      }
      document.body.appendChild(script)
    }
  }, [])

  const cleanUrl = url.split('?')[0]
  const videoId = url.match(/\/video\/(\d+)/)?.[1] || ''

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 p-4" style={{ minHeight: '600px' }} ref={embedRef}>
      <blockquote
        className="tiktok-embed"
        cite={cleanUrl}
        data-video-id={videoId}
        style={{ maxWidth: '100%', minWidth: '325px' }}
      >
        <section>
          <a
            target="_blank"
            href={cleanUrl}
            rel="noopener noreferrer"
          >
            {cleanUrl}
          </a>
        </section>
      </blockquote>
    </div>
  )
}


export default function WorkDetailClient({ slug }: { slug: string }) {
  const router = useRouter()
  const project = getProjectBySlug(slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)


  // Helper function to get all images (from categorized or regular array)
  const getAllImages = (proj: Project | undefined): string[] => {
    if (!proj) return []
    if (proj.categorizedImages && proj.categorizedImages.length > 0) {
      return proj.categorizedImages.flatMap((cat: { category: string; images: string[] }) => cat.images)
    }
    return proj.images || []
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
      if (selectedImage && project) {
        const allImages = getAllImages(project)
        if (allImages.length > 0) {
          if (e.key === 'ArrowRight') {
            const nextIndex = (selectedImageIndex + 1) % allImages.length
            setSelectedImageIndex(nextIndex)
            setSelectedImage(encodeImagePath(allImages[nextIndex]))
          }
          if (e.key === 'ArrowLeft') {
            const prevIndex = (selectedImageIndex - 1 + allImages.length) % allImages.length
            setSelectedImageIndex(prevIndex)
            setSelectedImage(encodeImagePath(allImages[prevIndex]))
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, selectedImageIndex, project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#work" className="text-primary-600 hover:underline">
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  const categoryLabels: { [key: string]: string } = {
    web: 'Web & UX',
    mobile: 'Mobile',
    animation: 'Animations',
    graphic: 'Brand & Design',
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Work</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              {categoryLabels[project.category] || project.category}
            </span>
            {project.year && (
              <span className="text-gray-500 text-sm">{project.year}</span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image or Video Gallery */}
        {project.videos && project.videos.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Video Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.videos.map((videoItem, index) => {
                // Handle both string URLs and objects with url/description
                const videoUrl = typeof videoItem === 'string' ? videoItem : videoItem.url
                const videoDescription = typeof videoItem === 'object' ? videoItem.description : undefined
                
                const videoType = getVideoType(videoUrl)
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-xl bg-white"
                  >
                    <div className="bg-gray-900">
                      {videoType === 'youtube' ? (
                        <iframe
                          src={getYouTubeEmbedUrl(videoUrl)}
                          title={`${project.title} - Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full aspect-video"
                        />
                      ) : videoType === 'tiktok' ? (
                        <TikTokEmbed url={videoUrl} index={index} />
                      ) : videoType === 'local' ? (
                        <video
                          src={encodeImagePath(videoUrl)}
                          controls
                          className="w-full aspect-video"
                          title={`${project.title} - Video ${index + 1}`}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : null}
                    </div>
                    {videoDescription && (
                      <div className="p-4">
                        <p className="text-gray-600 text-sm">{videoDescription}</p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ) : project.images && project.images.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer"
            onClick={() => {
              if (project.images && project.images.length > 0) {
                setSelectedImage(encodeImagePath(project.images[0]))
                setSelectedImageIndex(0)
              }
            }}
          >
            <img
              src={encodeImagePath(project.images[0])}
              alt={project.title}
              className="w-full h-auto hover:opacity-90 transition-opacity"
              onError={(e) => {
                console.error('Image failed to load:', e.currentTarget.src)
                // Try different encoding approaches as fallback
                const target = e.target as HTMLImageElement
                if (project.images && project.images.length > 0) {
                  const originalPath = project.images[0]
                  // Try with full path encoding
                  if (!target.src.includes(encodeURI(originalPath))) {
                    target.src = encodeURI(originalPath)
                  } else if (!target.src.includes(originalPath.replace(/ /g, '%20'))) {
                    // Try with simple space replacement
                    target.src = originalPath.replace(/ /g, '%20')
                  } else {
                    // Last resort: try original path
                    target.src = originalPath
                  }
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-100 via-accent-100 to-tertiary-100"
          >
            <div className="aspect-video flex items-center justify-center">
              <span className="text-6xl opacity-50">
                {project.category === 'web' && '🌐'}
                {project.category === 'mobile' && '📱'}
                {project.category === 'animation' && '🎬'}
                {project.category === 'graphic' && '🎨'}
              </span>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>
            )}

            {project.whatIOwned && project.whatIOwned.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-purple-600">What I Owned</span>
                </h2>
                <ul className="space-y-3">
                  {project.whatIOwned.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.problemsAndSolutions && project.problemsAndSolutions.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Problems & Solutions</h2>
                {project.problemsAndSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-red-600 mb-2">Problem {index + 1}</h3>
                      <p className="text-gray-700">{item.problem}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">Solution</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-2">Outcome</h3>
                      <p className="text-gray-700">{item.outcome}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : project.problem && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-red-600">Problem</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>
            )}

            {project.whatIDid && project.whatIDid.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">What I Did</span>
                </h2>
                <ul className="space-y-3">
                  {project.whatIDid.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-600">Results & Impact (Site-Wide)</span>
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  {project.result.split('\n\n').map((paragraph, index) => {
                    // Check if paragraph starts with bullet points
                    if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('Results:')) {
                      const lines = paragraph.split('\n')
                      return (
                        <div key={index} className="space-y-2">
                          {lines.map((line, lineIndex) => {
                            if (line.trim().startsWith('•')) {
                              return (
                                <div key={lineIndex} className="flex items-start gap-2">
                                  <span className="text-green-600 mt-1">•</span>
                                  <span>{line.replace('•', '').trim()}</span>
                                </div>
                              )
                            } else if (line.trim().startsWith('Results:')) {
                              return (
                                <h3 key={lineIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                                  {line.trim()}
                                </h3>
                              )
                            } else if (line.trim()) {
                              return <p key={lineIndex}>{line.trim()}</p>
                            }
                            return null
                          })}
                        </div>
                      )
                    } else {
                      return <p key={index}>{paragraph.trim()}</p>
                    }
                  })}
                </div>
              </motion.div>
            )}

            {project.takeaways && project.takeaways.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-amber-600">Takeaways</span>
                </h2>
                <ul className="space-y-3">
                  {project.takeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {!project.problem && project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-lg text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.brandContext && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Brand Context</h3>
                    <p className="text-gray-700 leading-relaxed">{project.brandContext}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {project.lottieAnimations && project.lottieAnimations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lottie Animations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.lottieAnimations.map((animationId, index) => (
                    <LottieAnimationCard
                      key={index}
                      animationId={animationId}
                      projectTitle={project.title}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {project.categorizedImages && project.categorizedImages.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Images</h2>
                <div className="space-y-12">
                  {project.categorizedImages.map((category, categoryIndex) => {
                    // Calculate starting index for this category
                    let imageIndexOffset = 0
                    for (let i = 0; i < categoryIndex; i++) {
                      imageIndexOffset += project.categorizedImages![i].images.length
                    }
                    
                    return (
                      <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-primary-200 pb-2">
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {category.images.map((imageUrl, index) => {
                            const globalIndex = imageIndexOffset + index
                            const isMockup = project.slug === 'troutwood-website' || imageUrl.includes('idea') || imageUrl.includes('V2') || imageUrl.includes('IRALogix') || imageUrl.includes('LandingIdea')
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + globalIndex * 0.05 }}
                                className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-primary-200 transition-all group cursor-pointer relative"
                                onClick={() => {
                                  // Get all images in order for lightbox navigation
                                  const allImages = project.categorizedImages!.flatMap(cat => cat.images)
                                  setSelectedImage(encodeImagePath(imageUrl))
                                  setSelectedImageIndex(allImages.indexOf(imageUrl))
                                }}
                              >
                                {isMockup && (
                                  <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded">
                                    Mockup
                                  </div>
                                )}
                                <div className="aspect-video bg-gray-100 overflow-hidden">
                                  <img
                                    src={encodeImagePath(imageUrl)}
                                    alt={`${project.title} - ${category.category} - Image ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                      console.error('Image failed to load:', e.currentTarget.src, 'Original:', imageUrl)
                                      const target = e.target as HTMLImageElement
                                      if (!target.src.includes(encodeURI(imageUrl))) {
                                        target.src = encodeURI(imageUrl)
                                      } else if (!target.src.includes(imageUrl.replace(/ /g, '%20'))) {
                                        target.src = imageUrl.replace(/ /g, '%20')
                                      } else {
                                        target.src = imageUrl
                                      }
                                    }}
                                  />
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ) : project.images && project.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((imageUrl, index) => {
                    const isMockup = project.slug === 'troutwood-website' || imageUrl.includes('idea') || imageUrl.includes('V2') || imageUrl.includes('IRALogix') || imageUrl.includes('LandingIdea')
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-primary-200 transition-all group cursor-pointer relative"
                        onClick={() => {
                          setSelectedImage(encodeImagePath(imageUrl))
                          setSelectedImageIndex(index)
                        }}
                      >
                        {isMockup && (
                          <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded">
                            Mockup
                          </div>
                        )}
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                          <img
                            src={encodeImagePath(imageUrl)}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            console.error('Image failed to load:', e.currentTarget.src, 'Original:', imageUrl)
                            // Try different encoding approaches as fallback
                            const target = e.target as HTMLImageElement
                            // Try with full path encoding
                            if (!target.src.includes(encodeURI(imageUrl))) {
                              target.src = encodeURI(imageUrl)
                            } else if (!target.src.includes(imageUrl.replace(/ /g, '%20'))) {
                              // Try with simple space replacement
                              target.src = imageUrl.replace(/ /g, '%20')
                            } else {
                              // Last resort: try original path
                              target.src = imageUrl
                            }
                          }}
                        />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {project.pdfs && project.pdfs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Flyers & PDFs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.pdfs.map((pdf, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary-200 transition-all group"
                    >
                      <div className="aspect-[3/4] bg-white flex items-center justify-center relative overflow-hidden border border-gray-200">
                        {pdf.thumbnail ? (
                          <img
                            src={encodeImagePath(pdf.thumbnail)}
                            alt={pdf.label}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback: try encoding the URL
                              const target = e.target as HTMLImageElement
                              if (target.src && !target.src.includes('%')) {
                                target.src = encodeURI(target.src)
                              }
                            }}
                          />
                        ) : (
                          <iframe
                            src={encodeImagePath(pdf.url) + '#toolbar=0&navpanes=0&scrollbar=0'}
                            className="w-full h-full border-0"
                            title={pdf.label}
                            onError={() => {
                              // If iframe fails, show fallback
                              console.error('PDF failed to load:', pdf.url)
                            }}
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold bg-black/50 px-4 py-2 rounded">
                            View PDF
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{pdf.label}</h3>
                        <a
                          href={encodeImagePath(pdf.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          View PDF →
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {project.role && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Role</h3>
                <p className="text-lg font-semibold text-gray-900">{project.role}</p>
              </motion.div>
            )}

            {project.outcome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
              >
                <h3 className="text-sm font-semibold text-green-700 uppercase mb-2">Outcome</h3>
                <p className="text-base text-gray-900 leading-relaxed">{project.outcome}</p>
              </motion.div>
            )}

            {project.tools && project.tools.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {project.links && project.links.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Links</h3>
                <div className="space-y-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 bg-white text-primary-600 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors border border-gray-200 hover:border-primary-200"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
                >
                  ✕
                </button>
                
                {(() => {
                  const allImages = getAllImages(project)
                  return allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const prevIndex = (selectedImageIndex - 1 + allImages.length) % allImages.length
                          setSelectedImageIndex(prevIndex)
                          setSelectedImage(encodeImagePath(allImages[prevIndex]))
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const nextIndex = (selectedImageIndex + 1) % allImages.length
                          setSelectedImageIndex(nextIndex)
                          setSelectedImage(encodeImagePath(allImages[nextIndex]))
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                      >
                        ›
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-10">
                        {selectedImageIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )
                })()}
                
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/work/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary-200 transition-all hover:shadow-xl">
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 via-accent-100 to-tertiary-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl opacity-60 group-hover:scale-110 transition-transform">
                          {relatedProject.category === 'web' && '🌐'}
                          {relatedProject.category === 'mobile' && '📱'}
                          {relatedProject.category === 'animation' && '🎬'}
                          {relatedProject.category === 'graphic' && '🎨'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

