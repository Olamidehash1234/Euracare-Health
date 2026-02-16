import type { ServiceData } from "../../../../data/services";

export default function Hero({ service }: { service: ServiceData }) {
    return (
        <section className="relative overflow-hidden w-full lg:h-[400px] lg:pt-[50px]"
            style={{
                backgroundImage: `url('${service.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>

                <img
                src="/home/lifeline.svg"
                alt="Background Illustration"
                className="absolute right-[-20px] lg:right-0 top-[90px] lg:top-[210px] -translate-y-1/2 lg:w-auto lg:h-auto w-[200px] h-[118px]"
                style={{ zIndex: 1 }}
            />

            <div className="absolute inset-0 bg-[#00000099]"></div>
            <div className="relative px-[16px] py-[60px] lg:px-20 lg:py-[80px] flex align-center items-center">
                <div className="w-[200px] lg:w-[400px] lg:mb-[72px]">
                    <h1 className="text-white font-medium leading-[30px] mb-[20px] lg:leading-[63px] tracking-tight lg:tracking-[-2.25px] text-[24px] lg:text-[54px]">
                        {service.title}
                    </h1>
                </div>
            </div>
        </section>
    );
}


