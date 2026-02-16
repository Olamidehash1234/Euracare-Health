export function NewsCardSkeleton() {
  return (
    <div>
      {/* Image Skeleton */}
      <div className="skeleton-shimmer rounded-[12px] h-[200px] mb-4"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-3">
        <div className="skeleton-shimmer rounded w-1/3 h-4"></div>
        <div className="skeleton-shimmer rounded w-full h-6"></div>
        <div className="skeleton-shimmer rounded w-3/4 h-4"></div>
      </div>
    </div>
  );
}

export function FeaturedNewsCardSkeleton() {
  return (
    <div className="bg-white rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-sm h-full">
      {/* Featured Image Skeleton */}
      <div className="skeleton-shimmer h-[200px] lg:h-[300px]"></div>

      {/* Featured Content Skeleton */}
      <div className="bg-gray-200 text-white p-[20px] lg:p-[30px] space-y-4">
        <div className="skeleton-shimmer rounded w-1/4 h-5"></div>
        <div className="skeleton-shimmer rounded w-3/4 h-12"></div>
        <div className="skeleton-shimmer rounded w-1/3 h-5 mt-8"></div>
      </div>
    </div>
  );
}

export function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[16px]">
      {/* Featured - 2 columns */}
      <div className="lg:col-span-2">
        <FeaturedNewsCardSkeleton />
      </div>

      {/* News Grid - 2 columns */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-[16px] h-full">
          {[...Array(2)].map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
