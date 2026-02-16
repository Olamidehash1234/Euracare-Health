/**
 * Base API Service
 * Handles all HTTP requests with error handling, retry logic, and caching
 */

import { API_BASE_URL, API_CONFIG, getAuthHeader } from '../config/api.config';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// Cache for GET requests
const cache = new Map<string, { data: any; timestamp: number }>();

/**
 * Clear expired cache entries
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const _clearExpiredCache = () => {
//   const now = Date.now();
//   for (const [key, value] of cache.entries()) {
//     if (now - value.timestamp > API_CONFIG.CACHE_DURATION.LONG) {
//       cache.delete(key);
//     }
//   }
// };

/**
 * Get cached data if available and not expired
 */
const getCachedData = (url: string, duration: number = API_CONFIG.CACHE_DURATION.MEDIUM): any | null => {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < duration) {
    return cached.data;
  }
  cache.delete(url); // Remove expired cache
  return null;
};

/**
 * Set cache data
 */
const setCacheData = (url: string, data: any) => {
  cache.set(url, { data, timestamp: Date.now() });
};

/**
 * Make API request with retry logic and error handling
 */
export const makeRequest = async <T>(
  endpoint: string,
  options: RequestInit & { cacheDuration?: number } = {},
  retryCount = 0
): Promise<ApiResponse<T>> => {
  const { cacheDuration = API_CONFIG.CACHE_DURATION.MEDIUM, ...requestOptions } = options;
  const method = requestOptions.method?.toUpperCase() || 'GET';
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    // Check cache for GET requests
    if (method === 'GET') {
      const cachedData = getCachedData(url, cacheDuration);
      if (cachedData) {
        console.log(`api.service: Returning cached data for ${endpoint}`);
        return cachedData;
      }
    }

    // Add authentication header
    const headers = {
      ...getAuthHeader(),
      ...requestOptions.headers,
    };

    console.log(`api.service: Making ${method} request to ${url}`);
    
    // Make request with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const response = await fetch(url, {
      ...requestOptions,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeout);

    console.log(`api.service: Response status for ${endpoint}:`, response.status);

    // Handle error responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: `HTTP ${response.status}: ${response.statusText}`,
      }));

      console.error(`api.service: Error response for ${endpoint}:`, errorData);

      throw {
        status: response.status,
        ...errorData,
      };
    }

    const responseData: ApiResponse<T> = await response.json();
    
    console.log(`api.service: Success response for ${endpoint}:`, {
      success: responseData.success,
      dataKeys: responseData.data ? Object.keys(responseData.data) : 'no data',
      fullResponse: responseData
    });

    // Cache successful GET responses
    if (method === 'GET' && responseData.success) {
      setCacheData(url, responseData);
    }

    return responseData;
  } catch (error: any) {
    console.error(`api.service: Caught error for ${endpoint}:`, error);
    
    // Retry logic for network errors
    if (retryCount < API_CONFIG.RETRY_ATTEMPTS && isRetryableError(error)) {
      console.log(`api.service: Retrying ${endpoint} (attempt ${retryCount + 1}/${API_CONFIG.RETRY_ATTEMPTS})`);
      await new Promise(resolve => setTimeout(resolve, API_CONFIG.RETRY_DELAY * (retryCount + 1)));
      return makeRequest<T>(endpoint, options, retryCount + 1);
    }

    // Handle abort errors
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - the server took too long to respond');
    }

    // Return formatted error response
    const errorMessage = error.message || 'An error occurred while fetching data';
    console.error(`api.service: Final error for ${endpoint}:`, errorMessage);
    return {
      success: false,
      data: null as any,
      message: errorMessage,
    };
  }
};

/**
 * Determine if an error is retryable
 */
const isRetryableError = (error: any): boolean => {
  if (error.name === 'AbortError') return false;
  if (error.status && error.status >= 400 && error.status < 500) return false; // Don't retry client errors
  return true;
};

/**
 * Clear all cache
 */
export const clearCache = () => {
  cache.clear();
};

/**
 * Clear cache for specific endpoint
 */
export const clearCacheByEndpoint = (endpoint: string) => {
  const url = `${API_BASE_URL}${endpoint}`;
  cache.delete(url);
};

/**
 * Prefetch data (caches GET request without returning)
 */
export const prefetchData = async <T>(endpoint: string): Promise<void> => {
  try {
    await makeRequest<T>(endpoint);
  } catch (error) {
    console.warn(`Failed to prefetch ${endpoint}:`, error);
  }
};
