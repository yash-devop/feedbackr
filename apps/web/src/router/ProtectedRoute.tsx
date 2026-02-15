import DashboardLayout from "@/components/Layouts/DashboardLayout.tsx";
import { useAuth } from "@/features/auth/hooks.ts";
import { Spinner } from "@repo/ui";
import { Navigate } from "react-router";
export const ProtectedRoute = () => {
  const { userSession } = useAuth();

  if (userSession.isPending) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <Spinner variant="primary" />
      </div>
    );
  }
  if (!userSession.data?.session) {
    return <Navigate to={"/login"} />;
  }
  return <DashboardLayout />;
};
