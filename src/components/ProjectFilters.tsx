import React from 'react';
import { Filter } from 'lucide-react';

interface ProjectFiltersProps {
  activeFilters: {
    category: string;
    status: string;
  };
  onFilterChange: (type: 'category' | 'status', value: string) => void;
  categories: string[];
}

const ProjectFilters = ({ activeFilters, onFilterChange, categories }: ProjectFiltersProps) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-primary" />
        <h3 className="font-poppins font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-inter mb-2">Category</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onFilterChange('category', category)}
                className={`px-4 py-2 rounded-full font-inter text-sm capitalize transition-all
                  ${activeFilters.category === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-inter mb-2">Status</h4>
          <div className="flex gap-2">
            {['all', 'active', 'archived'].map(status => (
              <button
                key={status}
                onClick={() => onFilterChange('status', status)}
                className={`px-4 py-2 rounded-full font-inter text-sm capitalize transition-all
                  ${activeFilters.status === status 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;