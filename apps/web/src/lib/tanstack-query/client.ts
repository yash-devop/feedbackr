import { QueryClient } from "@tanstack/react-query";

export const queryClientGlobal = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
});
