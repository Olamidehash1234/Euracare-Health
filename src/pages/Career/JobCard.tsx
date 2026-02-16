import type { JobPosition } from '../../data/jobs';

interface JobCardProps {
    job: JobPosition;
    isExpanded: boolean;
    onToggle: () => void;
    onApplyClick: () => void;
}

export default function JobCard({ job, isExpanded, onToggle, onApplyClick }: JobCardProps) {
    return (
        <div className="border-[0.5px] border-[#0C2141CC] rounded-[20px] overflow-hidden bg-white">
            {/* Job Header - Always visible, clickable to expand */}
            <button
                onClick={onToggle}
                className="w-full px-6 lg:px-8 py-5 lg:py-5 bg-white hover:bg-gray-50 transition-colors text-left"
                aria-expanded={isExpanded}
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
                                <div className="flex items-center gap-1 text-[14px] lg:text-sm text-[#0C2141]">
                                    <img src="/time.svg" alt="" />
                                    <span>{job.postedDate}</span>
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
                                onApplyClick();
                            }}
                            className="hidden lg:block bg-[#0C2141] hover:bg-slate-900 text-white px-4 lg:px-6 py-2 rounded-[48px] font-semibold text-[14px] lg:text-sm whitespace-nowrap transition-colors"
                        >
                            APPLY NOW
                        </button>
                        <button
                            className={`px-[7px] py-[9px] text-gray-400 hover:text-gray-600 border-[2px] border-[#000000] rounded-[100%] hover:bg-gray-100 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                            aria-label="More options"
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggle();
                            }}
                        >
                            <img src="/dropdown.svg" alt="" />
                        </button>
                    </div>

                </div>

                {/* Mobile Apply Button */}
                <div className="block lg:hidden mt-4">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onApplyClick();
                        }}
                        className="w-full bg-[#0C2141] hover:bg-slate-900 text-white px-4 py-[12px] rounded-[48px] font-semibold text-[14px] transition-colors"
                    >
                        APPLY NOW
                    </button>
                </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="bg-[#FFFFFF] border-t border-[#0C214199] px-6 lg:px-8 py-8 animate-in fade-in duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            {/* Objective Section */}
                            <div>
                                <button className=" border-l-[4px] border-[#0046B0] px-[10px] py-[5px] text-base lg:text-[16px] font-medium text-[#0C2141] mb-3">Objective</button>
                                <p className="text-[#0C2141] font-[300] leading-relaxed lg:leading-[24px] text-sm lg:text-[16px]">
                                    "{job.objective}"
                                </p>
                            </div>

                            {/* Duties & Responsibilities Section */}
                            <div>
                                <button className=" border-l-[4px] border-[#0046B0] px-[10px] py-[5px] text-base lg:text-[16px] font-medium text-[#0C2141] mb-3">Duties & Responsibilities</button>
                                <ul className="space-y-2 lg:space-y-[8px]">
                                    {job.dutiesAndResponsibilities.map((duty, index) => (
                                        <li key={index} className="flex ml-[10px] gap-2 text-sm lg:text-base text-[#0C2141]">
                                            <span className="text-[#0C2141]  font-bold flex-shrink-0">•</span>
                                            <span className='tracking-[-0.54px] lg:leading-[24px] font-[300]'>{duty}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Qualifications */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#626F820A] border border-[#0046B0] rounded-xl p-6">
                                <button className=" border-l-[4px] border-[#0046B0] px-[10px] py-[5px] text-base lg:text-[16px] font-medium text-[#0C2141] mb-4">
                                    Qualifications & Requirements
                                </button>
                                {/* Required Qualifications */}
                                <div>
                                    <ul className="space-y-2">
                                        {job.qualificationsAndRequirements.required.map((qual, index) => (
                                            <li key={index} className="flex ml-[10px] gap-2 text-sm lg:text-base text-[#0C2141]">
                                                <span className="text-[#0C2141]  font-bold flex-shrink-0">•</span>
                                                <span className='tracking-[-0.54px] lg:leading-[24px] font-[300]'>{qual}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Preferred Qualifications */}
                                {job.qualificationsAndRequirements.preferred && job.qualificationsAndRequirements.preferred.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <ul className="space-y-2">
                                            {job.qualificationsAndRequirements.preferred.map((qual, index) => (
                                                <li key={index} className="flex gap-2 text-[14px] lg:text-sm text-[#0C2141]">
                                                    <span className="text-[#0C2141]  font-bold flex-shrink-0">•</span>
                                                    <span>{qual}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
