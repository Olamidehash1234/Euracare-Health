import type { ServiceData } from "../../../../data/services";

export default function MedicalContentVideo({ service }: { service: ServiceData }) {
    const videoSrc = service.videoUrl 
        ? `https://www.youtube.com/embed/${service.videoUrl}?si=Q6VFw_wxLDZvBzs2`
        : undefined;

    return (
        <div id="overview" className="w-full px-4 py-8 lg:py-20 lg:px-[130px]">
            {/* Text Content */}
            <div className="mb-[40px]">
                <p className="text-[#02070D]  leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {service.overviewText}
                </p>

                <p className="text-[#02070D] mt-[16px] leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {service.additionalOverview}
                </p>

                <p className="text-[#02070D] mt-[16px] leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {service.additionalOverview2}
                </p>
            </div>

            {/* Video Container - Only show if videoUrl exists */}
            {videoSrc && (
                <div className="w-full max-w-5xl mx-auto">
                    <div className="lg:h-[500px] h-[215px] overflow-hidden lg:rounded-[16px] rounded-[8px] bg-black">
                        <iframe
                            className="h-full w-full"
                            src={videoSrc}
                            title="YouTube video player"
                            loading="lazy"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <span className="sr-only">Promotional video about Euracare treatment</span>
                </div>
            )}
        </div>
    );
}