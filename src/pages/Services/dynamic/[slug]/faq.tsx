import { useState } from 'react';
import type { ServiceData } from "../../../../data/services";

export default function Faq({ service }: { service: ServiceData }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!service.faqs || service.faqs.length === 0) {
        return null;
    }

    return (
        <div className="px-[10px] py-[60px] mx-[16px] my-[60px] lg:mb-[80px] lg:mx-[80px] rounded-[12px] lg:rounded-[20px] lg:px-[80px] lg:py-[80px] bg-[#0C2141]">
            <div className="mb-[43px] lg:mb-[40px]">
                <p className="text-[20px] pl-[8px] lg-pl-0 lg:text-[40px] lg:leading-[40px] lg:tracking-[-0.8px] leading-[20px] font-medium text-white">
                    FAQs – {service.title}
                </p>
            </div>

            <div className="space-y-[10px]">
                {service.faqs.map((faq, index) => (
                    <div 
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="border-b border-[#676767] hover:cursor-pointer bg-[#F5F5F5] rounded-[12px] py-[20px] px-[10px] lg:py-[24px] lg:px-[40px]"
                    >
                        <button className="w-full flex justify-between items-center text-left">
                            <span className="max-w-[300px] lg:max-w-none text-[14px] lg:text-[16px] font-normal text-[#02070D]">
                                {faq.question}
                            </span>
                            <img 
                                src="/service-d/arrow.svg" 
                                alt="toggle" 
                                className={`transform transition-transform duration-300 h-[24px] w-[24px] lg:w-auto lg:h-auto ${
                                    openIndex === index ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="w-full h-[1px] bg-[#0000004D] lg:my-[20px]"></div>
                        )}
                        {openIndex === index && (
                            <div>
                                <p className="text-[14px] text-[#010202CC] lg:text-[14px] lg:leading-[23px] leading-[24px] lg:leading-[23px]">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
                <div className='lg:pt-[20px]'>
                    <h1 className='text-white text-center text-[22px] lg:text-[52px] tracking-[-1.35px] lg:tracking-[-1.35px] leading-[58.5px] font-medium'>Our Mission is Health, Our Specialty is You!</h1>
                </div>
            </div>
        </div>
    );
}