import { GithubUser } from "@/service/types";

type Props = {
  user: GithubUser;
};

export default function UserInfo({ user }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={user?.avatar_url}
        width="200px"
        className="mx-auto mt-10 rounded-full"
      />
      <h1 className="mt-4 text-center text-2xl text-white">{user.login}</h1>
      <a
        href={user.url}
        className="mt-4 text-center text-xl text-white underline hover:text-blue-500"
      >
        Github Profile
      </a>
      <div className="flex gap-4">
        <a
          href={user.followers_url}
          className="mt-4 text-center text-xl text-green-500 underline hover:text-blue-500"
        >
          Followers
        </a>
        <a
          href={user.following_url}
          className="mt-4 text-center text-xl text-indigo-500 underline hover:text-blue-500"
        >
          Following
        </a>
      </div>
    </div>
  );
}
