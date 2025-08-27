import type { Doctor } from "../../../data/doctors";

export default function Hero({ doctor }: { doctor: Doctor }) {
    return (
        <section className="w-full bg-white">
            {/* Breadcrumb */}
            <div className="flex text-white bg-[#0C2141] items-center gap-2 lg:gap-[12px] py-4 lg:py-[24px] lg:px-20 text-sm">
                <a href="/"><img src="/hme.svg" alt="" /></a>
                <span>|</span>
                <a href="/doctors" className="hover:text-gray-200">Find a Doctor</a>
                <span>|</span>
                <span>Dermatology</span>
                <span>|</span>
                <span>{doctor.name}</span>
            </div>

            {/* Main Content */}
            <div className="px-4 lg:px-20 lg:py-[40px] py-8">
                <div className="flex flex-col lg:flex-row lg:gap-[80px]">
                    {/* Left: Doctor Info */}
                    <div className="w-full lg:w-[80%]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-[30px]">
                            <img
                                src={doctor.profileImg}
                                alt={doctor.name}
                                className="w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <h1 className="text-[14px] lg:text-[34px] lg:leading-[40px] font-medium mb-2 lg:gap-[20px]">{doctor.name}</h1>
                                <p className="text-[#02070D] text-[16px] tracking-[0.5px] lg:leading-[24px] mb-4 lg:gap-[20px]">{doctor.title || "Consulting Vascular and Interventional Radiologist"}</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center bg-[#FFF1E0] gap-[8px] px-[16px] py-[8px] rounded-[8px] text-[14px] font-medium text-[#0C2141] lg:leading-[21px]">
                                        <img src="/experience-icon.svg" alt="" className="w-auto h-auto" />
                                        {doctor.yearsOfExperience
                                            ? `${doctor.yearsOfExperience} years of experience`
                                            : "25 years of experience"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Bio */}
                        <div className="mt-8 lg:mt-[49px] border-y border-[#ADB4BF] pt-6 lg:py-[40px]">
                            <p className="text-[#02070D] text-[16px] leading-[1.7] lg:leading-[26px]">
                                {doctor.bio ||
                                    "Dr. Hammed Ninalowo, is a US trained Vascular and Interventional Radiologist who completed his training at the prestigious University of Pennsylvania and is the first US trained Physician to offer the full spectrum of interventional Radiology services in Nigeria. He obtained his medical degree at the University of Illinois and graduated at the top of his class with honors(Alpha Omega Alpha). He has a passion for improving access to Minimally invasive therapies in the West African Population."
                                }
                            </p>
                        </div>
                        {/* Info Table */}
                        <div className="mt-8 lg:mt-[40px] space-y-6 lg:space-y-[40px]">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-1 sm:mb-0">PROGRAMS + SPECIALTIES:</div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px] lg:tracking-[-0.54px]">{doctor.title || "Consulting Vascular and Interventional Radiologist"}</div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-1 sm:mb-0">RESEARCH INTERESTS:</div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px] lg:tracking-[-0.54px]">{doctor.researchInterests || "Minimally invasive oncology treatments and fibroid disease"}</div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-1 sm:mb-0">DEGREE:</div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px] lg:tracking-[-0.54px]">{doctor.degree || "MD"}</div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-1 sm:mb-0">
                                    TRAINING + EDUCATION:
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px] lg:tracking-[-0.54px]">
                                    {doctor.education}
                                </div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-1 sm:mb-0">LANGUAGE(S):</div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px] lg:tracking-[-0.54px]">{doctor.languages ? doctor.languages.join(", ") : "English"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sticky Buttons */}
                    <div className="w-full  mt-8 lg:mt-[86px] lg:w-[20%] flex-shrink-0">
                        <div className="lg:sticky lg:top-[165px] flex flex-col gap-4 lg:gap-[10px] bg-[#EFF8F8] rounded-[12px] p-[30px]">
                            <button className="w-full bg-[#0C2141] text-white lg:rounded-[48px] py-[14px] font-medium text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] hover:bg-[#0C2141]/90 transition">
                                Book now
                            </button>
                            <button className="w-full border border-[#0C2141] text-[#0C2141] lg:rounded-[48px] py-[14px] font-medium text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] flex items-center justify-center gap-[10px] hover:bg-gray-50 transition">
                                <img src="/call.svg" alt="" />
                                Call to book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
