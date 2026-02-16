import type { ServiceData } from "../../../../data/services";


export default function PatientTestimonials({ service }: { service: ServiceData }) {
    // Only render if there are testimonial videos
    if (!service.testimonialVideoUrl?.length) {
        return null;
    }

    return(
        <div className="px-[16px] pb-[60px] pt-[20px] lg:py-[60px] lg:px-20 ">
            <div>
                <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-[#02070D] uppercase">
                    Patient Testimonials
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-[40px] gap-4">
                {service.testimonialVideoUrl.map((videoUrl, index) => (
                    <div key={index} className="lg:h-[400px] h-[250px] overflow-hidden lg:rounded-[20px] rounded-[8px] bg-black">
                        <iframe
                            className="h-full w-full"
                            src={videoUrl}
                            title={`Patient Testimonial ${index + 1}`}
                            loading="lazy"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <span className="sr-only">Patient testimonial video about Euracare treatment</span>
                    </div>
                ))}
            </div>
        </div>
    )
}