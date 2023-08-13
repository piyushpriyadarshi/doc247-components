import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Spinner from "./spinner";

export default function Auth({ children, role, loadingMessage }) {
  const router = useRouter();
  const { data: session, status } = useSession({ required: true });
  const isUser = session?.user;
  const userRoles = session?.roles;
  const isUserAllowed = userRoles?.some((userRole) => role.includes(userRole));
  if (isUser && role) {
    if (isUserAllowed) {
      return children;
    } else {
      const accessDeniedMessage = `You dont have ${role} Role to Access ${router.asPath}`;
      router.push(`/error?code=403&message=${accessDeniedMessage}`);
    }
  } else if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Spinner open={true} message={loadingMessage} />;
}
