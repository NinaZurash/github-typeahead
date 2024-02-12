import { ProfileForm } from "./components/home/forms/ProfileForm";
import { useGithubUsers } from "./service/github";
import toast from "react-hot-toast";
import UserSearchResult from "./components/home/UserSearchResult";
import { useRef } from "react";
import Spinner from "./components/shared/Spinner";

export default function App() {
  const debouncingRef = useRef<NodeJS.Timeout>();
  const { mutateAsync, data, isPending } = useGithubUsers(() => {
    toast.error("Number of requests exceeded. Please try again later.");
  });

  const handleSearchInput = (v: string) => {
    if (debouncingRef.current) clearTimeout(debouncingRef.current);

    debouncingRef.current = setTimeout(() => {
      mutateAsync({ username: v });
    }, 1500);
  };

  return (
    <>
      <ProfileForm handleOnChange={handleSearchInput} />
      {data?.items && <UserSearchResult data={data.items} />}
      {isPending && <Spinner />}
    </>
  );
}
