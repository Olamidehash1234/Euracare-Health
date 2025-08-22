export default function Hero() {
    return (
        <section className="relative w-full lg:h-[400px] lg:pt-[50px]"
        style={{ backgroundImage: "url('/services/hero.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            
            {/* --- Overlay Div --- */}
            <div className="absolute inset-0 bg-[#00000099]"></div>

            <img
                src="/home/lifeline.svg"
                alt="Background Illustration"
                className="hidden lg:block absolute right-0 top-[210px] -translate-y-1/2 lg:w-auto lg:h-auto"
                style={{ zIndex: 1 }}
            />

            {/* --- Content (remains on top because it's also relative) --- */}
            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-full lg:w-[578px] lg:mb-[72px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium lg:pt-[30px] leading-[30px] mb-[10px] lg:leading-[40px] tracking-tight lg:tracking-[-2.25px] text-[32px] lg:text-[40px]">
                        Lets get you to the right specialist
                    </h1>

                    <p className="text-white text-[14px] leading-[20px]">Please use the search field below to type in a specialty, condition or a treatment you require some help with.  Then, select the right suggestion in the results dropdown below.</p>
                </div>
            </div>
        </section>
    );
}