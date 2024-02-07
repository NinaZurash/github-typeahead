import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../providers/useMainContext";
import { useEffect } from "react";

type Item = {
  [key: string]: string;
};

export function UserSearchResults() {
  const { state } = useMainContext();
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://api.github.com/search/users?q=${state}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    refetch();
  }, [state, refetch]);

  if (isPending)
    return (
      <div className="flex justify-center text-emerald-500">Loading...</div>
    );
  if (error)
    return (
      <div className="flex justify-cente text-red-500">
        An error has occurred:{error.message}
      </div>
    );
  if (!data.items)
    return (
      <div className="flex justify-cente text-red-500">
        Number of requests exceeded. Please try again later.
      </div>
    );

  return (
    <div className="flex flex-col mt-3">
      {data.items.slice(0, 5).map((item: Item, index: number) => (
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
