import { createContext, useState } from "react";

type ContextType = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext<ContextType>({
  state: "",
  setState: () => {},
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState("user");

  return (
    <MainContext.Provider value={{ state, setState }}>
      {children}
    </MainContext.Provider>
  );
};
