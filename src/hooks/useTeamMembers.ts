/**
 * Team Members Query Hook
 * Custom hook using TanStack Query for global caching
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getTeamMembers, getTeamMemberById } from '../services/teamService';

export const TEAM_QUERY_KEY = ['team'] as const;
export const TEAM_BY_ID_QUERY_KEY = (id: string) => [...TEAM_QUERY_KEY, 'detail', id] as const;

/**
 * Hook to fetch all team members with caching
 */
export const useTeamMembers = () => {
  return useQuery({
    queryKey: TEAM_QUERY_KEY,
    queryFn: getTeamMembers,
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch a specific team member by ID with caching
 */
export const useTeamMemberById = (id: string | undefined) => {
  return useQuery({
    queryKey: TEAM_BY_ID_QUERY_KEY(id || ''),
    queryFn: () => getTeamMemberById(id!),
    enabled: !!id, // Only fetch if id is provided
    staleTime: Infinity,
  });
};

/**
 * Hook to invalidate team cache
 * Used after mutations (data updates)
 */
export const useInvalidateTeam = () => {
  const queryClient = useQueryClient();
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: TEAM_QUERY_KEY }),
    invalidateById: (id: string) => queryClient.invalidateQueries({ queryKey: TEAM_BY_ID_QUERY_KEY(id) }),
  };
};
