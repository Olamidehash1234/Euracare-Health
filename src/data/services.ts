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
    {
        slug: "bariatric-weight-loss-surgery",
        title: "Bariatric & Weight Loss Surgery",
        description: "We offer safe, effective bariatric and weight loss surgeries—including gastric bypass and sleeve gastrectomy—to support long-term weight management, improve overall health, and reduce obesity-related conditions.",
        image: "/services/weight.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Bariatric & Weight Loss Surgery service is dedicated to providing comprehensive care for individuals seeking weight loss solutions. Our team of experienced surgeons and specialists work closely with patients to develop personalized treatment plans that may include surgical and non-surgical options. We focus on addressing the root causes of obesity, promoting healthy lifestyle changes, and ensuring long-term success for our patients."
    },
    {
        slug: "dentistry",
        title: "Dentistry",
        description: "We offer a comprehensive range of dental services, including preventive care, restorative treatments, and cosmetic procedures, to help you achieve and maintain a healthy, beautiful smile.",
        image: "/services/dentist.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "dermatology",
        title: "Dermatology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "ear-nose-throat",
        title: "Ear, Nose and Throat (ENT)",
        description: "We offer a comprehensive range of ENT services, including diagnosis and treatment of conditions affecting the ear, nose, and throat.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "endocrinology-and-diabetology",
        title: "Endocrinology and Diabetology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "fertility-services",
        title: "Fertility Services",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "gastroenterology",
        title: "Gastroenterology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "general-medicine",
        title: "General Medicine",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "general-surgery",
        title: "General Surgery",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "gynaecology",
        title: "Gynaecology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "Haematology",
        title: "Haematology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "international-patients",
        title: "International Patients",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "interventinal-cardiology",
        title: "Interventional Cardiology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "neurology-neurosurgery",
        title: "Neurology & Neurosurgery",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "nutritionist",
        title: "Nutritionist",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "oncology",
        title: "Oncology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Oncology is a branch of medical science dealing with tumours, including the origin, development, diagnosis, and treatment of malignant neoplasms. Different types of doctors often work together to create a patient’s overall treatment plan that combines different types of treatments. Euracare provides Surgical Oncology services and cancer treatment using cutting-edge Interventional Radiology modalities. Interventional radiology may also be used to manage metastatic disease from a variety of cancers including those of the breast, colon, rectum, gallbladder, pancreas, lung, oesophagus and stomach, as well as melanoma and sarcoma. Interventional radiologists are specialists trained in using image-guided technology, such as X-rays, CT and MRI",
        testList: ["Biopsy", "MRI", "CT", "X-ray", "Clinical Laboratory", "Ultrasound", "Bronchoscopy", "Endoscopic procedures", "Lumbar puncture", "Pap smear", "Physical examination"],
        conditionList: ["Transarterial chemoembolization", "Radiofrequency ablation (RFA)", "Microwave ablation", "Tumour ablation procedures", "Liver-directed therapies", "Vascular work", "Drainage catheters", "Port and PICC Line Placement", "Pain management", "Lymphatic Interventions"],
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
        slug: "orthopaedic-services",
        title: "Orthopaedic Services",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "paediatric-cardiology",
        title: "Paediatric Cardiology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "paediatrics",
        title: "Paediatrics",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "psychiatry-sleep-therapy",
        title: "Psychiatry – Sleep Therapy",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "pulmonology",
        title: "Pulmonology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "radiology",
        title: "Radiology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "reconstructive-plastic-surgery",
        title: "Reconstructive & Plastic Surgery",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "rheumatology",
        title: "Rheumatology",
        description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
        image: "/services/dermatology.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
];
