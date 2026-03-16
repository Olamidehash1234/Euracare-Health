/**
 * Articles Query Hook
 * Custom hook using TanStack Query for global caching
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPublishedArticles, getArticleById, getArticles, getArticlesByCategory } from '../services/articleService';

export const ARTICLES_QUERY_KEY = ['articles'] as const;
export const PUBLISHED_ARTICLES_QUERY_KEY = ['articles', 'published'] as const;
export const ARTICLE_BY_ID_QUERY_KEY = (id: string) => ['articles', 'detail', id] as const;
export const ARTICLES_BY_CATEGORY_QUERY_KEY = (category: string) => ['articles', 'category', category] as const;

/**
 * Hook to fetch all articles with caching
 */
export const useArticles = () => {
  return useQuery({
    queryKey: ARTICLES_QUERY_KEY,
    queryFn: getArticles,
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch published articles only with caching
 */
export const usePublishedArticles = () => {
  return useQuery({
    queryKey: PUBLISHED_ARTICLES_QUERY_KEY,
    queryFn: getPublishedArticles,
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch a specific article by ID with caching
 */
export const useArticleById = (id: string | undefined) => {
  return useQuery({
    queryKey: ARTICLE_BY_ID_QUERY_KEY(id || ''),
    queryFn: () => getArticleById(id!),
    enabled: !!id, // Only fetch if id is provided
    staleTime: Infinity,
  });
};

/**
 * Hook to fetch articles by category with caching
 */
export const useArticlesByCategory = (category: string | undefined) => {
  return useQuery({
    queryKey: ARTICLES_BY_CATEGORY_QUERY_KEY(category || ''),
    queryFn: () => getArticlesByCategory(category!),
    enabled: !!category, // Only fetch if category is provided
    staleTime: Infinity,
  });
};

/**
 * Hook to invalidate articles cache
 * Used after mutations (data updates)
 */
export const useInvalidateArticles = () => {
  const queryClient = useQueryClient();
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: ARTICLES_QUERY_KEY }),
    invalidatePublished: () => queryClient.invalidateQueries({ queryKey: PUBLISHED_ARTICLES_QUERY_KEY }),
    invalidateById: (id: string) => queryClient.invalidateQueries({ queryKey: ARTICLE_BY_ID_QUERY_KEY(id) }),
    invalidateByCategory: (category: string) => queryClient.invalidateQueries({ queryKey: ARTICLES_BY_CATEGORY_QUERY_KEY(category) }),
  };
};
