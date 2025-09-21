import { useLocation } from 'react-router-dom';
import { services } from '../data/services';

type BreadcrumbProps = {
    doctorName: string;
    serviceName?: string;
};

export default function Breadcrumb({ doctorName }: BreadcrumbProps) {
    const location = useLocation();
    const isFromService = location.state?.from === 'service';
    const serviceTitle = location.state?.serviceName;

    // Find the service slug from the data file for correct path
    let serviceSlug = '';
    if (isFromService && serviceTitle) {
        const service = services.find((s) => s.title.toLowerCase() === serviceTitle.toLowerCase());
        if (service) {
            serviceSlug = service.slug;
        }
    }

    return (
        <div className="bg-[#0C2141] overflow-x-auto lg:overflow-x-visible whitespace-nowrap scrollbar-hide">
            <div className="flex text-white items-center gap-[10px] lg:gap-[12px] px-[16px] py-4 lg:py-[24px] lg:px-20 text-[14px] min-w-max lg:min-w-0">
                <a href="/"><img src="/hme.svg" alt="" /></a>
                <span>|</span>
                <a href="/doctors" className="hover:text-gray-200">Find a Doctor</a>
                <span>|</span>
                {isFromService && serviceTitle && serviceSlug && (
                    <>
                        <a href={`/services/dynamic/${serviceSlug}`} className="hover:text-gray-200">
                            {serviceTitle}
                        </a>
                        <span>|</span>
                    </>
                )}
                <span>{doctorName}</span>
            </div>
        </div>
    );
}
