import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maggie Mayer | Front-End Developer | Creative Technologist | SEO + Growth',
  description: 'Front-End Developer and Digital Creative with 6+ years of experience owning and scaling web experiences at a fintech startup. Expert in HTML, CSS, JavaScript, responsive UI, accessibility, and end-to-end website management. Proven record of driving site-wide SEO and authority growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


