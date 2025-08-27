import { useState } from "react";
import type { KeyboardEvent } from "react"
import { doctors } from "../../data/doctors";
import SearchSuggestions from "../../components/SearchSuggestions";
import { Link } from 'react-router-dom';

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [confirmedSearch, setConfirmedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const doctorsPerPage = 8;

    // Filter doctors based on search query
    const filteredDoctors = doctors.filter((doc) =>
        doc.name.toLowerCase().includes(confirmedSearch.toLowerCase()) ||
        doc.specialty.some(s => s.toLowerCase().includes(confirmedSearch.toLowerCase()))
    );

    // Prepare suggestions from doctors data
    const suggestionList = [
        ...Array.from(new Set(doctors.map(doc => ({ title: doc.name })))),
        ...Array.from(
            new Set(
                doctors.flatMap(doc => doc.specialty.map(s => ({ title: s })))
            )
        ),
    ];

    // Calculate pagination
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    const startIndex = (currentPage - 1) * doctorsPerPage;
    const endIndex = startIndex + doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(startIndex, endIndex);

    // Handle enter key press
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setConfirmedSearch(query);
            setShowSuggestions(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setShowSuggestions(true);
    };

    const handleClear = () => {
        setQuery("");
        setConfirmedSearch("");
        setShowSuggestions(false);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
                    className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
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
                    className={`px-3 py-2 text-sm border rounded-md transition-colors ${i === currentPage
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
        <section className="px-4 py-10 lg:px-[80px] lg:pt-[40px] lg:pb-[80px]">
            {/* Search & Sort Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[10px] mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full lg:w-[65%] gap-[7px] lg:gap-[16px] bg-white border border-[#5D6B80] lg:border-[#ADB4BF] rounded-full py-[17px] lg:px-[20px] px-[24px] lg:px-[33px] relative">
                    <img src="/home/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        value={query}
                        onChange={handleSearch}
                        onKeyPress={handleKeyPress}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[16px] text-[#0C2141] placeholder:text-[#0C214166]"
                    />
                    {query && (
                        <button
                            onClick={handleClear}
                            className="absolute right-6 top-1/2 -translate-y-1/2"
                        >
                            <img src="/close.svg" alt="Clear" className="w-5 h-5 lg:w-auto lg:h-auto" />
                        </button>
                    )}
                    {showSuggestions && query && (
                        <div className="absolute left-0 top-full w-full z-10">
                            <SearchSuggestions
                                searchTerm={query}
                                suggestions={suggestionList}
                                onSelect={sugg => {
                                    setQuery(sugg.title);
                                    setConfirmedSearch(sugg.title);
                                    setShowSuggestions(false);
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="flex w-full justify-between lg:w-[27%] gap-[20px] lg:gap-[10px]">
                    <button className="flex items-center justify-center gap-2 lg:gap-[9px] py-[17px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition">
                        <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Filter by</span>
                    </button>

                    <button className="flex items-center  justify-center gap-2 lg:gap-[9px] py-[17px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition">
                        <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Sort by</span>
                    </button>
                </div>

                <div className="lg:w-[8%]">
                    <button className="flex items-center justify-center gap-2 lg:gap-[9px] border-b border-[#000000] lg:border-[#010101] w-full lg:w-auto ml-auto py-2 transition">
                        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Reset all</span>
                        <img src="/rotate.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    </button>
                </div>
            </div>

            {/* Add heading when search is confirmed */}
            {confirmedSearch && (
                <h1 className="text-[32px] lg:text-[40px] font-medium text-[#02070D] mb-8 lg:mb-[40px] lg:leading-[40px] lg:tracking-[-1.8px]">
                    Let's get you to the right specialist
                </h1>
            )}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[13px] lg:gap-y-[20px]">
                {currentDoctors.map((doc) => (
                    <div key={doc.id} className="bg-[#FEF8F5] rounded-[12px] p-[30px] flex flex-col items-center text-center transition h-[291px] flex-grow">
                        <img src={doc.image} alt={doc.name} className="object-cover mb-[10px]" />
                        <div className="flex flex-col flex-1 justify-between w-full">
                            <div>
                                <h3 className="text-[16px] font-medium lg:tracking-[-0.5px] text-[#02070D] lg:leading-[26px]">
                                    {doc.name}
                                </h3>
                                <p className="text-[14px] text-[#02070D] mt-[10px] leading-[20px]">
                                    {doc.specialty.join(", ")}
                                </p>
                            </div>
                            <Link 
                                to={`/Doctors-Profile/${doc.id}`}  // Changed from /Doctors-Profile/ to /doctor/
                                className="mt-6 w-[241px] mx-auto align-center lg:w-full text-[14px] leading-[27px] border border-[#02070D] text-[#02070D] font-medium rounded-[48px] py-[8px] hover:bg-gray-900 hover:text-white transition"
                            >
                                View Profile
                            </Link>
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
            {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#02070D] text-lg">No doctors found for "{confirmedSearch}"</p>
                    <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                </div>
            )}
        </section>
    );
}