import { GithubUser } from "@/service/types";
import UserCard from "./UserCard";
import { SearchX } from "lucide-react";
import { useUser } from "@/provider/UserProvider";

export default function UserSearchResult() {
  const { users } = useUser();

  console.log(users);

  return (
    <div className="flex gap-8 flex-wrap justify-center items-center text-gray-400 mt-20">
      {users && users.length > 0 ? (
        users.map((item: GithubUser) => <UserCard key={item.id} data={item} />)
      ) : (
        <div className="flex gap-2">
          <h1>No results found... </h1>
          <SearchX />
        </div>
      )}
    </div>
  );
}
