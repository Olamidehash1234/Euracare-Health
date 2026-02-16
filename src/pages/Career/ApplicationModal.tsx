import { useState } from 'react';
import Toast from '../../components/Toast';
import { useCareerForm } from './useCareerForm';
import { submitCareerApplication } from '../../services/careerService';
import type { ToastState } from '../../types/types';

interface ApplicationModalProps {
  isOpen: boolean;
  jobTitle: string;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, jobTitle, onClose }: ApplicationModalProps) {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'loading',
  });

  const {
    formData,
    cvFileName,
    isDegreeOpen,
    errors,
    degreeOptions,
    degreeDropdownRef,
    handleInputChange,
    handleSelectOption,
    handleFileUpload,
    setIsDegreeOpen,
    validateForm,
    resetForm,
  } = useCareerForm();

  const showToast = (message: string, type: 'success' | 'error' | 'loading') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'loading' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation.isValid) {
      const missingFieldMessage = validation.missingField
        ? `Please fill in the ${validation.missingField} field`
        : 'Please fill in all required fields';
      showToast(missingFieldMessage, 'error');
      return;
    }

    setLoading(true);
    showToast('Processing your application...', 'loading');

    try {
      await submitCareerApplication(formData, jobTitle);
      resetForm();
      showToast('Your application was successful, we will review it shortly', 'success');
      setTimeout(() => {
        onClose();
        hideToast();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit application';
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toast message={toast.message} type={toast.type} show={toast.show} onHide={hideToast} />

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-4 overflow-y-auto transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="bg-white rounded-3xl w-full max-w-[90%] max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky z-[100] border-b border-[#010101] top-0 bg-white px-6 lg:px-8 py-6 lg:pb-[25px] lg:pt-[25px] flex items-center justify-between">
            <h2 className="text-xl mx-auto lg:text-2xl text-center font-semibold text-[#0C2141]">
              APPLY FOR {jobTitle.toUpperCase()}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none font-light"
              aria-label="Close modal"
            >
              <img src="/close.svg" alt="" className='w-[25px] h-[25px]'/>
            </button>
          </div>

          {/* Modal Body - Form */}
          <form onSubmit={handleSubmit} className="p-6 lg:p-[40px] space-y-6 lg:space-y-[14px]">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
              <FormField
                label="First Name"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
              <FormField
                label="Last Name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
            </div>

            {/* Email and Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
              <FormField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <FormField
                label="Date of Birth"
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                error={errors.dateOfBirth}
              />
            </div>

            {/* Highest Degree Dropdown */}
            <DegreeDropdown
              value={formData.highestDegree}
              isOpen={isDegreeOpen}
              setIsOpen={setIsDegreeOpen}
              options={degreeOptions}
              onSelect={handleSelectOption}
              dropdownRef={degreeDropdownRef}
              error={errors.highestDegree}
            />

            {/* Current Employer and Years of Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
              <FormField
                label="Current Employer"
                id="currentEmployer"
                name="currentEmployer"
                value={formData.currentEmployer}
                onChange={handleInputChange}
                error={errors.currentEmployer}
              />
              <FormField
                label="Years of Experience"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                error={errors.yearsOfExperience}
              />
            </div>

            {/* Current Salary and Expected Salary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
              <FormField
                label="Current Salary (Optional)"
                id="currentSalary"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleInputChange}
              />
              <FormField
                label="Expected Salary"
                id="expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                error={errors.expectedSalary}
              />
            </div>

            {/* Upload CV */}
            <FileUploadField
              label="Upload CV"
              id="cvFile"
              fileName={cvFileName}
              onChange={handleFileUpload}
              error={errors.cvFile}
            />

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0C2141] lg:mt-[60px] hover:bg-slate-900 text-white py-[14px] lg:leading-[27px] w-[227px] rounded-[48px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/**
 * Reusable Form Field Component
 */
interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  error,
}) => (
  <div>
    <label htmlFor={id} className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full py-[16px] px-[20px] lg:py-[20px] border text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200 ${
        error ? 'border-red-500 bg-red-50' : 'border-[#010101]'
      }`}
    />
    {error && (
      <p id={`${id}-error`} className="text-red-600 text-sm mt-2 font-semibold flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
);

/**
 * Degree Dropdown Component
 */
interface DegreeDropdownProps {
  value: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  options: string[];
  onSelect: (field: string, value: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  error?: string;
}

const DegreeDropdown: React.FC<DegreeDropdownProps> = ({
  value,
  isOpen,
  setIsOpen,
  options,
  onSelect,
  dropdownRef,
  error,
}) => (
  <div>
    <label className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
      Highest degree earned
    </label>
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-invalid={!!error}
        aria-expanded={isOpen}
        className={`w-full py-[16px] px-[20px] lg:py-[20px] border text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200 bg-white text-left flex items-center justify-between ${
          error ? 'border-red-500 bg-red-50' : 'border-[#010101]'
        }`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || ''}
        </span>
        <img src='/down.svg' className={`w-5 h-5 lg:w-auto lg:h-auto text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-[10px] bg-white border border-[#010101] text-[14px] lg:text-[16px] rounded-2xl lg:rounded-[48px] shadow-lg z-10 overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelect('highestDegree', option)}
              className="w-full py-[16px] px-[20px] lg:py-[16px] text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
    {error && (
      <p className="text-red-600 text-sm mt-2 font-semibold flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
);

/**
 * File Upload Field Component
 */
interface FileUploadFieldProps {
  label: string;
  id: string;
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  id,
  fileName,
  onChange,
  error,
}) => (
  <div>
    <div className="relative">
      <input
        type="file"
        id={id}
        name={id}
        onChange={onChange}
        accept=".pdf,.doc,.docx,.txt"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`w-full py-[16px] text-[#0C2141] px-[20px] gap-[10px] items-center lg:py-[20px] border text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200 bg-white text-left flex items-center justify-center cursor-pointer hover:bg-gray-50 ${
          error ? 'border-red-500 bg-red-50' : 'border-[#010101]'
        }`}
      >
        <img src="/upload.svg" alt="" />
        {fileName ? fileName : label}
      </label>
    </div>
    {error && (
      <p id={`${id}-error`} className="text-red-600 text-sm mt-2 font-semibold flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
);
