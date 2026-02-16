import { useState, useEffect } from "react";
import { getServices, searchServices } from "../../services/serviceService";
import type { ServiceResponse } from "../../types/api-responses";
import SortBy from "../../components/SortBy";
import { Link } from 'react-router-dom';
import { ServiceCardSkeletonGrid } from "../../components/Skeletons/ServiceCardSkeleton";

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState<ServiceResponse[]>([]);
    const [services, setServices] = useState<ServiceResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch services from API
    const fetchServices = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getServices();
            setServices(data);
            setFilteredServices(data);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to load services';
            setError(errorMsg);
            // console.error('Error fetching services:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    // Filter services based on search query
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        
        if (!value.trim()) {
            setFilteredServices(services);
            return;
        }

        try {
            const results = await searchServices(value);
            setFilteredServices(results);
        } catch (error) {
            // console.error('Error searching services:', error);
        }
    };

    const handleSort = (option: string) => {
        const sorted = [...filteredServices];
        if (option === "Alphabetically (A to Z)") {
            sorted.sort((a, b) => 
                (a.snippet?.service_name || '').localeCompare(b.snippet?.service_name || '')
            );
        } else if (option === "Alphabetically (Z to A)") {
            sorted.sort((a, b) => 
                (b.snippet?.service_name || '').localeCompare(a.snippet?.service_name || '')
            );
        }
        setFilteredServices(sorted);
    };

    return (
        <section className="px-4 py-10 lg:px-[80px] lg:pt-[40px]">
            {/* Error State */}
            {error && (
                <div className="mb-6 p-4 bg-white border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                    <button
                        onClick={fetchServices}
                        className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Search & Sort Row - Always Visible */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
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

                    {/* Cards Grid or Skeleton Loaders */}
                    {loading ? (
                        <div className="mt-[60px]">
                            <ServiceCardSkeletonGrid />
                        </div>
                    ) : filteredServices.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-[#02070D] text-lg">No services found {query ? `for "${query}"` : ''}</p>
                            <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 lg:gap-[13px] lg:gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4 mb-8 mt-[60px]">
                            {filteredServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-[#FEF8F5] rounded-2xl transition overflow-hidden flex flex-col"
                                >
                                    <div className="relative h-[200px] lg:h-[240px] w-full bg-gray-100">
                                        <img
                                            src={service.snippet?.cover_image_url ? `${service.snippet.cover_image_url}?w=600&q=75` : '/placeholder.jpg'}
                                            alt={service.snippet?.service_name}
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                            onLoad={(e) => {
                                                const img = e.target as HTMLImageElement;
                                                img.style.opacity = "1";
                                            }}
                                            style={{ opacity: 0 }}
                                        />
                                    </div>
                                    <div className="p-5 lg:pt-[20px] flex flex-col flex-grow">
                                        <h3 className="font-medium text-[18px] tracking-[-0.5px] leading-[26px] mb-[20px]">
                                            {service.snippet?.service_name}
                                        </h3>
                                        <p className="text-[14px] text-[#02070DCC] leading-[20px] lg:leading-[22px] flex-grow">
                                            {service.snippet?.service_description}
                                        </p>
                                        <Link
                                            to={`/services/dynamic/${encodeURIComponent(service.id)}`}
                                            className="mt-[20px] lg:mt-[40px] py-[10px] mx-auto w-full lg:w-[90%] border border-[#02070D] rounded-full font-medium text-[14px] lg:leading-[27px] hover:bg-gray-100 transition text-center"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </section>
    );
}