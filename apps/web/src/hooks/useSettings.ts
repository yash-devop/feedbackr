import { useAuth } from "@/features/auth/hooks.ts";
import { useDomain } from "@/hooks/useDomain.ts";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

export const useSettings = () => {
  const { userSession } = useAuth();
  const { domainId } = useParams<{ domainId: string }>();
  const {
    data: { domains },
  } = useDomain();

  const user = userSession.data?.user;
  const [selectedDomainId, setSelectedDomainId] = useState<string>("");

  useEffect(() => {
    if (domainId && domains?.length > 0) {
      const exists = domains.find((d) => d.id === domainId);
      if (exists) setSelectedDomainId(domainId);
    } else if (domains?.length > 0 && !selectedDomainId) {
      setSelectedDomainId(domains[0]?.id || "");
    }
  }, [domainId, domains]);

  const selectedDomain = useMemo(
    () => domains?.find((d) => d?.id === selectedDomainId),
    [domains, selectedDomainId],
  );

  const handleDomainStatusChange = (id: string, checked: boolean) => {
    toast.info(
      `Feature coming soon: Changing status to ${checked ? "Active" : "Inactive"}`,
    );
  };

  return {
    data: {
      user,
      domains,
      selectedDomainId,
      selectedDomain,
    },
    functions: {
      setSelectedDomainId,
      handleDomainStatusChange,
    },
  };
};
