/**
 * Lazy Loading Utils
 * Utilities for lazy loading images and components
 */

/**
 * Intersection Observer callback for lazy loading
 */
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0,
  });
};

/**
 * Preload image
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Prefetch link
 */
export const prefetchLink = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Preload DNS
 */
export const preloadDNS = (domain: string) => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = `//${domain}`;
  document.head.appendChild(link);
};

/**
 * Preconnect to domain
 */
export const preconnect = (domain: string, crossOrigin = false) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = `//${domain}`;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

/**
 * Load image with fallback
 */
export const loadImageWithFallback = async (
  src: string,
  fallback: string
): Promise<string> => {
  try {
    await preloadImage(src);
    return src;
  } catch {
    try {
      await preloadImage(fallback);
      return fallback;
    } catch {
      return fallback;
    }
  }
};

/**
 * Get image loading placeholder (Data URL)
 */
export const getPlaceholderImage = (
  color: string = '#e0e0e0',
  width: number = 400,
  height: number = 300
): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect fill="${color}" width="${width}" height="${height}"/></svg>`;
  const encoded = btoa(svg);
  return `data:image/svg+xml;base64,${encoded}`;
};

/**
 * Get Cloudinary blur placeholder
 */
export const getBlurPlaceholder = (imageUrl: string | undefined): string => {
  if (!imageUrl) return '';
  return imageUrl.replace('/upload/', '/upload/e_blur:300/');
};
