export function ServiceDetailSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 space-y-6 animate-pulse">
      {/* Banner Image */}
      <div className="skeleton-shimmer rounded-lg h-[240px] w-full mb-6"></div>
      {/* Title */}
      <div className="skeleton-shimmer rounded w-2/3 h-8 mb-4"></div>
      {/* Description */}
      <div className="skeleton-shimmer rounded w-full h-6 mb-2"></div>
      <div className="skeleton-shimmer rounded w-3/4 h-6 mb-2"></div>
      {/* Details */}
      <div className="skeleton-shimmer rounded w-full h-5 mb-2"></div>
      <div className="skeleton-shimmer rounded w-1/2 h-5 mb-2"></div>
      <div className="skeleton-shimmer rounded w-2/3 h-5 mb-2"></div>
    </div>
  );
}
