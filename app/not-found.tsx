import AppButton from "@/components/AppButton/AppButton";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        404
      </p>
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist.
      </p>
      <AppButton
        href="/"
        className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
      >
        Back to home
      </AppButton>
    </main>
  );
}