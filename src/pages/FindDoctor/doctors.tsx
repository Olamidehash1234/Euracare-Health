import { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr Hammed Ninalowo",
    specialty: "Interventional Radiology, Oncology, Vascular Surgery",
    image: "/home/doctors/doc1.png",
  },
  {
    id: 2,
    name: "Dr Pearl Aba Anoa Scott",
    specialty: "Oncology",
    image: "/home/doctors/doc2.png",
  },
  {
    id: 3,
    name: "Dr Asare Kwaku Offei",
    specialty:
      "Gastroenterology, General Surgery, Hepatobiliary Surgeon, Oncology",
    image: "/home/doctors/doc3.png",
  },
  {
    id: 4,
    name: "Dr Theodora Pepera",
    specialty: "Antenatal & Postnatal Care, Gynaecology",
    image: "/home/doctors/doc4.png",
  },
  {
    id: 5,
    name: "Dr Theodora Pepera",
    specialty: "Antenatal & Postnatal Care, Gynaecology",
    image: "/home/doctors/doc4.png",
  },
  {
    id: 6,
    name: "Dr Hammed Ninalowo",
    specialty: "Interventional Radiology, Oncology, Vascular Surgery",
    image: "/home/doctors/doc1.png",
  },
  {
    id: 7,
    name: "Dr Theodora Pepera",
    specialty: "Antenatal & Postnatal Care, Gynaecology",
    image: "/home/doctors/doc4.png",
  },
  {
    id: 8,
    name: "Dr Theodora Pepera",
    specialty: "Antenatal & Postnatal Care, Gynaecology",
    image: "/home/doctors/doc4.png",
  },
  
];

export default function ServicesGrid() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 8;

    // Filter doctors based on search query
    const filteredDoctors = doctors.filter((doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(query.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    const startIndex = (currentPage - 1) * doctorsPerPage;
    const endIndex = startIndex + doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(startIndex, endIndex);

    // Reset to first page when search query changes
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setCurrentPage(1);
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full lg:w-[85%] gap-[7px] lg:gap-[16px] bg-white border border-[#5D6B80] lg:border-[#ADB4BF] rounded-full py-[18px] lg:px-[20px] px-[24px] lg:px-[33px]">
                    <img src="/home/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        value={query}
                        onChange={handleSearch}
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[16px] text-gray-700 placeholder:text-[#0C214166]"
                    />
                </div>

                <button className="flex items-center lg:w-[15%] justify-center gap-2 lg:gap-[9px] py-[18px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition">
                    <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Sort by</span>
                </button>
            </div>

            {/* Results info */}
            <div className="mb-6 text-sm text-[#02070D]">
                {filteredDoctors.length > 0
                  ? <>Showing {startIndex + 1}-{Math.min(endIndex, filteredDoctors.length)} of {filteredDoctors.length} doctors{query && ` for "${query}"`}</>
                  : null}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[13px] lg:gap-y-[20px]">
                {currentDoctors.map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-[#FEF8F5] rounded-[12px] p-[30px] flex flex-col items-center text-center transition h-[291px] flex-grow"
                    >
                        {/* Doctor Image */}
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="object-cover mb-[10px]"
                        />
                        <div className="flex flex-col flex-1 justify-between w-full">
                            <div>
                                <h3 className="text-[16px] font-medium lg:tracking-[-0.5px] text-[#02070D] lg:leading-[26px]">{doc.name}</h3>
                                <p className="text-[14px] text-[#02070D] mt-[10px] leading-[20px]">{doc.specialty}</p>
                            </div>
                            {/* Profile Button */}
                            <button className="mt-6 w-[241px] mx-auto align-center lg:w-full text-[14px] leading-[27px] border border-[#02070D] text-[#02070D] font-medium rounded-[48px] py-[8px] hover:bg-gray-900 hover:text-white transition">
                                View Profile
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
            {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#02070D] text-lg">No doctors found for "{query}"</p>
                    <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                </div>
            )}
        </section>
    );
}