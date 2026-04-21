import { useState } from "react";
import { searchRepositories } from "@/services/githubApi";
import { Repo } from "@/types/repo/Repo";
import { RequestStatus, SortOrder } from "@/consts/enum";

export const useRepositories = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState<RequestStatus>(RequestStatus.Idle);
    const [error, setError] = useState<string | null>(null);

    const fetchRepos = async (query: string, sort?: string, order?: SortOrder) => {
        try {
            setStatus(RequestStatus.Loading);
            setError(null);
            const finalQuery = query.trim() || "react";
            const data = await searchRepositories(finalQuery, sort, order);
            setRepos(data.items);
            setTotal(data.total_count);
            setStatus(RequestStatus.Success);

        } catch (err) {
            setRepos([]);
            setTotal(0);
            setStatus(RequestStatus.Error);
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