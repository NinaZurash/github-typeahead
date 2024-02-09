import { GithubUser } from "@/service/types";

type Props = {
  data: GithubUser;
};

export default function UserCard({ data }: Props) {
  return (
    <div className="p-2  border border-solid">
      {Object.keys(data).map((key: string, index: number) => (
        <div key={index}>
          <strong>{key}</strong> {data[key as keyof GithubUser]}
        </div>
      ))}
    </div>
  );
}
