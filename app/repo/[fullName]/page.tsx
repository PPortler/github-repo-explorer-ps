import { getRepositoryDetail } from "@/services/githubApi";
import AppButton from "@/components/AppButton/AppButton";
import TagTopic from "@/components/TagTopic/TagTopic";
import { notFound } from "next/navigation";

type RepoDetailPageProps = {
  params: Promise<{ fullName: string }>;
};

export default async function RepoDetail({ params }: RepoDetailPageProps) {
  const { fullName } = await params;

  const decodedFullName = decodeURIComponent(fullName);
  const [owner, name] = decodedFullName.split("/");

  if (!owner || !name) {
    notFound();
  }

  let repo;
  try {
    repo = await getRepositoryDetail(decodedFullName);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto  p-4">
      <div className="mb-4">
        <AppButton href="/" center={false} textColor="text-slate-700" className="border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50">
          Back to results
        </AppButton>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{repo.full_name}</h1>
        <p className="mt-3 text-slate-600">{repo.description || "No description provided."}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {(repo.topics ?? []).length > 0 ? (
            repo.topics?.map((topic) => (
              <TagTopic key={topic} label={topic} />
            ))
          ) : (
            <span className="text-sm text-slate-500">No topics</span>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-slate-500">Open Issues</p>
            <p className="text-lg font-semibold text-slate-900">{repo.open_issues_count.toLocaleString()}</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-slate-500">Forks</p>
            <p className="text-lg font-semibold text-slate-900">{repo.forks_count.toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <AppButton
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            center={false}
            className="bg-slate-900 px-4 py-2 text-sm hover:bg-slate-700"
          >
            View on GitHub
          </AppButton>
        </div>
      </div>
    </div>
  );
}