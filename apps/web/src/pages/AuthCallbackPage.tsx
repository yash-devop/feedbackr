import { useAuth } from "@/features/auth/hooks.ts";
import { Spinner } from "@repo/ui";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

export const AuthCallbackPage = () => {
  //   const { userSession } = useAuth();
  //   const location = useLocation();

  //   if (location.pathname.startsWith("/auth") && userSession.data?.session) {
  //     return <Navigate to={"/dashboard/home"} />;
  //   }

  const navigate = useNavigate();

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("http://localhost:8001/api/domain/exists", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      console.log("DATA FRONTEND", data);

      const hasDomains = data?.data?.hasDomains && data?.data?.length >= 0;
      if (hasDomains) {
        return navigate("/dashboard/home");
      } else {
        return navigate("/onboarding/create-domain");
      }
    };
    fetcher();
  }, []);
  return (
    <>
      <div className="h-screen flex items-center justify-center gap-3 px-3 lg:px-0">
        <Spinner variant="primary" size="xs" />
        <p className="text-neutral-500">Signing you in soon</p>
      </div>
    </>
  );
};
