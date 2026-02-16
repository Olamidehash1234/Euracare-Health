import { uploadToCloudinary } from '../utils/cloudinary';
import type { FormData, ApiPayload, ApiErrorResponse } from '../types/types';


export const preparePayload = (formData: FormData, cvUrl: string): ApiPayload => {
  return {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    dob: formData.dateOfBirth,
    job: formData.highestDegree,
    degree: formData.highestDegree,
    current_employer: formData.currentEmployer,
    yoe: formData.yearsOfExperience,
    current_salary: formData.currentSalary || null,
    expected_salary: formData.expectedSalary,
    cv_url: cvUrl,
  };
};

/**
 * Parse error response from backend
 */
const parseErrorResponse = (errorData: ApiErrorResponse): string => {
  // Handle detail array format (Pydantic validation errors)
  if (errorData.detail) {
    if (Array.isArray(errorData.detail)) {
      const errors = errorData.detail.map((err: any) => {
        const field = err.loc?.[err.loc.length - 1] || 'field';
        return `${field}: ${err.msg}`;
      });
      return errors.join(', ');
    } else if (typeof errorData.detail === 'string') {
      return errorData.detail;
    }
  }

  // Handle message field
  if (errorData.message) {
    return errorData.message;
  }

  // Handle errors object/array
  if (errorData.errors) {
    if (Array.isArray(errorData.errors)) {
      return errorData.errors.map((e: any) => e.message || e).join(', ');
    } else if (typeof errorData.errors === 'object') {
      return Object.entries(errorData.errors)
        .map(([key, value]: [string, any]) => `${key}: ${value}`)
        .join(', ');
    }
  }

  return 'An unknown error occurred';
};

/**
 * Submit career application to backend
 * @param formData - Form data containing applicant information
 * @returns Success message
 */
export const submitCareerApplication = async (formData: FormData): Promise<void> => {
  // Validate that CV file exists
  if (!formData.cvFile) {
    throw new Error('No CV file selected');
  }

  // Upload CV to Cloudinary
  const cvUrl = await uploadToCloudinary(formData.cvFile);
  console.log('CV uploaded successfully:', cvUrl);

  // Prepare payload
  const payload = preparePayload(formData, cvUrl);
  console.log('Sending payload to API:', payload);

  // Make API call
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${apiBaseUrl}/careers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  // Handle response
  if (!response.ok) {
    let errorMessage = `Server error: ${response.status}`;
    try {
      const errorData: ApiErrorResponse = await response.json();
      console.error('Backend error response:', errorData);
      errorMessage = parseErrorResponse(errorData);
    } catch (parseError) {
      console.error('Could not parse error response:', parseError);
    }
    throw new Error(errorMessage);
  }

  const result = await response.json();
  console.log('Application submitted successfully:', result);
};
