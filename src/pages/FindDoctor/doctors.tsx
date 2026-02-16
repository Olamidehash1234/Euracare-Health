import { useState, useEffect } from "react";
import type { KeyboardEvent } from "react"
import { getDoctors } from "../../services/doctorService";
import type { DoctorResponse } from "../../types/api-responses";
import SearchSuggestions from "../../components/SearchSuggestions";
import { Link } from 'react-router-dom';
import SortBy from "../../components/SortBy";
import FilterBy from "../../components/FilterBy";
import { DoctorCardSkeletonGrid } from "../../components/Skeletons/DoctorCardSkeleton";

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [confirmedSearch, setConfirmedSearch] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredDoctors, setFilteredDoctors] = useState<DoctorResponse[]>([]);
    const [doctors, setDoctors] = useState<DoctorResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch doctors from API
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getDoctors();
                setDoctors(data);
                setFilteredDoctors(data);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : 'Failed to load doctors';
                setError(errorMsg);
                // console.error('Error fetching doctors:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    // Filter doctors based on search
    useEffect(() => {
        const filtered = doctors.filter((doc) =>
            doc.full_name.toLowerCase().includes(confirmedSearch.toLowerCase()) ||
            (doc.programs_and_specialty || []).some(s => s.toLowerCase().includes(confirmedSearch.toLowerCase()))
        );
        setFilteredDoctors(filtered);
    }, [confirmedSearch, doctors]);

    // Prepare suggestions from doctors data
    const suggestionList = [
        ...Array.from(new Set(doctors.map(doc => ({ title: doc.full_name })))),
        ...Array.from(
            new Set(
                doctors.flatMap(doc => (doc.programs_and_specialty || []).map(s => ({ title: s })))
            )
        ),
    ];

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

    const handleSort = (option: string) => {
        const sorted = [...filteredDoctors];
        if (option === "Alphabetically (A to Z)") {
            sorted.sort((a, b) => a.full_name.localeCompare(b.full_name));
        } else if (option === "Alphabetically (Z to A)") {
            sorted.sort((a, b) => b.full_name.localeCompare(a.full_name));
        }
        setFilteredDoctors(sorted);
    };

    const handleFilter = (option: string) => {
        const filtered = doctors.filter(doctor =>
            (doctor.programs_and_specialty || []).includes(option)
        );
        setFilteredDoctors(filtered);
    };

    const handleReset = () => {
        setQuery("");
        setConfirmedSearch("");
        setFilteredDoctors(doctors);
        setShowSuggestions(false);
    };

    const handleRetry = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getDoctors();
            setDoctors(data);
            setFilteredDoctors(data);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to load doctors';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="px-4 py-10 lg:px-[80px] lg:pt-[40px] lg:pb-[80px]">
            {/* Error State */}
            {error && (
                <div className="mb-6 p-4 bg-white border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Search & Sort Row - Always Visible */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[10px] mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full lg:w-[62%] gap-[7px] lg:gap-[16px] bg-white border border-[#5D6B80] lg:border-[#ADB4BF] rounded-full py-[17px] lg:px-[20px] px-[24px] lg:px-[33px] relative">
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

                <div className="flex w-full justify-between lg:w-[30%] gap-[20px] lg:gap-[10px]">
                    <div className="w-full">
                        <FilterBy onFilter={handleFilter} />
                    </div>

                    <div className="w-full">
                        <SortBy onSort={handleSort} />
                    </div>
                </div>

                <div className="lg:w-[8%]">
                    <button
                        onClick={handleReset}
                        className="flex items-center justify-center gap-2 lg:gap-[9px] border-b border-[#000000] lg:border-[#010101] w-full lg:w-auto ml-auto py-2 transition"
                    >
                        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px]">Reset all</span>
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

            {/* Cards Grid or Skeleton Loaders */}
            {filteredDoctors.length === 0 && !loading ? (
                <div className="text-center py-12">
                    <p className="text-[#02070D] text-lg">No doctors found {confirmedSearch ? `for "${confirmedSearch}"` : ''}</p>
                    <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                </div>
            ) : loading ? (
                <DoctorCardSkeletonGrid />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[13px] lg:gap-y-[20px]">
                    {filteredDoctors.map((doc) => (
                        <div key={doc.id} className="bg-[#FEF8F5] rounded-[12px] p-[30px] flex flex-col items-center text-center transition h-[291px] flex-grow">
                            <div className="size-[80px] rounded-full overflow-hidden flex-shrink-0 mb-[10px]">
                                <img 
                                    src={doc.profile_picture_url || ''} 
                                    alt={doc.full_name} 
                                    className="h-full w-full object-cover" 
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-between w-full">
                                <div>
                                    <h3 className="text-[16px] capitalize font-medium lg:tracking-[-0.5px] text-[#02070D] lg:leading-[26px]">
                                        {doc.full_name}
                                    </h3>
                                    <p className="text-[14px] capitalize text-[#02070D] mt-[10px] leading-[20px]">
                                        {(doc.programs_and_specialty || []).slice(0, 2).join(", ")}
                                    </p>
                                </div>
                                <Link
                                    to={`/Doctors-Profile/${doc.id}`}
                                    className="mt-6 w-[241px] mx-auto align-center lg:w-full text-[14px] leading-[27px] border border-[#02070D] text-[#02070D] font-medium rounded-[48px] py-[8px] hover:bg-gray-900 hover:text-white transition"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}