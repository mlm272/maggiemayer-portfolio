'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-gray-600"
        >
          <p>
            Portfolio built in collaboration with{' '}
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              Cursor
            </a>
          </p>
          <p className="mt-2 text-gray-500">
            © {new Date().getFullYear()} Maggie Mayer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

