'use client'

import { motion } from 'framer-motion'
import { Code, Book, Award, Trophy, Microscope, Github } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Computer Science Major',
    description: 'Pursuing a degree in Computer Science with a focus on Full Stack Development',
    icon: <Book className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Dean\'s List',
    description: 'Consistently achieved top academic performance, maintaining a GPA of 3.8+',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Hackathon Winner',
    description: 'First place in University Hackathon for developing an innovative AI-powered app',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Research Assistant',
    description: 'Assisted in cutting-edge research on quantum computing algorithms',
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    id: 5,
    title: 'Freelance Developer',
    description: 'Started freelancing in 2024, specializing in web and mobile app development',
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 6,
    title: 'Open Source Contributor',
    description: 'Active contributor to popular open-source projects, including React and TensorFlow',
    icon: <Github className="w-6 h-6" />,
  },
]


const handleDownload = () => {
  window.open("https://drive.google.com/file/d/1PdjoRK_w9jY0YMbHp6b4Go3caNezLnT8/view?usp=sharing");
};

export function AcademicShowcase() {
  return (
    <section id="achievements" className="py-20"> {/* Removed background color */}
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Achievements & Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 mr-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
            </div>
            <p className="text-gray-400">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-300 mb-6">
          As a passionate Computer Science student and budding freelancer, I'm constantly pushing the boundaries of what's possible in tech. My academic excellence, combined with hands-on project experience, positions me uniquely in the world of software development.
        </p>
        

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-l transition-colors"
          onClick={handleDownload}
        >
         Download Resume
        </motion.button>
        
      </motion.div>
    </section>
  )
}

export default AcademicShowcase;

