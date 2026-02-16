import type { ServiceData } from "../../../../data/services";

export default function Procedures({ service }: { service: ServiceData }) {
    return (
        <div id="procedures" className="px-[16px] py-[60px] lg:px-[80px] lg:pt-[80px] lg:pb-[0px]">
            {/* Main Procedures */}
            <div className="mb-[60px]">
                <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-[#02070D] uppercase">
                    Treatment & Procedures
                </p>
                <h2 className="text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                    {service.procedureSubtitle}
                </h2>

                <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[20px] lg:gap-y-[40px] lg:gap-x-[25px]">
                    {service.procedureList?.map((v) => (
                        <article key={v} className="pb-[20px] lg:pb-[30px] border-b border-[#676767]">
                            <div className="flex gap-[16px] items-start">
                                <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto"/>
                                <h3 className="text-[14px] lg:text-[16px] font-normal tracking-[-0.5px] leading-[20px] lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                    {v}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Additional Procedures 1 */}
            {service.additionalProcedureList && (
                <div className="mb-[60px]">
                    <h2 className="text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                        {service.additionalProcedureSubtitle}
                    </h2>

                    <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[20px] lg:gap-y-[40px] lg:gap-x-[25px]">
                        {service.additionalProcedureList.map((v) => (
                            <article key={v} className="pb-[20px] lg:pb-[30px] border-b border-[#676767]">
                                <div className="flex gap-[16px] items-start">
                                    <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto"/>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal tracking-[-0.5px] leading-[20px] lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                        {v}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}

            {/* Additional Procedures 2 */}
            {service.additionalProcedureList2 && (
                <div>
                    <h2 className="text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                        {service.additionalProcedureSubtitle2}
                    </h2>

                    <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[20px] lg:gap-y-[40px] lg:gap-x-[25px]">
                        {service.additionalProcedureList2.map((v) => (
                            <article key={v} className="pb-[20px] lg:pb-[30px] border-b border-[#676767]">
                                <div className="flex gap-[16px] items-start">
                                    <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto"/>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal tracking-[-0.5px] leading-[20px] lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                        {v}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
