'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Book, Award, Trophy, Microscope, Github as GithubIcon, ChevronRight, Download, Sparkles } from 'lucide-react'
import { SectionTitle } from './ui/section-title'

// Define types for our components
type CounterProps = {
  value: number;
  duration?: number;
};

type AchievementType = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: { value: number; label: string };
  year: string;
};

type AchievementCardProps = {
  achievement: AchievementType;
  index: number;
  isSelected: boolean;
  onClick: () => void;
};

// Counter animation component
const Counter = ({ value, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ''));

    // If zero, return early
    if (start === end) return;

    // Find duration per increment
    const incrementTime = (duration / end) * 1000;

    // Timer to increment counter
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // Cleanup
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return <span>{count}</span>;
};

const achievements: AchievementType[] = [
  {
    id: 1,
    title: 'Computer Science Major',
    description: 'Pursuing a degree in Computer Science with a focus on Full Stack Development',
    icon: <Book className="w-6 h-6" />,
    stats: { value: 3.8, label: 'GPA' },
   
  },
  {
    id: 2,
    title: 'Dean\'s List',
    description: 'Consistently achieved top academic performance, maintaining a GPA of 3.8+',
    icon: <Award className="w-6 h-6" />,
    stats: { value: 4, label: 'Semesters' },
   
  },
  {
    id: 3,
    title: 'Hackathon Winner',
    description: 'First place in University Hackathon for developing an innovative AI-powered app',
    icon: <Trophy className="w-6 h-6" />,
    stats: { value: 1, label: 'Rank' },
   
  },
  {
    id: 4,
    title: "Coding Competition Winner",
    description: "Achieved 1st place in the Algeria Coding & AI Competition",
    icon: <Microscope className="w-6 h-6" />,
    stats: { value: 5, label: 'Rank' },
  },
  {
    id: 5,
    title: 'Freelance Developer',
    description: 'Started freelancing in 2024, specializing in web development',
    icon: <Code className="w-6 h-6" />,
    stats: { value: 8, label: 'Projects' },
  },
  {
    id: 6,
    title: 'Open Source Contributor',
    description: 'Active contributor to popular open-source projects',
    icon: <GithubIcon className="w-6 h-6" />,
    stats: { value: 12, label: 'Contributions' },
 
  },
]


const handleDownload = () => {
  window.open("https://drive.google.com/file/d/1rUgi_MCIfyN8ZkWWGR6zo2AR79L-dze9/view?usp=sharing");
};

// Achievement card component
const AchievementCard = ({ achievement, index, isSelected, onClick }: AchievementCardProps) => {
  return (
    <motion.div
      layoutId={`achievement-${achievement.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer ${isSelected ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900' : ''}`}
    >
      {/* Card background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500 rounded-full filter blur-xl opacity-20"></div>
      </div>

      {/* Year badge */}
      <div className="absolute top-4 right-4 bg-gray-700/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-300 border border-gray-600">
        {achievement.year}
      </div>

      {/* Content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 mr-4 shadow-lg">
            {achievement.icon}
          </div>
          <h3 className="text-xl font-semibold text-white font-heading">{achievement.title}</h3>
        </div>

        <p className="text-gray-400 mb-4 font-body">{achievement.description}</p>

        {/* Stats counter */}
        <div className="mt-4 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Counter value={achievement.stats.value} />
            </div>
            <span className="text-gray-400 ml-2 text-sm">{achievement.stats.label}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </motion.div>
  );
};

export function AcademicShowcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-pink-500 rounded-full filter blur-[100px]"></div>
      </div>

      <SectionTitle
        title="Achievements & Skills"
        titleGradient="purple-pink"
        subtitle="Academic excellence and professional accomplishments that showcase my journey"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            index={index}
            isSelected={selectedId === achievement.id}
            onClick={() => setSelectedId(selectedId === achievement.id ? null : achievement.id)}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 relative z-10"
      >
        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-heading">
                Passionate About Technology
              </h3>
              <p className="text-gray-300 font-body">
                As a passionate Computer Science student and budding freelancer, I'm constantly pushing the boundaries of what's possible in tech. My academic excellence, combined with hands-on project experience, positions me uniquely in the world of software development.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                onClick={handleDownload}
              >
                {/* Sparkle animations */}
                <motion.div
                  className="absolute -top-1 -right-1 text-yellow-300"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>

                <span className="flex items-center justify-center">
                  Download Resume <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AcademicShowcase;

