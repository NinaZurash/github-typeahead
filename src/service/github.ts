import type { GithubUserSearchResponse } from "@/service/types";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "https://api.github.com";

export const useGithubUsers = () => {
  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      const res = await fetch(`${BASE_URL}/search/users?q=` + payload.username);
      return res.json() as Promise<GithubUserSearchResponse>;
    },
  });
};
