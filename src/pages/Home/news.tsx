import { Link } from "react-router-dom";

const EuracareNews = () => {
  const newsItems = [
    {
      date: "Apr 8, 2025",
      title: "Interventional Radiology – Surgery Without the Scalpel",
      category: "Interventional Radiology",
      anchor: "interventional-radiology"
    },
    {
      date: "Feb 19, 2025",
      title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
      category: "Orthopedic Surgery",
      anchor: "orthopedic-surgery"
    },
    {
      date: "Feb 17, 2025",
      title: "Visiting Consultants – Global Expertise in Lagos",
      category: "International Patients",
      anchor: "visiting-consultants"
    },
    {
      date: "Apr 8, 2025",
      title: "Interventional Cardiology – Saving Lives Without Open Surgery",
      category: "Interventional Cardiology",
      anchor: "interventional-cardiology"
    },
  ];

  const additionalNews = [
    {
      date: "Feb 6, 2025",
      title: "Bariatric Surgery – More Than Weight Loss",
      category: "Mental Health / Psychiatry",
      anchor: "bariatric-surgery"
    },
    {
      date: "Mar 13, 2025",
      title: "Breast Surgery – Expertise with Compassion",
      category: "Gynaecology",
      anchor: "breast-surgery"
    },
  ];

  return (
    <div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
      <div className="">
        <h1 className="text-[24px] leading-[30px] tracking-[-0.5px] lg:text-[40px] lg:leading-[40px] font-medium lg:tracking-[-0.8px] text-[#02070D]">
          Latest Updates from Euracare
        </h1>

        <p className="mt-[10px] max-w-[900px] text-[14px] lg:text-[16px] lg:leading-[24px] mb-6 lg:mb-[60px]">Stay informed with the latest from Euracare—from expert health tips and breakthrough procedures to events, medical milestones, and stories that shape the future of healthcare in Nigeria.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[16px]">
          {/* Featured Article - Takes up 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-sm h-full">
              {/* Featured Image */}
              <div className="relative h-[200px] lg:h-[300px]">
                <img
                  src="/home/heart.jpg"
                  alt="Woman in striped shirt in modern interior setting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Featured Content with Dark Overlay */}
              <Link to="/home/news#world-heart-day">
                <div className=" bg-[#0C2141] text-white p-[20px] lg:p-[30px] cursor-pointer hover:bg-[#142e4d] transition">
                  <p className="text-[12px] lg:text-[16px] text-white leading-[24px] tracking-[-0.48px] mb-[20px] lg:mb-[20px]">Mar 13, 2025</p>
                  <h2 className="text-[20px] leading-[28px] tracking-[-1px] lg:text-[45px] lg:tracking-[1.35px] lg:leading-[58.5px] font-medium leading-tight mb-[40px] lg:mb-[135px]">
                    World Heart Day – Protecting What Matters Most
                  </h2>
                  <div className="text-xs lg:text-[16px] lg:leading-[24px] text-white">Gynaecology</div>
                </div>
              </Link>
            </div>
          </div>

          {/* News Grid - Takes up 3 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-[16px] h-full">
              {newsItems.map((item, index) => (
                <Link key={index} to={`/home/news#${item.anchor}`}>
                  <div 
                    className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between h-full"
                    style={{ minHeight: 0, height: "100%" }}
                  >
                    <div>
                      <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                        {item.date}
                      </p>
                      <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] sm:mb-[104px]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                      {item.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[16px]">
          {additionalNews.map((item, index) => (
            <Link key={index} to={`/home/news#${item.anchor}`}>
              <div
                className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group justify-between flex flex-col h-full"
                style={{ minHeight: 0, height: "100%" }}
              >
                <div>
                  <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                    {item.date}
                  </p>
                  <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] lg:mb-[104px]">
                    {item.title}
                  </h3>
                </div>
                <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                  {item.category}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Link to="/home/news">
            <button className=" mt-[40px] rounded-[48px] lg:tracking-[-0.54px] lg:text-[18px] lg:leading-[27px] w-full lg:w-auto bg-[#0C2141] hover:bg-[#0B1F37] transition text-white py-[14px] px-[70px]">
              Read More News
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EuracareNews;