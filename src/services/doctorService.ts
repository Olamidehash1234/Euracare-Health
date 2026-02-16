/**
 * Doctors API Service
 * Handles all doctor-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { DoctorResponse } from '../types/api-responses';

/**
 * Get all doctors
 */
export const getDoctors = async (): Promise<DoctorResponse[]> => {
  try {
    const response = await makeRequest<{ doctor: DoctorResponse[] }>(
      API_ENDPOINTS.DOCTORS,
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data?.doctor) {
      return response.data.doctor;
    }

    throw new Error(response.message || 'Failed to fetch doctors');
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

/**
 * Get single doctor by ID
 */
export const getDoctorById = async (id: string): Promise<DoctorResponse> => {
  try {
    const response = await makeRequest<{ doctor: DoctorResponse }>(
      API_ENDPOINTS.DOCTOR_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data?.doctor) {
      return response.data.doctor;
    }

    throw new Error(response.message || `Failed to fetch doctor with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching doctor ${id}:`, error);
    throw error;
  }
};

/**
 * Search doctors by specialty
 */
export const searchDoctorsBySpecialty = async (specialty: string): Promise<DoctorResponse[]> => {
  try {
    const allDoctors = await getDoctors();
    return allDoctors.filter(doctor =>
      doctor.programs_and_specialty?.some(s =>
        s.toLowerCase().includes(specialty.toLowerCase())
      )
    );
  } catch (error) {
    console.error('Error searching doctors:', error);
    throw error;
  }
};

/**
 * Get doctors by category/department
 */
export const getDoctorsByDepartment = async (department: string): Promise<DoctorResponse[]> => {
  try {
    const allDoctors = await getDoctors();
    return allDoctors.filter(doctor =>
      doctor.programs_and_specialty?.some(s =>
        s.toLowerCase() === department.toLowerCase()
      )
    );
  } catch (error) {
    console.error('Error fetching doctors by department:', error);
    throw error;
  }
};
