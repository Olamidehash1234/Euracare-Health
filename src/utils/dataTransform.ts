/**
 * Data Transformation Utilities
 * Utilities to transform backend data to frontend format
 */

import type {DoctorResponse} from '../types/api-responses';

/**
 * Transform backend Doctor to frontend format
 */
export const transformDoctor = (doctor: DoctorResponse) => {
  return {
    id: doctor.id,
    name: doctor.full_name,
    specialty: doctor.programs_and_specialty || [],
    title: doctor.qualification?.[0] || '',
    image: doctor.profile_picture_url || '',
    yearsOfExperience: doctor.years_of_experince,
    bio: doctor.bio || '',
    degree: doctor.qualification || [],
    researchInterests: doctor.research_interest || [],
    profileImg: doctor.profile_picture_url,
    program: doctor.programs_and_specialty || [],
    education: doctor.training_and_education || [],
    languages: doctor.language ? [doctor.language] : [],
    certifications: doctor.certification || [],
    associations: Array.isArray(doctor.professional_association)
      ? doctor.professional_association
      : doctor.professional_association
      ? [doctor.professional_association]
      : [],
  };
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string | undefined): string => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const formatEmail = (email: string | undefined): string => {
  return email || 'Not provided';
};

/**
 * Parse HTML content
 */
export const parseHtmlContent = (html: string | undefined): string => {
  if (!html) return '';
  // Remove dangerous scripts
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
};

/**
 * Truncate text
 */
export const truncateText = (text: string, length: number = 100): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

/**
 * Format date
 */
export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format relative time (ago)
 */
export const formatTimeAgo = (dateString: string | undefined): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

/**
 * Get unique values from array
 */
export const getUniqueValues = <T,>(items: T[], key: keyof T): T[keyof T][] => {
  const seen = new Set();
  return items.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  }).map(item => item[key]);
};

/**
 * Group items by key
 */
export const groupBy = <T,>(items: T[], key: keyof T): Record<string, T[]> => {
  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};

/**
 * Sort items
 */
export const sortBy = <T,>(items: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
  return [...items].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Paginate items
 */
export const paginate = <T,>(
  items: T[],
  page: number = 1,
  pageSize: number = 10
): { items: T[]; total: number; pages: number; currentPage: number } => {
  const total = items.length;
  const pages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end),
    total,
    pages,
    currentPage: page,
  };
};
