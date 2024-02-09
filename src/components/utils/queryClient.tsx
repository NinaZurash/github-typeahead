import { GithubUser } from "@/service/types";

export function UserSearchResults({ data }: { data: GithubUser[] }) {
  return (
    <div className="flex flex-col mt-3">
      {data.slice(0, 5).map((item: GithubUser, index: number) => (
        <div className="border-t p-2  border-zinc-200" key={index}>
          {Object.keys(item).map((key: string, index: number) => (
            <div key={index}>
              <strong>{key}</strong> {item[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
