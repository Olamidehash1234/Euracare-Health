// InnovationAccordion.jsx
import { useState, useRef, useEffect } from "react";

/**
 * AccordionItem - animates open/close by transitioning max-height
 * Props:
 *  - id: string|number (for aria)
 *  - title: string
 *  - isOpen: boolean
 *  - onToggle: () => void
 *  - children: node (content)
 */
interface AccordionItemProps {
  id: string | number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionItem({ id, title, isOpen, onToggle, children }: AccordionItemProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    // measure inner content height and set container maxHeight for a smooth transition
    if (innerRef.current) {
      setMaxHeight(isOpen ? `${innerRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-[#0C21411A] rounded-[12px] overflow-hidden bg-white">
      <h3>
        <button
          id={`accordion-${id}-btn`}
          aria-controls={`accordion-${id}-panel`}
          aria-expanded={isOpen}
          onClick={onToggle}
          className="w-full flex items-center justify-between px-5 py-[14px] text-left focus:outline-none"
        >
          <span className="text-sm lg:text-[16px] font-medium text-[#0C2141]">{title}</span>

          <span className="flex items-center justify-center w-[24px] h-[24px]">
            <img src="./down.svg"
              className={`w-5 h-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>

      {/* Animated container */}
      <div
        id={`accordion-${id}-panel`}
        role="region"
        aria-labelledby={`accordion-${id}-btn`}
        style={{ maxHeight }}
        className="px-6 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]"
      >
        <div ref={innerRef} className="pb-[14px] text-[14px] text-[#0C2141]">
          {children}
        </div>
      </div>
    </div>
  );
}

interface InnovationAccordionProps {
  imageSrc?: string;
}

export default function InnovationAccordion({
  imageSrc = "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676033/tech_kzz7vc_oa90bp.jpg",
}: InnovationAccordionProps) {
  const sections = [
    {
      title: "Interventional Radiology & Vascular",
      content: [
        "First scrotal varicocele embolization",
        "First celiac & hypogastric plexus block (for cancer/pancreatitis pain)",
        "First central venous obstruction (SVC syndrome) stenting",
        "First direct translumbar IVC dialysis catheter placement",
        "First below-knee arterial recanalization",
        "First endovascular iliac artery endograft",
        "First transarterial chemoembolization (TACE) and microwave ablation for liver cancer"
      ],
    },
    {
      title: "Structural Heart & Interventional Cardiology",
      content: [
        "First stenting of aortic coarctation (congenital)",
        "First ASD device closure in Nigeria’s youngest patient (9 years)",
        "First PFO (hole-in-the-heart) device closure",
        "First TAVI (Transcatheter Aortic Valve Implantation)",
        "First device closure of ruptured sinus of valsalva aneurysm"
      ],
    },
    {
      title: "Urology (with IR collaboration)",
      content: [
        "First “rendezvous” procedure for ureteric structure",
        "First combined retrograde–retrograde ureteral repair",
      ],
    },
    {
      title: "Spine Surgery",
      content: ["First minimally invasive spinal surgery"],
    },
  ];

  // which panel is open (single-open behaviour). default = 0 (first open)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-[16px] lg:px-20 py-[60px] lg:py-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[124px] items-start">
        {/* Left image */}
        <div className="rounded-2xl lg:h-[600px] overflow-hidden shadow-sm">
          <img
            src={imageSrc}
            alt="Innovation & technology"
            className="w-full h-full  object-cover rounded-2xl"
          />
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-[24px] lg:text-[40px] font-medium text-[#0C2141] mb-[20px] leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px]">
            Innovation & Technology
          </h2>

          <p className="text-[#0C2141] mb-6 text-sm font-medium lg:text-[16px] lg:leading-[27px] leading-relaxed tracking-[-0.54px]">
            From high-resolution MRI and CT scanners to minimally invasive surgical
            systems, we use cutting-edge technology to ensure faster diagnoses,
            safer treatments, and better results. We have led innovation in the
            healthcare sector in Nigeria delivering notable firsts:
          </p>

          <div className="space-y-[10px]">
            {sections.map((s, i) => (
              <AccordionItem
                key={s.title}
                id={i}
                title={s.title}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {/* content: reproduce the bullet style you showed */}
                <ul className="list-disc ml-5 space-y-1">
                  {s.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
