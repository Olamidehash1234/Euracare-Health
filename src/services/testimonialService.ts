/**
 * Testimonials API Service
 * Handles all testimonial-related API calls
 */

import type { TestimonialResponse } from '../types/api-responses';
import { testimonials as dummyTestimonials } from '../data/testimonials';

/**
 * Transform local testimonial data to API response format
 */
const transformTestimonialToResponse = (testimonial: typeof dummyTestimonials[0]): TestimonialResponse => ({
  id: testimonial.id.toString(),
  title: testimonial.quote,
  patient_name: testimonial.author,
  service: testimonial.department,
  video_url: testimonial.video,
  thumbnail_url: testimonial.image,
});

/**
 * Get all testimonials
 */
export const getTestimonials = async (): Promise<TestimonialResponse[]> => {
  // Using dummy data
  return dummyTestimonials.map(transformTestimonialToResponse);
};

/**
 * Get single testimonial by ID
 */
export const getTestimonialById = async (id: string): Promise<TestimonialResponse> => {
  // Using dummy data
  const testimonial = dummyTestimonials.find(t => t.id.toString() === id);
  if (testimonial) {
    return transformTestimonialToResponse(testimonial);
  }
  throw new Error(`Testimonial with ID: ${id} not found`);
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
