import { ProfileForm } from "./components/home/forms/ProfileForm";
import { useGithubUsers } from "./service/github";
import toast from "react-hot-toast";
import UserSearchResult from "./components/home/UserSearchResult";
import TailwindIndicator from "./utils/TailwindIndicator";

export default function App() {
  const { mutateAsync, data, isPending } = useGithubUsers(() => {
    toast.error("Number of requests exceeded. Please try again later.");
  });

  return (
    <>
      <ProfileForm
        handleOnChange={(v: string) => mutateAsync({ username: v })}
      />
      {isPending && <div className="text-green-500 ml-4">Loading...</div>}
      {data?.items && <UserSearchResult data={data.items} />}
      <TailwindIndicator />
    </>
  );
}
