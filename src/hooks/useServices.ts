/**
 * Services Query Hook
 * Custom hook using TanStack Query for global caching
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getServices, getServiceById } from '../services/serviceService';

export const SERVICES_QUERY_KEY = ['services'] as const;
export const SERVICE_BY_ID_QUERY_KEY = (id: string) => [...SERVICES_QUERY_KEY, 'detail', id] as const;

/**
 * Hook to fetch all services with caching
 */
export const useServices = () => {
  return useQuery({
    queryKey: SERVICES_QUERY_KEY,
    queryFn: getServices,
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch a specific service by ID with caching
 */
export const useServiceById = (id: string | undefined) => {
  return useQuery({
    queryKey: SERVICE_BY_ID_QUERY_KEY(id || ''),
    queryFn: () => getServiceById(id!),
    enabled: !!id, // Only fetch if id is provided
    staleTime: Infinity,
  });
};

/**
 * Hook to invalidate services cache
 * Used after mutations (data updates)
 */
export const useInvalidateServices = () => {
  const queryClient = useQueryClient();
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: SERVICES_QUERY_KEY }),
    invalidateById: (id: string) => queryClient.invalidateQueries({ queryKey: SERVICE_BY_ID_QUERY_KEY(id) }),
  };
};
