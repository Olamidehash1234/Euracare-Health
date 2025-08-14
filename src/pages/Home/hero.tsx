export default function Hero() {
    return (
        <section className="relative w-full lg:pt-[100px]">
            {/* Background Image - Desktop */}
            <img
                src="/home/hero.png"
                alt="Happy family"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            {/* Background Image - Mobile */}
            <img
                src="/home/hero-mobile.png"
                alt="Happy family mobile"
                className="block lg:hidden absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, rgba(2, 7, 13, 0.80) 16.45%, rgba(2, 7, 13, 0.00) 99.82%)"
                }}
            />

            {/* Background Illustration (desktop only) */}
            <img
                src="/home/lifeline.svg"
                alt="Background Illustration"
                className="hidden lg:block absolute right-0 top-[380px] -translate-y-1/2 lg:w-auto lg:h-auto"
                style={{ zIndex: 1 }}
            />

            <div className="relative px-[24px] lg:px-20 h-[563px] flex items-center">
                <div className="w-full lg:w-[712px] lg:mb-[72px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium leading-[30px] lg:leading-[63px] tracking-tight lg:tracking-[-1.5px] text-[24px] lg:text-[54px]">
                        Get expert treatment,
                        <br />
                        focused on you
                    </h1>

                    {/* Search bar */}
                    <form className="mt-[20px] w-full" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="hero-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            {/* Search icon */}
                            <span className="absolute inset-y-0 left-[24px] lg:left-[40px] flex items-center">
                                <img src="/home/search.svg" alt="" />
                            </span>

                            <input
                                type="text"
                                id="hero-search"
                                placeholder="How can we help you?"
                                className="w-full h-14 lg:h-[72px] lg:pl-[90px] pl-[52px] pr-4 border-[1px] border-[#5D6B80] rounded-full bg-white text-[14px] lg:text-[16px] text-[#02070D]
                           placeholder-[#0C2141] font-medium shadow-lg shadow-black/10
                           focus:outline-none focus:ring-2 focus:ring-[#0f2d46]/30"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
