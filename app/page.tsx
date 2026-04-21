"use client"

import AppLoading from "@/components/AppLoading/AppLoading";
import Header from "@/components/Header/Header";
import ItemList from "@/components/ItemList/ItemList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useRepositories } from "@/hooks/useRepositories";
import { useEffect, useState } from "react";


export default function Home() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("stars_desc");
  const { repos, total, status, error, fetchRepos } = useRepositories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const [sortKey, order] = sort.split("_");
    fetchRepos(query, sortKey, order as "asc" | "desc");
  };

  useEffect(() => {
    const [sortKey, order] = sort.split("_");
    fetchRepos("react", sortKey, order as "asc" | "desc");
    // fetchRepos is intentionally omitted to keep this effect tied to sort only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div>
      {/* header */}
      <Header />
      {/* form */}
      <SearchBar search={query} onSearch={handleSearch} setSearch={setQuery} />
      {/* list */}
      <ItemList repos={repos} sort={sort} setSort={setSort} total={total} status={status} error={error} />
      {/* loader */}
      <AppLoading isOpen={status === "loading"} />
    </div>
  );
}
