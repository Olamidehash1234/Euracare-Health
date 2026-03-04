/**
 * Doctors API Service
 * Handles all doctor-related API calls
 */

import type { DoctorResponse } from '../types/api-responses';
import { doctors as dummyDoctors } from '../data/doctors';

/**
 * Transform local doctor data to API response format
 */
const transformDoctorToResponse = (doctor: typeof dummyDoctors[0]): DoctorResponse => ({
  id: doctor.id,
  full_name: doctor.name,
  title: doctor.title,
  email: '',
  phone: '',
  language: doctor.languages?.join(', ') || '',
  bio: doctor.bio,
  profile_picture_url: doctor.profileImg || doctor.image,
  reg_number: '',
  years_of_experince: doctor.yearsOfExperience,
  programs_and_specialty: [...(doctor.specialty || []), ...(doctor.program || [])],
  professional_association: doctor.associations?.join(', ') || '',
  research_interest: doctor.researchInterests || [],
  qualification: doctor.degree || [],
  training_and_education: doctor.education || [],
  certification: doctor.certifications || [],
});

/**
 * Get all doctors
 */
export const getDoctors = async (): Promise<DoctorResponse[]> => {
  // Using dummy data
  return dummyDoctors.map(transformDoctorToResponse);
};

/**
 * Get single doctor by ID
 */
export const getDoctorById = async (id: string): Promise<DoctorResponse> => {
  // Using dummy data
  const doctor = dummyDoctors.find(d => d.id === id);
  if (doctor) {
    return transformDoctorToResponse(doctor);
  }
  throw new Error(`Doctor with ID: ${id} not found`);
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
