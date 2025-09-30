import { id } from 'date-fns/locale';
import { useState } from 'react';

const boardMembers = [
    {
        id: 2,
        name: "Mr. Michael Lee",
        position: "Director",
        image: "/about/board2.png"
    },
    // {
    //     id: 3,
    //     name: "Ms. Fatima Bello",
    //     position: "Director",
    //     image: "/about/board3.png"
    // },
    // {
    //     id: 4,
    //     name: "Prof. Samuel Okafor",
    //     position: "Director",
    //     image: "/about/board4.png"
    // }
];

const teamMembers = [
    {
        id: 1,
        name: "Dr Tosin Majekodunmi",
        position: "Managing Director & Medical Director & Chief of Cardiology ",
        image: "/doctors/Dr-tosin.jpg"
    },
    {
        id: 2,
        name: "Ijeoma Okoro",
        position: "HR Manager",
        image: "/about/team/ijeoma.jpg"
    },
    {
        id: 3,
        name: "Olukemi Fasuan",
        position: "Financial Controller ",
        image: "/about/team/Mrs-Kemi.jpeg"
    },
    {
        id: 4,
        name: "Evans Esezobor",
        position: "IT Manager",
        image: "/about/team/evans.jpg"
    },
    {
        id: 5,
        name: "Sylvester Shih",
        position: "Chief Operating Officer",
        image: "/about/team/sylvester.jpg"
    },
    {
        id: 6,
        name: " Kelvin Ajieh",
        position: "Marketing and Communications Manager",
        image: "/about/team/kelvin.jpg"
    },
    {
        id: 7,
        name: "Godwin Ikehi",
        position: "Laboratory Manager",
        image: "/about/team/godwin.jpg"
    },
    {
        id: 8,
        name: "Abimbola Aransiola",
        position: "Pharmacy Manager",
        image: "/about/team/abimbola.jpg"
    },
    {
        id: 9,
        name: "",
        position: "Nursing Manager",
        image: "/about/team/nm.jpeg"
    }
];

const LeadershipTeam = () => {
    const [activeTab, setActiveTab] = useState('Board of Directors');

    const membersToShow = activeTab === 'Board of Directors' ? boardMembers : teamMembers;

    return (
        <div className="bg-[#FEF8F5] py-[40px] px-4 lg:py-20 lg:px-20">
            <div className="">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-[30px] lg:mb-[40px]">
                    <div>
                        <p className="text-[14px] font-medium leading-[20px] uppercase text-[#0C2141]">
                            OUR LEADERSHIP EXPERTISE
                        </p>
                        <h1 className="mt-[4px] text-[#0C2141] lg:mt-0 text-[22px] lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px] max-w-[562px]">
                            A diverse team driven by expertise, compassion, and commitment.
                        </h1>
                    </div>

                    {/* Tab Toggle */}
                    <div className="inline-flex rounded-[12px] mt-[20px] bg-white overflow-hidden border border-[#000000]">
                        <button
                            onClick={() => setActiveTab('Board of Directors')}
                            className={`px-6 py-3 lg:px-[49px] lg:py-[20px] lg:tracking-[-0.3px] text-[14px] lg:text-[16px] font-medium transition-all duration-100 ${activeTab === 'Board of Directors'
                                    ? 'bg-[#0C2141] text-white'
                                    : 'text-[#0C2141] hover:text-gray-900'
                                }`}
                        >
                            Board of Directors
                        </button>
                        <button
                            onClick={() => setActiveTab('Our Team')}
                            className={`px-6 py-3 lg:px-[78px] lg:py-[20px] text-[14px] lg:text-[16px] lg:tracking-[-0.3px] font-medium transition-all duration-100 ${activeTab === 'Our Team'
                                    ? 'bg-[#0C2141] text-white'
                                    : 'text-[#0C2141] hover:text-gray-900'
                                }`}
                        >
                            Our Team
                        </button>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">
                    {membersToShow.map((member) => (
                        <div key={member.id} className="group">
                            {/* Image Container */}
                            <div className="relative mb-[10px] overflow-hidden rounded-t-[12px] bg-gray-200 h-[280px] lg:h-[370px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-300"
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