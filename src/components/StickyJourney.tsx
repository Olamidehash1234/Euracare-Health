export default function StickyJourney() {
    return (
        <div className="lg:sticky bottom-[20px] left-0 right-0 z-30 bg-[#0C2141] rounded-[60px] py-4 lg:py-6 mx-[16px] lg:mx-20 mb-[40px] ">
            <div className=" mx-auto px-4 lg:px-[40px] flex flex-col lg:flex-row gap-[10px] items-center  justify-between">
                <p className="text-white text-[16px] lg:text-[20px] font-medium">
                    Ready to Begin Your Care Journey With Euracare?
                </p>
                <a 
                    href="/enquiry"
                    className="flex items-center gap-[10px] text-[#F8F8F8] px-4 py-2 lg:px-[22px] lg:py-[14px] border-[1px] border-[#F8F8F8] rounded-[48px] hover:bg-opacity-90 transition-all text-[14px] lg:text-[16px] font-medium"
                >
                    <img src="/form.svg" alt="" className="" />
                    Fill an Enquiry Form
                </a>
            </div>
        </div>
    );
}
