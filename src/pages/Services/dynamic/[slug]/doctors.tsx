import { useState, useEffect } from 'react';
import { getDoctors } from '../../../../services/doctorService';
import type { DoctorResponse } from '../../../../types/api-responses';
import { Link } from "react-router-dom";
import { DoctorCardSkeletonGrid } from '../../../../components/Skeletons/DoctorCardSkeleton';

export default function ServiceDoctors({ service }: { service: any }) {
    const [doctors, setDoctors] = useState<DoctorResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Get service name from either local data (title) or API response (snippet.service_name)
    const serviceName = (service as any).title || (service as any).snippet?.service_name;
    
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                setError(null);
                const doctorsData = await getDoctors();
                setDoctors(doctorsData);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : 'Failed to load doctors';
                setError(errorMsg);
                console.error('Error fetching doctors:', err);
            } finally {
                setLoading(false);
            }
        };

        if (serviceName) {
            fetchDoctors();
        }
    }, [serviceName]);
    
    // Filter doctors who specialize in this service (case-insensitive, exact match)
    const serviceDoctors = serviceName
        ? doctors.filter(doctor =>
            doctor.programs_and_specialty?.some(specialty =>
                specialty && specialty.toLowerCase() === serviceName.toLowerCase()
            )
        )
        : [];


    if (loading) {
        return (
            <div id="doctors" className="bg-[#0C2141] px-[16px] py-[60px] lg:px-[80px] lg:py-[80px]">
                <div className="mb-[40px] lg:mb-[60px]">
                    <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-white uppercase">
                        Our Doctors
                    </p>
                    <h2 className="text-[24px] tracking-[-0.5px] lg:text-[40px] leading-[40px] lg:tracking-[-1.8px] font-medium text-white">
                        You are in Good Hands
                    </h2>
                </div>
                <DoctorCardSkeletonGrid />
            </div>
        );
    }

    if (error) {
        return (
            <div id="doctors" className="bg-[#0C2141] px-[16px] py-[60px] lg:px-[80px] lg:py-[80px]">
                <p className="text-red-400">Failed to load doctors. Please try again.</p>
            </div>
        );
    }

    if (serviceDoctors.length === 0) {
        return null;
    }

    return (
        <div id="doctors" className="bg-[#0C2141] px-[16px] py-[60px] lg:px-[80px] lg:py-[80px]">
            <div className="mb-[40px] lg:mb-[60px]">
                <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-white uppercase">
                    Our Doctors
                </p>
                <h2 className="text-[24px] tracking-[-0.5px] lg:text-[40px] leading-[40px] lg:tracking-[-1.8px] font-medium text-white">
                    You are in Good Hands
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceDoctors.map((doc) => (
                    <div key={doc.id} className="bg-[#FEF8F5] rounded-[12px] p-[30px] flex flex-col items-center text-center transition h-full flex-grow">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mb-[10px]">
                            <img src={doc.profile_picture_url} alt={doc.full_name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col flex-1 justify-between w-full">
                            <div>
                                <h3 className="text-[16px] font-medium lg:tracking-[-0.5px] text-[#02070D] lg:leading-[26px]">
                                    {doc.full_name}
                                </h3>
                                <p className="text-[14px] text-[#02070D] mt-[10px] leading-[20px]">
                                    {(doc.programs_and_specialty || []).slice(0, 2).join(", ")}
                                </p>
                            </div>
                            <Link
                                to={`/Doctors-Profile/${doc.id}`}
                                state={{ from: 'service', serviceName: serviceName }}
                                className="mt-6 w-[241px] mx-auto align-center lg:w-full text-[14px] leading-[27px] border border-[#02070D] text-[#02070D] font-medium rounded-[48px] py-[8px] hover:bg-gray-900 hover:text-white transition"
                            >
                                View Profile
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
