import AppButton from "@/components/AppButton/AppButton";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

function SearchBar({ search, setSearch, onSearch }: SearchBarProps) {
  return (
    <form className="flex gap-2 p-4" onSubmit={onSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search repositories..."
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <AppButton type="submit" center={false} className="disabled:bg-gray-400">
        Search
      </AppButton>
    </form>
  )
}

export default SearchBar
