/**
 * Articles/Blogs API Service
 * Handles all article-related API calls
 */

import type { ArticleResponse } from '../types/api-responses';
import { newsArticles as dummyArticles } from '../data/news.tsx';

/**
 * Transform local news article to API response format
 */
const transformArticleToResponse = (article: typeof dummyArticles[0]): ArticleResponse => ({
  id: article.id,
  snippet: {
    title: article.title,
    cover_image_url: article.heroImage,
  },
  page: {
    content: {
      main: article.content, // JSX content component
    } as any,
    category: article.category,
  },
  createdAt: article.date,
});

/**
 * Get all articles
 */
export const getArticles = async (): Promise<ArticleResponse[]> => {
  // Using dummy data
  return dummyArticles.map(transformArticleToResponse);
};

/**
 * Get single article by ID
 */
export const getArticleById = async (id: string): Promise<ArticleResponse> => {
  // Using dummy data
  const article = dummyArticles.find(a => a.id === id);
  if (article) {
    return transformArticleToResponse(article);
  }
  throw new Error(`Article with ID: ${id} not found`);
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
