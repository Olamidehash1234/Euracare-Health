import React, { useState } from 'react';

const LeadershipTeam = () => {
    const [activeTab, setActiveTab] = useState('Board of Directors');

    // Sample team data - using the same person as shown in the image
    const teamMembers = [
        {
            id: 1,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 2,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 3,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 4,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 5,
            name: "Dr. John Doe",
            position: "managing Director",
            image: "/about/team.png"
        },
        {
            id: 6,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 7,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        },
        {
            id: 8,
            name: "Dr. John Doe",
            position: "Managing Director",
            image: "/about/team.png"
        }
    ];

    return (
        <div className="bg-[#FEF8F5] py-12 px-4 lg:py-20 lg:px-20">
            <div className="">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-[30px] lg:mb-[40px]">
                    <div>
                        <p className="text-[14px] font-medium leading-[20px] uppercase text-[#0C2141]">
                            OUR LEADERSHIP EXPERTISE
                        </p>
                        <h1 className="mt-4 text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-[-1.8px] text-[#0B1F3B] max-w-[562px]">
                            A diverse team driven by expertise, compassion, and commitment.
                        </h1>
                    </div>

                    {/* Tab Toggle */}
                    <div className="inline-flex rounded-[12px] bg-white overflow-hidden shadow-sm border border-[#000000]">
                        <button
                            onClick={() => setActiveTab('Board of Directors')}
                            className={`px-6 py-3 lg:px-[49px] lg:py-[20px] lg:tracking-[-0.3px] text-[16px] font-medium transition-all duration-100 ${activeTab === 'Board of Directors'
                                    ? 'bg-slate-800 text-white'
                                    : 'text-[#0C2141] hover:text-gray-900'
                                }`}
                        >
                            Board of Directors
                        </button>
                        <button
                            onClick={() => setActiveTab('Our Team')}
                            className={`px-6 py-3 lg:px-[78px] lg:py-[20px] text-[16px] lg:tracking-[-0.3px] font-medium transition-all duration-100 ${activeTab === 'Our Team'
                                    ? 'bg-slate-800 text-white'
                                    : 'text-[#0C2141] hover:text-gray-900'
                                }`}
                        >
                            Our Team
                        </button>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group">
                            {/* Image Container */}
                            <div className="relative mb-[10px] overflow-hidden rounded-t-[12px] bg-gray-200 h-[200px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Member Info */}
                            <div className="">
                                <h3 className="text-lg font-medium text-[#02070D] lg:tracking-[-1.56px] lg:leading-[28px]">
                                    {member.name}
                                </h3>
                                <p className="text-[14px] text-[#000000] italic">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipTeam;