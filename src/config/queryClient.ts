/**
 * TanStack Query Client Configuration
 * Global caching strategy with Infinity staleTime
 */

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Set staleTime to Infinity so data is never considered stale
      // This ensures data is served from cache on navigation without refetching
      staleTime: Infinity,
      // Garbage collect data after 24 hours
      gcTime: 24 * 60 * 60 * 1000,
      // Disable automatic refetching on window focus
      refetchOnWindowFocus: false,
      // Disable automatic refetching when mounted
      refetchOnMount: false,
      // Disable automatic refetching on reconnect
      refetchOnReconnect: false,
      // Retry failed requests 3 times before giving up
      retry: 3,
      // Wait 1000ms before retrying
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
