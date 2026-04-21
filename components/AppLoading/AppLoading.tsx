type AppLoadingProps = {
  isOpen: boolean;
  label?: string;
};

function AppLoading({ isOpen, label = "Loading..." }: AppLoadingProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex w-55 flex-col items-center gap-3 rounded-xl bg-white p-5 shadow-xl">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        <p className="text-sm font-medium text-slate-700">{label}</p>
      </div>
    </div>
  );
}

export default AppLoading;
