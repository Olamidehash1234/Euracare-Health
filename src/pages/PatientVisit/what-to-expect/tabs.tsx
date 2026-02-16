import React, { useEffect, useRef, useState, type JSX, type RefCallback } from "react";

type Tab = {
    id: string;
    label: string;
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt?: string;
    icon?: JSX.Element;
};

/* -------------------- Icons -------------------- */
const CareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
        <path d="M22.9167 23.1595C22.9167 23.2822 23.0013 23.3791 23.1101 23.3984C23.4786 23.4695 23.8472 23.5405 24.2097 23.618L25.3878 23.9216C25.5388 23.9603 25.6838 23.8376 25.6838 23.6761V22.9205C25.6838 22.9205 25.6838 22.9205 25.6838 22.9141V11.7799C25.6838 11.6701 25.6174 11.5797 25.5207 11.5603L25.0313 11.457C24.7172 11.3924 23.5209 11.3601 22.4636 11.3666C22.4636 11.3666 21.9561 11.3601 21.3157 11.3601C21.1828 11.3601 21.0801 11.4764 21.0801 11.612V17.3147C21.0801 17.3728 21.0982 17.4245 21.1284 17.4697C22.0588 18.7291 22.669 20.2661 22.8624 21.9324C22.8624 21.9324 22.8624 21.9389 22.8624 21.9453C22.8926 22.3393 22.9167 22.8624 22.9228 23.1466L22.9167 23.1595Z" fill="#0C2141" />
        <path d="M17.0972 9.11277L16.6079 9.00943C16.0762 8.89964 12.9889 8.88027 12.3847 9.00943L11.9014 9.11923C11.8108 9.1386 11.7443 9.22902 11.7383 9.32589V14.189C11.7383 14.3634 11.8954 14.4796 12.0464 14.428C12.2156 14.3763 12.3847 14.3246 12.5539 14.2859C12.6022 14.273 12.6506 14.2665 12.7049 14.2536C12.8499 14.2213 12.9949 14.189 13.1399 14.1632C13.581 14.0857 14.0341 14.034 14.4993 14.034C14.9645 14.034 15.4358 14.0857 15.8889 14.1696C16.0158 14.189 16.1366 14.2213 16.2574 14.2471C16.336 14.2665 16.4145 14.2859 16.4931 14.3053C16.6441 14.344 16.7952 14.3892 16.9462 14.4344C17.1033 14.4861 17.2543 14.3634 17.2543 14.1955V9.33881C17.2543 9.22902 17.1879 9.1386 17.0912 9.11923L17.0972 9.11277Z" fill="#0C2141" />
        <path d="M7.93792 17.3277V11.6186C7.93792 11.4765 7.82917 11.3667 7.70229 11.3667C7.06187 11.3667 6.54833 11.3732 6.54833 11.3732C5.49104 11.3602 4.29479 11.399 3.98062 11.4636L3.49125 11.5669C3.39458 11.5863 3.32812 11.6767 3.32812 11.78V23.6827C3.32812 23.8507 3.47312 23.9669 3.62417 23.9282L4.77208 23.6311C5.15271 23.5471 5.53333 23.4761 5.91396 23.405C6.02271 23.3857 6.10729 23.2823 6.10729 23.1661C6.11333 22.8754 6.1375 22.3588 6.16771 21.9648C6.16771 21.9519 6.16771 21.939 6.16771 21.9261C6.36708 20.2663 6.97729 18.7421 7.90771 17.4892C7.93792 17.444 7.95604 17.3923 7.95604 17.3342L7.93792 17.3277Z" fill="#0C2141" />
        <path d="M14.5051 0.645752C12.6624 0.645752 11.1641 2.24742 11.1641 4.21721C11.1641 6.187 12.6624 7.78867 14.5051 7.78867C16.3478 7.78867 17.8461 6.187 17.8461 4.21721C17.8461 2.24742 16.3478 0.645752 14.5051 0.645752ZM14.5051 6.05784C13.5566 6.05784 12.7832 5.23117 12.7832 4.21721C12.7832 3.20325 13.5566 2.37659 14.5051 2.37659C15.4536 2.37659 16.227 3.20325 16.227 4.21721C16.227 5.23117 15.4536 6.05784 14.5051 6.05784Z" fill="#0C2141" />
        <path d="M28.3967 13.3947C28.3967 12.5551 27.7623 11.877 26.9769 11.877C26.8621 11.877 26.7715 11.9738 26.7715 12.0965V20.7572C26.7715 20.8799 26.8621 20.9767 26.9769 20.9767C27.7623 20.9767 28.3967 20.2986 28.3967 19.459V13.4011V13.3947Z" fill="#0C2141" />
        <path d="M19.9684 15.6679L19.9805 10.9469C19.9805 10.1073 19.3461 9.4292 18.5607 9.4292C18.452 9.4292 18.3613 9.52607 18.3613 9.64232V14.8929C18.4036 14.964 18.4459 15.0415 18.4882 15.1125C18.8749 15.3386 19.2434 15.5904 19.5938 15.8746C19.7509 15.9973 19.9745 15.8746 19.9745 15.6679H19.9684Z" fill="#0C2141" />
        <path d="M9.0332 15.6743C9.0332 15.8809 9.25674 16.0101 9.41383 15.8809C9.76424 15.5968 10.1388 15.3384 10.5315 15.1124C10.5738 15.0414 10.6161 14.9639 10.6584 14.8928V9.64219C10.6584 9.51948 10.5617 9.42261 10.447 9.42261C9.66758 9.42261 9.03924 10.1072 9.03924 10.9403V15.6678L9.0332 15.6743Z" fill="#0C2141" />
        <path d="M0.603516 19.459C0.603516 20.2986 1.23789 20.9767 2.02331 20.9767C2.1381 20.9767 2.22872 20.8799 2.22872 20.7572V12.0965C2.22872 11.9738 2.1381 11.877 2.02331 11.877C1.23789 11.877 0.603516 12.5551 0.603516 13.3947V19.4526V19.459Z" fill="#0C2141" />
        <path d="M22.4758 3.1001C20.6331 3.1001 19.1348 4.70176 19.1348 6.67156C19.1348 8.64135 20.6331 10.243 22.4758 10.243C24.3185 10.243 25.8168 8.64135 25.8168 6.67156C25.8168 4.70176 24.3185 3.1001 22.4758 3.1001ZM22.4758 8.51218C21.5273 8.51218 20.7539 7.68551 20.7539 6.67156C20.7539 5.6576 21.5273 4.83093 22.4758 4.83093C23.4243 4.83093 24.1977 5.6576 24.1977 6.67156C24.1977 7.68551 23.4243 8.51218 22.4758 8.51218Z" fill="#0C2141" />
        <path d="M6.52464 3.1001C4.68193 3.1001 3.18359 4.70176 3.18359 6.67156C3.18359 8.64135 4.68193 10.243 6.52464 10.243C8.36734 10.243 9.86568 8.64135 9.86568 6.67156C9.86568 4.70176 8.36734 3.1001 6.52464 3.1001ZM6.52464 8.51218C5.57609 8.51218 4.80276 7.68551 4.80276 6.67156C4.80276 5.6576 5.57609 4.83093 6.52464 4.83093C7.47318 4.83093 8.24651 5.6576 8.24651 6.67156C8.24651 7.68551 7.47318 8.51218 6.52464 8.51218Z" fill="#0C2141" />
        <path d="M14.5007 30.9999C12.658 30.9999 10.8909 30.2173 9.58725 28.8251C8.28485 27.4315 7.55273 25.5426 7.55273 23.5728C7.55273 21.6031 8.28485 19.7141 9.58725 18.3206C10.891 16.9284 12.658 16.1458 14.5007 16.1458C16.3433 16.1458 18.1104 16.9284 19.4141 18.3206C20.7165 19.7142 21.4486 21.6031 21.4486 23.5728C21.4473 25.5426 20.7151 27.4302 19.4114 28.8222C18.109 30.2158 16.3433 30.9985 14.5007 30.9999ZM14.5007 17.2616C12.9346 17.2616 11.4325 17.9271 10.3259 19.11C9.21929 20.293 8.59675 21.8987 8.59675 23.5727C8.59675 25.2467 9.21926 26.8524 10.3259 28.0353C11.4326 29.2183 12.9347 29.8838 14.5007 29.8838C16.0666 29.8838 17.5688 29.2183 18.6754 28.0353C19.782 26.8524 20.4045 25.2467 20.4045 23.5727C20.4032 21.8987 19.7807 20.2944 18.6741 19.1115C17.5674 17.9286 16.0666 17.263 14.5007 17.2616Z" fill="#0C2141" />
        <path d="M14.1979 28.4166C14.1133 28.4166 14.0299 28.3925 13.954 28.3486C12.7845 27.6065 10.3362 25.0742 10.0276 23.0743C9.8671 22.2486 10.0388 21.3846 10.4954 20.7176C10.789 20.2913 11.2344 20.0363 11.7097 20.0208C12.705 20.0208 13.6654 20.8535 14.1979 21.4314C14.7304 20.8649 15.6909 20.0208 16.6862 20.0208C17.1614 20.0363 17.6068 20.2913 17.9004 20.7176C18.357 21.3846 18.5287 22.2486 18.3682 23.0743C18.0597 25.0741 15.6113 27.6064 14.4418 28.3486C14.3659 28.3925 14.2825 28.4166 14.1979 28.4166ZM11.7096 21.1539C11.528 21.1723 11.3625 21.28 11.2567 21.4485C10.9942 21.8607 10.9022 22.3804 11.0029 22.8761C11.2119 24.2698 13.0781 26.3602 14.1978 27.1875C15.3175 26.3604 17.1837 24.2756 17.3926 22.8761C17.4971 22.3776 17.4038 21.8522 17.1388 21.4372C17.0306 21.2729 16.8651 21.1695 16.6859 21.1539C15.8449 21.1539 14.77 22.321 14.6058 22.5759C14.5087 22.7274 14.352 22.8138 14.1877 22.8081C14.0273 22.8053 13.8767 22.7147 13.7847 22.5645C13.6254 22.3209 12.5506 21.1539 11.7096 21.1539Z" fill="#0C2141" />
    </svg>
);

const LabIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M1.65517 0L0 1.67442L1.28448 2.97384L2.93966 1.29942L1.65517 0ZM4.13793 1.67442L1.65517 4.18605L11.0345 13.6744L13.5172 11.1628L4.13793 1.67442ZM3.10345 7.22965C1.21011 8.71671 0 11.0642 0 13.6744C0 18.1441 3.58172 21.7674 8 21.7674C10.6656 21.7674 12.8911 20.4465 14.3448 18.4186H8C5.40998 18.4186 3.31034 16.2945 3.31034 13.6744C3.31034 11.984 4.17874 10.4906 5.49138 9.64535L3.10345 7.22965ZM13.8793 12.3663L12.2241 14.0407L13.5172 15.3488L15.1724 13.6744L13.8793 12.3663ZM9.93103 16.186V17.3023H16V16.186H9.93103ZM12.9741 21.3227C11.563 22.3061 9.86815 22.8837 8 22.8837C6.17099 22.8837 4.46376 22.3378 3.03448 21.3924L1.93103 21.7674V24H14.069V21.7674L12.9741 21.3227Z" fill="#0C2141" />
    </svg>
);

const PharmacyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M3.64062 7.5L12.6406 2L21.6406 7.5M19.6406 10V21.4C19.6406 21.5591 19.5774 21.7117 19.4649 21.8243C19.3523 21.9368 19.1997 22 19.0406 22H6.24062C6.08149 22 5.92888 21.9368 5.81636 21.8243C5.70383 21.7117 5.64062 21.5591 5.64062 21.4V10" stroke="#0C2141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.3076 18H10.9736V15.667H8.64062V12.333H10.9736V10H14.3076V12.333H16.6406V15.667H14.3076V18Z" stroke="#0C2141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);


const TABS: Tab[] = [
    {
        id: "care",
        label: "Our Care Team",
        title: "Our Care Team",
        paragraphs: [
            "We are happy to provide assistance with transportation needs, including helping patients and their families arrange pick-up or drop-off services to and from the hospital. If you have any special requests — such as mobility support, accessibility requirements, or any other personal needs to make your visit more comfortable — please let us know in advance. Our team is committed to ensuring that every patient receives the necessary care, attention, and support from the moment they begin their journey to our hospital.",
        ],
        imageSrc: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676032/youth_blimmq_d9lcjf.jpg",
        imageAlt: "Smiling care team leaning on railing",
        icon: <CareIcon />,
    },
    {
        id: "lab",
        label: "Laboratory & Imaging",
        title: "Laboratory & Imaging",
        paragraphs: [
            "We offer onsite advanced diagnostic services, equipped with modern technology and skilled specialists, to provide faster and more accurate results. This ensures that patients receive timely evaluations, enabling doctors to make quicker treatment decisions and improving overall care outcomes."
        ],
        imageSrc: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676001/lab_cg5o6i_ag2jpu.jpg",
        imageAlt: "Lab technician examining a sample",
        icon: <LabIcon />,
    },
    {
        id: "pharmacy",
        label: "Pharmacy",
        title: "Pharmacy",
        paragraphs: [
            "Our pharmacy is fully stocked with genuine, high-quality medications to ensure patients have easy access to the prescriptions and treatments they need. With a wide range of trusted medicines, professional guidance from qualified pharmacists, and a commitment to safety, we provide reliable support for your health and recovery, all in one convenient location."
        ],
        imageSrc: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676007/pharmacy_zb2uub_pbochu.jpg",
        imageAlt: "Pharmacist preparing medication",
        icon: <PharmacyIcon />,
    },
];
/* -------------------- Animated wrapper for content blocks -------------------- */
function ContentBlock({ children }: { children: React.ReactNode }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        // trigger the enter animation on mount
        const t = window.setTimeout(() => setVisible(true), 10);
        return () => window.clearTimeout(t);
    }, []);
    return (
        <div
            className={
                "transition-transform transition-opacity duration-300 ease-out " +
                (visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1")
            }
        >
            {children}
        </div>
    );
}

/* -------------------- Main component -------------------- */
export default function SupportServicesTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const setRef: RefCallback<HTMLButtonElement> = (element: HTMLButtonElement | null) => {
        if (element) {
            const idx = Number(element.dataset.idx);
            tabRefs.current[idx] = element;
        }
    };

    const active = TABS[activeIndex];

    // Keyboard navigation for tabs (Left/Right/Home/End)
    const onKeyDownTab = (e: React.KeyboardEvent, index: number) => {
        const last = TABS.length - 1;
        let nextIndex = index;

        if (e.key === "ArrowRight" || e.key === "Right") {
            nextIndex = index === last ? 0 : index + 1;
            e.preventDefault();
            setActiveIndex(nextIndex);
            tabRefs.current[nextIndex]?.focus();
            return;
        }
        if (e.key === "ArrowLeft" || e.key === "Left") {
            nextIndex = index === 0 ? last : index - 1;
            e.preventDefault();
            setActiveIndex(nextIndex);
            tabRefs.current[nextIndex]?.focus();
            return;
        }
        if (e.key === "Home") {
            e.preventDefault();
            setActiveIndex(0);
            tabRefs.current[0]?.focus();
            return;
        }
        if (e.key === "End") {
            e.preventDefault();
            setActiveIndex(last);
            tabRefs.current[last]?.focus();
            return;
        }
    };

    return (
        <section aria-labelledby="support-services-title" className="pt-[0px] pb-[60px] lg:pt-[80px] lg:pb-[160px] bg-white">
            <div className="px-[16px] lg:px-20">
                {/* Header: heading left, tabs right */}
                <div className="flex flex-col  lg:flex-row lg:items-end justify-between gap-6">
                    <h2
                        id="support-services-title"
                        className="text-3xl sm:text-4xl lg:text-[52px] lg:leading-[62.4px] lg:tracking-[-1.56px] font-medium text-[#0D2644]"
                        style={{ lineHeight: 1.02 }}
                    >
                        Support Services
                    </h2>

                    {/* Tab pills (top-right) */}
                    <div
                        className="grid-cols-1 lg:flex items-center gap-[10px] ml-auto"
                        role="tablist"
                        aria-label="Support sections"
                    >
                        {TABS.map((tab, idx) => {
                            const isActive = idx === activeIndex;
                            // pill styles: active = soft green rounded pill; inactive = inline small icon + label
                            return (
                                <button
                                    key={tab.id}
                                    ref={setRef}
                                    data-idx={idx}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.id}`}
                                    id={`tab-${tab.id}`}
                                    tabIndex={isActive ? 0 : -1}
                                    onKeyDown={(e) => onKeyDownTab(e, idx)}
                                    onClick={() => setActiveIndex(idx)}
                                    className={
                                        "inline-flex items-center gap-[8px] rounded-full px-4 py-2 lg:px-[16px] lg:py-[17px] text-sm lg:text-[18px] font-bold leading-[20px] tracking-[-0.6px] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-none " +
                                        (isActive
                                            ? "bg-[#B9D6B8] text-[#0C2141]"
                                            : "text-[#0D2644] hover:text-[#0B1F37]")
                                    }
                                >
                                    {/* icon */}
                                    <span
                                        className={
                                            "flex h-6 w-6 items-center justify-center " +
                                            (isActive ? "text-[#0D2644]" : "text-[#0D2644]/90")
                                        }
                                        aria-hidden
                                    >
                                        {tab.icon ?? null}
                                    </span>

                                    {/* label - keep visible always; screenshot shows label text next to icon */}
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 lg:mt-[40px] grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
                    {/* Image column */}
                    <div className="">
                        <div key={active.id}>
                            <ContentBlock>
                                <div className="w-full overflow-hidden rounded-[12px]">
                                    <img
                                        src={active.imageSrc}
                                        alt={active.imageAlt ?? active.title}
                                        loading="lazy"
                                        className="w-full h-80 sm:h-96 lg:h-[400px] object-cover"
                                    />
                                </div>
                            </ContentBlock>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="lg:ml-auto max-w-[518px] justify-between">
                        <div key={active.id}>
                            <ContentBlock>
                                <h3 className="text-3xl lg:text-[45px] lg:leading-[58.5px] lg:tracking-[-1.35px] font-medium text-[#0D2644]">
                                    {active.title}
                                </h3>

                                <div className="mt-[20px] text-sm lg:text-[18px] text-[#0C2141] lg:leading-[27px] lg:tracking-[-0.54px]">
                                    {active.paragraphs.map((p, i) => (
                                        <p key={i} className="leading-relaxed">
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-[30px] items-end">
                                    <a
                                        href="/enquiry"
                                        className="inline-block text-sm lg:text-[18px] font-bold text-[#0D2644] lg:leading-[27px] lg:tracking-[-0.54px] underline hover:text-[#0B1F37]"
                                    >
                                        Book an appointment
                                    </a>
                                </div>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
