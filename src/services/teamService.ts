/**
 * Team Members API Service
 * Handles all team member-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { TeamMemberResponse } from '../types/api-responses';

/**
 * Get all team members
 */
export const getTeamMembers = async (): Promise<TeamMemberResponse[]> => {
  try {
    const response = await makeRequest<{ team_members: TeamMemberResponse[] }>(
      API_ENDPOINTS.TEAMS,
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data?.team_members) {
      return response.data.team_members;
    }

    throw new Error(response.message || 'Failed to fetch team members');
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

/**
 * Get single team member by ID
 */
export const getTeamMemberById = async (id: string): Promise<TeamMemberResponse> => {
  try {
    const response = await makeRequest<TeamMemberResponse>(
      API_ENDPOINTS.TEAM_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || `Failed to fetch team member with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching team member ${id}:`, error);
    throw error;
  }
};

/**
 * Get team members by category/role
 */
export const getTeamMembersByCategory = async (category: string): Promise<TeamMemberResponse[]> => {
  try {
    const allMembers = await getTeamMembers();
    return allMembers.filter(member =>
      member.category.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching team members by category:', error);
    throw error;
  }
};

/**
 * Get team members by role
 */
export const getTeamMembersByRole = async (role: string): Promise<TeamMemberResponse[]> => {
  try {
    const allMembers = await getTeamMembers();
    return allMembers.filter(member =>
      member.role.toLowerCase().includes(role.toLowerCase())
    );
  } catch (error) {
    console.error('Error fetching team members by role:', error);
    throw error;
  }
};

/**
 * Search team members
 */
export const searchTeamMembers = async (query: string): Promise<TeamMemberResponse[]> => {
  try {
    const allMembers = await getTeamMembers();
    const lowerQuery = query.toLowerCase();

    return allMembers.filter(member => {
      const name = member.full_name.toLowerCase();
      const role = member.role.toLowerCase();
      const category = member.category.toLowerCase();

      return (
        name.includes(lowerQuery) ||
        role.includes(lowerQuery) ||
        category.includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error('Error searching team members:', error);
    throw error;
  }
};
