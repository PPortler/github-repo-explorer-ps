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
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
