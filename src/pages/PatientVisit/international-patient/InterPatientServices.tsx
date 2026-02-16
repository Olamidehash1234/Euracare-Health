import SEO from '../../../components/SEO';

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
        title: "Dedicated Coordinator",
        body:
            "A personal liaison for appointments, treatment schedules, and communication with your doctors.",
    },
    {
        id: "c2",
        title: "Medical Records Review",
        body:
            "Send your reports in advance for assessment before you travel.",
    },
    {
        id: "c3",
        title: "Visa & Travel Support",
        body:
            "Assistance with medical visa letters, airport transfers, and transport arrangements.",
    },
    {
        id: "c4",
        title: "Accommodation",
        body:
            "Preferred rates at partner hotels and serviced apartments near the hospital.",
    },
    {
        id: "c3",
        title: "Financial Guidance",
        body:
            "Transparent estimates for procedures, billing assistance, and insurance coordination.",
    },
];

export default function DuringYourVisit({
    heading = "International Patient Services",
    imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676001/international_hxvnil_hffy2f.jpg",
    imageAlt = "Smiling clinician ready to help",
    cards = DEFAULT_CARDS,
}: Props) {
    return (
        <>
            <SEO
                title="International Patient Services — Euracare Hospital Lagos"
                description="Support for international patients: dedicated coordinator, visa & travel support, accommodation, and transparent cost estimates (including bariatric surgery pricing information for Nigeria)."
                keywords={[
                    "International Patient Services",
                    "Bariatric Surgery price Nigeria",
                    "Visa & Travel Support",
                    "Accommodation near Euracare",
                    "Euracare Hospital Lagos"
                ]}
            />
            <section
                aria-labelledby="before-visit-title"
                className="py-[60px] lg:py-20 bg-white"
            >
                <div className="px-[16px] lg:px-[104px]">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* left: image */}
                        <div className="w-full ">
                            <div className="w-full overflow-hidden rounded-2xl lg:h-[712px]">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    loading="lazy"
                                    className="w-full object-cover h-[350px] sm:h-80 lg:h-full"
                                />
                            </div>
                        </div>

                        {/* right: heading + stacked cards */}
                        <div className="space-y-8 lg:space-y-[24px]">
                            {/* Heading */}
                            <div className="">
                                <h2
                                    id="before-visit-title"
                                    className="text-[32px] lg:text-[60px] font-medium tracking-tight leading-[40px] lg:leading-[72px] lg:tracking-[-1.8px] text-[#0D2644]"
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
        </>
    );
}
