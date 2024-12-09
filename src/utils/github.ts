import { Octokit } from 'octokit';
import { Repository } from '../types';

const octokit = new Octokit();

export async function getGithubRepos(username: string) {
  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      sort: 'updated',
      per_page: 100, // Fetch maximum repositories
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    // Fetch additional details for each repository
    const reposWithDetails = await Promise.all(
      response.data.map(async (repo) => {
        try {
          const languages = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: username,
            repo: repo.name,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });

          return {
            ...repo,
            languages: Object.keys(languages.data),
            status: repo.archived ? 'archived' : 'active',
            lastUpdated: new Date(repo.updated_at),
          };
        } catch (error) {
          console.error(`Error fetching details for ${repo.name}:`, error);
          return repo;
        }
      })
    );

    return reposWithDetails;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}