export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      {/* Image Skeleton */}
      <div className="skeleton-shimmer rounded-lg h-[200px]"></div>
      
      {/* Title Skeleton */}
      <div className="space-y-2">
        <div className="skeleton-shimmer rounded w-3/4 h-6"></div>
        <div className="skeleton-shimmer rounded w-full h-4"></div>
        <div className="skeleton-shimmer rounded w-4/5 h-4"></div>
      </div>
      
      {/* Button Skeleton */}
      <div className="skeleton-shimmer rounded mt-6 h-10"></div>
    </div>
  );
}

export function ServiceCardSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  );
}
