/**
 * Image Optimization Utils
 * Optimizes Cloudinary image URLs for better performance
 */

interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: string;
  gravity?: string;
  fetch_format?: string;
  dpr?: 'auto' | number;
}

/**
 * Generate optimized Cloudinary image URL
 */
export const optimizeImageUrl = (
  url: string | undefined,
  options: CloudinaryTransformOptions = {}
): string => {
  if (!url) return '';

  // Check if URL is a Cloudinary URL
  if (!url.includes('cloudinary.com')) {
    return url;
  }

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
    dpr = 'auto',
  } = options;

  // Build transformation string
  const transformations: string[] = [];

  if (width || height) {
    const dimension = `w_${width || 'auto'},h_${height || 'auto'}`;
    transformations.push(`${dimension},c_${crop},g_${gravity}`);
  }

  if (quality !== undefined) {
    transformations.push(`q_${quality}`);
  }

  if (format) {
    transformations.push(`f_${format}`);
  }

  if (dpr && dpr !== 'auto') {
    transformations.push(`dpr_${dpr}`);
  }

  if (transformations.length === 0) {
    return url;
  }

  // Insert transformation before the upload path
  const transformation = transformations.join(',');
  return url.replace('/image/upload/', `/image/upload/${transformation}/`);
};

/**
 * Generate thumbnail URL
 */
export const getThumbnailUrl = (url: string | undefined): string => {
  return optimizeImageUrl(url, {
    width: 400,
    height: 300,
    quality: 80,
    format: 'auto',
    crop: 'thumb',
    gravity: 'face',
  });
};

/**
 * Generate responsive image URLs
 */
export const getResponsiveImageUrl = (
  url: string | undefined,
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
): string => {
  const sizes = {
    sm: { width: 300, height: 200 },
    md: { width: 600, height: 400 },
    lg: { width: 900, height: 600 },
    xl: { width: 1200, height: 800 },
  };

  return optimizeImageUrl(url, {
    ...sizes[size],
    quality: 85,
    format: 'auto',
  });
};

/**
 * Generate srcset for responsive images
 */
export const getImageSrcset = (url: string | undefined): string => {
  if (!url) return '';

  const sizes = [
    { size: 300, dpr: 1 },
    { size: 600, dpr: 1 },
    { size: 600, dpr: 2 },
    { size: 1200, dpr: 1 },
    { size: 1200, dpr: 2 },
  ];

  return sizes
    .map(({ size, dpr }) => {
      const optimized = optimizeImageUrl(url, {
        width: size,
        quality: 85,
        format: 'auto',
        dpr,
      });
      return `${optimized} ${size}w`;
    })
    .join(', ');
};

/**
 * Get video thumbnail from Cloudinary
 */
export const getVideoThumbnail = (videoUrl: string | undefined): string => {
  if (!videoUrl) return '';

  // Handle YouTube links
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    const videoId = extractYouTubeId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  // Handle Cloudinary video links
  if (videoUrl.includes('cloudinary.com')) {
    return videoUrl.replace('/video/upload/', '/image/upload/').replace(/\.[^.]+$/, '.jpg');
  }

  return videoUrl;
};

/**
 * Extract YouTube video ID
 */
export const extractYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

/**
 * Convert YouTube URL to embed URL
 */
export const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};
