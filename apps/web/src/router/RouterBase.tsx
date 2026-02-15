import DashboardLayout from "@/components/Layouts/DashboardLayout.tsx";
import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import Dashboard from "@/pages/Dashboard/Dashboard.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard/home",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
