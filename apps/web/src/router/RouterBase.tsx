import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
import { LandingPage } from "@/pages/LandingPage.tsx";
import { createBrowserRouter } from "react-router";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
