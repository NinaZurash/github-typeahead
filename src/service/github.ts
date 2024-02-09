import { useMutation } from "@tanstack/react-query";
import { GithubUser } from "./types";

type GithubUsersList = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
};

const BASE_URL = "https://api.github.com";

export const useGithubUsers = (
  onSuccess: (list: GithubUsersList) => void,
  onError: () => void
) => {
  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      const res = await fetch(`${BASE_URL}/search/users?q=` + payload.username);
      return res.json();
    },
    onSuccess(list: GithubUsersList) {
      onSuccess(list);
    },
    onError() {
      onError();
    },
  });
};
