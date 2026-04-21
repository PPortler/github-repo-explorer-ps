import { useState } from "react";
import { searchRepositories } from "@/services/githubApi";
import { Repo } from "@/types/repo/Repo";

type Status = "idle" | "loading" | "success" | "error";

export const useRepositories = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    const fetchRepos = async (query: string, sort?: string, order?: "asc" | "desc") => {
        try {
            setStatus("loading");
            setError(null);
            const finalQuery = query.trim() || "react";
            const data = await searchRepositories(finalQuery, sort, order);
            setRepos(data.items);
            setTotal(data.total_count);
            setStatus("success");

        } catch (err) {
            setStatus("error");
            setError((err as Error).message);
        }
    };

    return {
        repos,
        total,
        status,
        error,
        fetchRepos,
    };
};