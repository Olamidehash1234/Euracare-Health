import { useState, useEffect } from 'react';

import { getJobs } from '../../services/jobService';
import type { JobResponse } from '../../types/api-responses';
import ApplicationModal from './ApplicationModal';
import { JobCardSkeletonList } from '../../components/Skeletons/JobCardSkeleton';
import JobCard from './JobCard';

export default function Jobs() {
  const [jobs, setJobs] = useState<JobResponse[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getJobs();
      // Sort jobs by most recent first
      const sortedJobs = data.sort((a, b) => {
        const dateA = new Date(a.created_at || 0).getTime();
        const dateB = new Date(b.created_at || 0).getTime();
        return dateB - dateA;
      });
      setJobs(sortedJobs);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load jobs';
      setError(errorMsg);
      // console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Extract unique departments
  const departments = Array.from(
    new Map(
      jobs.map(job => [job.department, job.department])
    ).values()
  ).sort();

  // Filter jobs based on selected filter
  const filteredJobs = selectedFilter === 'ALL' 
    ? jobs 
    : jobs.filter(job => job.department === selectedFilter);

  const handleApplyClick = (job: JobResponse) => {
    setSelectedJobTitle(job.title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJobTitle('');
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Error State */}
      {error && (
        <div className="px-6 lg:px-20 py-4">
          <div className="p-4 bg-white border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={fetchJobs}
              className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Filter div - Always Visible */}
      <div className="w-full bg-white ">
        <div className="lg:flex justify-between items-start px-6 lg:px-20 py-4 lg:py-10">
          <div className="flex flex-col mb-6 lg:mb-0">
            <h2 className="text-base lg:text-lg font-medium lg:tracking-[-0.84px] text-[#0C2141] mb-2 lg:leading-[40px]">
              Available Positions
            </h2>
            <p className="text-gray-600 text-xs lg:leading-[24px] lg:tracking-[-0.84px] lg:text-sm">
              Showing {loading ? '...' : filteredJobs.length} {!loading && filteredJobs.length === 1 ? 'active position' : 'active positions'}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            <button
              onClick={() => setSelectedFilter('ALL')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === 'ALL'
                  ? 'bg-[#0C2141] text-white'
                  : 'bg-white border border-[#0C2141] text-[#0C2141] hover:bg-gray-50'
              }`}
            >
              ALL
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === dept
                    ? 'bg-[#0C2141] text-white'
                    : 'bg-white border border-[#0C2141] text-[#0C2141] hover:bg-gray-50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Jobs List div or Skeleton Loaders */}
      <div className="px-6 lg:px-20 py-8 lg:py-12">
        {loading ? (
          <JobCardSkeletonList />
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              {selectedFilter === 'ALL'
                ? 'There are currently no open positions at the moment.'
                : `There are no open positions in the ${selectedFilter} department at the moment.`
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedJobId === job.id}
                onToggle={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                onApplyClick={() => handleApplyClick(job)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        jobTitle={selectedJobTitle}
        onClose={handleCloseModal}
      />
    </div>
  );
}
