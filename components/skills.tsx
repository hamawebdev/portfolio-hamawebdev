import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Boxes
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    tools: [
      { name: 'React & Next.js', icon: Code2, description: 'Component-Based Architecture' },
      { name: 'TypeScript', icon: Box, description: 'Type-Safe Development' },
      { name: 'Tailwind CSS', icon: Layout, description: 'Modern Styling System' }
    ],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    category: 'Backend',
    description: 'Crafting robust server-side solutions',
    tools: [
      { name: 'Node.js & Express', icon: Server, description: 'Server Runtime & Framework' },
      { name: 'REST & GraphQL', icon: Globe, description: 'API Development' },
      { name: 'Prisma & MongoDB', icon: Database, description: 'Data Layer' }
    ],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    category: 'DevOps',
    description: 'Deploying and scaling applications',
    tools: [
      { name: 'Git & GitHub', icon: GitBranch, description: 'Version Control' },
      { name: 'Docker', icon: Boxes, description: 'Containerization' },
      { name: 'AWS Basics', icon: Cloud, description: 'Cloud Infrastructure' }
    ],
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    category: 'Core',
    description: 'Essential development practices',
    tools: [
      { name: 'Testing', icon: ShieldCheck, description: 'Quality Assurance' },
      { name: 'CLI & Bash', icon: Terminal, description: 'System Operations' },
      { name: 'Algorithms', icon: Cpu, description: 'Problem Solving' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  }
];

const SkillCard = ({ category, description, tools, gradient, isSelected, onClick }) => {
  const Icons = { Code2, Box, Database, Cloud, Layout, Terminal, GitBranch, Server, Cpu, Globe, ShieldCheck, Boxes };
  
  return (
    <motion.div
      onClick={onClick}
      className={`relative group rounded-3xl p-1 cursor-pointer transition-all overflow-hidden
        ${isSelected ? 'scale-105' : 'hover:scale-[1.02]'}`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      {/* Gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
      
      {/* Content */}
      <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-6 h-full">
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {category}
        </h3>
        <p className="text-slate-400 text-sm mb-6">{description}</p>
        
        <div className="space-y-4">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.name}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-2 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10`}>
                  <IconComponent size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium tracking-wide">{tool.name}</p>
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-slate-400 font-light"
                    >
                      {tool.description}
                    </motion.p>
                  )}
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

  return (
    <section className="py-32 px-4 overflow-hidden"> {/* Removed bg-[#0A0A0F] */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A curated collection of modern technologies I use to build powerful digital experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
          layout
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              {...skill}
              isSelected={selectedCategory === skill.category}
              onClick={() => setSelectedCategory(
                selectedCategory === skill.category ? null : skill.category
              )}
            />
          ))}
        </motion.div>

        <motion.p 
          className="text-center mt-12 text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click on any category to explore more details
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;

