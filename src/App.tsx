import { ProfileForm } from "./components/forms/ProfileForm";
import { useEffect, useState } from "react";
import { UserSearchResults } from "./components/utils/queryClient";
import { useGithubUsers } from "./service/github";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const {
    mutate: searchUsers,
    data,
    isPending,
  } = useGithubUsers(
    (data) => {
      data.items.length === 0 && toast.error("No results found");
    },
    () => {
      toast.error("Number of requests exceeded. Please try again later.");
    }
  );
  useEffect(() => {
    if (searchInput.trim() !== "") {
      searchUsers({ username: searchInput });
    }
  }, [searchInput, searchUsers]);
  return (
    <div>
      <ProfileForm
        handleOnChange={(newValue: string) => {
          setSearchInput(newValue);
        }}
      />
      {isPending && <div className="text-green-500 ml-4">Loading...</div>}
      {data && <UserSearchResults data={data.items} />}
      <Toaster />
    </div>
  );
}
