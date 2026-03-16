import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useDoctorById } from "../../../hooks/useDoctors";
import { transformDoctor } from "../../../utils/dataTransform";
import { Link } from "react-router-dom";
// import type { Doctor } from "../../../data/doctors";
import Hero from "./hero";
import { DoctorDetailSkeleton } from '../../../components/Skeletons/DoctorDetailSkeleton';

export default function DoctorProfilePage() {
    const { id } = useParams<{ id: string }>();
    
    // Use TanStack Query hook for caching
    const { data: doctorData, isLoading: loading, error: queryError } = useDoctorById(id);
    
    const error = queryError ? (queryError instanceof Error ? queryError.message : 'Failed to load doctor') : null;
    const doctor = doctorData ? (transformDoctor(doctorData) as any) : null;

    if (loading) {
        return <DoctorDetailSkeleton />;
    }

    if (error || !doctor) {
        return (
            <div className="p-10 text-center">
                <p className="text-red-600">{error || 'Doctor not found.'}</p>
                <Link to="/doctors" className="text-blue-600 hover:underline mt-4 inline-block">
                    Back to Doctors
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Hero doctor={doctor} />
        </div>
    );
}
