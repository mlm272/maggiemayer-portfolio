'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home')
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-visible bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%),linear-gradient(to_bottom,_#020617,_#020617)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-56 w-[26rem] h-[26rem] bg-primary-500/30 rounded-full mix-blend-screen blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[26rem] h-[26rem] bg-accent-500/30 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary-500/25 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 overflow-visible">
        <div className="text-center overflow-visible py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-3 bg-slate-900/80 text-primary-100 border border-primary-500/40 rounded-full text-base md:text-lg font-semibold mb-10 shadow-[0_0_40px_rgba(59,130,246,0.35)]">
              Front-End Developer | Creative Technologist | SEO + Growth
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 mb-6 leading-[1.1] overflow-visible tracking-tight"
          >
            Hi, I'm{' '}
            <span className="font-momo bg-gradient-to-r from-primary-400 via-accent-300 to-tertiary-200 bg-clip-text text-transparent inline-block leading-[1.5] py-3 px-2 -my-2">
              Maggie
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a creative front-end developer who bridges design and technology to build clear, trustworthy, and fun digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                setActiveSection('contact')
              }}
              className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold shadow-[0_0_35px_rgba(59,130,246,0.55)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)] transition-all text-lg"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                setActiveSection('work')
              }}
              className="px-8 py-4 bg-transparent text-primary-100 border border-primary-400/70 rounded-xl font-semibold hover:bg-primary-500/10 transition-all shadow-[0_0_25px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] text-lg"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-slate-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


