import type { ServiceData } from "../../../../data/services";

export default function MedicalContentVideo({ service }: { service: ServiceData }) {

    const videoId = "kSAxFCaC47M";
    const videoSrc = `https://www.youtube.com/embed/${videoId}?si=Q6VFw_wxLDZvBzs2`;

    return (
        <div className="w-full px-4 py-8 lg:py-20 lg:px-[130px]">
            {/* Text Content */}
            <div className="mb-8 lg:mb-[40px]">
                <p className="text-[#02070D] leading-relaxed text-justify text-sm lg:text-[18px] lg:leading-[32px]">
                    {service.overviewText}
                </p>
            </div>

            {/* Video Container */}
            <div className="w-full max-w-5xl mx-auto">
                <div className="lg:h-[500px] h-[270px] overflow-hidden lg:rounded-[16px] rounded-[8px] shadow-xl bg-black">
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
                {/* Optional helper text (hidden for screen readers only if you prefer) */}
                <span className="sr-only">Promotional video about Euracare treatment</span>
            </div>
        </div>
    );
}