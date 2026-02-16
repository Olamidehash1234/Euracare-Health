import { useState, useRef, useEffect } from 'react';
import type { FormData } from '../../types/types';

interface UseCareerFormReturn {
  formData: FormData;
  cvFileName: string;
  isDegreeOpen: boolean;
  errors: Record<string, string>;
  degreeOptions: string[];
  degreeDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectOption: (field: string, value: string) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsDegreeOpen: (value: boolean) => void;
  validateForm: () => { isValid: boolean; missingField?: string };
  resetForm: () => void;
}

const INITIAL_FORM_STATE: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  highestDegree: '',
  currentEmployer: '',
  yearsOfExperience: '',
  currentSalary: '',
  expectedSalary: '',
  cvFile: null,
};

const DEGREE_OPTIONS = [
  'High School',
  'Associate Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Ph.D.',
  'Other'
];

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const useCareerForm = (): UseCareerFormReturn => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [cvFileName, setCvFileName] = useState('');
  const [isDegreeOpen, setIsDegreeOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const degreeDropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (degreeDropdownRef.current && !degreeDropdownRef.current.contains(event.target as Node)) {
        setIsDegreeOpen(false);
      }
    }

    if (isDegreeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDegreeOpen]);

  /**
   * Handle text input changes
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle dropdown selection
   */
  const handleSelectOption = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'highestDegree') {
      setIsDegreeOpen(false);
    }
  };

  /**
   * Handle file upload with validation
   */
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          cvFile: 'Please upload a valid file (PDF, DOC, DOCX, or TXT)'
        }));
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({
          ...prev,
          cvFile: 'File size must be less than 5MB'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        cvFile: file
      }));
      setCvFileName(file.name);
      // Clear CV error if file was valid
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.cvFile;
        return newErrors;
      });
    }
  };

  /**
   * Validate entire form
   */
  const validateForm = (): { isValid: boolean; missingField?: string } => {
    const newErrors: Record<string, string> = {};
    let firstMissingField: string | undefined;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      if (!firstMissingField) firstMissingField = 'First Name';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      if (!firstMissingField) firstMissingField = 'Last Name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      if (!firstMissingField) firstMissingField = 'Email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      if (!firstMissingField) firstMissingField = 'Email (invalid format)';
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
      if (!firstMissingField) firstMissingField = 'Date of Birth';
    }
    if (!formData.highestDegree) {
      newErrors.highestDegree = 'Highest degree is required';
      if (!firstMissingField) firstMissingField = 'Highest Degree';
    }
    if (!formData.currentEmployer.trim()) {
      newErrors.currentEmployer = 'Current employer is required';
      if (!firstMissingField) firstMissingField = 'Current Employer';
    }
    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required';
      if (!firstMissingField) firstMissingField = 'Years of Experience';
    }
    if (!formData.expectedSalary) {
      newErrors.expectedSalary = 'Expected salary is required';
      if (!firstMissingField) firstMissingField = 'Expected Salary';
    }
    if (!formData.cvFile) {
      newErrors.cvFile = 'CV file is required';
      if (!firstMissingField) firstMissingField = 'CV file';
    }

    setErrors(newErrors);
    return {
      isValid: Object.keys(newErrors).length === 0,
      missingField: firstMissingField
    };
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setCvFileName('');
    setErrors({});
  };

  return {
    formData,
    cvFileName,
    isDegreeOpen,
    errors,
    degreeOptions: DEGREE_OPTIONS,
    degreeDropdownRef,
    handleInputChange,
    handleSelectOption,
    handleFileUpload,
    setIsDegreeOpen,
    validateForm,
    resetForm,
  };
};
