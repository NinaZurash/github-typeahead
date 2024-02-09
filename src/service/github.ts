import { useMutation } from "@tanstack/react-query";
import { GithubUser } from "./types";

type Data = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
};

export const useGithubUsers = (
  onSuccess: (data: Data) => void,
  onError: () => void
) => {
  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      const res = await fetch(
        "https://api.github.com/search/users?q=" + payload.username
      );
      return res.json();
    },
    onSuccess(data: Data) {
      onSuccess(data);
    },
    onError() {
      onError();
    },
  });
};
