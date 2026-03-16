/**
 * TanStack Query Integration Guide
 * =================================
 * 
 * This document explains the global caching strategy implemented using TanStack Query (React Query)
 * for the Euracare Health application.
 * 
 * ## Overview
 * 
 * TanStack Query provides automatic caching, synchronization, and background updates for your
 * server state. All data fetching hooks are configured with:
 * - staleTime: Infinity (data never becomes stale, served from cache on navigation)
 * - gcTime: 24 hours (garbage collect unused cache after 24 hours)
 * - No automatic refetching on focus, mount, or reconnect
 * - Automatic retry logic (3 attempts with exponential backoff)
 * 
 * ## Architecture
 * 
 * ### Query Configuration
 * File: src/config/queryClient.ts
 * - Centralized configuration for all queries
 * - Default options for staleTime, caching, retry logic
 * 
 * ### Custom Query Hooks
 * Location: src/hooks/
 * 
 * Available hooks:
 * 1. useDoctors() - Fetch all doctors
 * 2. useDoctorById(id) - Fetch single doctor
 * 3. useServices() - Fetch all services
 * 4. useServiceById(id) - Fetch single service
 * 5. useArticles() - Fetch all articles
 * 6. usePublishedArticles() - Fetch published articles only
 * 7. useArticleById(id) - Fetch single article
 * 8. useArticlesByCategory(category) - Fetch articles by category
 * 9. useTeamMembers() - Fetch all team members
 * 10. useTeamMemberById(id) - Fetch single team member
 * 11. useTestimonials() - Fetch testimonials
 * 
 * ### Query Invalidation Hooks
 * Each data type has invalidation hooks for manual cache refreshing:
 * 
 * useInvalidateDoctors() - Methods:
 *   - invalidateAll() - Clear all doctor queries
 *   - invalidateById(id) - Clear specific doctor cache
 * 
 * useInvalidateServices() - Methods:
 *   - invalidateAll() - Clear all service queries
 *   - invalidateById(id) - Clear specific service cache
 * 
 * useInvalidateArticles() - Methods:
 *   - invalidateAll() - Clear all article queries
 *   - invalidatePublished() - Clear published articles cache
 *   - invalidateById(id) - Clear specific article cache
 *   - invalidateByCategory(category) - Clear category cache
 * 
 * useInvalidateTeam() - Methods:
 *   - invalidateAll() - Clear all team queries
 *   - invalidateById(id) - Clear specific member cache
 * 
 * useInvalidateTestimonials() - Methods:
 *   - invalidateAll() - Clear testimonials cache
 * 
 * ## Usage Examples
 * 
 * ### Basic Data Fetching
 * 
 * ```tsx
 * import { useDoctors } from '@/hooks/useDoctors';
 * 
 * export function DoctorsList() {
 *   const { data: doctors, isLoading, error } = useDoctors();
 *   
 *   if (isLoading) return <LoadingSpinner />;
 *   if (error) return <ErrorMessage error={error} />;
 *   
 *   return (
 *     <div>
 *       {doctors.map(doctor => (
 *         <DoctorCard key={doctor.id} doctor={doctor} />
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 * 
 * ### Conditional Fetching
 * 
 * ```tsx
 * const { id } = useParams();
 * const { data: doctor, isLoading } = useDoctorById(id);
 * // Hook only fetches if id is provided due to enabled: !!id
 * ```
 * 
 * ### Cache Invalidation (Manual Refresh)
 * 
 * ```tsx
 * import { useInvalidateDoctors } from '@/hooks/useDoctors';
 * 
 * export function AddDoctorForm() {
 *   const { invalidateAll } = useInvalidateDoctors();
 *   
 *   const handleSubmit = async (newDoctor) => {
 *     // Save doctor to API
 *     await saveDoctorAPI(newDoctor);
 *     
 *     // Refresh the doctors list cache
 *     invalidateAll();
 *   };
 *   
 *   return <form onSubmit={handleSubmit}>...</form>;
 * }
 * ```
 * 
 * ### Retry Button
 * 
 * ```tsx
 * import { useInvalidateArticles } from '@/hooks/useArticles';
 * 
 * export function NewsRetry() {
 *   const { invalidatePublished } = useInvalidateArticles();
 *   
 *   return (
 *     <button onClick={() => invalidatePublished()}>
 *       Retry Loading Articles
 *     </button>
 *   );
 * }
 * ```
 * 
 * ## Caching Behavior
 * 
 * ### On Navigation
 * ✅ User navigates between pages
 * ✅ Data is served from cache (no API call)
 * ✅ Component renders immediately
 * 
 * ### Data Mutation (Create/Update/Delete)
 * 1. Make API call to save changes
 * 2. Call invalidation hook to refresh affected cache
 * 3. TanStack Query automatically refetches and updates UI
 * 
 * ### Manual Refresh
 * 1. User clicks "Retry" button
 * 2. Call invalidation function
 * 3. Cache is cleared
 * 4. Data is refetched automatically
 * 
 * ### Background Updates
 * - No automatic background refetching (refetchOnWindowFocus: false)
 * - No automatic refetching on mount (refetchOnMount: false)
 * - All updates are manual via invalidation
 * 
 * ## Query Keys
 * 
 * Query keys are used to uniquely identify and manage cached data:
 * 
 * ```
 * Doctors:
 *   - ['doctors'] - all doctors
 *   - ['doctors', 'detail', id] - specific doctor
 * 
 * Services:
 *   - ['services'] - all services
 *   - ['services', 'detail', id] - specific service
 * 
 * Articles:
 *   - ['articles'] - all articles
 *   - ['articles', 'published'] - published articles
 *   - ['articles', 'detail', id] - specific article
 *   - ['articles', 'category', name] - articles by category
 * 
 * Team:
 *   - ['team'] - all team members
 *   - ['team', 'detail', id] - specific member
 * 
 * Testimonials:
 *   - ['testimonials'] - all testimonials
 * ```
 * 
 * ## Performance Benefits
 * 
 * 1. **Eliminated Network Requests**: Users navigate with instant data from cache
 * 2. **Reduced Server Load**: Same data not fetched multiple times
 * 3. **Better UX**: No redundant loading states during navigation
 * 4. **Automatic Retry**: Failed requests retry automatically
 * 5. **Normalized Cache**: Each data item cached separately and reused
 * 
 * ## Debugging
 * 
 * ### Enable Query Logs
 * Uncomment console.logs in api.service.ts:
 * ```tsx
 * // console.log(`api.service: Making ${method} request to ${url}`);
 * // console.log(`api.service: Response status for ${endpoint}:`, response.status);
 * ```
 * 
 * ### Check React Query DevTools
 * Add @tanstack/react-query-devtools for visual debugging:
 * ```bash
 * npm install @tanstack/react-query-devtools
 * ```
 * 
 * ### Common Issues
 * 
 * Issue: Data not updating after mutation
 * Solution: Ensure you called the correct invalidation function
 * 
 * Issue: Old data showing instead of fresh data
 * Solution: Check if cache is disabled or staleTime is set to 0
 * 
 * Issue: Multiple API calls for same data
 * Solution: Likely using different query keys - ensure consistent key usage
 * 
 * ## Migration from Old Code
 * 
 * ### Before (Direct API calls)
 * ```tsx
 * const [doctors, setDoctors] = useState([]);
 * const [loading, setLoading] = useState(true);
 * 
 * useEffect(() => {
 *   getDoctors().then(setDoctors).finally(() => setLoading(false));
 * }, []);
 * ```
 * 
 * ### After (TanStack Query)
 * ```tsx
 * const { data: doctors, isLoading: loading } = useDoctors();
 * ```
 * 
 * ## Next Steps
 * 
 * 1. When adding new data types, create hooks following the pattern
 * 2. Always use query hooks instead of direct API calls in components
 * 3. Use invalidation for mutations (POST, PUT, DELETE)
 * 4. Monitor cache behavior and adjust gcTime if needed
 */
