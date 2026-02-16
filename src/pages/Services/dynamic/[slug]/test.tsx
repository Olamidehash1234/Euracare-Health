export default function Test({ service }: { service: any }) {
    // Handle both local data and API data
    const testSubtitle = (service as any).testSubtitle || 'Tests and Diagnostics';
    const testList = (service as any).testList || (service as any).page?.test_and_diagnostics || [];
    return (
        <div id="tests" className="px-[16px] py-[60px] lg:px-[80px] lg:pt-[80px] lg:pb-[60px]">
            <div className="mb-[30px] lg:mb-[60px]">
                <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-[#02070D] uppercase">
                    Tests and Diagnostics
                </p>
                <h2 className="text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                    {testSubtitle}
                </h2>
            </div>

            <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[20px] lg:gap-y-[40px] lg:gap-x-[25px]">
                {testList?.map((v: string) => (
                    <article
                        key={v}
                        className="pb-[20px] lg:pb-[30px] border-b border-[#676767]"
                    >
                        <div className="flex flex-col">
                            <div className="flex gap-[16px] items-center">
                                <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto"/>
                                <h3 className="text-[14px] lg:text-[16px] font-normal tracking-[-0.5px] leading-[20px] lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                    {v}
                                </h3>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
