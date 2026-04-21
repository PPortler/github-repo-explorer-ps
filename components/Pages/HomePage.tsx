"use client";

import ItemList from "@/components/ItemList/ItemList";
import SearchBar from "@/components/SearchBar/SearchBar";
import AppLoading from "@/components/AppLoading/AppLoading";
import { useRepositories } from "@/hooks/useRepositories";
import { useEffect, useState } from "react";
import { SortOrder, RequestStatus } from "@/consts/enum";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("stars_desc");

  const { repos, total, status, error, fetchRepos } = useRepositories();

  const parseSortOrder = (value: string): SortOrder => {
    return value === SortOrder.Asc ? SortOrder.Asc : SortOrder.Desc;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const [sortKey, order] = sort.split("_");
    fetchRepos(query, sortKey, parseSortOrder(order));
  };

  useEffect(() => {
    const [sortKey, order] = sort.split("_");
    fetchRepos(query, sortKey, parseSortOrder(order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <>
      <SearchBar
        search={query}
        onSearch={handleSearch}
        setSearch={setQuery}
      />

      <ItemList
        repos={repos}
        sort={sort}
        setSort={setSort}
        total={total}
        status={status}
        error={error}
      />

      <AppLoading isOpen={status === RequestStatus.Loading} />
    </>
  );
}