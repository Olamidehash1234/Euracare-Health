import { useState, useEffect } from 'react';
import SearchModal from '../../components/SearchModal';
import SEO from '../../components/SEO';

export default function Hero() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Add popup state for initial visit
    const [showPopup, setShowPopup] = useState(false);

    // --- changed: use timestamp-based dismissal so popup resets after 24 hours ---
    const STORAGE_KEY = 'homePopupDismissedAt';
    const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

    // Preload hero images
    useEffect(() => {
        const desktopHeroImage = new Image();
        desktopHeroImage.src = 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675984/hero_jza8me_vk5kck.png';

        const mobileHeroImage = new Image();
        mobileHeroImage.src = '/home/hero-mobile.png';

        const popupImage = new Image();
        popupImage.src = '/home/popup.jpg';

        const lifelineImage = new Image();
        lifelineImage.src = '/home/lifeline.svg';
    }, []);

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        const now = Date.now();
        let shouldShow = false;

        if (!raw) {
            // never dismissed -> show
            shouldShow = true;
        } else {
            const ts = Number(raw);
            // if stored value is invalid or older than TTL -> show
            if (isNaN(ts) || now - ts >= TTL_MS) {
                shouldShow = true;
            }
        }

        if (shouldShow) {
            const t = window.setTimeout(() => setShowPopup(true), 500);
            return () => window.clearTimeout(t);
        }
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && showPopup) {
                closePopup();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showPopup]);

    // --- New: disable background scrolling while popup is open ---
    useEffect(() => {
        const prevBodyOverflow = document.body.style.overflow;
        const prevHtmlOverflow = document.documentElement.style.overflow;

        if (showPopup) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = prevBodyOverflow;
            document.documentElement.style.overflow = prevHtmlOverflow;
        };
    }, [showPopup]);

    // prevent touchmove on mobile while popup open
    useEffect(() => {
        if (!showPopup) return;
        const prevent = (e: TouchEvent) => e.preventDefault();
        document.addEventListener('touchmove', prevent, { passive: false });
        return () => document.removeEventListener('touchmove', prevent);
    }, [showPopup]);
    // --- end new code ---

    const closePopup = () => {
        // store dismissal timestamp; popup will reappear after 24 hours
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
        setShowPopup(false);
    };

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

            {/* Popup shown on initial visit */}
            {showPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Welcome popup"
                    onClick={closePopup} // close when clicking backdrop
                >
                    <div
                        className="relative max-w-[95vw] max-h-[95vh] rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // prevent backdrop click closing when interacting with the image or button
                    >
                        {/* Close button top-right of the image */}
                        <button
                            onClick={closePopup}
                            aria-label="Close popup"
                            className="absolute top-3 right-3 z-30 bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
                        >
                            {/* simple X icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Popup image */}
                        <img
                            src="/home/popup.jpg"
                            alt="Welcome"
                            className="block w-full h-auto max-h-[95vh] object-cover"
                        />
                    </div>
                </div>
            )}

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
