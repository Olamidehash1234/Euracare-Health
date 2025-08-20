import { useState } from "react";

const services = [
    {
        title: "Advanced Cardiac Imaging",
        description:
            "Our Advanced Cardiac Imaging service uses state-of-the-art technology—such as echocardiography, CT, and MRI—to provide precise, non-invasive assessments of heart structure and function, enabling early diagnosis and tailored treatment plans.",
        image:
            "/services/cardiac.png",
    },
    {
        title: "Antenatal & Postnatal Care",
        description:
            "We provide comprehensive care before and after childbirth, including regular check-ups, diagnostic screenings, nutritional guidance, and emotional support—ensuring the health and well-being of both mother and baby at every stage.",
        image:
            "/services/postnatal.png",
    },
    {
        title: "Back & Spine Surgery",
        description:
            "Our Back & Spine Surgery services offer advanced diagnosis and minimally invasive treatments for spinal disorders, chronic back pain, herniated discs, and injuries—focused on restoring mobility and improving quality of life.",
        image:
            "/services/spine.png",
    },
    {
        title: "Bariatric & Weight Loss Surgery",
        description:
            "We offer safe, effective bariatric and weight loss surgeries—including gastric bypass and sleeve gastrectomy—to support long-term weight management, improve overall health, and reduce obesity-related conditions.",
        image:
            "/services/weight.png",
    },
    {
        title: "Dentistry",
        description:
            "Our Advanced Cardiac Imaging service uses state-of-the-art technology—such as echocardiography, CT, and MRI—to provide precise, non-invasive assessments of heart structure and function, enabling early diagnosis and tailored treatment plans.",
        image:
            "/services/dentist.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
    {
        title: "Dermatology",
        description:
            "We provide comprehensive care for skin, hair, and nail conditions, including diagnosis, treatment, and preventive care—ensuring the health and beauty of your skin at every stage.",
        image:
            "/services/dermatology.png",
    },
];

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    // Filter services based on search query
    const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(query.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
    const startIndex = (currentPage - 1) * servicesPerPage;
    const endIndex = startIndex + servicesPerPage;
    const currentServices = filteredServices.slice(startIndex, endIndex);

    // Reset to first page when search query changes
    const handleSearch = (e) => {
        setQuery(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of services section
        window.scrollTo({ top: 420, behavior: 'smooth' });
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        const maxVisibleButtons = 2;
        
        let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
        
        if (endPage - startPage < maxVisibleButtons - 1) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        // Previous button
        if (currentPage > 1) {
            buttons.push(
                <button
                    key="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-3 py-2 text-sm border border-[gray-300] rounded-md hover:bg-gray-50 transition-colors"
                >
                    Prev
                </button>
            );
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        i === currentPage
                            ? 'bg-[#0C2141] text-white border-none'
                            : 'border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    {i}
                </button>
            );
        }

        // Next button
        if (currentPage < totalPages) {
            buttons.push(
                <button
                    key="next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                    Next
                </button>
            );
        }

        return buttons;
    };

    return (
        <section className="px-4 py-10 lg:px-[80px] lg:pt-[40px]">
            {/* Search & Sort Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full lg:w-[85%] gap-[7px] lg:gap-[16px] bg-white border border-[#5D6B80] lg:border-[#ADB4BF] rounded-full py-[18px] lg:px-[20px] px-[24px] lg:px-[33px]">
                    <img src="/home/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto"/>
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        value={query}
                        onChange={handleSearch}
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[16px] text-gray-700 placeholder:text-[#0C214166]"
                    />
                </div>

                <button className="flex items-center lg:w-[15%] justify-center gap-2 lg:gap-[9px] py-[18px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition">
                    <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto"/>
                    <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Sort by</span>
                </button>
            </div>

            {/* Results info */}
            <div className="mb-6 text-sm text-[#02070D]">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} of {filteredServices.length} services
                {query && ` for "${query}"`}
            </div>

            {/* Cards Grid */}
            <div className="grid gap-6 lg:gap-[13px] lg:gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {currentServices.map((service, idx) => (
                    <div
                        key={startIndex + idx}
                        className="bg-[#FEF8F5] rounded-2xl transition overflow-hidden flex flex-col"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-[200px] lg:h-[240px] w-full object-cover"
                        />
                        <div className="p-5 lg:pt-[20px] flex flex-col flex-grow">
                            <h3 className="font-medium text-[18px] tracking-[-0.5px] leading-[26px] mb-[20px]">
                                {service.title}
                            </h3>
                            <p className="text-[14px] text-[#02070DCC] leading-[20px] lg:leading-[22px] flex-grow">
                                {service.description}
                            </p>
                            <button className="mt-[20px] lg:mt-[40px] py-[10px] mx-auto w-full lg:w-[90%] border border-[#02070D] rounded-full font-medium text-[14px] lg:leading-[27px] hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center gap-2 mt-8">
                    {renderPaginationButtons()}
                </div>
            )}

            {/* No results message */}
            {filteredServices.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#02070D] text-lg">No services found for "{query}"</p>
                    <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                </div>
            )}
        </section>
    );
}