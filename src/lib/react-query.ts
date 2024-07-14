import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  // For fetching data from server
  queryCache: new QueryCache({
    onError: (error) => {
      //show notification
    },
  }),

  // For updating data on server
  mutationCache: new MutationCache({
    onError: (error) => {
      //show notification
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 24 * 60 * 60 * 1000,
    },
  },
});
