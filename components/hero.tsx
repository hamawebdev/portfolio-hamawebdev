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
          className="text-5xl md:text-7xl font-bold mb-4 font-heading tracking-tight text-shadow-lg"
        >
          Hi, I'm <span className="text-blue-500">Ayoub.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl md:text-3xl mb-8 font-subheading tracking-wide"
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1000,
              'Backend Developer',
              1000,
               'Ai Developer',
              1000,
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
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors font-heading tracking-wide text-shadow-sm w-full sm:w-auto"
            >
              View My Work
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 font-heading tracking-wide w-full sm:w-auto"
            >
              Discuss Your Project
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

