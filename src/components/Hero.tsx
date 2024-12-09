import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Akshar Kalathiya
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 font-inter">
              <TypeAnimation
                sequence={[
                  'Android Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'IoT Developer',
                  2000,
                ]}
                repeat={Infinity}
                className="text-gray-600 dark:text-gray-300"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 font-inter">
              Crafting innovative solutions at the intersection of Android development and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/axar2324"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/akshar-kalathiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:axar2324@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-[400px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                alt="Akshar Kalathiya"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;