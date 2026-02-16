/**
 * Type definitions for Career Form
 */

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  highestDegree: string;
  currentEmployer: string;
  yearsOfExperience: string;
  currentSalary: string;
  expectedSalary: string;
  cvFile: File | null;
}

export interface ApiPayload {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  role: string;
  job: string;
  degree: string;
  current_employer: string;
  yoe: string;
  current_salary: string | null;
  expected_salary: string;
  cv_url: string;
}

export interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'loading';
}

export interface ApiErrorDetail {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface ApiErrorResponse {
  detail?: ApiErrorDetail[] | string;
  message?: string;
  errors?: Record<string, any> | any[];
}
