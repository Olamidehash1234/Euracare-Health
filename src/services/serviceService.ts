/**
 * Services API Service
 * Handles all service-related API calls
 */

// import { makeRequest } from './api.service';
// import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { ServiceResponse } from '../types/api-responses';
import { services as dummyServices } from '../data/services';

/**
 * Transform local service data to API response format
 */
const transformServiceToResponse = (service: typeof dummyServices[0]): ServiceResponse => ({
  id: service.slug,
  snippet: {
    service_name: service.title,
    service_description: service.description,
    cover_image_url: service.image,
  },
  page: {
    banner_image_url: service.heroImage,
    service_overview: service.overviewText,
    video_url: service.videoUrls?.[0] || service.testimonialVideoUrl?.[0] || '',
    conditions_we_treat: service.conditionList || [],
    test_and_diagnostics: service.testList || [],
    treatments_and_procedures: service.procedureList || [],
  },
});

/**
 * Get all services
 */
export const getServices = async (): Promise<ServiceResponse[]> => {
  // Using dummy data
  return dummyServices.map(transformServiceToResponse);
};

/**
 * Get single service by ID
 */
export const getServiceById = async (id: string): Promise<ServiceResponse> => {
  // Using dummy data
  const service = dummyServices.find(s => s.slug === id);
  if (service) {
    return transformServiceToResponse(service);
  }
  throw new Error(`Service with ID: ${id} not found`);
};

/**
 * Get service by slug/name
 */
export const getServiceBySlug = async (slug: string): Promise<ServiceResponse | null> => {
  try {
    const allServices = await getServices();
    const service = allServices.find(s =>
      s.snippet?.service_name?.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
    );
    return service || null;
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return null;
  }
};

/**
 * Search services
 */
export const searchServices = async (query: string): Promise<ServiceResponse[]> => {
  try {
    const allServices = await getServices();
    const lowerQuery = query.toLowerCase();

    return allServices.filter(service => {
      const name = service.snippet?.service_name?.toLowerCase() || '';
      const description = service.snippet?.service_description?.toLowerCase() || '';
      const overview = service.page?.service_overview?.toLowerCase() || '';

      return (
        name.includes(lowerQuery) ||
        description.includes(lowerQuery) ||
        overview.includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error('Error searching services:', error);
    throw error;
  }
};

/**
 * Get services with conditions
 */
export const getServicesByCondition = async (condition: string): Promise<ServiceResponse[]> => {
  try {
    const allServices = await getServices();
    return allServices.filter(service =>
      service.page?.conditions_we_treat?.some(c =>
        c.toLowerCase().includes(condition.toLowerCase())
      )
    );
  } catch (error) {
    console.error('Error fetching services by condition:', error);
    throw error;
  }
};
