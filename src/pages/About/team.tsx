import { useState, useEffect } from 'react';
import { getTeamMembers } from '../../services/teamService';
import type { TeamMemberResponse } from '../../types/api-responses';
import TeamMemberModal from '../../components/TeamMemberModal';
import { TeamMemberGridSkeleton } from '../../components/Skeletons/TeamMemberCardSkeleton';
import NotFound from '../../components/NotFound';

const LeadershipTeam = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMemberResponse[]>([]);
    const [selectedMember, setSelectedMember] = useState<TeamMemberResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch team members from API
    const fetchTeamMembers = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getTeamMembers();
            setTeamMembers(data);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to load team members';
            setError(errorMsg);
            // console.error('Error fetching team members:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    return (
        <div className="bg-[#FEF8F5] py-[40px] px-4 lg:py-20 lg:px-20">
            {/* Error State */}
            {error && (
                <div className="mb-4">
                    <div className="p-4 bg-white border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                        <button
                            onClick={fetchTeamMembers}
                            className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            )}

            {/* Header Section - Always Visible */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-[30px] lg:mb-[40px]">
                <div>
                    <p className="text-[14px] font-medium leading-[20px] uppercase text-[#0C2141]">
                        OUR LEADERSHIP EXPERTISE
                    </p>
                    <h1 className="mt-[4px] text-[#0C2141] lg:mt-0 text-[22px] lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px] max-w-[562px]">
                        A diverse team driven by expertise, compassion, and commitment.
                    </h1>
                </div>
            </div>

            {/* Team Grid or Skeleton Loaders */}
            {loading ? (
                <TeamMemberGridSkeleton />
            ) : teamMembers.length === 0 ? (
                <NotFound
                    title="No Team Members Available"
                    description="Our leadership team information is not currently available. Please check back soon to meet our dedicated healthcare professionals."
                    imageSrc="/not-found.png"
                    ctaText="Retry"
                    onCta={fetchTeamMembers}
                    className="mt-[60px] border-none"
                />
            ) : (
                <>
                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">
                        {teamMembers.map((member) => (
                            <div 
                                key={member.id} 
                                className="group cursor-pointer"
                                onClick={() => setSelectedMember(member)}
                            >
                                {/* Image Container */}
                                <div className="relative mb-[10px] overflow-hidden rounded-t-[12px] bg-gray-200 h-[270px] lg:h-[270px]">
                                    <img
                                        src={member.profile_picture_url || ''}
                                        alt={member.full_name}
                                        className="w-full object-cover transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Member Info */}
                                <div className="">
                                    <h3 className="text-lg font-medium text-[#02070D] lg:tracking-[-1.56px] lg:leading-[28px]">
                                        {member.full_name}
                                    </h3>
                                    <p className="text-[14px] text-[#000000] italic">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Modal */}
            {selectedMember && (
                <TeamMemberModal
                    isOpen={!!selectedMember}
                    onClose={() => setSelectedMember(null)}
                    member={selectedMember}
                />
            )}
        </div>
    );
};

export default LeadershipTeam;