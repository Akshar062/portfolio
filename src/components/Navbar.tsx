import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { Theme } from '../types';
import { themes } from '../utils/themes';
import { navItemAnimation, staggerContainer } from '../utils/animations';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-background', currentTheme.background);
    document.documentElement.style.setProperty('--color-primary', currentTheme.primary);
    document.documentElement.style.setProperty('--color-secondary', currentTheme.secondary);
  }, [currentTheme]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#" className="font-poppins text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AK
            </a>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="ml-10 flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={navItemAnimation}
                  href={item.href}
                  className="font-inter text-gray-300 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
            <AnimatedButton
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </AnimatedButton>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-lg"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={navItemAnimation}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-inter text-gray-300 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;