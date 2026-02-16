import { useState, useEffect } from 'react';
import { getJobs } from '../../services/jobService';
import type { JobResponse } from '../../types/api-responses';
import ApplicationModal from './ApplicationModal';
import { JobCardSkeletonList } from '../../components/Skeletons/JobCardSkeleton';

export default function Jobs() {
  const [jobs, setJobs] = useState<JobResponse[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load jobs';
      setError(errorMsg);
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
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
        <div className=" lg:flex justify-between items-start px-6 lg:px-20 py-4 lg:py-10">
          <div className="flex flex-col mb-4 lg:mb-0">
            <h2 className="text-base lg:text-lg font-medium lg:tracking-[-0.84px] text-[#0C2141] mb-2 lg:leading-[40px]">
              Available Positions
            </h2>
            <p className="text-gray-600 text-xs lg:leading-[24px] lg:tracking-[-0.84px] lg:text-sm">
              Showing {loading ? '...' : jobs.length} {!loading && jobs.length === 1 ? 'active position' : 'active positions'}
            </p>
          </div>
        </div>
      </div>

      {/* Jobs List div or Skeleton Loaders */}
      <div className="px-6 lg:px-20 py-8 lg:py-12">
        {loading ? (
          <JobCardSkeletonList />
        ) : jobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No positions available.</p>
          </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border-[0.5px] border-[#0C2141CC] rounded-[20px] overflow-hidden bg-white">
                    {/* Job Header - Always visible, clickable to expand */}
                    <button
                      onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                      className="w-full px-6 lg:px-8 py-5 lg:py-5 bg-white hover:bg-gray-50 transition-colors text-left"
                      aria-expanded={expandedJobId === job.id}
                    >
                      <div className='flex justify-between items-start lg:items-center'>
                        {/* Top Row - department, location and date with Apply Button */}
                        <div className="flex flex-col justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                              <span className="inline-block px-3 py-1 bg-[#0046B00D] text-[#0046B0] rounded-full text-[14px] font-normal leading-[27px]">
                                {job.department}
                              </span>
                              <div className="flex items-center gap-1 text-[14px] lg:text-sm text-[#0C2141]">
                                <span className="text-[#D9D9D9] font-bold flex-shrink-0">•</span>
                                <span className="font-[300] leading-[20px]">{job.type}</span>
                              </div>
                              <div className="flex items-center gap-1 font-normal text-[14px] lg:text-sm text-[#0C2141]">
                                <img src="/location.svg" alt="" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                          {/* Title*/}
                          <div>
                            <h3 className="text-base uppercase lg:text-lg font-semibold text-[#0C2141]">
                              {job.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center mt-[4px] gap-[20px] flex-shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApplyClick(job.title);
                            }}
                            className="hidden lg:block px-[32px] py-[14px] bg-[#0C2141] text-white rounded-full font-semibold text-sm hover:bg-[#0E2540] transition"
                          >
                            Apply Now
                          </button>
                          <span className={`transition-transform duration-300 ${expandedJobId === job.id ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6 text-[#0C2141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {expandedJobId === job.id && (
                      <div className="px-6 lg:px-8 py-6 border-t border-gray-200 bg-gray-50">
                        <div className="space-y-6">
                          {/* Objective */}
                          {job.objective && (
                            <div>
                              <h4 className="font-semibold text-[#0C2141] mb-2 text-base">Role Overview</h4>
                              <p className="text-[#0C2141CC] text-sm leading-relaxed">{job.objective}</p>
                            </div>
                          )}

                          {/* Duties */}
                          {job.duties_and_responsibilities && (
                            <div>
                              <h4 className="font-semibold text-[#0C2141] mb-2 text-base">Duties & Responsibilities</h4>
                              <div className="text-sm text-[#0C2141CC] space-y-1">
                                {typeof job.duties_and_responsibilities === 'string' ? (
                                  <p>{job.duties_and_responsibilities}</p>
                                ) : Array.isArray(job.duties_and_responsibilities) ? (
                                  <ul className="list-disc list-inside space-y-1">
                                    {(job.duties_and_responsibilities as string[]).slice(0, 5).map((duty, idx) => (
                                      <li key={idx}>{duty}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>{JSON.stringify(job.duties_and_responsibilities)}</p>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Qualifications */}
                          {job.qualifications_and_requirements && (
                            <div>
                              <h4 className="font-semibold text-[#0C2141] mb-2 text-base">Qualifications & Requirements</h4>
                              <div className="text-sm text-[#0C2141CC] space-y-1">
                                {typeof job.qualifications_and_requirements === 'string' ? (
                                  <p>{job.qualifications_and_requirements}</p>
                                ) : Array.isArray(job.qualifications_and_requirements) ? (
                                  <ul className="list-disc list-inside space-y-1">
                                    {(job.qualifications_and_requirements as string[]).slice(0, 5).map((qual, idx) => (
                                      <li key={idx}>{qual}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>{JSON.stringify(job.qualifications_and_requirements)}</p>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Apply Button - Mobile */}
                          <button
                            onClick={() => handleApplyClick(job.title)}
                            className="lg:hidden w-full px-[32px] py-[14px] bg-[#0C2141] text-white rounded-full font-semibold text-sm hover:bg-[#0E2540] transition"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
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
