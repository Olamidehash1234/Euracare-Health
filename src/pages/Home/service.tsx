export default function ServiceLines() {
  return (
    <section className="relative w-full bg-[#0C2141] text-white">
      <div className="px-4 lg:px-20">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 justify-between">
          {/* Left: Sticky text area */}
          <div className="flex">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-[60px] lg:pt-[260px] lg:mb-[260px]">
              <div className="lg:max-w-[448px]">
                <p className="mb-0 lg:mb-[20px] uppercase font-medium text-[14px] leading-[20px] text-white">
                  Our Service Lines
                </p>
                <h2 className="text-[24px] sm:text-4xl lg:text-[40px] font-medium leading-[40px] lg:leading-[40px] lg:tracking-[-1.8px] tracking-tight text-white">
                  Access specialised
                  <br className="hidden lg:block" /> care
                </h2>

                <p className="mt-[20px] text-justify lg:mt-[40px] font-normal text-[14px] lg:leading-[22px] leading-[20px] text-white">
                  We offer specialised care across all areas of medicine to
                  treat a broad range of conditions, including those that are
                  very rare. Our experts collaborate on multidisciplinary teams
                  to share knowledge and offer holistic and tailored treatment
                  plans.
                </p>

                <button
                  className="mt-[40px] w-full lg:w-auto justify-center lg:mt-[80px] lg:text-[16px] inline-flex items-center gap-[8px] rounded-full border border-[#F8F8F8] px-5 py-3 lg:px-[96px] lg:py-[22px] text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <img src="/home/search2.svg" alt="" />
                  <span>
                    View all <span className="font-bold">Services</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col lg:flex-row pb-16 lg:pb-[80px] gap-[16px]">
            <div className="flex flex-col gap-[20px] lg:py-[260px]">
              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Advanced Cardiac <br className="hidden lg:block" /> Imaging
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Back & Spine <br className="hidden lg:block" />
                      Surgery
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Dentistry
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] lg:pt-[80px]">
              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Antenatal & Postnatal <br className="hidden lg:block" />
                      Care
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Bariatric & Weight Loss <br className="hidden lg:block" />
                      Surgery
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Dermatology
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px]  shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=400&auto=format&fit=crop"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[10px] leading-[24px]">
                      Ear, Nose and Throat <br className="hidden lg:block" /> (ENT)
                    </h3>
                    <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

