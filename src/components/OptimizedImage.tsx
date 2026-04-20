import { useState, useRef, useEffect } from 'react';
import { optimizeImageUrl, getImageSrcset } from '../utils/imageOptimization';
import { createLazyLoadObserver, getPlaceholderImage, getBlurPlaceholder } from '../utils/lazyLoading';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean; // For above-the-fold images
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty' | string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  quality = 85,
  objectFit = 'cover',
  placeholder = 'blur',
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate optimized URLs
  const optimizedSrc = optimizeImageUrl(src, {
    width,
    height,
    quality,
    format: 'auto',
  });

  const srcset = getImageSrcset(src);
  const blurSrc = placeholder === 'blur' ? getBlurPlaceholder(src) :
                  placeholder === 'empty' ? getPlaceholderImage('#f3f4f6', width || 400, height || 300) :
                  placeholder;

  useEffect(() => {
    if (priority || isInView) return;

    const observer = createLazyLoadObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ width, height }}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {!isLoaded && blurSrc && (
        <img
          src={blurSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-${objectFit} transition-opacity duration-300`}
          style={{ filter: 'blur(10px)' }}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : undefined}
        srcSet={isInView ? srcset : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;