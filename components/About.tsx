'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
      category: 'Front-End / Web', 
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Accessibility (WCAG)', 'Cross-Browser QA', 'UI Components', 'Performance Optimization', 'Deployment & Maintenance'] 
    },
    { 
      category: 'Mobile / App', 
      items: ['React Native (iOS)', 'Component Development', 'API Integration', 'App UI Flows'] 
    },
    { 
      category: 'AI Product UI', 
      items: ['Chatbot Interface Development', 'Real-Time Response Rendering', 'Typing/Loading/Error States', 'Front-End ↔ AI Model Communication'] 
    },
    { 
      category: 'SEO / Analytics', 
      items: ['Technical SEO', 'On-Page SEO', 'Schema/Structured Data', 'Keyword Strategy', 'GA4', 'Search Console', 'Internal Linking', 'Site Architecture', 'Conversion/Event Tracking'] 
    },
    { 
      category: 'Email / Content', 
      items: ['MailerLite', 'Newsletter Template Design', 'Campaign Production', 'Engagement Iteration'] 
    },
    { 
      category: 'Design / Motion', 
      items: ['Figma', 'Adobe Creative Suite', 'Canva', 'After Effects (basic)', 'Lottie (basic)', 'Adobe Character Animator (basic)', 'Social/Digital Graphics', 'Flyers', 'Multimedia Assets'] 
    },
    { 
      category: 'Tools / Workflow', 
      items: ['Git/GitHub', 'Jira', 'Agile Workflows', 'Cross-Functional Collaboration'] 
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
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Summary</h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Front-End Developer and Digital Creative with 6+ years of experience owning and scaling web experiences at a fintech startup. Expert in HTML, CSS, JavaScript, responsive UI, accessibility, and end-to-end website management, with additional experience building React Native app features and AI chatbot interfaces across web and mobile. Proven record of driving site-wide SEO and authority growth (+265% YoY organic traffic, +79K users) through holistic improvements to technical SEO, architecture, performance, and UX. Highly data-driven, using GA4/Search Console to identify drop-offs and ship iterative UX fixes. Strong creative partner across brand, multimedia, email and LinkedIn newsletters, and light motion/animation.
                </p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-primary-600">University of Pittsburgh</span> — B.S. Computer Science, Economics Minor | 2021
                </p>
                <p className="text-base text-gray-600 mt-2">
                  Magna Cum Laude • Dean's List (2018–2021) • Mathematics Undergraduate Teaching Assistant (Applied College Algebra)
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Google SEO Capstone Project — UC Davis (2025)</li>
                  <li>• Optimizing a Website for Google Search — UC Davis (2024)</li>
                  <li>• Google SEO Fundamentals — UC Davis (2024)</li>
                  <li>• Introduction to Google SEO — UC Davis (2023)</li>
                  <li>• Advanced Content & Social Tactics to Optimize SEO — UC Davis (2023)</li>
                </ul>
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
                <Image
                  src="/images/maggie-2.jpg"
                  alt="Maggie Mayer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                  priority
                />
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
            Core Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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


