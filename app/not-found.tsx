'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  const [activeSection, setActiveSection] = useState('')

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 pt-24">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-slate-300 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/" className="text-primary-300 hover:text-primary-200 underline">
            Return Home
          </Link>
        </div>
      </div>
    </>
  )
}

