export function JobCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-[20px] overflow-hidden bg-white p-6 space-y-4">
      {/* Header Row */}
      <div className="flex justify-between items-start">
        <div className="flex-1 space-y-3">
          {/* Tags Row */}
          <div className="flex gap-3">
            <div className="skeleton-shimmer rounded-full w-24 h-8"></div>
            <div className="skeleton-shimmer rounded-full w-16 h-8"></div>
            <div className="skeleton-shimmer rounded-full w-32 h-8"></div>
          </div>
          
          {/* Title */}
          <div className="skeleton-shimmer rounded w-2/3 h-6"></div>
        </div>
        
        {/* Button */}
        <div className="skeleton-shimmer rounded-full w-28 h-10 ml-4"></div>
      </div>
    </div>
  );
}

export function JobCardSkeletonList() {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  );
}
