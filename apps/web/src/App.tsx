import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { Router } from "./router/RouterBase.tsx";
import { queryClientGlobal } from "./lib/tanstack-query/client.ts";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientGlobal}>
        <RouterProvider router={Router} />
        <Toaster richColors />
      </QueryClientProvider>
    </>
  );
}

export default App;
