export class ApiError extends Error {
  statusCode?: number;
  originalError?: any;

  constructor(
    message: string,
    statusCode?: number,
    originalError?: any
  ) {
    super(message);
    this.name = 'ApiError';
    this.message = message;
    this.statusCode = statusCode;
    this.originalError = originalError;
  }
}

/**
 * Handle API errors and return user-friendly message
 */
export const handleApiError = (error: any): string => {
  // Network error
  if (error instanceof TypeError) {
    if (error.message.includes('Failed to fetch')) {
      return 'Network error. Please check your connection.';
    }
    return 'An error occurred while fetching data.';
  }

  // Timeout
  if (error.message?.includes('timeout')) {
    return 'Request took too long. Please try again.';
  }

  // API error response
  if (error.message) {
    return error.message;
  }

  // Unknown error
  return 'An unexpected error occurred. Please try again.';
};

/**
 * Retry with exponential backoff
 */
export const retryWithBackoff = async <T,>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error = new Error('Unknown error');

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
};

/**
 * Validate API response structure
 */
export const validateApiResponse = <T,>(response: any): T | null => {
  if (!response) {
    throw new ApiError('Response is null or undefined');
  }

  if (typeof response !== 'object') {
    throw new ApiError('Invalid response format');
  }

  if (response.success === false) {
    throw new ApiError(response.message || 'API returned an error');
  }

  return response.data || null;
};

/**
 * Parse error details from response
 */
export const parseErrorDetails = (error: any): string[] => {
  const errors: string[] = [];

  if (typeof error.message === 'string') {
    errors.push(error.message);
  }

  if (Array.isArray(error.errors)) {
    errors.push(
      ...error.errors.map((e: any) =>
        typeof e === 'string' ? e : e.message || JSON.stringify(e)
      )
    );
  }

  if (typeof error.errors === 'object' && error.errors !== null) {
    errors.push(
      ...Object.entries(error.errors).map(([key, value]: [string, any]) =>
        `${key}: ${value}`
      )
    );
  }

  return errors;
};
