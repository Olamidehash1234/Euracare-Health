type InfoCard = {
    id: string;
    title: string;
    body: string;
};

type Props = {
    heading?: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    cards?: InfoCard[];
};

const DEFAULT_CARDS: InfoCard[] = [
    {
        id: "c1",
        title: "Registration & Check-In",
        body:
            "Our front desk will assist with registration, update your medical history, and direct you to the right clinic or specialist.",
    },
    {
        id: "c2",
        title: "Visitor Guidelines",
        body:
            "For the comfort and safety of all patients, we limit visiting hours and ask that all visitors observe hospital protocols.",
    },
    {
        id: "c3",
        title: "Patient Rights & Responsibilities",
        body:
            "You have the right to safe, respectful, and confidential care. We ask that you share accurate health information and follow medical advice for best outcomes.",
    },
];

export default function DuringYourVisit({
    heading = "During Your Visit",
    imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/during_ehsx69_ywigtm.jpg",
    imageAlt = "Smiling clinician ready to help",
    cards = DEFAULT_CARDS,
}: Props) {
    return (
        <section
            aria-labelledby="before-visit-title"
            className="py-[60px] lg:py-20 bg-white"
        >
            <div className="px-[16px] lg:px-[104px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* left: image */}
                    <div className="w-full ">
                        <div className="w-full overflow-hidden rounded-2xl">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                loading="lazy"
                                className="w-full object-cover h-[300px] sm:h-80 lg:h-[443px]"
                            />
                        </div>
                    </div>

                    {/* right: heading + stacked cards */}
                    <div className="space-y-8 lg:space-y-[24px]">
                        {/* Heading */}
                        <div className="">
                            <h2
                                id="before-visit-title"
                                className="text-[32px] lg:text-[60px] font-medium tracking-tight lg:leading-[72px] lg:tracking-[-1.8px] text-[#0D2644]"
                            >
                                {heading}
                            </h2>
                        </div>

                        <div className="space-y-4 lg:space-y-[10px]">
                            {cards.map((card) => (
                                <article
                                    key={card.id}
                                    aria-labelledby={`card-title-${card.id}`}
                                    className="bg-white rounded-[12px] border border-[#0C21411A] px-[20px] py-[12px]"
                                >
                                    <h3
                                        id={`card-title-${card.id}`}
                                        className="text-[16px] tracking-[-0.54px] leading-[27px] font-medium text-[#0C2141]"
                                    >
                                        {card.title}
                                    </h3>

                                    <p className="mt-[6px] text-[14px] text-[#0C2141] leading-[24px] tracking-[-0.54px]">
                                        {card.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
