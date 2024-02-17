import { useUser } from "@/provider/UserProvider";

import UserInfo from "@/components/userProfile/UserInfo";
import { useUserParams } from "@/components/userProfile/useUserParams";

export default function UserProfile() {
  const id = useUserParams();
  const { users } = useUser();

  const user = users?.find((user) => user.id === Number(id));

  if (!user) {
    return <div className="text-white">User Not Found</div>;
  }

  return <UserInfo user={user} />;
}
