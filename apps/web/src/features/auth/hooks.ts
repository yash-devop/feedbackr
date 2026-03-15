import { authClient } from "@/lib/better-auth/client.ts";
import { SocialProvider } from "better-auth";

export const useAuth = () => {
  const signIn = async (provider: SocialProvider) => {
    const URL = import.meta.env.VITE_FRONTEND_URL;
    const data = await authClient.signIn.social({
      provider,
      callbackURL: `${URL}/auth/callback`,
      errorCallbackURL: `${URL}/login`,
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
