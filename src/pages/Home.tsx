import { useUser } from "@/provider/UserProvider";

import { UserSearchForm } from "@/components/home/UserSearchForm";
import UserSearchResult from "@/components/home/UserSearchResult";
import Spinner from "@/components/shared/Spinner";

export default function Home() {
  const { isPending } = useUser();

  return (
    <div className="flex flex-col gap-4">
      <UserSearchForm />
      {isPending ? <Spinner /> : <UserSearchResult />}
    </div>
  );
}
