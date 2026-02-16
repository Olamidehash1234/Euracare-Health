import { getYoutubeEmbedUrl } from '../../../../utils/youtubeId';

export default function MedicalContentVideo({ service }: { service: any }) {
    // Handle both local data and API data
    const overviewText = (service as any).overviewText || (service as any).page?.service_overview || '';
    const additionalOverview = (service as any).additionalOverview || '';
    const additionalOverview2 = (service as any).additionalOverview2 || '';
    const additionalOverview3 = (service as any).additionalOverview3 || '';
    
    // Accept multiple video URLs (array)
    let videoUrls: string[] = [];
    if ((service as any).videoUrls) {
        videoUrls = Array.isArray((service as any).videoUrls) ? (service as any).videoUrls : [(service as any).videoUrls];
    } else if ((service as any).page?.video_url) {
        videoUrls = [(service as any).page.video_url];
    }
    const videoCount = videoUrls.length;

    return (
        <div id="overview" className="w-full px-4 py-8 lg:py-20 lg:px-[130px]">
            {/* Text Content */}
            <div className="mb-[40px]">
                <p className="text-[#02070D]  leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {overviewText}
                </p>

                {additionalOverview && <p className="text-[#02070D] mt-[16px] leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {additionalOverview}
                </p>}

                {additionalOverview2 && <p className="text-[#02070D] mt-[16px] leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {additionalOverview2}
                </p>}

                {additionalOverview3 && <p className="text-[#02070D] mt-[16px] leading-[20px] text-justify text-[14px] lg:text-[18px] lg:leading-[32px]">
                    {additionalOverview3}
                </p>}
            </div>

            {/* Video Container - Only show if there are videos */}
            {videoCount > 0 && (
                <div
                    className={
                        videoCount === 2
                            ? "w-full max-w-none mx-auto lg:flex lg:gap-8"
                            : "w-full max-w-5xl mx-auto"
                    }
                >
                    {videoUrls.map((url, idx) => (
                        <div
                            key={idx}
                            className="lg:h-[500px] h-[215px] overflow-hidden lg:rounded-[16px] rounded-[8px] bg-black flex-1"
                        >
                            <iframe
                                className="h-full w-full"
                                src={getYoutubeEmbedUrl(url)}
                                title={`YouTube video player ${idx + 1}`}
                                loading="lazy"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    ))}
                    <span className="sr-only">Promotional video about Euracare treatment</span>
                </div>
            )}
        </div>
    );
}