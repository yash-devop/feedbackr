import { useAuth } from "@/features/auth/hooks.ts";
import useGetDomainExistService from "@/services/getDomainExistService/useGetDomainExistService.ts";
import { Spinner } from "@repo/ui";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

export const AuthCallbackPage = () => {
  const navigate = useNavigate();

  const {
    data: { domains, hasDomains },
    services: { getDomainExistService },
  } = useGetDomainExistService();

  useEffect(() => {
    if (getDomainExistService?.isLoading) return;
    if (hasDomains) {
      const domainId = domains?.[0]?.id;
      navigate(`/dashboard/${domainId}`);
    } else {
      navigate("/onboarding/create-domain");
    }
  }, [getDomainExistService?.isLoading, navigate]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-3 px-3 lg:px-0">
        <Spinner variant="primary" size="xs" />
        <p className="text-neutral-500">Setting up your workspace...</p>
      </div>
    </>
  );
};
