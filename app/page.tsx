'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Work setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
    </main>
  )
}


