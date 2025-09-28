import React, { useState, useCallback } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  onLoadError?: (error: Event) => void;
}

/**
 * OptimizedImage component with error handling, loading states, and fallback support
 * Ensures images always render properly with graceful degradation
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  className = '',
  onLoadError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${currentSrc}`);
    setIsLoading(false);
    
    // If we haven't tried the fallback yet and it's different from current src
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
    }
    
    // Call custom error handler if provided
    if (onLoadError) {
      onLoadError(event.nativeEvent);
    }
  }, [currentSrc, fallbackSrc, onLoadError]);

  // If image failed to load and no fallback is available, show a placeholder div
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg 
          className="w-8 h-8 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center ${className}`}
        >
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
        {...props}
      />
    </>
  );
};

export default OptimizedImage;
