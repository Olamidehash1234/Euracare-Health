export function TestimonialCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      {/* Avatar Skeleton */}
      <div className="flex items-center gap-4">
        <div className="skeleton-shimmer w-12 h-12 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="skeleton-shimmer rounded w-3/4 h-4"></div>
          <div className="skeleton-shimmer rounded w-1/2 h-3"></div>
        </div>
      </div>
      
      {/* Quote Skeleton */}
      <div className="space-y-2">
        <div className="skeleton-shimmer rounded w-full h-4"></div>
        <div className="skeleton-shimmer rounded w-full h-4"></div>
        <div className="skeleton-shimmer rounded w-3/4 h-4"></div>
      </div>
    </div>
  );
}

export function TestimonialCarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <TestimonialCardSkeleton key={i} />
      ))}
    </div>
  );
}
