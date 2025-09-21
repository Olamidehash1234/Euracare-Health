import { useState, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop";

const newsArticles = [
  {
    id: "world-heart-day",
    title: "World Heart Day – Protecting What Matters Most",
    content: (
      <>
        <p className="pb-[20px]">
          Every year on September 29, World Heart Day shines a spotlight on cardiovascular health. Heart disease remains the leading cause of death for men and women worldwide, claiming millions of lives annually. Yet the truth is: most heart conditions are preventable. At Euracare, we believe awareness, prevention, and access to expert care can save countless lives.</p>
        <h3 className="font-semibold text-[20px]">Why Heart Health Matters</h3>
        <p>
          Your heart is an incredible organ, beating more than 100,000 times every day to keep you alive. Yet it’s also highly vulnerable to modern lifestyles. Stressful routines, poor diet, smoking, alcohol, and sedentary behavior all contribute to conditions such as hypertension, diabetes, and high cholesterol. These “silent risks” often go unnoticed until a major event like a heart attack or stroke occurs.
        </p>
        <p>
          In Nigeria and across Africa, cardiovascular disease rates are rising sharply. Greater urbanization, dietary changes, and less physical activity have created the perfect storm for an increase in heart-related conditions. That’s why prevention and awareness are more important than ever.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Prevention Is Power</h3>
        <p>Small changes truly make a big difference. Eating more fruits and vegetables, walking 30 minutes a day, limiting salt and sugar, managing stress, and quitting smoking all significantly reduce your risk. Regular check-ups with a cardiologist also help detect problems early, before they become life-threatening.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Euracare’s Role in Heart Health</h3>
        <p>
          At Euracare, we are committed to being part of the solution. Our cardiology services combine advanced diagnostic tools with world-class expertise. From preventive screenings to complex interventional procedures, we provide a full spectrum of care.
        </p>
        <p>
          What sets us apart is our patient-centered philosophy. We don’t just treat heart disease — we partner with you in protecting your heart for the long term. Our doctors take time to explain risk factors, guide lifestyle adjustments, and offer personalized care plans.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">World Heart Day at Euracare</h3>
        <p>
          Every year, Euracare joins the global movement for World Heart Day by spreading awareness, offering heart check-up programs, and educating communities. But our commitment lasts 365 days a year. Protecting heart health is central to our mission.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Taking the First Step</h3>
        <p>
          Your heart is worth protecting. Book a heart screening, talk to your doctor about your risk factors, and encourage loved ones to do the same. Every choice you make matters.
        </p>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 Euracare is here to help you every step of the way. This World Heart Day, commit to protecting what matters most: your heart
        </p>
      </>
    ),
  },
  {
    id: "interventional-cardiology",
    title: "Interventional Cardiology – Saving Lives Without Open Surgery",
    content: (
      <>
        <p className="lg:pb-[30px] pb-[10px]">
          When people think about heart treatment, they often imagine open-heart surgery — long hospital stays, big scars, and lengthy recovery. But medicine has changed dramatically. Today, interventional cardiology allows doctors to treat many heart conditions with minimally invasive procedures, using catheters and imaging guidance. At Euracare, this specialty is transforming lives.
        </p>
        <h3 className="font-semibold text-[20px]">What Is Interventional Cardiology?</h3>
        <p>Interventional cardiology uses small incisions, usually in the wrist or groin, to insert a catheter into the blood vessels. Guided by real-time imaging, specialists can:</p>
        <ul className="list-disc list-inside ml-6 space-y-[2px]">
          <li>Open blocked arteries with angioplasty</li>
          <li>Insert stents to keep arteries open</li>
          <li>Repair damaged heart structures</li>
          <li>Remove dangerous plaque build-up</li>
        </ul>
        <p>
          These procedures restore blood flow, relieve chest pain, and prevent heart attacks — without the need for open surgery.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Benefits for Patients</h3>
        <ul className="list-disc list-inside ml-6">
          <li><span className="font-semibold">Less invasive:</span> No large cuts, fewer scars</li>
          <li><span className="font-semibold">Lower risk:</span> Reduced chances of infection and complications</li>
          <li><span className="font-semibold">Faster recovery:</span> Many patients return home within 24–48 hours</li>
          <li><span className="font-semibold">Better outcomes:</span> Procedures are highly precise and effective</li>
        </ul>
        <p>
          For patients, this means peace of mind and a faster return to normal life.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Interventional Cardiology at Euracare</h3>
        <p>
          Euracare offers world-class interventional cardiology right here in Lagos. Our specialists are internationally trained and bring experience from top hospitals abroad. Patients benefit from cutting-edge technology, global expertise, and a multidisciplinary team that ensures every stage of care is coordinated.
        </p>
        <p>
          We don’t just perform procedures — we also focus on prevention. Our team helps patients manage hypertension, cholesterol, diabetes, and lifestyle risks, ensuring long-term heart health.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Real Impact</h3>
        <p>
          If you have risk factors such as high blood pressure, family history, or recurring chest discomfort, don’t wait.
        </p>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 Schedule a consultation at Euracare. With interventional cardiology, life-saving care is closer and safer than ever.
        </p>
      </>
    ),
  },
  {
    id: "interventional-radiology",
    title: "Interventional Radiology – Surgery Without the Scalpel",
    content: (
      <>
        <p className="lg:pb-[30px] pb-[10px]">
          Imagine being treated for a serious condition without the risks and pain of open surgery. That’s the promise of interventional radiology (IR) — one of the most exciting advances in modern medicine. At Euracare, we are proud to offer these cutting-edge, minimally invasive treatments that put patient comfort and safety first.        </p>
        <h3 className="font-semibold text-[20px]">What Is Interventional Radiology?</h3>
        <p>IR uses imaging techniques such as ultrasound, CT, and fluoroscopy to guide tiny instruments through the body. Through a small incision, specialists perform treatments that once required major surgery. Common uses include:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Treating blocked arteries</li>
          <li>Stopping internal bleeding</li>
          <li>Delivering targeted cancer therapies</li>
          <li>Managing conditions like fibroids or varicose veins</li>
        </ul>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Why Patients Prefer IR</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Less pain: Minimal incisions mean minimal discomfort</li>
          <li>Shorter stays: Many patients go home the same day</li>
          <li>Lower risk: Reduced chances of complications</li>
          <li>Quicker recovery: Return to normal life faster</li>
        </ul>
        <p>
          For patients, IR represents a safer, gentler option with excellent outcomes.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Euracare’s Expertise</h3>
        <p>
          Euracare’s interventional radiologists are leaders in their field, trained internationally and equipped with world-class tools. They work closely with other specialists — cardiologists, oncologists, and surgeons to provide truly personalized care.        </p>
        <p>
          Our IR services don’t just treat disease; they improve quality of life. From managing chronic pain to delivering life-saving cancer therapies, these procedures change lives every day.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">The Future of Medicine, Today</h3>
        <p>
          Interventional radiology is one of the fastest-growing specialties worldwide, and Euracare is proud to bring it to Lagos.
        </p>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 If you’re facing surgery, ask your doctor about interventional radiology at Euracare — the less invasive, more precise way forward.
        </p>
      </>
    ),
  },
  {
    id: "bariatric-surgery",
    title: "Bariatric Surgery – More Than Weight Loss",
    content: (
      <>
        <p className="lg:pb-[20px]">
          For many people, losing weight isn’t as simple as “eat less and move more.” Obesity is a complex condition influenced by genetics, metabolism, environment, and emotional health. Beyond appearance, it carries serious risks: type 2 diabetes, hypertension, sleep apnea, and even certain cancers. When lifestyle changes alone aren’t enough, bariatric surgery can provide a powerful tool for reclaiming health and quality of life.
        </p>
        <h3 className="font-semibold text-[20px]">Understanding Bariatric Surgery</h3>
        <p>Bariatric surgery refers to a group of procedures designed to help patients achieve significant and sustained weight loss. These surgeries work by reducing the size of the stomach, limiting food intake, or changing how the digestive system absorbs nutrients. Importantly, they are not cosmetic procedures — they are evidence-based medical interventions for people whose health is compromised by obesity.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Who Can Benefit?</h3>
        <p>Bariatric surgery is generally considered for people who:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Have a body mass index (BMI) of 40 or higher</li>
          <li>Have a BMI of 35 or higher with obesity-related health issues such as diabetes or high blood pressure</li>
          <li>Have tried diet and exercise without lasting success</li>
        </ul>
        <p>It’s not about taking the “easy way out.” In fact, bariatric surgery requires significant commitment to lifestyle changes, but it can open the door to possibilities that were previously out of reach.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Health Benefits Beyond Weight Loss</h3>
        <p>Research consistently shows that bariatric surgery offers life-changing benefits:</p>
        <ul className="list-disc list-inside ml-6">
          <li><span className="font-semibold">Diabetes control:</span> Many patients see their blood sugar return to normal, sometimes within days of surgery</li>
          <li><span className="font-semibold">Lower blood pressure and cholesterol:</span> These improvements reduce the risk of heart disease and stroke</li>
          <li><span className="font-semibold">Better sleep:</span> Conditions like sleep apnea often resolve, allowing for more restful nights</li>
          <li><span className="font-semibold">Improved fertility:</span> Weight loss can restore hormonal balance and improve reproductive health</li>
          <li><span className="font-semibold">Greater mobility:</span> Less strain on joints makes everyday movement easier and less painful</li>
        </ul>
        <p>
          For many, the benefits extend beyond physical health to mental wellbeing — greater confidence, reduced stigma, and improved quality of life.        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Euracare’s Holistic Approach</h3>
        <p>
          At Euracare, bariatric surgery is never “just an operation.” We provide complete care through a multidisciplinary team including surgeons, dietitians, psychologists, and medical specialists. From the first consultation, patients are educated, supported, and guided through every stage.        </p>
        <p>
          We emphasize realistic goals and sustainable change. After surgery, patients receive long-term nutritional counseling and lifestyle coaching. The focus is not only on losing weight but on building a healthier, more fulfilling life.
        </p>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 If obesity is affecting your health, Euracare’s bariatric surgery program can help you reclaim your life.
        </p>
      </>
    ),
  },
  {
    id: "breast-surgery",
    title: "Breast Surgery – Expertise with Compassion",
    content: (
      <>
        <p className="lg:pb-[20px]">
          Breast health is one of the most personal aspects of a woman’s wellbeing. When concerns arise, the emotions can be overwhelming. At Euracare, we approach breast surgery with sensitivity, advanced expertise, and an unwavering commitment to our patients’ overall wellbeing.        </p>
        <h3 className="font-semibold text-[20px]">Why Breast Health Matters</h3>
        <p>Breast health challenges are common, and early evaluation is critical. Yet many women delay care due to fear or uncertainty. This delay can affect outcomes and prolong anxiety. At Euracare, we encourage women to take charge of their breast health through timely consultations and screenings.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Our Approach</h3>
        <p>Every patient is unique, and so is her care. We take time to listen, explain, and ensure patients feel confident about their choices. Knowledge is power — and part of healing.</p>
        <p>Our multidisciplinary team — including radiologists, oncologists, and nurses — ensures seamless care. From diagnosis to recovery, patients are supported at every stage.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Beyond Medical Treatment</h3>
        <p>We know that breast surgery is not just a medical journey but also an emotional one. Concerns about recovery, identity, and body image are natural. That’s why Euracare’s approach is holistic: we focus on both outcomes and emotional resilience.</p>
        <p>Patients at Euracare find a safe space where their voices are heard and their dignity is respected.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Why Choose Euracare</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Internationally trained breast specialists.</li>
          <li>Comprehensive, coordinated care.</li>
          <li>World-class facilities in Lagos.</li>
          <li>Compassion at the heart of everything we do.</li>
        </ul>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 If you have concerns about your breast health, take the first step today. Euracare’s team is here to provide expertise with compassion.
        </p>
      </>
    ),
  },
  {
    id: "orthopedic-surgery",
    title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
    content: (
      <>
        <p className="lg:pb-[20px]">
          Mobility is freedom. When injury or joint disease limits movement, even simple tasks can feel impossible. Orthopedic surgery helps patients regain independence and quality of life. At Euracare, our orthopedic specialists combine global expertise with advanced technology to deliver exceptional outcomes.        </p>
        <h3 className="font-semibold text-[20px]">Conditions We Treat</h3>
        <p>Our orthopedic services cover a wide range of conditions:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Sports injuries such as ligament tears</li>
          <li>Arthritis and joint degeneration</li>
          <li>Spinal disorders</li>
          <li>Fractures and trauma care</li>
          <li>Hip and knee replacements</li>
        </ul>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Modern Orthopedics</h3>
        <p>Thanks to minimally invasive techniques and improved implants, patients recover faster and experience less pain than ever before. Rehabilitation and physical therapy are integral, ensuring full recovery and return to activity.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Euracare’s Advantage</h3>
        <p>Euracare’s orthopedic surgeons are internationally trained and bring experience from leading global hospitals. Supported by state-of-the-art imaging and operating theaters, they provide safe, effective, and patient-centered care.</p>
        <p>We believe in treating the whole person, not just the injury. Our care pathway includes pre-surgical counseling, personalized rehabilitation, and long-term follow-up.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Why Choose Euracare</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Internationally trained orthopedic surgeons.</li>
          <li>Minimally invasive techniques.</li>
          <li>Comprehensive rehab support.</li>
          <li>World-class facilities in Lagos.</li>
        </ul>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 If pain or injury is limiting your life, Euracare’s orthopedic team can help restore your freedom to move.
        </p>
      </>
    ),
  },
  {
    id: "visiting-consultants",
    title: "Visiting Consultants – Global Expertise in Lagos",
    content: (
      <>
        <p className="lg:pb-[20px]">
          One of Euracare’s greatest strengths is its network of internationally renowned visiting consultants. Instead of patients traveling abroad for specialized care, Euracare brings world-class expertise to Lagos.
        </p>
        <h3 className="font-semibold text-[20px]">Why Visiting Consultants Matter</h3>
        <p>These consultants are leaders in their fields, from cardiology and neurosurgery to oncology and beyond. They bring the latest techniques, global best practices, and fresh perspectives directly to our patients.
        </p>
        <p>For complex cases, this access can be life-changing. Patients receive opinions and treatments that might otherwise require costly international travel.
        </p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Collaboration With Our Team</h3>
        <p>Visiting consultants work hand-in-hand with Euracare’s resident specialists. This ensures continuity of care: once the consultant has provided treatment or guidance, our in-house team continues to support the patient’s recovery.</p>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">Patient Benefit</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Access to world-leading experts</li>
          <li>International standards of care</li>
          <li>Comprehensive, coordinated follow-up in Lagos</li>
        </ul>
        <h3 className="font-semibold text-[20px] pt-[20px] lg:pt-[30px]">A Unique Advantage in Nigeria</h3>
        <p>Few facilities in West Africa offer this model. At Euracare, we are proud to bridge local care with global expertise, giving our patients the very best without leaving home.</p>
        <p className="pt-[20px]  text-center font-semibold italic">
          👉 Check Euracare’s schedule of visiting consultants and book your appointment today. The world’s best medical minds are now closer than ever.
        </p>
      </>
    ),
  },
];

const newsCards = [
  {
    id: "world-heart-day",
    date: "Apr 8, 2025",
    title: "World Heart Day – Protecting What Matters Most",
    category: "Cardiology / Medical Technology",
  },
  {
    id: "interventional-cardiology",
    date: "Apr 8, 2025",
    title: "Interventional Cardiology – Saving Lives Without Open Surgery",
    category: "Interventional Cardiology",
  },
  {
    id: "interventional-radiology",
    date: "Apr 8, 2025",
    title: "Interventional Radiology – Surgery Without the Scalpel",
    category: "Interventional Radiology",
  },
  {
    id: "bariatric-surgery",
    date: "Feb 6, 2025",
    title: "Bariatric Surgery – More Than Weight Loss",
    category: "Bariatric Surgery",
  },
  {
    id: "breast-surgery",
    date: "Mar 13, 2025",
    title: "Breast Surgery – Expertise with Compassion",
    category: "Breast Surgery",
  },
  {
    id: "orthopedic-surgery",
    date: "Feb 19, 2025",
    title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
    category: "Orthopedic Surgery",
  },
  {
    id: "visiting-consultants",
    date: "Feb 17, 2025",
    title: "Visiting Consultants – Global Expertise in Lagos",
    category: "International Patients",
  },
];

export default function NewsFullPage() {
  // Get hash from URL (e.g. #breast-surgery)
  const getInitialId = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      // Validate hash against available news ids
      if (hash && newsArticles.some(a => a.id === hash)) {
        return hash;
      }
    }
    return newsCards[0].id;
  };

  const [selectedId, setSelectedId] = useState(getInitialId());

  // Listen for hash changes (e.g. user clicks another anchor)
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && newsArticles.some(a => a.id === hash)) {
        setSelectedId(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top when selectedId changes (card click)
  useEffect(() => {
    // Only scroll on card click, not on initial mount
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [selectedId]);

  const selectedArticle = newsArticles.find(a => a.id === selectedId) || newsArticles[0];

  // Filter out the currently open news from the More News section
  const filteredNewsCards = newsCards.filter(card => card.id !== selectedId);

  return (
    <div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
      <ScrollToTop />
      <div className="">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h1 className="text-[28px] lg:text-[40px] font-medium text-[#0C2141] mb-10 sm:mb-[80px]">Euracare News & Updates</h1>
          {/* Main Article */}
          <div className="lg:col-span-2">
            <section id={selectedArticle.id} className="mb-16 lg:mb-[120px]">
              <h2 className="text-[22px] leading-[28px] lg:leading-none lg:text-[32px] font-medium text-[#02070D] mb-[20px] sm:mb-[30px]">{selectedArticle.title}</h2>
              <div className="space-y-[16px] text-[15px] lg:text-[18px] text-[#1F2A44]">{selectedArticle.content}</div>
            </section>
          </div>
        </div>
        {/* More News Cards */}
        <div>
          <h3 className="text-[20px] lg:text-[32px] font-medium text-center text-[#0C2141] mb-6 lg:mb-[40px] lg:leading-[40px]">More News You Might Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {filteredNewsCards.map(card => (
              <button
                key={card.id}
                onClick={() => {
                  setSelectedId(card.id);
                  window.location.hash = `#${card.id}`;
                }}
                className={`w-full text-left bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between border border-[#0C21411A] ${selectedId === card.id ? "ring-1 ring-[#0C2141]" : ""
                  }`}
                aria-current={selectedId === card.id ? "true" : undefined}
              >
                <div>
                  <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                    {card.date}
                  </p>
                  <h4 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[80px]">
                    {card.title}
                  </h4>
                </div>
                <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                  {card.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
