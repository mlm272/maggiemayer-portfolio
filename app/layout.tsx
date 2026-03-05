import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maggie Mayer | Front-End Developer | Creative Technologist | SEO + Growth',
  description:
    'Front-End Developer and Digital Creative with 6+ years of experience owning and scaling web experiences at a fintech startup. Expert in HTML, CSS, JavaScript, responsive UI, accessibility, and end-to-end website management. Proven record of driving site-wide SEO and authority growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-50 antialiased selection:bg-primary-500/40 selection:text-slate-50 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%),linear-gradient(to_bottom,_#020617,_#020617)] relative overflow-x-hidden`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-56 w-[26rem] h-[26rem] bg-primary-500/30 rounded-full mix-blend-screen blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-[26rem] h-[26rem] bg-accent-500/30 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary-500/25 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        {children}
      </body>
    </html>
  )
}


