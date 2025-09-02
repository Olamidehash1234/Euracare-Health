import { useState } from "react";
import { services } from "../../data/services";
import SortBy from "../../components/SortBy";

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;
    const [filteredServices, setFilteredServices] = useState(services);

    // Filter services based on search query
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setCurrentPage(1);
        const value = e.target.value.toLowerCase();
        const filtered = services.filter((service) =>
            service.title.toLowerCase().includes(value)
        );
        setFilteredServices(filtered);
    };

    // Calculate pagination
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
    const startIndex = (currentPage - 1) * servicesPerPage;
    const endIndex = startIndex + servicesPerPage;
    const currentServices = filteredServices.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of services section
        window.scrollTo({ top: 420, behavior: 'smooth' });
    };

    const handleSort = (option: string) => {
        const sorted = [...filteredServices];
        if (option === "Alphabetically (A to Z)") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === "Alphabetically (Z to A)") {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        }
        setFilteredServices(sorted);
    };

    const handleReset = () => {
        setQuery("");
        setCurrentPage(1);
        setFilteredServices(services);
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
                <div className="flex items-center w-full lg:w-[83%] gap-[7px] lg:gap-[16px] bg-white border border-[#5D6B80] lg:border-[#ADB4BF] rounded-full py-[18px] lg:px-[20px] px-[24px] lg:px-[33px]">
                    <img src="/home/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto"/>
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        value={query}
                        onChange={handleSearch}
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[16px] text-gray-700 placeholder:text-[#0C214166]"
                    />
                </div>

                <div className="lg:w-[17%] w-full">
                    <SortBy onSort={handleSort} rightPosition="right-0 lg:right-[-35px]" />
                </div>
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
                            <a
                                href={`/services/dynamic/${service.slug}`}
                                className="mt-[20px] lg:mt-[40px] py-[10px] mx-auto w-full lg:w-[90%] border border-[#02070D] rounded-full font-medium text-[14px] lg:leading-[27px] hover:bg-gray-100 transition text-center"
                            >
                                Learn More
                            </a>
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