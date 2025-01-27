'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-500">Ayoub.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl mb-8"
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'Backend Developer',
              2000,
               'CyberSecurity passionate!',
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <Link href="https://github.com/hamawebdev" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-gray-300 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/hamadouche-ayoub-380735336" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-gray-300 hover:text-blue-500 transition-colors" />
          </Link>
        </motion.div>
        <Link href="#projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            View My Work
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

