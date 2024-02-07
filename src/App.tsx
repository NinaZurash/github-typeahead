import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ProfileForm } from "./components/forms/ProfileForm";

type Item = {
  [key: string]: string;
};

const queryClient = new QueryClient();

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/search/users?q=fe").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(Object.keys(data.items[0])[0]);

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileForm />
      <Example />
    </QueryClientProvider>
  );
}
