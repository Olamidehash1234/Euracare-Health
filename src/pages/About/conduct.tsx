export default function TestimonialWithCTA() {
    return (
        <section className="bg-white text-[#0B1F3B]">
            <div className="px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
                {/* Testimonial */}
                <div className=" mx-auto max-w-4xl">
                    <h4 className="text-[14px] leading-[28.8px] lg:text-[18px] font-medium">
                        QUALITY & SAFETY
                    </h4>

                    <h2 className="mt-4 text-[22px] lg:mt-[40px] lg:text-[40px] font-medium leading-tight lg:leading-[60px] tracking-tight lg:tracking-[-1.8px] max-w-[1002px]">
                        We follow global safety protocols and rigorous infection control measures. Every procedure is supported by a dedicated safety team—because your health deserves complete confidence.
                    </h2>
                </div>

                {/* Image + CTA */}
                <div className="mt-[60px] lg:mt-[80px] flex flex-col lg:flex-row lg:gap-[127px] gap-[20px] items-start">
                    {/* Image */}
                    <div className="lg:w-[50%]">
                        <div className="relative overflow-hidden rounded-2xl lg:h-[510px] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                            <img
                                src="https://res.cloudinary.com/dnycq9llb/image/upload/v1764676000/male_msbytb_lpzkdj.png" // replace with your image path
                                alt="Smiling patient during consultation"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="flex flex-col lg:w-[50%]">
                        <div>
                            <h3 className="text-2xl lg:text-[40px] font-medium tracking-tight lg:tracking-[-1.8px] lg:leading-[48px]">
                                Centres of Excellence
                            </h3>
                            <h4 className="mt-3 lg:mt-[20px] text-[16px] lg:text-[22px] lg:tracking-[-0.5px] leading-relaxed text-[#02070D] lg:leading-[26.8px]">
                                Specialist care across:
                            </h4>

                            <ul className="mt-[10px] space-y-[0px] list-disc list-inside text-[14px] lg:text-[18px] leading-[27px] lg:leading-[30px] text-[#02070D] ">
                                <li>Interventional Cardiology</li>
                                <li>Interventional Radiology</li>
                                <li>Adult & Pediatric Cardiology</li>
                                <li>Bariatric & Weight Loss Surgery</li>
                                <li>General Surgery</li>
                                <li>Gastroenterology</li>
                                <li>Orthopedic Surgery</li>
                                <li>Urology</li>
                                <li>Family & Geriatric Medicine</li>
                                <li>General Medicine</li>
                                <li>Radiology</li>
                            </ul>

                            <p className="mt-[20px] text-[15px] lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#0C2141]">Each led by internationally trained experts dedicated to delivering the best possible outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
