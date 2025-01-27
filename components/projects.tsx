'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Github } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'Infinity Club Site', 
    description: 'The Infinity Club Site is a web application developed to provide a seamless experience for club members and visitors.', 
    image: '/preview1.png',
    previewUrl: 'https://infinity-club-bba.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/infinity-club-site'
  },
  { 
    id: 2, 
    title: 'Brainwave Site', 
    description: 'The most impressive websites in the world use 3D graphics and animations to bring their content to life.', 
    image: '/preview2.png',
    previewUrl: 'https://jsm-brainwave.com/',
    githubUrl: 'https://github.com/hamawebdev/brainwave'
  },
  { 
    id: 3, 
    title: 'iPhone 15 Pro site', 
    description: 'Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.', 
    image: '/preview3.png',
    previewUrl: 'https://iphone-doc.vercel.app/',
    githubUrl: 'https://github.com/hamawebdev/iphone'
  },
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
   <h2 className="text-4xl font-bold mb-10 text-center text-blue-500">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </motion.button>
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
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

