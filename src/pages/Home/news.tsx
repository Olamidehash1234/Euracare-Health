const EuracareNews = () => {
  const newsItems = [
    {
      date: "Apr 8, 2025",
      title: "Sleep Therapy: The Secret to a Healthier Mind and Body",
      category: "Mental Health / Psychiatry"
    },
    {
      date: "Apr 8, 2025", 
      title: "Euracare Launches Advanced Cardiac Imaging Suite in Lagos",
      category: "Cardiology / Medical Technology"
    },
    {
      date: "Feb 19, 2025",
      title: "Euracare Now Offers Specialist Rehabilitation Medicine and Physical Therapy", 
      category: "Mental Health / Psychiatry"
    },
    {
      date: "Feb 17, 2025",
      title: "Euracare Partners with International Insurance Providers for Seamless Patient Experience",
      category: "International Patients"
    },
  ];

  const additionalNews = [
    {
      date: "Feb 6, 2025",
      title: "Comprehensive Antenatal & Postnatal Care Program for Expecting Mothers",
      category: "Mental Health / Psychiatry"
    },
    {
      date: "Apr 21, 2024",
      title: "Euracare Introduces One-Day Health Check Packages for Busy Professionals",
      category: "General Medicine"
    },
  ];

  return (
    <div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
      <div className="">
        <h1 className="text-[24px] leading-[30px] tracking-[-0.5px] lg:text-[40px] lg:leading-[40px] font-medium lg:tracking-[-0.8px] text-[#02070D] mb-6 lg:mb-[60px]">
          Latest from Euracare
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[16px]">
          {/* Featured Article - Takes up 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-sm h-auto">
              {/* Featured Image */}
              <div className="relative h-[200px] lg:h-[260px]">
                <img
                  src="/home/woman.png"
                  alt="Woman in striped shirt in modern interior setting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Featured Content with Dark Overlay */}
              <div className=" bg-[#0C2141] text-white p-[20px] lg:p-[30px]">
                <p className="text-[12px] lg:text-[16px] text-white leading-[24px] tracking-[-0.48px] mb-[20px] lg:mb-[20px]">Mar 13, 2025</p>
                <h2 className="text-[20px] leading-[28px] tracking-[-1px] lg:text-[45px] lg:tracking-[1.35px] lg:leading-[58.5px] font-medium leading-tight mb-[40px] lg:mb-[106px]">
                  Understanding The Most Common Gynaecological Conditions: What Every Woman Should Know
                </h2>
                <div className="text-xs lg:text-[16px] lg:leading-[24px] text-white">Gynaecology</div>
              </div>
            </div>
          </div>

          {/* News Grid - Takes up 3 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-[16px] h-full">
              {newsItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                      {item.date}
                    </p>
                    <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] sm:mb-4">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[16px]">
          {additionalNews.map((item, index) => (
            <div key={index} className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group justify-between">
              <div>
                <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                  {item.date}
                </p>
                <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] lg:mb-[102px]">
                  {item.title}
                </h3>
              </div>
              <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className=" mt-[40px] rounded-[48px] lg:tracking-[-0.54px] lg:text-[18px] lg:leading-[27px] w-full lg:w-auto bg-[#0C2141] hover:bg-[#0B1F37] transition text-white py-[14px] px-[70px]">
            Read More News
          </button>
        </div>
      </div>
    </div>
  );
};

export default EuracareNews;