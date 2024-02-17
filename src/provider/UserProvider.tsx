import { createContext, ReactNode, useContext, useRef } from "react";

import { useGithubUsers } from "@/service/github";
import { GithubUser } from "@/service/types";

type Props = { children: ReactNode };

interface UserContextType {
  users: GithubUser[] | undefined;
  isPending: boolean;
  search: (username: string) => void;
}

const UserContext = createContext<UserContextType>({
  users: undefined,
  isPending: false,
  search: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const userMutations = useGithubUsers();
  const users = userMutations.data?.items;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const search = (username: string) => {
    if (!username) return;

    timeoutRef && clearTimeout(timeoutRef.current as NodeJS.Timeout);

    timeoutRef.current = setTimeout(() => {
      userMutations.mutateAsync({ username });
    }, 500);
  };

  const values = {
    users,
    isPending: userMutations.isPending,
    search,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
