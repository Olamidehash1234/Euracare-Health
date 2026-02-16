import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { services } from "../../../../data/services";
import { getServiceById } from "../../../../services/serviceService";
import { ServiceDetailSkeleton } from "../../../../components/Skeletons/ServiceDetailSkeleton";
import Hero from "./hero";
import Button from "./button"
import Overview from './overview'
import Doctor from './doctors'
import Test from './test';
import Conditions from './conditions';
import Faq from './faq'
import Procedures from './procedures'
import PatientTestimonials from './patientTestimonials'

export default function ServiceDynamicPage() {
    const { slug } = useParams<{ slug: string }>();
    const [apiService, setApiService] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const localService = services.find(s => s.slug === slug);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                // slug param is actually the ID since ServiceCard now uses ID
                if (typeof slug === 'string') {
                    const service = await getServiceById(slug);
                    setApiService(service);
                }
            } catch (error) {
                // console.error('Error fetching service:', error);
                setApiService(null);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchService();
        }
    }, [slug]);

    if (loading) {
        return <ServiceDetailSkeleton />;
    }

    // Use API service if available, fallback to local data
    const service = apiService || localService;

    if (!service) {
        return <div className="p-10 text-center">Service not found.</div>;
    }

    return (
        <div>
            <Hero service={service} />
            <Button />
            <Overview service={service} />
            <Doctor service={service} />
            <Conditions service={service} />
            <Test service={service} />
            <Procedures service={service} />
            <Faq service={service} />
            <PatientTestimonials service={service} />
        </div>
    );
}
