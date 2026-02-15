import { SocialAuthSection } from "@/features/auth/components/SocialAuthSection.tsx";
import { useAuth } from "@/features/auth/hooks.ts";
import { FeedbackrLogo } from "@repo/ui/icons";
import { Navigate, useLocation } from "react-router";

export const LoginPage = () => {
  const { userSession } = useAuth();
  const location = useLocation();

  if (location.pathname === "/login" && userSession.data?.session) {
    return <Navigate to={"/dashboard/home"} />;
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="w-full lg:w-1/2
      h-full border border-neutral-300 shadow-2xl shadow-neutral-700 px-4 md:px-0"
      >
        <div className="flex flex-col justify-center w-full h-full max-w-[460px] mx-auto pb-10">
          <FeedbackrLogo />
          <h2 className="text-3xl font-semibold pt-1.5">Sign up</h2>
          <SocialAuthSection />
        </div>
      </div>
      <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
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
  );
};
