'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Github } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Description for Project 1', 
    image: '/placeholder.svg',
    previewUrl: 'https://project1-preview.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'Description for Project 2', 
    image: '/placeholder.svg',
    previewUrl: 'https://project2-preview.com',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Description for Project 3', 
    image: '/placeholder.svg',
    previewUrl: 'https://project3-preview.com',
    githubUrl: 'https://github.com/yourusername/project3'
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

