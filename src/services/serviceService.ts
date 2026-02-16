/**
 * Services API Service
 * Handles all service-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { ServiceResponse } from '../types/api-responses';

/**
 * Get all services
 */
export const getServices = async (): Promise<ServiceResponse[]> => {
  try {
    const response = await makeRequest<{ services: ServiceResponse[] }>(
      API_ENDPOINTS.SERVICES,
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data?.services) {
      return response.data.services;
    }

    throw new Error(response.message || 'Failed to fetch services');
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

/**
 * Get single service by ID
 */
export const getServiceById = async (id: string): Promise<ServiceResponse> => {
  try {
    const response = await makeRequest<{ service: ServiceResponse }>(
      API_ENDPOINTS.SERVICE_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.LONG }
    );

    if (response.success && response.data?.service) {
      return response.data.service;
    }

    throw new Error(response.message || `Failed to fetch service with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error);
    throw error;
  }
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
