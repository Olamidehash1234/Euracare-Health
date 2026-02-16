export default function InsurancePartners() {
  const partners = [
    {
      name: "AXA Mansard",
      logo: (
        <img src="/partners/axa.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Henner",
      logo: (
        <img src="/partners/henner.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "BUPA International",
      logo: (
        <img src="/partners/bupa.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "MetLife",
      logo: (
       <img src="/partners/metlife.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Global Benefits Group",
      logo: (
        <img src="/partners/global.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "MSH",
      logo: (
        <img src="/partners/msh.png" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Geo",
      logo: (
        <img src="/partners/goe.jpg" alt="" className="w-auto h-auto object-cover" />
      )
    }
  ];

  return (
    <div className="bg-white py-[40px] px-4 lg:pl-20 lg:pr-0 overflow-x-hidden">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          {/* Label */}
          <div className="flex-shrink-0">
            <h3 className="text-gray-800 font-medium text-center text-sm lg:text-base whitespace-nowrap">
              Insurance Partners:
            </h3>
          </div>
          
          {/* Partners Marquee */}
          <div className="flex-1">
            <div className=" overflow-x-hidden scrollbar-hide pr-4 lg:pr-8">
              <div className="flex items-center gap-[40px] lg:gap-[94px] animate-marquee whitespace-nowrap">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-auto lg:h-auto transition-opacity hover:opacity-80 min-w-[150px]"
                  >
                    {partner.logo}
                  </div>
                ))}
                {/* Duplicate for seamless marquee */}
                {partners.map((partner, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex items-center justify-center h-auto lg:h-auto transition-opacity hover:opacity-80 min-w-[150px]"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}