import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maggie Mayer | Front-End Developer & Digital Designer',
  description: 'Creative and detail-oriented Front-End Developer & Digital Designer with 6+ years of experience crafting intuitive, user-centered digital experiences. Specializing in UX/UI design, web development, and educational product design.',
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


