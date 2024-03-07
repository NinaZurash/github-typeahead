import { Link } from "react-router-dom";

import { GithubUser } from "@/service/types";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type Props = {
  data: GithubUser;
};

export default function UserCard({ data }: Props) {
  return (
    <Link to={`/user/${data.id}`}>
      <BackgroundGradient className="max-w-sm space-y-3 rounded-[22px] bg-zinc-900 p-4 sm:p-10">
        <img
          className="block size-36 rounded-full object-contain p-1"
          src={data.avatar_url}
          alt="Avatar"
        />
        <p className="text-center text-base text-neutral-200 sm:text-xl">
          ID : {data.id}
        </p>
      </BackgroundGradient>
    </Link>
  );
}
