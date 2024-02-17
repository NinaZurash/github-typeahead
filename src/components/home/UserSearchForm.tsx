import { Input } from "../ui/input";
import { useUser } from "@/provider/UserProvider";

export function UserSearchForm() {
  const { search } = useUser();

  return (
    <form className="flex justify-center mt-40">
      <Input
        className="h-16 space-y-8 w-200"
        placeholder="enter username"
        onChange={(e) => search(e.target.value)}
      />
    </form>
  );
}
