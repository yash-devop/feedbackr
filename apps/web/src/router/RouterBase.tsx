import DashboardLayout from "@/components/Layouts/DashboardLayout.tsx";
import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { createBrowserRouter } from "react-router";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard/1",
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
