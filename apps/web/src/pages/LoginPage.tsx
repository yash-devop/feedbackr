import { authClient } from "@/lib/better-auth/client.ts";

export const LoginPage = () => {
  return (
    <div>
      <p>Landing</p>
      <button
        onClick={() =>
          authClient.signIn.social({
            provider: "github",
            callbackURL: "http://localhost:5173/",
            errorCallbackURL: "http://localhost:5173/error",
          })
        }
      >
        sign in
      </button>
      <button
        className="ml-10"
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
            callbackURL: "http://localhost:5173/",
            errorCallbackURL: "http://localhost:5173/error",
          })
        }
      >
        sign in
      </button>
    </div>
  );
};
