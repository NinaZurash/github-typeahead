import { useContext } from "react";
import { MainContext } from "./Provider";

export const useMainContext = () => useContext(MainContext);
