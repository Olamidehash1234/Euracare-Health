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
    <div className="bg-white py-8 px-4 lg:pl-20 lg:pr-0">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          {/* Label */}
          <div className="flex-shrink-0">
            <h3 className="text-gray-800 font-medium text-center text-sm lg:text-base whitespace-nowrap">
              Insurance Partners:
            </h3>
          </div>
          
          {/* Partners Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6 items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-12 lg:h-14 transition-opacity hover:opacity-80"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}