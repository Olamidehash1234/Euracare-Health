import { Link } from 'react-router-dom';

export default function ServiceLines() {
  return (
    <section className="relative w-full bg-[#0C2141] text-white">
      <div className="px-4 lg:px-20">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 justify-between">
          {/* Left: Sticky text area */}
          <div className="flex">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-[60px] lg:pt-[260px] lg:mb-[260px]">
              <div className="lg:max-w-[460px]">
                <p className="mb-0 lg:mb-[20px] uppercase font-medium text-[14px] leading-[20px] text-white">
                  Our Services
                </p>
                <h2 className="text-[24px] sm:text-4xl lg:text-[40px] font-medium leading-[40px] lg:leading-[40px] lg:tracking-[-1.8px] tracking-tight text-white">
                  Excellence in Every Specialty
                </h2>

                <p className="mt-[20px] text-justify lg:mt-[40px] font-normal text-[14px] lg:leading-[22px] leading-[20px] text-white">
                  At Euracare, we offer a full spectrum of medical services designed for individuals who expect nothing less than excellence. From advanced diagnostics to minimally invasive procedures and complex surgeries, every service is delivered by specialists with global training and deep local insight. Whether you need preventive care or a second opinion on a serious condition, our multidisciplinary teams work collaboratively to deliver clear answers, rapid access, and the highest level of medical precision.
                </p>

                <a href="/services">
                  <button
                    className="mt-[40px] w-full lg:w-auto justify-center lg:mt-[80px] lg:text-[16px] inline-flex items-center gap-[8px] rounded-full border border-[#F8F8F8] px-5 py-3 lg:px-[96px] lg:py-[22px] text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <img src="/home/search2.svg" alt="" />
                    <span>
                      View all <span className="font-bold">Services</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col lg:flex-row pb-16 lg:pb-[80px] gap-[16px]">
            <div className="flex flex-col lg:flex lg:flex-col sm:grid sm:grid-cols-3 gap-[20px] lg:py-[220px]">
              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/cardiac.png"
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
                    <Link to="/services/dynamic/advanced-cardiac-imaging" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/back.png"
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
                    <Link to="/services/dynamic/back-spine-surgery" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/dentist.png"
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
                    <Link to="/services/dynamic/dentistry" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex lg:flex-col sm:order-1 sm:grid sm:grid-cols-3 gap-[20px] lg:pt-[80px]">
              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/postnatal.png"
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
                    <Link to="/services/dynamic/antenatal-postnatal-care" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/weight.png"
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
                    <Link to="/services/dynamic/bariatric-weight-loss-surgery" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="hidden lg:flex relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/dermatology.png"
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
                    <Link to="/services/dynamic/dermatology" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Advanced Cardiac Imaging Card */}
                <div className="hidden lg:flex relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/dermatology.png"
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
                    <Link to="/services/dynamic/ear-nose-throat-ent" className="inline-block">
                      <button className="border border-white rounded-full px-[30px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
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

