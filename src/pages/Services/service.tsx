import { useState } from "react";
import { services } from "../../data/services";
import SortBy from "../../components/SortBy";

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState(services);

    // Filter services based on search query
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        const value = e.target.value.toLowerCase();
        const filtered = services.filter((service) =>
            service.title.toLowerCase().includes(value)
        );
        setFilteredServices(filtered);
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

            

            {/* Cards Grid */}
            <div className="grid gap-6 lg:gap-[13px] lg:gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {filteredServices.map((service, idx) => (
                    <div
                        key={idx}
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