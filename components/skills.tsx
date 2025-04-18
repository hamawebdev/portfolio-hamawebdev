import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Box,
  Database,
  Cloud,
  Layout,
  Terminal,
  GitBranch,
  Server,
  Cpu,
  Globe,
  ShieldCheck,
  Boxes,
  Sparkles
} from 'lucide-react';
import { SectionTitle } from './ui/section-title';

// Skill level component
const SkillLevel = ({ level, color }) => {
  const dots = [];
  const maxLevel = 5;

  for (let i = 0; i < maxLevel; i++) {
    dots.push(
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i < level ? color : 'bg-gray-600'} transition-all duration-300`}
      />
    );
  }

  return (
    <div className="flex space-x-1 items-center">
      {dots}
      <span className="ml-2 text-xs text-gray-400">{level}/5</span>
    </div>
  );
};

const skills = [
  {
    category: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    tools: [
      { name: 'React & Next.js', icon: Code2, description: 'Component-Based Architecture', level: 5 },
      { name: 'TypeScript', icon: Box, description: 'Type-Safe Development', level: 4 },
      { name: 'Tailwind CSS', icon: Layout, description: 'Modern Styling System', level: 5 }
    ],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    category: 'Backend',
    description: 'Crafting robust server-side solutions',
    tools: [
      { name: 'Node.js & Express', icon: Server, description: 'Server Runtime & Framework', level: 4 },
      { name: 'REST & GraphQL', icon: Globe, description: 'API Development', level: 4 },
      { name: 'Prisma & MongoDB', icon: Database, description: 'Data Layer', level: 3 }
    ],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    category: 'DevOps',
    description: 'Deploying and scaling applications',
    tools: [
      { name: 'Git & GitHub', icon: GitBranch, description: 'Version Control', level: 5 },
      { name: 'Docker', icon: Boxes, description: 'Containerization', level: 3 },
      { name: 'AWS Basics', icon: Cloud, description: 'Cloud Infrastructure', level: 3 }
    ],
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    category: 'Core',
    description: 'Essential development practices',
    tools: [
      { name: 'Testing', icon: ShieldCheck, description: 'Quality Assurance', level: 4 },
      { name: 'CLI & Bash', icon: Terminal, description: 'System Operations', level: 4 },
      { name: 'Algorithms', icon: Cpu, description: 'Problem Solving', level: 4 }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  }
];

const SkillCard = ({ category, description, tools, gradient, isSelected, onClick }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isSelected) {
      controls.start({
        scale: 1.05,
        transition: { duration: 0.3 }
      });
    } else {
      controls.start({
        scale: 1,
        transition: { duration: 0.3 }
      });
    }
  }, [isSelected, controls]);

  // Generate random positions for sparkle elements
  const sparklePositions = [
    { top: '10%', left: '80%', delay: 0 },
    { top: '80%', left: '15%', delay: 1.5 },
    { top: '30%', left: '90%', delay: 3 }
  ];

  return (
    <motion.div
      onClick={onClick}
      className="relative group rounded-3xl p-1 cursor-pointer transition-all overflow-hidden"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      animate={controls}
      layout
    >
      {/* Animated sparkles - only visible on selected or hover */}
      {sparklePositions.map((pos, idx) => (
        <motion.div
          key={idx}
          className={`absolute w-6 h-6 opacity-0 ${isSelected || 'group-hover:opacity-100'}`}
          style={{ top: pos.top, left: pos.left }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isSelected ? { opacity: 1, scale: [0.5, 1.2, 1] } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            repeat: isSelected ? Infinity : 0,
            repeatType: 'reverse',
            delay: pos.delay
          }}
        >
          <Sparkles className={`w-full h-full text-${gradient.split('-')[1]}-400`} />
        </motion.div>
      ))}

      {/* Gradient border with improved animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-40 transition-all duration-500`} />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-6 h-full border border-slate-800 group-hover:border-slate-700 transition-colors duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {category}
          </h3>

          {/* Subtle indicator */}
          <motion.div
            className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}
            animate={isSelected ? { scale: [1, 1.5, 1] } : { scale: 1 }}
            transition={{ duration: 1, repeat: isSelected ? Infinity : 0, repeatType: 'reverse' }}
          />
        </div>

        <p className="text-slate-400 text-sm mb-6">{description}</p>

        <div className="space-y-5">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.name}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 shadow-sm`}>
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium tracking-wide">{tool.name}</p>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-slate-400 font-light mt-1">
                            {tool.description}
                          </p>
                          <div className="mt-2">
                            <SkillLevel
                              level={tool.level}
                              color={`bg-${gradient.split('-')[1]}-500`}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const controls = useAnimation();

  // Staggered animation for cards
  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    }));
  }, [controls]);

  return (
    <section className="py-32 px-4 overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Tech Stack"
          subtitle="A curated collection of modern technologies I use to build powerful digital experiences"
          titleGradient="white-slate"
          subtitleClassName="text-slate-400 font-light"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
          layout
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              custom={i}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <SkillCard
                {...skill}
                isSelected={selectedCategory === skill.category}
                onClick={() => setSelectedCategory(
                  selectedCategory === skill.category ? null : skill.category
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 bg-slate-800/50 backdrop-blur-sm py-3 px-6 rounded-full inline-block mx-auto border border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-300 text-sm flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            Click on any category to explore skill details
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

