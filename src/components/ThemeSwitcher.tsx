import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { themes } from '../utils/themes';
import { Theme } from '../types';
import AnimatedButton from './AnimatedButton';
import { slideIn, staggerContainer } from '../utils/animations';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <AnimatedButton
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
      >
        <Palette size={20} />
      </AnimatedButton>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg shadow-xl"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  variants={slideIn}
                  onClick={() => {
                    onThemeChange(theme);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <div className="flex gap-1">
                    <motion.div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.secondary }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <span className="font-inter">
                    {theme.name}
                    {currentTheme.id === theme.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {' '}✓
                      </motion.span>
                    )}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSwitcher;