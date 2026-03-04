/**
 * Team Members API Service
 * Handles all team member-related API calls
 */

// import { makeRequest } from './api.service';
// import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { TeamMemberResponse } from '../types/api-responses';
import { teamMembers as dummyTeamMembers } from '../data/team';

/**
 * Transform local team data to API response format
 */
const transformTeamMemberToResponse = (member: typeof dummyTeamMembers[0]): TeamMemberResponse => ({
  id: member.id.toString(),
  full_name: member.name,
  role: member.position,
  category: member.position.split('&')[0].trim(),
  profile_picture_url: member.image,
  bio: member.bio,
});

/**
 * Get all team members
 */
export const getTeamMembers = async (): Promise<TeamMemberResponse[]> => {
  // Using dummy data
  return dummyTeamMembers.map(transformTeamMemberToResponse);
};

/**
 * Get single team member by ID
 */
export const getTeamMemberById = async (id: string): Promise<TeamMemberResponse> => {
  // Using dummy data
  const member = dummyTeamMembers.find(m => m.id.toString() === id);
  if (member) {
    return transformTeamMemberToResponse(member);
  }
  throw new Error(`Team member with ID: ${id} not found`);
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
