/**
 * Testimonials Query Hook
 * Custom hook using TanStack Query for global caching
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { TestimonialResponse } from '../types/api-responses';

export const TESTIMONIALS_QUERY_KEY = ['testimonials'] as const;
export const TESTIMONIAL_BY_ID_QUERY_KEY = (id: string) => [...TESTIMONIALS_QUERY_KEY, 'detail', id] as const;

/**
 * Fetch testimonials from API or dummy data
 */
const fetchTestimonials = async (): Promise<TestimonialResponse[]> => {
  try {
    // Try to fetch from API
    // Uncomment when API endpoint is available
    // const response = await makeRequest<{ testimonials: TestimonialResponse[] }>(
    //   API_ENDPOINTS.TESTIMONIALS,
    //   { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    // );
    // if (response.success && response.data?.testimonials) {
    //   return response.data.testimonials;
    // }
    // For now, return empty array or dummy data
    return [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

/**
 * Hook to fetch all testimonials with caching
 */
export const useTestimonials = () => {
  return useQuery({
    queryKey: TESTIMONIALS_QUERY_KEY,
    queryFn: fetchTestimonials,
    staleTime: Infinity,
  });
};

/**
 * Hook to invalidate testimonials cache
 * Used after mutations (data updates)
 */
export const useInvalidateTestimonials = () => {
  const queryClient = useQueryClient();
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: TESTIMONIALS_QUERY_KEY }),
  };
};
