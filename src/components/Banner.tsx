const Banner = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#0C2141] text-white text-center lg:py-[16px] py-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
      {/* Marquee for mobile, static for desktop */}
      <div className="relative w-full">
        <div className="block lg:hidden w-full overflow-x-hidden">
          <div className="animate-marquee inline-block min-w-full">
            <h1 className="px-[16px] font-normal text-[12px] lg:text-[15px] lg:leading-[20px] inline-block">
              For enquiries and booking, kindly call{" "}
              <span className="hover:underline underline-offset-[4px]">
                <a href="tel: +2349094444413"> +234 909 444 4413</a>
              </span>{" "}
              or send an email to{" "}
              <span className="hover:underline underline-offset-[4px]">
                <a href="mailto:info@euracarenigeria.com">info@euracarenigeria.com</a>
              </span>
            </h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="px-[16px] font-normal text-[12px] lg:text-[15px] lg:leading-[20px] inline-block">
            For enquiries and booking, kindly call{" "}
            <span className="hover:underline underline-offset-[4px]">
              <a href="tel: +2349094444413"> +234 909 444 4413</a>
            </span>{" "}
            or send an email to{" "}
            <span className="hover:underline underline-offset-[4px]">
              <a href="mailto:info@euracarenigeria.com">info@euracarenigeria.com</a>
            </span>
          </h1>
        </div>
      </div>
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Banner;