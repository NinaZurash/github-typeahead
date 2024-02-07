import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProfileForm } from "./components/forms/ProfileForm";
import { MyProvider } from "./components/providers/Provider";
import { UserSearchResults } from "./components/utils/queryClient";

const queryClient = new QueryClient();

export default function App() {
  return (
    <MyProvider>
      <QueryClientProvider client={queryClient}>
        <ProfileForm />
        <UserSearchResults />
      </QueryClientProvider>
    </MyProvider>
  );
}
