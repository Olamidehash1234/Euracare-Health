/**
 * Testimonials API Service
 * Handles all testimonial-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { TestimonialResponse } from '../types/api-responses';

/**
 * Get all testimonials
 */
export const getTestimonials = async (): Promise<TestimonialResponse[]> => {
  try {
    const response = await makeRequest<{ testimonials: TestimonialResponse[] }>(
      API_ENDPOINTS.TESTIMONIALS,
      { cacheDuration: API_CONFIG.CACHE_DURATION.MEDIUM }
    );

    if (response.success && response.data?.testimonials) {
      return response.data.testimonials;
    }

    throw new Error(response.message || 'Failed to fetch testimonials');
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

/**
 * Get single testimonial by ID
 */
export const getTestimonialById = async (id: string): Promise<TestimonialResponse> => {
  try {
    const response = await makeRequest<{ testimonial: TestimonialResponse }>(
      API_ENDPOINTS.TESTIMONIAL_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.MEDIUM }
    );

    if (response.success && response.data?.testimonial) {
      return response.data.testimonial;
    }

    throw new Error(response.message || `Failed to fetch testimonial with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching testimonial ${id}:`, error);
    throw error;
  }
};

/**
 * Get testimonials by service
 */
export const getTestimonialsByService = async (service: string): Promise<TestimonialResponse[]> => {
  try {
    const allTestimonials = await getTestimonials();
    return allTestimonials.filter(testimonial =>
      testimonial.service.toLowerCase().includes(service.toLowerCase())
    );
  } catch (error) {
    console.error('Error fetching testimonials by service:', error);
    throw error;
  }
};

/**
 * Get testimonials with videos
 */
export const getVideoTestimonials = async (): Promise<TestimonialResponse[]> => {
  try {
    const allTestimonials = await getTestimonials();
    return allTestimonials.filter(testimonial => testimonial.video_url);
  } catch (error) {
    console.error('Error fetching video testimonials:', error);
    throw error;
  }
};

/**
 * Search testimonials
 */
export const searchTestimonials = async (query: string): Promise<TestimonialResponse[]> => {
  try {
    const allTestimonials = await getTestimonials();
    const lowerQuery = query.toLowerCase();

    return allTestimonials.filter(testimonial => {
      const title = testimonial.title.toLowerCase();
      const patientName = testimonial.patient_name.toLowerCase();
      const service = testimonial.service.toLowerCase();

      return (
        title.includes(lowerQuery) ||
        patientName.includes(lowerQuery) ||
        service.includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error('Error searching testimonials:', error);
    throw error;
  }
};

/**
 * Get featured testimonials
 */
export const getFeaturedTestimonials = async (limit: number = 6): Promise<TestimonialResponse[]> => {
  try {
    const testimonials = await getVideoTestimonials();
    return testimonials.slice(0, limit);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    throw error;
  }
};
