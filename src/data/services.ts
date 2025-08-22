export type FAQ = {
    question: string;
    answer: string;
};

export type ServiceData = {
    slug: string;
    title: string;
    description: string;
    image: string;
    heroImage: string;
    overviewText: string;
    testList?: string[];
    conditionList?: string[];
    faqs?: FAQ[];
};

export const services: ServiceData[] = [
    {
        slug: "advanced-cardiac-imaging",
        title: "Advanced Cardiac Imaging",
        description: "Our Advanced Cardiac Imaging service uses state-of-the-art technology—such as echocardiography, CT, and MRI—to provide precise, non-invasive assessments of heart structure and function, enabling early diagnosis and tailored treatment plans.",
        image: "/services/cardiac.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Advanced Cardiac Imaging at Euracare provides comprehensive diagnostic solutions using cutting-edge technology. Our state-of-the-art imaging equipment, combined with the expertise of our specialists, enables precise visualization of heart structures and function. This allows for early detection of cardiovascular conditions, accurate diagnosis, and the development of targeted treatment strategies. Our advanced imaging capabilities include 3D echocardiography, cardiac CT, and MRI, offering detailed insights into heart health while ensuring patient comfort and safety.",
    },
    {
        slug: "antenatal-postnatal-care",
        title: "Antenatal & Postnatal Care",
        description: "We provide comprehensive care before and after childbirth, including regular check-ups, diagnostic screenings, nutritional guidance, and emotional support—ensuring the health and well-being of both mother and baby at every stage.",
        image: "/services/postnatal.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Our goal is to provide regular check-ups that allow doctors to treat and prevent potential health problems throughout the course of the pregnancy and to promote healthy lifestyles that benefit both mother and child. During check-ups, pregnant women receive medical information over maternal physiological changes in pregnancy, biological changes, and prenatal nutrition including prenatal vitamins. Recommendations on management and healthy lifestyle changes are also made during regular check-ups. Prenatal screening is playing important roll to reduce the frequency of maternal death, miscarriages, birth defects, low birth weight, neonatal infections and other preventable health problems. Euracare’s specialists provide comprehensive range of Antenatal and Postnatal Care services.",
        testList: ["Blood tests during pregnancy", "Checking your blood group", "Rh negative blood and Anti D injections", "Haemoglobin", "Sickle cells", "Rubella", "Syphilis", "Hepatitis B & C", "HIV and AIDS", "Urine test", "Glucose challenge test for gestational diabetes", "Pap smear (smear test)"],
        conditionList: ["Consultations", "An ultrasound dating scan at 6-10 weeks", "An ultrasound anomaly scan at 18-22 weeks", "An ultrasound nuchal translucency scan at 11-14 (for the detection of cardiovascular abnormalities)", "Postpartum health checks", "Family planning"],
        faqs: [
            {
                question: "What is antenatal care, and why is it important?",
                answer: "Antenatal care involves regular medical checkups during pregnancy to monitor the health of both mother and baby. It helps detect and manage potential complications early, ensuring a safe and healthy pregnancy."
            },
            {
                question: "When should I start antenatal visits at Euracare?",
                answer: "We recommend scheduling your first antenatal visit as soon as you suspect or confirm your pregnancy, ideally within the first 8-12 weeks. Early care is crucial for establishing baseline health measurements and identifying any potential risks."
            },
            {
                question: "What services are included in Euracare's antenatal care package?",
                answer: "Our comprehensive package includes regular check-ups, diagnostic screenings, ultrasound scans, blood tests, nutritional guidance, and prenatal education. We also provide personalized care plans based on individual needs."
            },
            {
                question: "Do you offer childbirth education or antenatal classes?",
                answer: "Yes, we offer comprehensive childbirth education classes that cover labor preparation, breathing techniques, pain management options, and newborn care. These classes are designed to help you feel confident and prepared for delivery."
            },
            {
                question: "What should I expect during a postnatal check-up?",
                answer: "Postnatal check-ups include assessment of your recovery, baby's growth and development, breastfeeding support, emotional well-being evaluation, and discussions about contraception and future health planning."
            },
            {
                question: "How soon after delivery should I come for a postnatal visit?",
                answer: "We recommend your first postnatal visit within the first week after delivery, followed by regular check-ups at 2 weeks, 6 weeks, and 3 months postpartum, or as advised by your healthcare provider."
            }
        ]
    },
    {
        slug: "back-spine-surgery",
        title: "Back & Spine Surgery",
        description: "Our Back & Spine Surgery services offer advanced diagnosis and minimally invasive treatments for spinal disorders, chronic back pain, herniated discs, and injuries—focused on restoring mobility and improving quality of life.",
        image: "/services/spine.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Back & Spine Surgery service is dedicated to providing advanced diagnostic and therapeutic options for patients with spinal disorders. Our team of experienced surgeons and specialists utilize minimally invasive techniques and state-of-the-art technology to treat a wide range of conditions, including herniated discs, spinal stenosis, and chronic back pain. We focus on accurate diagnosis, effective pain management, and personalized treatment plans to restore mobility and enhance the quality of life for our patients."
    },
    // ...add other services with unique slugs...
];
