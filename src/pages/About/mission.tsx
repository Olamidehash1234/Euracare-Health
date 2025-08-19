export default function MissionVision() {
  const items = [
    {
      text: "To offer corporate companies and insurers efficient healthcare solutions for their employees and customers",
    },
    {
      text: "To provide world-class medical services to patients without the stress and expense of international travel.",
    },
    {
      text: "To make available to physicians a technologically advanced and optimized work platform.",
    },
  ];

  return (
    <section className="bg-white text-[#0B1F3B]">
      <div className="px-4 lg:px-20 py-12 lg:py-20">
        {/* Eyebrow */}
        <p className="text-xs lg:text-[14px] font-medium lg:leading-[20px] uppercase text-[#0C2141]">
          Euracare Mission and Vision
        </p>

        {/* Main Heading */} 
        <h1 className="text-[24px] lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px] max-w-[719px]">
          Our mission is to commit to the care and
          <br className="hidden sm:block" />
          improvement of human life above all else.
        </h1>

        {/* Cards */}
        <div className="mt-10 lg:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[25px]">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-t-2xl bg-[#FEF8F5] border-b-[4px] border-[#0C2141] p-5 lg:px-[20px] lg:py-[40px] shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <p className="text-sm lg:text-[16px] lg:tracking-[-0.4px] lg:leading-[24px] leading-relaxed text-[#1F2A44]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Big Quote / Vision */}
        <div className="mt-14 lg:mt-[60px]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[28px] lg:text-[56px] font-medium lg:leading-[60px] tracking-tight lg:tracking-[-1.8px]">
              <span aria-hidden className="pr-2">
                “
              </span>
              To become the private healthcare provider of choice by delivering patient-centric and result-driven specialist services. 
              <span aria-hidden className="pl-1">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
