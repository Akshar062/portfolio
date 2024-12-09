import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Tv, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Mobile Development', items: ['Android', 'Kotlin', 'Jetpack Compose', 'XML'] },
    { category: 'Programming', items: ['Python', 'Java', 'C++'] },
    { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'OpenCV'] },
    { category: 'IoT', items: ['Arduino', 'Raspberry Pi', 'Sensors Integration'] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="font-inter text-gray-600 dark:text-gray-300">
                I'm a passionate software developer with a strong foundation in Electronics and Communication Engineering. 
                Currently working at MINDRON, I specialize in Android development and have a keen interest in AI and IoT technologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary" size={24} />
                  <span className="font-inter">B.E. in Electronics and Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="text-primary" size={24} />
                  <span className="font-inter">2+ Years of Development Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tv className="text-primary" size={24} />
                  <span className="font-inter">Anime & Technology Enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="text-primary" size={24} />
                  <span className="font-inter">Hardware & IoT Explorer</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-poppins font-semibold mb-3">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-inter">{skill}</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1, delay: 0.1 * skillIndex }}
                            viewport={{ once: true }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;