export function DoctorDetailSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 space-y-6 animate-pulse">
      {/* Profile Image */}
      <div className="skeleton-shimmer rounded-full h-[160px] w-[160px] mx-auto mb-6"></div>
      {/* Name */}
      <div className="skeleton-shimmer rounded w-2/3 h-8 mb-4 mx-auto"></div>
      {/* Bio */}
      <div className="skeleton-shimmer rounded w-full h-6 mb-2 mx-auto"></div>
      <div className="skeleton-shimmer rounded w-3/4 h-6 mb-2 mx-auto"></div>
      {/* Details */}
      <div className="skeleton-shimmer rounded w-full h-5 mb-2 mx-auto"></div>
      <div className="skeleton-shimmer rounded w-1/2 h-5 mb-2 mx-auto"></div>
      <div className="skeleton-shimmer rounded w-2/3 h-5 mb-2 mx-auto"></div>
    </div>
  );
}
