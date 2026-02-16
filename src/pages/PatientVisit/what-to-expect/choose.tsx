import React, { type JSX } from "react";

/** ---------- Icons (inline SVG, lightweight, brand-friendly) ---------- */
const HomeMedicalIcon = () => (
    <img src="/patient-visit/care.svg" alt="" />
);

const StethoscopeIcon = () => (
    <img src="/patient-visit/tech.svg" alt="" />
);

const ChatCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M20 14a6 6 0 01-6 6H7l-3 3v-5a6 6 0 01-6-6V7a6 6 0 016-6h10a6 6 0 016 6v7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />
        <path
            d="M8 9l2.2 2.2L16 5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const PeoplePlusIcon = () => (
    <img src="/patient-visit/support.svg" alt="" />
);

/** ---------- Types & Data ---------- */
type Benefit = {
    id: string;
    title: string;
    description: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const BENEFITS: Benefit[] = [
    {
        id: "b1",
        title: "Personalized Care",
        description:
            "Our doctors and nurses take time to understand your needs, creating a tailored care plan for the best possible outcomes.",
        Icon: HomeMedicalIcon,
    },
    {
        id: "b2",
        title: "Advanced Technology",
        description:
            "We combine international expertise with world-class facilities and innovative medical solutions.",
        Icon: StethoscopeIcon,
    },
    {
        id: "b3",
        title: "Clear Communication",
        description:
            "We explain every step of your treatment plan so you feel confident and informed.",
        Icon: ChatCheckIcon,
    },
    {
        id: "b4",
        title: "Compassionate Support",
        description:
            "Beyond medical care, our team is here to support your overall wellbeing.",
        Icon: PeoplePlusIcon,
    },
];

/** ---------- Component ---------- */
export default function WhyChoose() {
    return (
        <section
            aria-labelledby="why-choose-title"
            className="px-[16px] lg:px-0 py-[60px] lg:py-20"
        >
            <div className="">
                {/* Heading */}
                <div className="mx-auto max-w-[712px]">
                    <h2
                        id="why-choose-title"
                        className="text-[32px] sm:text-[28px] font-medium tracking-tight lg:tracking-[-0.84px] text-[#0C2141]"
                    >
                        Why choose Euracare?
                    </h2>

                    <p className=" mt-5 lg:mt-[26px] text-[15px] lg:text-[18px] font-medium leading-[24px] lg:leading-[27px] lg:tracking-[-0.54px] text-[#0C2141]">
                        At Euracare, we want every patient and visitor to feel supported,
                        informed, and cared for.
                        Whether you are coming for a consultation, diagnostic test, or
                        inpatient treatment, our goal is to
                        make your experience smooth, safe, and comfortable.
                    </p>
                </div>

                {/* Benefits panel */}
                <div className="px-0 pt-[30px] lg:pt-[40px] lg:px-20">
                    <div className="rounded-[20px] bg-[#EFF8F8] border-[1px] border-[#0000001A]">
                        <div className="px-5 py-10 lg:p-[60px]">
                            {/* Grid: 1 → 2 → 4 columns */}
                            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
                                {BENEFITS.map(({ id, title, description, Icon }) => (
                                    <div
                                        key={id}
                                        className="text-center flex flex-col items-center"
                                    >
                                        {/* Icon */}
                                        <div className="flex h-16 w-16 items-center justify-center">
                                            <Icon className="h-12 w-12 text-gray-800" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-5 lg:mt-[20px] text-[20px] font-medium lg:leading-[36px] lg:tracking-[-0.72px] text-[#02070D]">
                                            {title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 lg:mt-[20px] max-w-[267px] text-[14px] leading-6 lg:leading-[20px] lg:tracking-[-0.54px] text-[#02070D]">
                                            {description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
