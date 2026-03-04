import { useState, useEffect } from 'react';
import SearchModal from '../../components/SearchModal';
import SEO from '../../components/SEO';

export default function Hero() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Preload hero images
    useEffect(() => {
        const desktopHeroImage = new Image();
        desktopHeroImage.src = 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675984/hero_jza8me_vk5kck.png';

        const mobileHeroImage = new Image();
        mobileHeroImage.src = '/home/hero-mobile.png';

        const lifelineImage = new Image();
        lifelineImage.src = '/home/lifeline.svg';
    }, []);



    return (
        <>
            <SEO
                title="Euracare Multispecialist Hospital Lagos — Private multi specialist hospital in Lagos"
                description="Euracare Hospital Lagos — private multi specialist hospital offering interventional cardiology, orthopedics, gastroenterology, bariatric surgery, urology and advanced diagnostics including MRI, CT and digital X-ray."
                keywords={[
                    "Euracare Hospital Lagos",
                    "private hospital Lagos",
                    "multi specialist hospital Lagos",
                    "interventional cardiology Lagos",
                    "cardiology hospital Lagos",
                    "orthopedic surgery hospital Victoria Island",
                    "gastroenterology clinic Lekki",
                    "bariatric surgery price Nigeria",
                    "24/7 laboratory Lagos",
                    "advanced diagnostics Lagos",
                    "diagnostic centre Lagos",
                    "MRI scan Lagos",
                    "CT scan Lagos",
                    "digital X-ray Lagos"
                ]}
            />

            <section className="relative w-full lg:pt-[100px]">
                {/* Background Image - Desktop */}
                <img
                    src="https://res.cloudinary.com/dnycq9llb/image/upload/v1764675984/hero_jza8me_vk5kck.png"
                    alt="Happy family"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
                {/* Background Image - Mobile */}
                <img
                    src="/home/hero-mobile.png"
                    alt="Happy family mobile"
                    className="block lg:hidden absolute inset-0 w-full h-full object-cover"
                    loading="eager"
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
                    className="hidden lg:block absolute right-0 top-[405px] -translate-y-1/2 lg:w-auto lg:h-auto"
                    style={{ zIndex: 1 }}
                />

                <div className="relative px-[16px] lg:px-20 h-[563px] flex items-center">
                    <div className="w-full lg:w-[712px] lg:mb-[72px]">
                        {/* Heading */}
                        <h1 className="text-white font-medium leading-[30px] lg:leading-[63px] tracking-tight lg:tracking-[-1.5px] text-[24px] lg:text-[54px]">
                            Redefining Private
                            <br />
                            Healthcare in Nigeria
                        </h1>

                        <p className='text-[13px] lg:text-[16px] text-white mt-[10px]'>At Euracare, we deliver premium medical care tailored to your needs—led by internationally trained specialists, powered by advanced diagnostics, and grounded in genuine compassion.</p>

                        {/* Search bar */}
                        <div className="mt-[20px] w-full">
                            <label htmlFor="hero-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <span className="absolute inset-y-0 left-[24px] lg:left-[40px] flex items-center">
                                    <img src="/home/search.svg" alt="" />
                                </span>

                                <input
                                    type="text"
                                    id="hero-search"
                                    placeholder="How can we help you?"
                                    className="w-full h-[56px] lg:h-[72px] lg:pl-[90px] pl-[52px] pr-4 border-[1px] border-[#5D6B80] rounded-full bg-white text-[14px] lg:text-[16px] text-[#02070D] placeholder-[#0C2141] font-medium shadow-lg shadow-black/10 focus:outline-none cursor-pointer"
                                    onClick={() => setIsSearchOpen(true)}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Get Started & Call Button - mobile only */}
                        <div className="block lg:hidden mt-[40px]">
                            <div className="text-white text-[16px] font-medium mb-3 leading-[30px]">GET STARTED</div>
                            <a
                                href="tel: +2349094444413"
                                className="w-full flex items-center justify-center border-[2px] border-white rounded-full py-3 px-4"
                                style={{ minHeight: "55px" }}
                            >
                                <img
                                    src="/home/call.svg"
                                    alt="Call Icon"
                                    className="mr-[10px]"
                                />
                                <span className="text-white text-[16px] leading-[27px] font-medium">Call us today</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Search Modal */}
                <SearchModal
                    isOpen={isSearchOpen}
                    onClose={() => setIsSearchOpen(false)}
                />
            </section>
        </>
    );
}
