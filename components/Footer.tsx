'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-slate-400"
        >
          <p>
            Portfolio built in collaboration with{' '}
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-primary-200 font-semibold transition-colors"
            >
              Cursor
            </a>
          </p>
          <p className="mt-2 text-slate-500">
            © {new Date().getFullYear()} Maggie Mayer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

