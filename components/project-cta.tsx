'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function ProjectCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Content */}
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium text-white">Let's build something amazing together</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-heading tracking-tight text-shadow-lg max-w-3xl mx-auto">
              Have a project in mind? Let's bring your vision to life
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-body">
              From concept to completion, I'll work with you to create a custom solution that meets your needs and exceeds your expectations.
            </p>
            
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white rounded-lg shadow-xl hover:bg-blue-50 transition-all duration-300 font-heading"
              >
                Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectCTA
