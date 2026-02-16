/**
 * Jobs/Careers API Service
 * Handles all job/career-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { JobResponse } from '../types/api-responses';

/**
 * Get all jobs
 */
export const getJobs = async (): Promise<JobResponse[]> => {
  try {
    const response = await makeRequest<{ jobs: JobResponse[] }>(
      API_ENDPOINTS.JOBS,
      { cacheDuration: API_CONFIG.CACHE_DURATION.SHORT }
    );

    if (response.success && response.data?.jobs) {
      return response.data.jobs;
    }

    throw new Error(response.message || 'Failed to fetch jobs');
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

/**
 * Get single job by ID
 */
export const getJobById = async (id: string): Promise<JobResponse> => {
  try {
    const response = await makeRequest<JobResponse>(
      API_ENDPOINTS.JOB_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.SHORT }
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || `Failed to fetch job with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
};

/**
 * Get jobs by department
 */
export const getJobsByDepartment = async (department: string): Promise<JobResponse[]> => {
  try {
    const allJobs = await getJobs();
    return allJobs.filter(job =>
      job.department.toLowerCase() === department.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching jobs by department:', error);
    throw error;
  }
};

/**
 * Get jobs by location
 */
export const getJobsByLocation = async (location: string): Promise<JobResponse[]> => {
  try {
    const allJobs = await getJobs();
    return allJobs.filter(job =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  } catch (error) {
    console.error('Error fetching jobs by location:', error);
    throw error;
  }
};

/**
 * Get jobs by type
 */
export const getJobsByType = async (type: string): Promise<JobResponse[]> => {
  try {
    const allJobs = await getJobs();
    return allJobs.filter(job =>
      job.type.toLowerCase() === type.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching jobs by type:', error);
    throw error;
  }
};

/**
 * Search jobs
 */
export const searchJobs = async (query: string): Promise<JobResponse[]> => {
  try {
    const allJobs = await getJobs();
    const lowerQuery = query.toLowerCase();

    return allJobs.filter(job => {
      const title = job.title.toLowerCase();
      const department = job.department.toLowerCase();
      const location = job.location.toLowerCase();
      const objective = job.objective.toLowerCase();

      return (
        title.includes(lowerQuery) ||
        department.includes(lowerQuery) ||
        location.includes(lowerQuery) ||
        objective.includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error('Error searching jobs:', error);
    throw error;
  }
};

/**
 * Get available jobs count
 */
export const getJobsCount = async (): Promise<number> => {
  try {
    const jobs = await getJobs();
    return jobs.length;
  } catch (error) {
    console.error('Error getting jobs count:', error);
    return 0;
  }
};
