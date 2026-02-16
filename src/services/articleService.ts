/**
 * Articles/Blogs API Service
 * Handles all article-related API calls
 */

import { makeRequest } from './api.service';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config';
import type { ArticleResponse } from '../types/api-responses';

/**
 * Get all articles
 */
export const getArticles = async (): Promise<ArticleResponse[]> => {
  try {
    // console.log('articleService: Making API request to', API_ENDPOINTS.ARTICLES);
    const response = await makeRequest<{
      articles: { articles: ArticleResponse[] };
    }>(
      API_ENDPOINTS.ARTICLES,
      { cacheDuration: API_CONFIG.CACHE_DURATION.MEDIUM }
    );

    // console.log('articleService: Raw API response:', response);
    // console.log('articleService: Response success:', response.success);
    // console.log('articleService: Response data structure:', {
    //   hasData: !!response.data,
    //   hasArticles: !!response.data?.articles,
    //   hasArticlesArray: !!response.data?.articles?.articles,
    //   articlesLength: response.data?.articles?.articles?.length || 0
    // });

    if (response.success && response.data?.articles?.articles) {
      return response.data.articles.articles;
    }

    throw new Error(response.message || 'Failed to fetch articles');
  } catch (error) {
    console.error('articleService: Error fetching articles:', error);
    throw error;
  }
};

/**
 * Get single article by ID
 */
export const getArticleById = async (id: string): Promise<ArticleResponse> => {
  try {
    const response = await makeRequest<{ article: ArticleResponse }>(
      API_ENDPOINTS.ARTICLE_BY_ID(id),
      { cacheDuration: API_CONFIG.CACHE_DURATION.MEDIUM }
    );

    if (response.success && response.data?.article) {
      return response.data.article;
    }

    throw new Error(response.message || `Failed to fetch article with ID: ${id}`);
  } catch (error) {
    console.error(`Error fetching article ${id}:`, error);
    throw error;
  }
};

/**
 * Get published articles only
 */
export const getPublishedArticles = async (): Promise<ArticleResponse[]> => {
  try {
    // console.log('articleService: Fetching all articles...');
    const allArticles = await getArticles();
    // console.log('articleService: All articles received:', allArticles);
    
    // Filter articles - treat articles without status field as published
    const published = allArticles.filter(article => 
      article.status === 'published' || !article.status
    );
    // console.log('articleService: Published articles after filtering:', published);
    // console.log('articleService: Filter details - Total articles:', allArticles.length, 'Published:', published.length);
    
    return published;
  } catch (error) {
    // console.error('articleService: Error fetching published articles:', error);
    throw error;
  }
};

/**
 * Get articles by category
 */
export const getArticlesByCategory = async (category: string): Promise<ArticleResponse[]> => {
  try {
    const allArticles = await getPublishedArticles();
    return allArticles.filter(article =>
      article.page?.category?.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    throw error;
  }
};

/**
 * Search articles
 */
export const searchArticles = async (query: string): Promise<ArticleResponse[]> => {
  try {
    const allArticles = await getPublishedArticles();
    const lowerQuery = query.toLowerCase();

    return allArticles.filter(article => {
      const title = article.snippet?.title?.toLowerCase() || '';
      const content = Object.values(article.page?.content || {})
        .join(' ')
        .toLowerCase();
      const category = article.page?.category?.toLowerCase() || '';
      const tags = (article.tags || []).map(tag => tag.toLowerCase()).join(' ');

      return (
        title.includes(lowerQuery) ||
        content.includes(lowerQuery) ||
        category.includes(lowerQuery) ||
        tags.includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
};

/**
 * Get latest articles
 */
export const getLatestArticles = async (limit: number = 5): Promise<ArticleResponse[]> => {
  try {
    const articles = await getPublishedArticles();
    return articles
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    throw error;
  }
};

/**
 * Get articles by tags
 */
export const getArticlesByTag = async (tag: string): Promise<ArticleResponse[]> => {
  try {
    const articles = await getPublishedArticles();
    return articles.filter(article =>
      article.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    throw error;
  }
};
