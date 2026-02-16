type Value = {
    title: string;
    description: string;
};

const values: Value[] = [
    {
        title: "Accountability",
        description:
            "We act with integrity and take responsibility in everything we do.",
    },
    {
        title: "Respect",
        description:
            "We value diversity and honor every individual’s culture, background, and perspective.",
    },
    {
        title: "Empathy",
        description:
            "Every patient matters. We listen, understand, and put their needs first.",
    },
    {
        title: "Excellence",
        description:
            "We provide world class care, driven by innovation and a commitment to delivering exceptional outcomes.",
    },
    {
        title: "Commitment",
        description:
            "We are dedicated to bringing international standards of healthcare to every patient locally.",
    },
];

export default function CoreValues() {
    return (
        <section className="bg-[#F6F9FB]">
            <div className="px-[16px] lg:px-20 py-[40px] lg:py-20">
                {/* Eyebrow */}
                <p className="text-[14px] font-medium leading-[20px] uppercase text-[#0C2141]">
                    Euracare Core Values
                </p>

                {/* Heading */}
                <h2 className="mt-[4px] lg:mt-0 text-[22px] text-[#0C2141] lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px] max-w-[562px]">
                    Our guiding principles for
                    delivering world-class healthcare.
                </h2>

                {/* Grid */}
                <div className="mt-[40px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[30px] lg:gap-y-[40px] lg:gap-x-[70px]">
                    {values.map((v) => (
                        <article
                            key={v.title}
                            className="pb-[20px] lg:pb-[40px] border-b border-[#676767]"
                        >
                            <div className="flex flex-col">
                                <div className="flex gap-[16px] items-center">
                                    <img src="/service-d/test.svg" alt="" />
                                    <h3 className="text-lg lg:text-[24px] font-medium tracking-tight lg:tracking-[-0.5px] text-[#02070D]">
                                        {v.title}
                                    </h3>
                                </div>

                                <div>
                                    <p className="mt-[20px] text-[15px] leading-relaxed text-[#02070D]">
                                        {v.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
                        
