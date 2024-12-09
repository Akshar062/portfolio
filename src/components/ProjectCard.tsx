import React from 'react';
import { motion } from 'framer-motion';
import { Repository } from '../types';
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react';

interface ProjectCardProps {
  repo: Repository;
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-poppins font-semibold text-xl">{repo.name}</h3>
          {repo.status === 'archived' && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              Archived
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 font-inter">
          {repo.description || 'No description available'}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.map(topic => (
            <span
              key={topic}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-inter"
            >
              {topic}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} />
          <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm">
              <Star size={16} />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <GitFork size={16} />
              {repo.forks_count}
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all"
            >
              <Github size={18} />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;