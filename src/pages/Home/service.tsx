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
                    src="/home/cardiac.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Interventional Cardiology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">Our expert cardiologists provide advanced heart care, from diagnostics to complex interventions. Using the latest technology and evidence-based treatments, we help you protect and restore your heart health with precision and compassion.</p>

                    <Link to="/services/dynamic/interventional-cardiology" className="inline-block mt-auto">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                {/* Antenatal care */}
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/radio.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Interventional Radiology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">We provide cutting-edge, image-guided procedures that diagnose and treat conditions with less discomfort and faster recovery. From targeted therapies to vascular interventions, our Interventional Radiology specialists combine technology and expertise to deliver outstanding outcomes.</p>

                    <Link to="/services/dynamic/interventional-radiology" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/child.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Adult & Pediatric Cardiology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.</p>

                    <Link to="/services/dynamic/adult-pediatric-cardiology" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Bariatric & Weight Loss Surgery
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">Our Bariatric Surgery program supports patients on their weight-loss journey with tailored surgical and non-surgical options. We focus on long-term health improvements, helping reduce obesity-related risks and enhancing overall well-being.</p>

                    <Link to="/services/dynamic/bariatric-weight-loss-surgery" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] h-[399px] flex flex-col justify-end group">
                  <img
                    src="/home/surgery.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      General Surgery
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">Our General Surgery team is skilled in a wide range of procedures, from hernia repairs to complex abdominal surgeries. We prioritize patient safety, careful planning, and post-operative care to promote fast recovery and optimal results</p>

                    <Link to="/services/dynamic/general-surgery" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/gas.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Gastroenterology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">We provide expert care for digestive health, diagnosing and treating conditions of the stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced endoscopic techniques for accurate diagnosis and effective treatment.</p>

                    <Link to="/services/dynamic/gastroenterology" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Orthopedic Surgery
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">Whether it’s a sports injury, joint pain, or complex surgery, our orthopedic specialists and surgeons deliver solutions to restore movement and quality of life. We focus on minimally invasive techniques to help patients regain mobility, reduce pain, and return to active lifestyles with personalized treatment plans.</p>

                    <Link to="/services/dynamic/orthopedic-surgery" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/urology.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Urology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">We offer comprehensive care for urinary tract and reproductive health issues. From kidney stones to prostate conditions, our urologists use advanced diagnostics and tailored treatments for the best possible outcomes.</p>

                    <Link to="/services/dynamic/urology" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/geri.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Family & Geriatric Medicine
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">We provide ongoing, personalized care for every stage of life. Our physicians manage chronic conditions, preventive health, and complex needs of older adults with a focus on quality of life and independence.</p>

                    <Link to="/services/dynamic/family-geriatric-medicine" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/medicine.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      General Medicine

                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">Our General Medicine department delivers expert diagnosis and management of a broad spectrum of health concerns. We coordinate care across specialties, ensuring patients receive timely, effective, and compassionate treatment.</p>

                    <Link to="/services/dynamic/general-medicine" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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
                    src="/home/radio2.jpg"
                    alt="Advanced Cardiac Imaging"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)",
                    }}
                  />
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                  {/* Content */}
                  <div className="relative z-10 p-[20px]">
                    <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
                      Radiology
                    </h3>

                    <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">With advanced imaging technology, our Radiology department offers precise diagnostic services including MRI, CT scans, mammography, and X-rays. We support fast, accurate diagnoses to guide effective treatment plans</p>

                    <Link to="/services/dynamic/radiology" className="inline-block">
                      <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
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

