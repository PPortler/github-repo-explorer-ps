import { Repo } from "@/types/repo/Repo";
import { useRouter } from "next/navigation";


type ItemListProps = {
  repos: Repo[];
  sort?: string;
  setSort?: (sort: string) => void;
  total?: number;
  status?: "idle" | "loading" | "success" | "error";
  error?: string | null;
};

function ItemList({ repos, sort, setSort, total, status, error }: ItemListProps) {

  const router = useRouter();

  return (
    <div>
      {/* sort and count */}
      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-gray-500">
          {total?.toLocaleString()} results
        </p>
        <select
          className="border rounded-lg px-3 py-2"
          value={sort}
          onChange={(e) => setSort?.(e.target.value)}
        >
          <option value="stars_desc">Stars ↓</option>
          <option value="stars_asc">Stars ↑</option>
          <option value="updated_desc">Updated ↓</option>
          <option value="updated_asc">Updated ↑</option>
        </select>
      </div>
      {/* result list */}
      <div className="p-4 grid gap-4">
        {status === "error" && (
          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-red-400">
            {error || "Something went wrong. Please try again."}
          </div>
        )}
        {status === "success" && repos.length === 0 && (
          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-gray-500">
            No repositories found. Try another keyword.
          </div>
        )}
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="border rounded-xl p-4 hover:shadow transition cursor-pointer"
            onClick={() => router.push(`/repo/${encodeURIComponent(repo.full_name)}`)}
          >
            <h2 className="text-lg font-semibold">{repo.name}</h2>
            <p className="text-sm text-gray-500">
              by {repo.owner.login}
            </p>
            <div className="flex gap-4 mt-2 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🧠 {repo.language || "N/A"}</span>
              <span>
                Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemList
