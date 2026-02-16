/**
 * API Configuration
 * Centralized configuration for backend API endpoints and authentication
 */

// Base API URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// API endpoints
export const API_ENDPOINTS = {
  // Doctors
  DOCTORS: '/doctors/',
  DOCTOR_BY_ID: (id: string) => `/doctors/${id}/`,

  // Services
  SERVICES: '/services/',
  SERVICE_BY_ID: (id: string) => `/services/${id}/`,

  // Articles/Blogs
  ARTICLES: '/articles/',
  ARTICLE_BY_ID: (id: string) => `/articles/${id}/`,

  // Team Members
  TEAMS: '/teams/',
  TEAM_BY_ID: (id: string) => `/teams/${id}/`,

  // Testimonials
  TESTIMONIALS: '/testimonials/',
  TESTIMONIAL_BY_ID: (id: string) => `/testimonials/${id}/`,

  // Jobs/Careers
  JOBS: '/jobs/',
  JOB_BY_ID: (id: string) => `/jobs/${id}/`,
} as const;

// API request configuration
export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  CACHE_DURATION: {
    SHORT: 5 * 60 * 1000, // 5 minutes
    MEDIUM: 30 * 60 * 1000, // 30 minutes
    LONG: 24 * 60 * 60 * 1000, // 24 hours
  },
} as const;

// Environment-specific configuration
export const getAuthHeader = (): HeadersInit => {
  const token = import.meta.env.VITE_API_TOKEN;
  return {
    'Authorization': token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  };
};
