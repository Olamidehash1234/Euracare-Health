type Props = {
    title?: string;
    imageSrc?: string;
};

export default function InternationalPatientsHero({
    title = "International Patients",
    imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675987/hero_msaucr_lpzpes.jpg",
}: Props) {
    return (
        <section aria-label={title} className="w-full overflow-hidden">
            {/* mobile  */}
            <div
                className="lg:hidden relative flex items-center"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    height: "300px",
                }}
            >
                <div className="absolute inset-0 bg-[#000]/40" />
                <div className="relative z-[1] w-full px-4 py-6">
                    <div className="flex items-center gap-3">

                        <h1 className="text-white font-medium leading-[1.1] text-[32px]">
                            International Patients
                        </h1>

                        {/* heartbeat/ECG icon */}
                        <img src="/patient-visit/lifeline.svg" alt=""  className="absolute object-cover"/>
                    </div>
                </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 w-full lg:h-auto">
                {/* Left navy panel */}
                <div className="relative bg-[#0C2141] overflow-hidden flex items-center min-h-[400px]">
                    {/* ECG watermark - positioning adjusted */}
                    <img src="/patient-visit/lifeline.svg" alt=""  className="absolute object-cover"/>

                    {/* Content overlay */}
                    <div className="relative z-[2] pl-[80px]">
                        <h1 className="text-white font-medium leading-tight lg:leading-[50px] lg:tracking-[-1.35px] text-4xl lg:text-[45px]">
                            International <br /> Patients
                        </h1>
                    </div>
                </div>

                {/* Right image */}
                <div className="h-full lg:h-[550px]">
                    <img
                        src={imageSrc}
                        alt=""
                        className="w-full object-cover"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
}
