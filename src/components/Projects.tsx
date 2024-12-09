import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getGithubRepos } from '../utils/github';
import { Repository } from '../types';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';
import LoadingSpinner from './LoadingSpinner';

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all'
  });

  const categories = ['all', 'android', 'python', 'iot', 'ai'];

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const data = await getGithubRepos('Akshar062');
        setRepos(data);
        const filtered = filterRepos(data);
        setDisplayedRepos(filtered.slice(0, ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filterRepos = (reposToFilter: Repository[]) => {
    return reposToFilter.filter(repo => {
      const categoryMatch = 
        filters.category === 'all' || 
        repo.topics.includes(filters.category) || 
        repo.languages.includes(filters.category);
      
      const statusMatch = 
        filters.status === 'all' || 
        repo.status === filters.status;

      return categoryMatch && statusMatch;
    }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  };

  const handleFilterChange = (type: 'category' | 'status', value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev, [type]: value };
      const filtered = filterRepos(repos);
      setDisplayedRepos(filtered.slice(0, ITEMS_PER_PAGE));
      setCurrentPage(1);
      return newFilters;
    });
  };

  const loadMore = async () => {
    setIsLoadingMore(true);
    try {
      const filtered = filterRepos(repos);
      const nextPage = currentPage + 1;
      const nextRepos = filtered.slice(0, nextPage * ITEMS_PER_PAGE);
      setDisplayedRepos(nextRepos);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error loading more repos:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const hasMore = filterRepos(repos).length > displayedRepos.length;

  if (isLoading) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins mb-8">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="flex justify-center items-center min-h-[200px]">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-8">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <ProjectFilters 
            activeFilters={filters}
            onFilterChange={handleFilterChange}
            categories={categories}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRepos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={loadMore}
                disabled={isLoadingMore}
                className="px-6 py-3 bg-primary text-white rounded-lg font-inter flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingMore ? <LoadingSpinner /> : 'Load More'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;