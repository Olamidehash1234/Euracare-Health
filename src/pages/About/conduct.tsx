export default function TestimonialWithCTA() {
    return (
        <section className="bg-white text-[#0B1F3B]">
            <div className="px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
                {/* Testimonial */}
                <div className=" mx-auto max-w-6xl">
                    <blockquote>
                        <p className="text-[24px] leading-[30px] lg:text-[56px] font-medium lg:leading-[60px] tracking-tight lg:tracking-[-1.8px]">
                            <span aria-hidden className="pr-2">“</span>
                            From the moment I walked into Euracare, I knew I was in good hands. The
                            reception staff were warm and efficient, and my doctor took time to explain
                            everything in detail. The entire check-up process was smooth and thorough. I
                            highly recommend them for preventive care!
                            <span aria-hidden className="pl-1">”</span>
                        </p>
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 lg:mt-[45px]">
                        <p className="text-[14px] sm:text-[18px] font-medium uppercase">
                            Mrs. Lola Adebayo
                        </p>
                        <span className="mt-2 inline-block rounded-full bg-[#F8D9CE] px-[20px] py-[4px] text-[16px] text-[#0C2141]">
                            (General Medicine)
                        </span>
                    </div>
                </div>

                {/* Image + CTA */}
                <div className="mt-[60px] lg:mt-[80px] flex flex-col lg:flex-row justify-between lg:gap-[127px] gap-[20px] items-center">
                    {/* Image */}
                    <div className="">
                        <div className="relative overflow-hidden rounded-2xl shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                            <img
                                src="/about/male.png" // replace with your image path
                                alt="Smiling patient during consultation"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="flex flex-col justify-end lg:gap-[197px]">
                        <div>
                            <h3 className="text-2xl lg:text-[40px] font-medium tracking-tight lg:tracking-[-1.8px] lg:leading-[48px]">
                                Euracare Code of conduct
                            </h3>
                            <p className="mt-3 text-[14px] lg:text-[18px] lg:tracking-[-0.54px] leading-relaxed text-[#0C2141] max-w-[573px] lg:leading-[27px]">
                                We strive to deliver healthcare compassionately and always act with
                                integrity. Our ethics and compliance programme is an integral part of what
                                we do.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-[20px]">
                            <a
                                href="/files/euracare-code-of-conduct.pdf" // replace with your asset
                                download
                                className="inline-flex items-center gap-3 rounded-full bg-[#0C2141] px-5 lg:px-[65.8px] lg:py-[22.5px] py-3 text-[14px] lg:text-[16px] font-medium text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/30"
                            >
                                {/* download icon */}
                                <svg
                                    aria-hidden
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v12" />
                                    <path d="M7 10l5 5 5-5" />
                                    <path d="M5 21h14" />
                                </svg>
                                <span>Download our code of conduct</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
