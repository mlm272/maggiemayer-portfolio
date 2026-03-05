'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactProps {
  setActiveSection: (section: string) => void
}

export default function Contact({ setActiveSection }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // EmailJS configuration - replace these with your actual values
    // Get these from https://www.emailjs.com/
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY)
      
      // Send email
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'maggielouisemayer@gmail.com',
      })
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again or email me directly at maggielouisemayer@gmail.com')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-slate-900/80 text-primary-100 border border-primary-500/50 rounded-full text-sm font-semibold mb-4 shadow-[0_0_24px_rgba(59,130,246,0.35)]">
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                Let's Connect
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Whether you're looking to start a new project, collaborate, or just say hello, 
                I'm always open to discussing creative opportunities.
              </p>
            </div>

            <div className="space-y-5">
              <motion.a
                href="mailto:maggielouisemayer@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/70 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/30 to-primary-400/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-50 mb-1">Email</h4>
                  <p className="text-primary-200 hover:text-primary-100 font-medium">
                    maggielouisemayer@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/maggie-mayer-08752a163"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-900/70 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/30 to-primary-400/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-50 mb-1">LinkedIn</h4>
                  <p className="text-primary-200 hover:text-primary-100 font-medium">
                    linkedin.com/in/maggie-mayer-08752a163
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 rounded-2xl shadow-[0_20px_55px_rgba(0,0,0,0.85)] p-8 border border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-950 focus:bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-950 focus:bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 border-2 border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none bg-slate-950 focus:bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-lg"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


