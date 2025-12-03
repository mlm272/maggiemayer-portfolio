'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  const skills = [
    { 
      category: 'Design & UX', 
      items: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Accessibility', 'Interaction Design', 'Social Media Design', 'Newsletter Design'] 
    },
    { 
      category: 'Development', 
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Responsive Design', 'Git'] 
    },
    { 
      category: 'Animation & Video', 
      items: ['Adobe After Effects', 'Adobe Animate', 'Lottie', 'GSAP', 'Video Production', 'Motion Graphics'] 
    },
    { 
      category: 'AI & Creative Tools', 
      items: ['ChatGPT', 'Cursor', 'Canva', 'Adobe Creative Suite', 'Video Editing'] 
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            About
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nice to Meet You!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about designing playful, purposeful interfaces that educate and delight users—bringing accessible learning to life through thoughtful interaction and design systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I'm a <span className="font-semibold text-primary-600">Creative and detail-oriented Front-End Developer & Digital Designer</span> with 6+ years of experience crafting intuitive, user-centered digital experiences. I specialize in bridging the gap between design, engineering, and storytelling.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Currently at <span className="font-semibold text-primary-600">Troutwood</span>, I run the website and coded it fully by myself using CSS, HTML, and JavaScript. I handle all aspects of front-end development and collaborate with our contracted UX/UI designer on UX strategy, creating responsive layouts and visual storytelling that enhance user engagement. I also design for our social media and newsletters, and have experience creating videos and animations using Adobe Animate, Adobe After Effects, Lottie, and GSAP.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                My approach combines <span className="font-semibold text-primary-600">aesthetic sensibility with technical expertise</span>, ensuring every project not only looks great but performs flawlessly. I'm passionate about designing playful, purposeful interfaces that educate and delight users—bringing accessible learning to life through thoughtful interaction and design systems.
              </p>
              <div className="pt-4">
                <p className="text-base text-gray-600 italic">
                  📍 Based in Pittsburgh, PA • B.S. Computer Science, University of Pittsburgh (Magna Cum Laude)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-primary-100 via-accent-100 to-tertiary-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent"></div>
                <span className="text-8xl relative z-10">👋</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-200 rounded-full blur-2xl opacity-50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-50 -z-10"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-primary-200 transition-all"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-600 via-accent-600 to-tertiary-600 rounded-full mr-3"></span>
                  {skill.category}
                </h4>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-700 text-base">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


