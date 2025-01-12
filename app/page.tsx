'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { AcademicShowcase } from '@/components/academic-showcase'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackgroundScene } from '@/components/background-scene'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      <BackgroundScene />
      <div className="container mx-auto px-4 relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <AcademicShowcase />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  )
}

