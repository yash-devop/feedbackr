import DashboardLayout from "@/components/Layouts/DashboardLayout.tsx";
import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { AuthCallbackPage } from "@/pages/AuthCallbackPage.tsx";
import { OnboardingCreateDomainPage } from "@/pages/OnboardingCreateDomainPage.tsx";
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
        path: "/auth/callback",
        element: <AuthCallbackPage />,
      },
      {
        path: "/onboarding/create-domain",
        element: <OnboardingCreateDomainPage />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard/home",
            element: <MainPagesLayout />,
            children: [
              {
                index: true,
                element: (
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem itaque nisi cupiditate fugit dignissimos unde ipsum
                    doloribus, ad aliquid error!
                  </p>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
