import { useUser } from "@/provider/UserProvider";

import { SearchX } from "lucide-react";

import { GithubUser } from "@/service/types";

import UserCard from "./UserCard";

export default function UserSearchResult() {
  const { users } = useUser();
  let content;

  if (users == undefined) return <></>;
  if (users.length > 0) {
    content = users
      .slice(0, 5)
      .map((item: GithubUser) => <UserCard key={item.id} data={item} />);
  } else {
    content = (
      <div className="flex gap-2">
        <h1>No results found... </h1>
        <SearchX />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
      {content}
    </div>
  );
}
