
export interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  topics?: string[];
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  owner: {
    login: string;
  };
}
