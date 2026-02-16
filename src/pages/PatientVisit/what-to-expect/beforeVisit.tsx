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
        title: "Making an Appointment",
        body:
            "You can schedule your appointment by submitting an enquiry form on our website, and our team will call you back, or call us on +234 2014664090. We recommend arriving 15 minutes early for first appointments.",
    },
    {
        id: "c2",
        title: "What to Bring",
        body:
            "Valid ID, insurance card (if applicable), referral letter, and any prior test results or medical records.",
    },
    {
        id: "c3",
        title: "Insurance & Billing",
        body:
            "Euracare partners with leading Health Maintenance Organizations (HMOs) and private insurers. Our billing desk can guide you through pre-authorizations and claims.",
    },
];

export default function BeforeYourVisit({
    heading = "Before your visit",
    imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676019/smiling-woman_aixwwg_zdxiri.jpg",
    imageAlt = "Smiling clinician ready to help",
    cards = DEFAULT_CARDS,
}: Props) {
    return (
        <section
            aria-labelledby="before-visit-title"
            className="py-0 lg:py-20 bg-white"
        >
            <div className="px-[16px] lg:px-[104px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: heading + stacked cards */}
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

                    {/* Right: image */}
                    <div className="w-full">
                        <div className="w-full overflow-hidden rounded-2xl">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                loading="lazy"
                                className="w-full object-cover h-[300px] sm:h-80 lg:h-[443px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
