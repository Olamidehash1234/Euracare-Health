export function JobDetailSkeleton() {
  return (
    <div className="border border-gray-300 rounded-[20px] overflow-hidden bg-white p-8 space-y-6 animate-pulse">
      {/* Title */}
      <div className="skeleton-shimmer rounded w-2/3 h-8 mb-4"></div>
      {/* Objective */}
      <div className="skeleton-shimmer rounded w-full h-6 mb-2"></div>
      <div className="skeleton-shimmer rounded w-3/4 h-6 mb-2"></div>
      {/* Duties & Qualifications */}
      <div className="skeleton-shimmer rounded w-full h-5 mb-2"></div>
      <div className="skeleton-shimmer rounded w-1/2 h-5 mb-2"></div>
      <div className="skeleton-shimmer rounded w-2/3 h-5 mb-2"></div>
      {/* Apply Button */}
      <div className="skeleton-shimmer rounded-full w-40 h-12 mt-6 mx-auto"></div>
    </div>
  );
}
