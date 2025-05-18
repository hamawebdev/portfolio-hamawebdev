'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Github } from 'lucide-react'
import { SectionTitle } from './ui/section-title'

const projects = [
  {
    id: 1,
    title: 'Barber Shop',
    description: 'A website for a barber shop that allows customers to book appointments and view the shop\'s services.',
    image: '/preview1.png',
    previewUrl: 'https://test-barber.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/test-barber',
    tags: ['Supabase', 'React', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'ClubPulse',
    description: 'A platform to connect university clubs with university administration for easy organization of events and activities.',
    image: '/preview4.png',
    previewUrl: 'https://clubpulse-sand.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/clubpulse',
    tags: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Consin',
    description: 'Platform to connect startups with university incubators, facilitating innovation and entrepreneurship.',
    image: '/preview8.png',
    previewUrl: 'https://consin.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/consin',
    tags: ['React', 'Laravel', 'Material UI']
  },
  {
    id: 4,
    title: 'NexSoft Solutions',
    description: 'Agency showcase website highlighting services, portfolio, and team members of a digital agency.',
    image: '/preview7.png',
    previewUrl: 'https://nexsoftsolutions.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/agency-showcase',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS']
  }
 
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="My Projects"
        subtitle="A collection of my recent work showcasing my skills and experience"
        titleGradient="blue-purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden h-56 sm:h-64">
              <div className="absolute inset-0 bg-blue-500 bg-opacity-30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 font-subheading tracking-tight">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow font-body">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900 bg-opacity-50 text-blue-300 border border-blue-700 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full sm:w-auto bg-blue-600 text-white px-4 py-2.5 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium font-heading text-shadow-sm tracking-wide"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.button>
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full sm:w-auto bg-gray-700 text-white px-4 py-2.5 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 font-medium font-heading text-shadow-sm tracking-wide"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

