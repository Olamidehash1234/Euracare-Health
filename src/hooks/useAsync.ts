/**
 * Custom React Hooks for API Data Fetching
 * Manages loading, error, and data states for API calls
 */

import { useState, useEffect, useCallback } from 'react';
import { makeRequest, clearCacheByEndpoint } from '../services/api.service';
// import type { ApiResponse } from '../types/api-responses';

export interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface UseAsyncOptions {
  cacheDuration?: number;
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for fetching data from API
 * Handles loading, error, and retry states
 */
export const useAsync = <T,>(
  endpoint: string,
  options: UseAsyncOptions = {}
): UseAsyncState<T> & { refetch: () => Promise<void>; isRetrying: boolean } => {
  const { cacheDuration, enabled = true, onSuccess, onError } = options;
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  const [isRetrying, setIsRetrying] = useState(false);

  const fetchData = useCallback(async () => {
    if (!enabled) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await makeRequest<T>(endpoint, { cacheDuration });
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
        onSuccess?.(response.data);
      } else {
        const error = new Error(response.message || 'An error occurred');
        setState({ data: null, loading: false, error });
        onError?.(error);
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, loading: false, error: err });
      onError?.(err);
    }
  }, [endpoint, enabled, cacheDuration, onSuccess, onError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(async () => {
    try {
      setIsRetrying(true);
      clearCacheByEndpoint(endpoint);
      await fetchData();
    } finally {
      setIsRetrying(false);
    }
  }, [endpoint, fetchData]);

  return { ...state, refetch, isRetrying };
};

/**
 * Hook for paginated data fetching
 * Implements pagination with infinite scroll support
 */
export interface UsePaginatedOptions extends UseAsyncOptions {
  pageSize?: number;
}

export interface UsePaginatedState<T> {
  items: T[];
  loading: boolean;
  error: Error | null;
  hasMore: boolean;
  page: number;
}

export const usePaginated = <T,>(
  baseEndpoint: string,
  options: UsePaginatedOptions = {}
): UsePaginatedState<T> & { loadMore: () => Promise<void>; refetch: () => Promise<void> } => {
  const { pageSize = 10 } = options;
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = `${baseEndpoint}?page=${page}&limit=${pageSize}`;
      const response = await makeRequest<any>(endpoint);

      if (response.success) {
        const newItems = response.data.items || response.data.data || [];
        setItems(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
        setHasMore(newItems.length === pageSize);
      } else {
        setError(new Error(response.message));
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [baseEndpoint, page, pageSize]);

  useEffect(() => {
    loadMore();
  }, []); // Initial load only

  const refetch = useCallback(async () => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    clearCacheByEndpoint(baseEndpoint);
  }, [baseEndpoint]);

  return { items, loading, error, hasMore, page, loadMore, refetch };
};

/**
 * Hook for infinite scroll pagination
 * Automatically loads more data as user scrolls
 */
export const useInfiniteScroll = <T,>(
  baseEndpoint: string,
  options: UsePaginatedOptions = {}
) => {
  const paginated = usePaginated<T>(baseEndpoint, options);
  const [scrollLoading, setScrollLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollLoading ||
        !paginated.hasMore ||
        window.innerHeight + window.scrollY < document.body.offsetHeight - 500
      ) {
        return;
      }

      setScrollLoading(true);
      paginated.loadMore().finally(() => setScrollLoading(false));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollLoading, paginated.hasMore, paginated]);

  return { ...paginated, scrollLoading };
};
