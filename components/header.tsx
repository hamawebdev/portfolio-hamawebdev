import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Projects', 'Skills', 'Achievements', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="py-4 md:py-6 fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
    >
      <div className="rounded-3xl bg-gradient-to-r from-[#4468E6] via-[#8B5CF6] to-[#6366F1] backdrop-blur-lg shadow-lg">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a 
            href="/" 
            className="text-xl md:text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <a 
                href="https://github.com/hamawebdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/90 hover:text-white p-2 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#1a1f36]/50 backdrop-blur-sm rounded-b-3xl"
        >
          <nav className="px-4 pb-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <motion.li 
                  key={item}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/90 hover:text-white transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a 
                  href="https://github.com/hamawebdev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;

