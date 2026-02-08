import { authClient } from "@/lib/better-auth/client.ts";
import { Button } from "@repo/ui/uicomponents";
// import { Button } from "@repo/ui/components/ui/button";

import { Google, Github } from "@repo/ui/icons";
export const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="w-1/2
      h-full border border-neutral-300 shadow-2xl shadow-neutral-700"
      >
        <div className="flex flex-col w-full h-full max-w-[460px] pt-44 mx-auto">
          <p className="font-semibold text-md tracking-tighter select-none cursor-pointer">
            Feedbackr.
          </p>
          <h2 className="text-3xl font-semibold pt-2">Sign up</h2>
          <div>
            <Button>
              <Google className="size-7" />
            </Button>
            <Button>
              <Github className="size-7" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full relative overflow-hidden">
        <div className="w-[1200px] 2xl:w-[1700px] h-[800px] flex items-center justify-center relative -z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-[900px] rounded-full bg-linear-to-r from-primary via-blue-500 to-blue-500 blur-[130px]" />
          </div>

          <img
            src="/product-page.png"
            alt="prod_image_login"
            className="w-full h-full object-contain absolute inset-0 shrink-0 rotate-17 translate-y-32 -translate-x-80"
          />
        </div>
      </div>
    </div>
    // <div>
    //   <p>Landing</p>
    //   <button
    //     onClick={() =>
    //       authClient.signIn.social({
    //         provider: "github",
    //         callbackURL: "http://localhost:5173/",
    //         errorCallbackURL: "http://localhost:5173/error",
    //       })
    //     }
    //   >
    //     sign in
    //   </button>
    //   <Button
    //     className="ml-10"
    //     onClick={() =>
    //       authClient.signIn.social({
    //         provider: "google",
    //         callbackURL: "http://localhost:5173/",
    //         errorCallbackURL: "http://localhost:5173/error",
    //       })
    //     }
    //   >
    //     sign in
    //   </Button>
    // </div>
  );
};
