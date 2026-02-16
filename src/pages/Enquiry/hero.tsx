export default function Hero() {

    return (
        <section className=" bg-[#0C2141] relative w-full lg:pt-[0px]">

            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[60px] flex align-center items-center">
                <div className="w-full lg:w-[685px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium leading-[30px] mb-[12px] lg:leading-[63px] tracking-tight lg:tracking-[-1.5px] text-[32px] lg:text-[54px]">
                        Enquiry Form
                    </h1>
                    <div className="space-y-[20px]">
                        <p className="text-white leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] tracking-[0.5px]">If your query is urgent please contact us via the phone number for the fastest response</p>
                        <p className="text-white leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] tracking-[0.5px]">For general enquiries and appointments, please contact the hospital on <span className="font-bold hover:underline underline-offset-[4px]"><a href="tel: +2349094444413">+234 909 444 4413</a></span>. Alternatively fill in the form below and we will contact you asap.</p>
                        <p className="text-white leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] tracking-[0.5px]">Please fill in your details</p>
                        <p className="text-white leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] tracking-[0.5px]">*Indicates required fields</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
