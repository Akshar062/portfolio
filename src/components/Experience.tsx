import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Android Developer',
    company: 'MINDRON',
    period: '2022 - Present',
    description: [
      'Developed and maintained Android applications using Kotlin and Jetpack Compose',
      'Implemented AI-powered features for enhanced user experience',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
      'Integrated IoT devices with mobile applications'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'TensorFlow', 'IoT']
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-8">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-xl">{experience.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                  <span className="font-inter">{experience.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {experience.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 font-inter">
                      <span className="text-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;