/**
 * Doctors Query Hook
 * Custom hook using TanStack Query for global caching
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getDoctors, getDoctorById } from '../services/doctorService';

export const DOCTORS_QUERY_KEY = ['doctors'] as const;
export const DOCTOR_BY_ID_QUERY_KEY = (id: string) => [...DOCTORS_QUERY_KEY, 'detail', id] as const;

/**
 * Hook to fetch all doctors with caching
 */
export const useDoctors = () => {
  return useQuery({
    queryKey: DOCTORS_QUERY_KEY,
    queryFn: getDoctors,
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch a specific doctor by ID with caching
 */
export const useDoctorById = (id: string | undefined) => {
  return useQuery({
    queryKey: DOCTOR_BY_ID_QUERY_KEY(id || ''),
    queryFn: () => getDoctorById(id!),
    enabled: !!id, // Only fetch if id is provided
    staleTime: Infinity,
  });
};

/**
 * Hook to invalidate doctors cache
 * Used after mutations (data updates)
 */
export const useInvalidateDoctors = () => {
  const queryClient = useQueryClient();
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: DOCTORS_QUERY_KEY }),
    invalidateById: (id: string) => queryClient.invalidateQueries({ queryKey: DOCTOR_BY_ID_QUERY_KEY(id) }),
  };
};
