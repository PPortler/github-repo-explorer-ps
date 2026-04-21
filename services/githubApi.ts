import { Repo } from "@/types/repo/Repo";

const BASE_URL = "https://api.github.com";

export const searchRepositories = async (
  query: string,
  sort?: string,
  order?: "asc" | "desc"
): Promise<{ items: Repo[]; total_count: number }> => {
  const params = new URLSearchParams({
    q: query,
    ...(sort && { sort }),
    ...(order && { order }),
  });

  const res = await fetch(`${BASE_URL}/search/repositories?${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
};

export const getRepositoryDetail = async (
  fullName: string
): Promise<Repo> => {
  const res = await fetch(`${BASE_URL}/repos/${fullName}`);

  if (!res.ok) {
    throw new Error("Failed to fetch repository detail");
  }

  return res.json();
};