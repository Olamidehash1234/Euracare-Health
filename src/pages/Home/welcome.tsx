export default function HeroEuracare() {
  // Update to new video ID and parameters
  const videoId = "kSAxFCaC47M";
  const videoSrc = `https://www.youtube.com/embed/${videoId}?si=Q6VFw_wxLDZvBzs2`;

  return (
    <section className="bg-white">
      <div className="px-[16px] lg:px-20">
        <div className="grid items-center gap-[40px] py-[60px] lg:py-20 lg:grid-cols-2 lg:gap-[80px]">
          {/* Text column */}
          <div>
            {/* Headline */}
            <h1 className="text-[#02070D] tracking-tight lg:tracking-[-1.8px]">
              <span className=" text-[24px] lg:text-[44px] font-medium leading-[24px] lg:leading-[44px]">
                Welcome to <br className="hidden lg:block"/> Euracare Nigeria
              </span>
            </h1>

            <div className="mt-[20px] text-justify lg:mt-[40px] text-[#02070D] text-[14px] lg:text-[16px] tracking-[-0.54px] lg:leading-[27px] leading-[20px] space-y-4">
              <p>
                To provide world-class medical services to patients without the
                stress and expense of international travel. To offer corporate
                companies and insurers efficient healthcare solutions for their
                employees and customers. To make available to physicians a
                technologically advanced and optimized work platform.
              </p>
            </div>

            {/* Tagline */}
            <p className="mt-[20px] lg:mt-[40px] font-medium tracking-[-0.84px] text-[18px] leading-[40px] lg:text-[28px] lg:leading-[42px] text-[#02070D]">
              Our Mission is Health, Our Specialty is You!
            </p>
          </div>

          {/* Video column */}
          <div className="w-full">
            <div className="lg:h-[401px] h-[215px] overflow-hidden lg:rounded-[16px] rounded-[8px] shadow-xl bg-black">
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
      </div>
    </section>
  );
}
