import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../../services/doctorService";
import type { DoctorResponse } from "../../types/api-responses";
import { DoctorCardSkeleton } from "../../components/Skeletons/DoctorCardSkeleton";

const DoctorsSection: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDoctors();
      setDoctors(data.slice(0, 4));
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load doctors';
      setError(errorMsg);
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);
  return (
    <section className="px-[16px] lg:px-20 pt-[60px] pb-[30px] lg:py-[80px] bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-[43px] lg:mb-[60px]">
        <div>
          <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-[#0C2141] uppercase">
            Our Doctors
          </p>
          <h2 className="text-[24px] tracking-[-0.5px] lg:text-[40px] leading-[40px] lg:tracking-[-1.8px] font-medium text-gray-900">
            You are in Good Hands
          </h2>
        </div>
        <a href="/doctors">
          <button className="hidden md:flex items-center gap-2 border border-[#0C2141] text-[#0C2141] lg:text-[16px] rounded-[48px] px-5 py-2 lg:px-[32px] lg:py-[14px] hover:bg-gray-100 transition">
            <span><img src="/doctors.svg" alt="" /></span> See all Doctors
          </button>
        </a>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-white border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
          <button
            onClick={fetchDoctors}
            className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
          >
            Retry
          </button>
        </div>
      )}

      {/* Doctors Grid or Skeleton Loaders */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[13px]">
          {[...Array(4)].map((_, i) => (
            <DoctorCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[13px]">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#FEF8F5] rounded-[12px] p-[30px] flex flex-col items-center text-center transition h-[291px]"
              >
                {/* Doctor Image */}
                <div className="size-[80px] rounded-full overflow-hidden flex-shrink-0 mb-[10px]">
                  <img 
                    src={doc.profile_picture_url || ''} 
                    alt={doc.full_name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="flex flex-col flex-1 justify-between w-full">
                  <div>
                    <h3 className="text-[16px] font-medium lg:tracking-[-0.5px] text-[#02070D] lg:leading-[26px]">{doc.full_name}</h3>
                    <p className="text-[14px] text-[#02070D] mt-[10px] leading-[20px]">
                      {(doc.programs_and_specialty || []).slice(0, 2).join(", ")}
                    </p>
                  </div>
                  {/* Profile Button */}
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

          {/* Slider Dots */}
          <div className="hidden lg:flex justify-center mt-[20px] space-x-[4px]">
            <span className="w-[30px] h-[8px] bg-[#0C2141] rounded-full"></span>
            <span className="w-[15px] h-[8px] bg-gray-300 rounded-full"></span>
            <span className="w-[15px] h-[8px] bg-gray-300 rounded-full"></span>
          </div>
        </>
      )}
      {/* Section border bottom */}
      <div className="w-full border-b border-[#00000033] mt-[30px] lg:mt-[62px] h-[1px]" />
    </section>
  );
};

export default DoctorsSection;
