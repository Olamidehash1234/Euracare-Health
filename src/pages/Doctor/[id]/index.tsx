import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDoctorById } from "../../../services/doctorService";
import { transformDoctor } from "../../../utils/dataTransform";
import type { DoctorResponse } from "../../../types/api-responses";
import type { Doctor } from "../../../data/doctors";
import Hero from "./hero";
import { DoctorDetailSkeleton } from '../../../components/Skeletons/DoctorDetailSkeleton';

export default function DoctorProfilePage() {
    const { id } = useParams<{ id: string }>();
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchDoctor = async () => {
            try {
                setLoading(true);
                setError(null);
                const doctorData: DoctorResponse = await getDoctorById(id);
                const transformedDoctor = transformDoctor(doctorData);
                setDoctor(transformedDoctor as any);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : 'Failed to load doctor';
                setError(errorMsg);
                console.error('Error fetching doctor:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctor();
    }, [id]);

    if (loading) {
        return <DoctorDetailSkeleton />;
    }

    if (error || !doctor) {
        return (
            <div className="p-10 text-center">
                <p className="text-red-600">{error || 'Doctor not found.'}</p>
                <a href="/doctors" className="text-blue-600 hover:underline mt-4 inline-block">
                    Back to Doctors
                </a>
            </div>
        );
    }

    return (
        <div>
            <Hero doctor={doctor} />
        </div>
    );
}
