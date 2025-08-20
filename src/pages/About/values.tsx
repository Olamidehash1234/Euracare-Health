import React from "react";

type Value = {
    title: string;
    description: string;
};

const values: Value[] = [
    {
        title: "Accountability",
        description:
            "We place integrity and responsibility at the centre of everything we do.",
    },
    {
        title: "Respect",
        description:
            "We are an internationally diverse team and we respect all cultures and backgrounds.",
    },
    {
        title: "Empathy",
        description:
            "We see every patient as an individual and we strive to address their specific needs.",
    },
    {
        title: "Excellence",
        description:
            "We deliver services of an exceptional quality and professional standard to our patients.",
    },
    {
        title: "Commitment",
        description:
            "We are committed to making the best international standard of care available locally.",
    },
];

function SquircleCrossIcon() {
    // navy squircle with a white rounded cross (compact, like in the reference)
    return (
        <svg
            aria-hidden
            viewBox="0 0 48 48"
            className="h-11 w-11 flex-none"
            role="img"
        >
            <rect x="2" y="2" width="44" height="44" rx="12" fill="#0B1F3B" />
            <path
                d="M26.5 12.5a2.5 2.5 0 0 0-5 0v8h-8a2.5 2.5 0 0 0 0 5h8v8a2.5 2.5 0 0 0 5 0v-8h8a2.5 2.5 0 0 0 0-5h-8v-8Z"
                fill="white"
            />
        </svg>
    );
}

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
                    {values.map((v, idx) => (
                        <article
                            key={v.title}
                            className="pb-[20px] lg:pb-[40px] border-b border-[#676767]"
                        >
                            <div className="flex flex-col">
                                <div className="flex gap-[16px] items-center">
                                    <img src="/about/svg.svg" alt="" />
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
