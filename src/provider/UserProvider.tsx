import { createContext, ReactNode, useContext, useRef, useState } from "react";

import { useGithubUsers } from "@/service/github";
import { GithubUser } from "@/service/types";

type Props = { children: ReactNode };
export type UsersLimit = "5" | "10" | "15" | "20";

interface UserContextType {
  users: GithubUser[] | undefined;
  isPending: boolean;
  usersLimit: UsersLimit;
  search: (username: string) => void;
  setUsersLimit: (limit: UsersLimit) => void;
}

const UserContext = createContext<UserContextType>({
  users: undefined,
  isPending: false,
  search: () => {},
  usersLimit: "10",
  setUsersLimit: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const userMutations = useGithubUsers();

  const [usersLimit, setUsersLimit] = useState<UsersLimit>("10");

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
    usersLimit,
    setUsersLimit,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
