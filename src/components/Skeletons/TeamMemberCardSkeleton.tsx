export function TeamMemberCardSkeleton() {
  return (
    <div>
      {/* Image Skeleton */}
      <div className="skeleton-shimmer rounded-t-[12px] h-[270px] mb-[10px]"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-2">
        <div className="skeleton-shimmer rounded w-3/4 h-6"></div>
        <div className="skeleton-shimmer rounded w-1/2 h-4"></div>
      </div>
    </div>
  );
}

export function TeamMemberGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">
      {[...Array(8)].map((_, i) => (
        <TeamMemberCardSkeleton key={i} />
      ))}
    </div>
  );
}
