import { useUser } from "@/provider/UserProvider";

import ComboboxDemo from "@/components/ui/ComboboxDemo";
import { Input } from "@/components/ui/input";

export function FancySearch() {
  const { search } = useUser();
  return (
    <div className="mx-auto max-w-2xl space-y-4 pt-24">
      <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-lg  font-bold text-transparent md:text-7xl">
        Github Typeahead
      </h1>
      <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
        Type something to search for users
      </p>
      <div className="relative z-10 flex items-center gap-2">
        <Input
          placeholder="enter username"
          onChange={(e) => search(e.target.value)}
        />
        <ComboboxDemo />
      </div>
    </div>
  );
}
