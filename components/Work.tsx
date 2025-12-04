'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { projects, getProjectsByCategory } from '@/data/projects'

// Helper function to encode image paths with special characters
function encodeImagePath(path: string): string {
  // Split the path and encode only the filename part
  const parts = path.split('/')
  const filename = parts[parts.length - 1]
  const directory = parts.slice(0, -1).join('/')
  return directory + '/' + encodeURIComponent(filename)
}

interface WorkProps {
  setActiveSection: (section: string) => void
}

export default function Work({ setActiveSection }: WorkProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('work')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web & UX' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'animation', label: 'Animations' },
    { id: 'graphic', label: 'Design' },
    { id: 'brand', label: 'Brand' },
  ]

  const allProjects = getProjectsByCategory(filter)
  const filteredProjects = allProjects.filter(project => project.featured !== false)

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of my work at Troutwood and beyond, showcasing UX/UI design, front-end development, animations, social media design, and video production
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group border border-gray-100 hover:border-primary-200 transition-all"
              >
              <div className="relative h-64 bg-gradient-to-br from-primary-100 via-accent-100 to-tertiary-100 overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <>
                    <img
                      src={encodeImagePath(project.images[0])}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                        {project.category === 'web' && '🌐'}
                        {project.category === 'mobile' && '📱'}
                        {project.category === 'animation' && '🎬'}
                        {project.category === 'graphic' && '🎨'}
                        {project.category === 'brand' && '✨'}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


