import { Link } from "react-router-dom";

import { GithubUser } from "@/service/types";

type Props = {
  data: GithubUser;
};

export default function UserCard({ data }: Props) {
  return (
    <Link to={`/user/${data.id}`}>
      <div className="border  border-solid p-2 hover:cursor-pointer hover:border-cyan-600">
        <div className="space-x-2">
          <strong>id</strong> <span>{data.id}</span>
        </div>
        <img className="block w-36 p-3" src={data.avatar_url} alt="Avatar" />
      </div>
    </Link>
  );
}
