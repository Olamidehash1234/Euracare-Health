export default function Hero() {

    return (
        <section className=" bg-[#0C2141] relative w-full lg:pt-[0px] lg:h-[550px]" style={{ backgroundImage: "url('https://res.cloudinary.com/dnycq9llb/image/upload/v1764675990/hero_gm7rrm_lwpisl.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

            <div className="absolute inset-0 bg-[#000]/50"></div>


            {/* Background Illustration (desktop only) */}
            <img
                src="/lifeline-small.svg"
                alt="Background Illustration"
                className="hidden lg:block absolute right-0 top-[230px] -translate-y-1/2 lg:w-auto lg:h-auto"
                style={{ zIndex: 1 }}
            />

            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-full lg:w-[712px] lg:mb-[72px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium leading-[30px] mb-[20px] lg:leading-[70px] tracking-tight lg:tracking-[-2.25px] text-[32px] lg:text-[50px]">
                        About Euracare
                    </h1>

                    <p className="text-white font-medium leading-[24px] lg:leading-[27px] text-[14px] lg:text-[16px] mb-[10px]">Founded in 2017, Euracare is a state-of-the-art multi-specialty hospital located in Victoria Island, Lagos. We combine global medical expertise with advanced technology to deliver exceptional care across key specialties.</p>
                    <p className="text-white font-medium leading-[24px] lg:leading-[27px] text-[14px] lg:text-[16px]">A wholly-owned subsidiary of Iwosan Investment Limited, we are redefining private healthcare in Nigeria through precision, innovation, and compassion—so you no longer need to travel abroad for the very best treatment.</p>

                </div>
            </div>
        </section>
    );
}
