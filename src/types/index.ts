export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
  languages: string[];
  status: 'active' | 'archived';
  lastUpdated: Date;
  created_at: string;
  updated_at: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Theme {
  id: string;
  name: string;
  background: string;
  primary: string;
  secondary: string;
}