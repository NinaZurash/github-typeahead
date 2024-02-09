import { useMutation } from "@tanstack/react-query";

const BASE_URL = "https://api.github.com";

export const useGithubUsers = (onError: () => void) => {
  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      const res = await fetch(`${BASE_URL}/search/users?q=` + payload.username);
      return res.json();
    },

    onError() {
      onError();
    },
  });
};
