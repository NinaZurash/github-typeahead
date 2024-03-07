import { useUser } from "@/provider/UserProvider";

import { FancySearch } from "@/components/home/FancySearch";
import UserSearchResult from "@/components/home/UserSearchResult";
import Spinner from "@/components/shared/Spinner";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  const { isPending } = useUser();

  return (
    <div className=" flex min-h-screen w-full flex-1 flex-col items-center gap-20 rounded-md bg-neutral-950 ">
      <FancySearch />
      {isPending ? <Spinner /> : <UserSearchResult />}
      <BackgroundBeams />
    </div>
  );
}
