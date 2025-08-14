export default function Hero() {

    return (
        <section className="relative">
            <div
                className="mt-[100px] lg:mt-[100px] relative overflow-hidden"
                style={{ background: 'linear-gradient(130deg, #F2F8FF -8.88%, #FFF 47%, #F2F8FF 102.87%)' }}
            >
                {/* Background Illustration */}
                <img src="/icon/pattern2.svg" alt="Hero Illustration" className="absolute inset-0 top-[-475px] w-full h-full object-contain z-0 pointer-events-none opacity-[100%]" />

                <div className="px-[16px] lg:px-[80px] py-[40px] lg:py-[80px]">
                    <div className="relative z-10">
                        <div className="flex justify-center mb-[10px]">
                            <span className="border border-[#053A7A] text-[#053A7A] text-[14px] px-[20px] py-[6px] rounded-full">
                                Contact Us
                            </span>
                        </div>

                        {/* Section heading */}
                        <h2 className="text-center text-[24px] lg:text-[48px] lg:mb-[40px] lg:leading-[58px] text-[#053A7A] mb-[20px]">
                            We're Here When You Need Us
                        </h2>

                        <p className='text-center max-w-[726px] mx-auto text-[#031D3D] text-[16px] leading-normal'>
                            Get in touch with Kingtrust Medical Center. We're available 24/7 for emergencies and ready to assist with all your healthcare needs.
                        </p>
                    </div>
                </div>

                <div className='bg-[#FBFBFB] px-[16px] lg:px-[80px] lg:mt-[0px] py-[40px] lg:py-[80px] relative z-10'>
                    <section className="flex flex-col lg:relative w-full lg:h-[800px] space-y-8 lg:space-y-0">
                        <div className="w-full h-[400px] lg:h-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.522577061696!2d3.3357211947441137!3d6.505141740588697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d007d0ee3cb%3A0x1c731e348066f754!2sKingtrust%20Medical%20Center!5e0!3m2!1sen!2sng!4v1753456914648!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute top-0 rounded-[16px] left-0 w-full h-full"
                            ></iframe>
                        </div>

                        <div className="lg:absolute lg:pointer-events-none z-10 lg:h-full lg:pt-[65px] lg:flex lg:items-center lg:px-[80px] lg:w-full">
                            <div className="bg-[#193C67] text-white rounded-[20px] p-6 lg:p-[40px] shadow-lg space-y-5">
                                <h2 className="text-2xl lg:text-[48px] lg:leading-[58px]">Contact Us</h2>

                                <div className="text-sm lg:text-[20px] space-y-2 lg:space-y-[20px]">
                                    <div>
                                        <p className="text-[#BAC5D2] mb-[10px]">Address:</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">
                                            105 Ogunlana Dr, Surulere, Lagos<br />
                                            101241, Lagos
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[#BAC5D2] mb-[10px]">Phone Numbers:</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">+2348096445361</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">+2349160000381</p>
                                    </div>

                                    <div>
                                        <p className="text-[#BAC5D2] mb-[10px]">Email:</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">kingtrustmedical@gmail.com</p>
                                    </div>

                                    <div>
                                        <p className="text-[#BAC5D2] mb-[10px]">Emergency Hotline:</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">+2349160000381</p>
                                    </div>

                                    <div>
                                        <p className="text-[#BAC5D2] mb-[10px]">Opening Hours:</p>
                                        <p className="font-medium leading-[24px] lg:leading-[30px]">We are open 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
