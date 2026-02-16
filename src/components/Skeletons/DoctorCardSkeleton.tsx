export function DoctorCardSkeleton() {
  return (
    <div>
      {/* Image Skeleton */}
      <div className="skeleton-shimmer rounded-lg h-[280px] mb-4"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-3">
        <div className="skeleton-shimmer rounded w-3/4 h-5"></div>
        <div className="skeleton-shimmer rounded w-1/2 h-4"></div>
        <div className="skeleton-shimmer rounded mt-4 h-10"></div>
      </div>
    </div>
  );
}

export function DoctorCardSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <DoctorCardSkeleton key={i} />
      ))}
    </div>
  );
}
