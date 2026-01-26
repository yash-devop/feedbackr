import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
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
    ],
  },
]);
