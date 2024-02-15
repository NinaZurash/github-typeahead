import { GithubUser } from "@/service/types";
import UserCard from "./UserCard";

export default function UserSearchResult({ data }: { data: GithubUser[] }) {
  return (
    <div className="flex gap-8 flex-wrap justify-center items-center text-gray-400  mt-20">
      {data.length < 1 ? (
        <div className="mt-24 flex gap-x-2">
          <h1>No results found... </h1>
          <svg
            className="w-6 h-6 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />{" "}
          </svg>
        </div>
      ) : (
        <>
          {data.map((item: GithubUser, index: number) => (
            <UserCard key={index} data={item} />
          ))}
        </>
      )}
    </div>
  );
}
