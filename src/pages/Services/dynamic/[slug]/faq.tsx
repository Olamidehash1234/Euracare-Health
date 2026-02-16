import { useState } from 'react';
export default function Faq({ service }: { service: any }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const title = (service as any).title || (service as any).snippet?.service_name || 'Service';
    const faqs = (service as any).faqs || [];

    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="px-[10px] py-[60px] my-[40px] lg:my-[80px] lg:mb-[80px] lg:mx-[80px] rounded-[0px] lg:rounded-[20px] lg:px-[80px] lg:py-[80px] bg-[#0C2141]">
            <div className="mb-[43px] lg:mb-[40px]">
                <p className="text-[20px] pl-[8px] lg-pl-0 lg:text-[40px] lg:leading-[40px] lg:tracking-[-0.8px] leading-[20px] font-medium text-white">
                    FAQs – {title}
                </p>
            </div>

            <div className="space-y-[10px]">
                {faqs.map((faq: any, index: number) => (
                    <div
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="border-b border-[#676767] hover:cursor-pointer bg-[#F5F5F5] rounded-[12px] py-[20px] px-[16px] lg:py-[24px] lg:px-[40px]"
                    >
                        <button className="w-full flex justify-between items-center text-left">
                            <span className="max-w-[260px] lg:max-w-none text-[14px] lg:text-[16px] font-normal text-[#02070D]">
                                {faq.question}
                            </span>
                            <img
                                src="/service-d/arrow.svg"
                                alt="toggle"
                                className={`transform transition-transform duration-300 h-[24px] w-[24px] lg:w-auto lg:h-auto ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="w-full h-[1px] bg-[#0000004D] my-[10px] lg:my-[20px]"></div>
                        )}
                        {openIndex === index && (
                            <div>
                                <p className="text-[14px]  text-[#010202CC] lg:text-[14px] lg:leading-[23px] leading-[24px] lg:leading-[23px]">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

                {service.buttonText && (
                    <div className='pt-[20px] lg:pt-[40px]'>
                        <a href="https://euracarehealth.com/wp-content/uploads/2020/12/A-GUIDE-TO-BARIATRIC-SURGERY.pdf">
                            <button className='bg-transparent text-white w-full lg:w-auto py-[16px] px-[24px] rounded-[48px] border-[1px] border-white text-[14px]'>{service.buttonText}</button>
                        </a>
                    </div>
                )}

                <div className='lg:pt-[20px]'>
                    <h1 className='text-white text-center text-[20px] lg:text-[52px] tracking-[-1.35px] lg:tracking-[-1.35px] leading-[58.5px] font-medium'>Our Mission is Health, Our Specialty is You!</h1>
                </div>
            </div>
        </div>
    );
}