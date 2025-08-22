import type { ServiceData } from "../../../../data/services";

export default function Hero({ service }: { service: ServiceData }) {
    return (
        <section className="relative w-full lg:h-[400px] lg:pt-[50px]"
            style={{
                backgroundImage: `url('${service.heroImage}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>

                <img
                src="/home/lifeline.svg"
                alt="Background Illustration"
                className="hidden lg:block absolute right-0 top-[210px] -translate-y-1/2 lg:w-auto lg:h-auto"
                style={{ zIndex: 1 }}
            />

            <div className="absolute inset-0 bg-[#00000099]"></div>
            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-full lg:w-[400px] lg:mb-[72px]">
                    <h1 className="text-white font-medium leading-[30px] mb-[20px] lg:leading-[63px] tracking-tight lg:tracking-[-2.25px] text-[32px] lg:text-[54px]">
                        {service.title}
                    </h1>
                </div>
            </div>
        </section>
    );
}


