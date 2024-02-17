import { useParams } from "react-router-dom";

export const useUserParams = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("id shuld exist in URL");
  }

  return id;
};
