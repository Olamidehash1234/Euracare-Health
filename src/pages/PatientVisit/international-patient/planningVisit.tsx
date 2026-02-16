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
        title: " Initial Contact",
        body:
            "Reach out via phone, email, or online form.",
    },
    {
        id: "c2",
        title: "Medical Review",
        body:
            "Share your medical history and reports with our specialists",
    },
    {
        id: "c3",
        title: "Treatment Plan & Cost Estimate",
        body:
            "Receive a clear plan before travel.",
    },
    {
        id: "c4",
        title: "Travel & Arrival",
        body:
            "Our team helps with logistics from airport pickup to check-in.",
    },
    {
        id: "c5",
        title: "During Your Stay",
        body:
            "Continuous support from admission through discharge.",
    },
    {
        id: "c6",
        title: "During Your Stay",
        body:
            "Continuous support from admission through discharge.",
    },
    {
        id: "c7",
        title: "Follow-Up Care",
        body:
            "Remote consultations and post-treatment monitoring after you return home.",
    },
];

export default function BeforeYourVisit({
    heading = "Planning Your Visit",
    imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676005/planning_ongswp_j05kky.jpg",
    imageAlt = "Smiling clinician ready to help",
    cards = DEFAULT_CARDS,
}: Props) {
    return (
        <>
            <SEO
                title="Planning Your Visit — International Patients | Euracare Hospital Lagos"
                description="How to plan your visit to Euracare Hospital Lagos — from initial contact and medical review to travel arrangements, airport pickup and follow-up care."
                keywords={[
                    "Euracare Hospital Lagos",
                    "International Patient",
                    "Travel & Arrival Lagos",
                    "Follow-Up Care",
                    "Urology treatment in Lagos"
                ]}
            />
            <section
                aria-labelledby="before-visit-title"
                className="py-0 lg:py-20 bg-white"
            >
                <div className="px-[16px] lg:px-[104px]">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
                                    className="w-full object-cover h-[350px] sm:h-80 lg:h-[735px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
