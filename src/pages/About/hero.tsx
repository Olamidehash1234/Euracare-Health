export default function Hero() {

    return (
        <section className=" bg-[#0C2141] relative w-full lg:pt-[0px]">

            {/* Background Illustration (desktop only) */}
            <img
                src="/lifeline-small.svg"
                alt="Background Illustration"
                className="hidden lg:block absolute right-0 top-[150px] -translate-y-1/2 lg:w-auto lg:h-auto"
                style={{ zIndex: 1 }}
            />

            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-full lg:w-[712px] lg:mb-[72px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium leading-[30px] mb-[20px] lg:leading-[90px] tracking-tight lg:tracking-[-2.25px] text-[32px] lg:text-[75px]">
                        About Euracare
                    </h1>

                    <p className="text-white font-medium leading-[24px] lg:leading-[27px] text-[14px] lg:text-[18px]">Above all else, we are committed to the care and improvement of human life</p>
                </div>
            </div>
        </section>
    );
}
