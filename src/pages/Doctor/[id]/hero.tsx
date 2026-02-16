import type { Doctor } from "../../../data/doctors";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Hero({ doctor }: { doctor: Doctor }) {
    return (
        <section className="w-full bg-white">
            <Breadcrumb 
                doctorName={doctor.name} 
            />

            {/* Main Content */}
            <div className="px-4 lg:px-20 lg:py-[40px] py-8">
                <div className="flex flex-col lg:flex-row lg:gap-[80px]">
                    {/* Left: Doctor Info */}
                    <div className="w-full lg:w-[80%]">
                        <div className="flex flex-row sm:flex-row items-center gap-6 lg:gap-[30px]">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-[68px] h-[68px] lg:size-[220px] rounded-full object-cover"
                            />
                            <div className="flex-1 ">
                                <h1 className="text-[20px] leading-[30px] lg:text-[34px] lg:leading-[40px] font-medium mb-0 lg:mb-[20px]">{doctor.name}</h1>
                                <p className="text-[#02070D] text-[14px] lg:text-[16px] tracking-[0.5px] lg:leading-[24px] mb-0 lg:mb-[20px] ">{doctor.title}</p>
                                <div className="hidden lg:block flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center bg-[#FFF1E0] gap-[8px] px-[16px] py-[8px] rounded-[8px] text-[14px] font-medium text-[#0C2141] lg:leading-[21px]">
                                        <img src="/experience-icon.svg" alt="" className="w-auto h-auto" />
                                        {doctor.yearsOfExperience} years of experience
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden flex items-center gap-2 mb-2 mt-[20px]">
                            <span className="flex w-full mx-auto justify-center items-center bg-[#FFF1E0] gap-[8px] px-[16px] py-[8px] rounded-[8px] text-[14px] font-medium text-[#0C2141] lg:leading-[21px]">
                                <img src="/experience-icon.svg" alt="" className="w-auto h-auto" />
                                {`${doctor.yearsOfExperience ?? 15} years of experience`}
                            </span>
                        </div>

                        {/* Bio */}
                        <div className="mt-[30px] lg:mt-[49px] border-y border-[#ADB4BF] py-[30px] lg:py-[40px]">
                            <p className="text-[#02070D] text-[16px] leading-[1.7] lg:leading-[26px] mb-[10px]">
                                {doctor.bio}
                            </p>
                            <p className="text-[#02070D] text-[16px] leading-[1.7] lg:leading-[26px] mb-[10px]">
                                {doctor.bio2}
                            </p>
                            <p className="text-[#02070D] text-[16px] leading-[1.7] lg:leading-[26px] mb-[10px]">
                                {doctor.bio3}
                            </p>
                            <p className="text-[#02070D] text-[16px] leading-[1.7] lg:leading-[26px]">
                                {doctor.bio4}
                            </p>
                        </div>
                        {/* Info Table */}
                        <div className="mt-[30px] lg:mt-[40px] space-y-[30px] lg:space-y-[40px]">
                            {/* Programs + Specialties */}
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[16px] lg:text-[18px] leading-[28px] mb-[10px] sm:mb-0">
                                    PROGRAMS + SPECIALTIES:
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {Array.isArray(doctor.program)
                                            ? doctor.program.map((item, idx) => <li key={idx}>{item}</li>)
                                            : <li>{doctor.program}</li>}
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />

                            {/* Research Interests */}
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[16px] lg:text-[18px] leading-[28px] mb-[10px] sm:mb-0">
                                    RESEARCH INTERESTS:
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {Array.isArray(doctor.researchInterests)
                                            ? doctor.researchInterests.map((item, idx) => <li key={idx}>{item}</li>)
                                            : <li>{doctor.researchInterests}</li>}
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />

                            {/* Qualifications */}
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="w-[304px] min-w-[304px] uppercase text-[#0C2141] font-medium text-[16px] lg:text-[18px] leading-[28px] mb-[10px] sm:mb-0">
                                    Qualifications:
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {Array.isArray(doctor.degree)
                                            ? doctor.degree.map((item, idx) => <li key={idx}>{item}</li>)
                                            : <li>{doctor.degree}</li>}
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />

                            {/* Training + Education */}
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[16px] lg:text-[18px] leading-[28px] mb-[10px] sm:mb-0">
                                    TRAINING + EDUCATION:
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {Array.isArray(doctor.education)
                                            ? doctor.education.map((item, idx) => <li key={idx}>{item}</li>)
                                            : <li>{doctor.education}</li>}
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-1 border-[#ADB4BF]" />

                            {/* Languages */}
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-[10px] sm:mb-0">
                                    LANGUAGE(S):
                                </div>
                                <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                    {doctor.languages ? doctor.languages.join(", ") : "English"}
                                </div>
                            </div>

                            {doctor.certifications && (
                                <div>
                                    <hr className="my-1 border-[#ADB4BF]" />

                                    {/* certifications */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-[10px] sm:mb-0">
                                            CERTIFICATION(S):
                                        </div>
                                        <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {Array.isArray(doctor.certifications)
                                                    ? doctor.certifications.map((item, idx) => <li key={idx}>{item}</li>)
                                                    : <li>{doctor.certifications}</li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {doctor.associations && (
                                <div>
                                    <hr className="my-1 border-[#ADB4BF]" />

                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <div className="w-[304px] min-w-[304px] text-[#0C2141] font-medium text-[14px] lg:text-[18px] lg:leading-[28px] mb-[10px] sm:mb-0">
                                            PROFESSIONAL ASSOCIATION(S):
                                        </div>
                                        <div className="flex-1 text-[#0C2141] text-[16px] lg:leading-[27px]">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {Array.isArray(doctor.associations)
                                                    ? doctor.associations.map((item, idx) => <li key={idx}>{item}</li>)
                                                    : <li>{doctor.associations}</li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Sticky Buttons */}
                    <div className="w-full  mt-8 lg:mt-[86px] lg:w-[20%] flex-shrink-0">
                        <div className="lg:sticky lg:top-[165px] flex flex-col gap-[10px] bg-[#EFF8F8] rounded-[12px] p-[25px] lg:p-[30px]">
                            <a href="/enquiry">
                                <button className="w-full bg-[#0C2141] text-white rounded-[12px] lg:rounded-[48px] py-[10px] lg:py-[14px] font-medium text-[16px] lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] hover:bg-[#0C2141]/90 transition">
                                    Book now
                                </button>
                            </a>
                            <a href="tel: +2349094444413">
                                <button className="w-full border border-[#0C2141] text-[#0C2141] rounded-[12px] lg:rounded-[48px] py-[10px] lg:py-[14px] font-medium text-[16px] lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] flex items-center justify-center gap-[10px] hover:bg-gray-50 transition">
                                    <img src="/call.svg" alt="" />
                                    Call to book
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
