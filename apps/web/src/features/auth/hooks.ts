import { authClient } from "@/lib/better-auth/client.ts";
import { SocialProvider } from "better-auth";

export const useAuth = () => {
  const signIn = async (provider: SocialProvider) => {
    const data = await authClient.signIn.social({
      provider,
      callbackURL: `http://localhost:5173/dashboard/home`,
      errorCallbackURL: "http://localhost:5173/login",
    });
    return data;
  };
  const userSession = authClient.useSession();

  return {
    signIn,
    signOut: authClient.signOut,
    userSession,
  };
};
