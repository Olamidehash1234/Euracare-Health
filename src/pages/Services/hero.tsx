export default function Hero() {
    return (
        <section className="relative w-full lg:h-[400px] lg:pt-[50px]"
        style={{ backgroundImage: "url('/services/hero.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            
            {/* --- Overlay Div --- */}
            <div className="absolute inset-0 bg-[#00000099]"></div>

            {/* --- Content (remains on top because it's also relative) --- */}
            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-full lg:w-[712px] lg:mb-[72px]">
                    {/* Heading */}
                    <h1 className="text-white font-medium leading-[30px] mb-[20px] lg:leading-[90px] tracking-tight lg:tracking-[-2.25px] text-[32px] lg:text-[75px]">
                        Our Specialties
                    </h1>
                </div>
            </div>
        </section>
    );
}