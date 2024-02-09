import { GithubUser } from "@/service/types";
import UserCard from "./UserCard";

export default function UserSearchResult({ data }: { data: GithubUser[] }) {
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center  mt-3">
      {data.length < 1 ? (
        <h1>No results found</h1>
      ) : (
        <>
          {data.slice(0, 5).map((item: GithubUser, index: number) => (
            <UserCard key={index} data={item} />
          ))}
        </>
      )}
    </div>
  );
}
