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
        slug: "interventional-cardiology",
        title: "Interventional Cardiology",
        description: "Our expert cardiologists provide advanced heart care, from diagnostics to complex interventions. Using the latest technology and evidence-based treatments, we help you protect and restore your heart health with precision and compassion.",
        image: "/services/cardiac.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Interventional Cardiology at Euracare focuses on minimally invasive techniques to diagnose and treat cardiovascular conditions. Our team of specialists utilizes advanced imaging and catheter-based procedures to provide effective solutions for complex heart issues. This approach not only enhances patient comfort but also promotes faster recovery times compared to traditional surgical methods.",
    },
     {
        slug: "interventional-radiology",
        title: "Interventional Radiology",
        description: "We provide cutting-edge, image-guided procedures that diagnose and treat conditions with less discomfort and faster recovery. From targeted therapies to vascular interventions, our Interventional Radiology specialists combine technology and expertise to deliver outstanding outcomes.",
        image: "/home/inter.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Advanced Cardiac Imaging at Euracare provides comprehensive diagnostic solutions using cutting-edge technology. Our state-of-the-art imaging equipment, combined with the expertise of our specialists, enables precise visualization of heart structures and function. This allows for early detection of cardiovascular conditions, accurate diagnosis, and the development of targeted treatment strategies. Our advanced imaging capabilities include 3D echocardiography, cardiac CT, and MRI, offering detailed insights into heart health while ensuring patient comfort and safety.",
    },
    
    // {
    //     slug: "antenatal-postnatal-care",
    //     title: "Antenatal & Postnatal Care",
    //     description: "We provide comprehensive care before and after childbirth, including regular check-ups, diagnostic screenings, nutritional guidance, and emotional support—ensuring the health and well-being of both mother and baby at every stage.",
    //     image: "/services/postnatal.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "Our goal is to provide regular check-ups that allow doctors to treat and prevent potential health problems throughout the course of the pregnancy and to promote healthy lifestyles that benefit both mother and child. During check-ups, pregnant women receive medical information over maternal physiological changes in pregnancy, biological changes, and prenatal nutrition including prenatal vitamins. Recommendations on management and healthy lifestyle changes are also made during regular check-ups. Prenatal screening is playing important roll to reduce the frequency of maternal death, miscarriages, birth defects, low birth weight, neonatal infections and other preventable health problems. Euracare’s specialists provide comprehensive range of Antenatal and Postnatal Care services.",
    //     testList: ["Blood tests during pregnancy", "Checking your blood group", "Rh negative blood and Anti D injections", "Haemoglobin", "Sickle cells", "Rubella", "Syphilis", "Hepatitis B & C", "HIV and AIDS", "Urine test", "Glucose challenge test for gestational diabetes", "Pap smear (smear test)"],
    //     conditionList: ["Consultations", "An ultrasound dating scan at 6-10 weeks", "An ultrasound anomaly scan at 18-22 weeks", "An ultrasound nuchal translucency scan at 11-14 (for the detection of cardiovascular abnormalities)", "Postpartum health checks", "Family planning"],
    //     faqs: [
    //         {
    //             question: "What is antenatal care, and why is it important?",
    //             answer: "Antenatal care involves regular medical checkups during pregnancy to monitor the health of both mother and baby. It helps detect and manage potential complications early, ensuring a safe and healthy pregnancy."
    //         },
    //         {
    //             question: "When should I start antenatal visits at Euracare?",
    //             answer: "We recommend scheduling your first antenatal visit as soon as you suspect or confirm your pregnancy, ideally within the first 8-12 weeks. Early care is crucial for establishing baseline health measurements and identifying any potential risks."
    //         },
    //         {
    //             question: "What services are included in Euracare's antenatal care package?",
    //             answer: "Our comprehensive package includes regular check-ups, diagnostic screenings, ultrasound scans, blood tests, nutritional guidance, and prenatal education. We also provide personalized care plans based on individual needs."
    //         },
    //         {
    //             question: "Do you offer childbirth education or antenatal classes?",
    //             answer: "Yes, we offer comprehensive childbirth education classes that cover labor preparation, breathing techniques, pain management options, and newborn care. These classes are designed to help you feel confident and prepared for delivery."
    //         },
    //         {
    //             question: "What should I expect during a postnatal check-up?",
    //             answer: "Postnatal check-ups include assessment of your recovery, baby's growth and development, breastfeeding support, emotional well-being evaluation, and discussions about contraception and future health planning."
    //         },
    //         {
    //             question: "How soon after delivery should I come for a postnatal visit?",
    //             answer: "We recommend your first postnatal visit within the first week after delivery, followed by regular check-ups at 2 weeks, 6 weeks, and 3 months postpartum, or as advised by your healthcare provider."
    //         }
    //     ]
    // },
    {
        slug: "adult-pediatric-cardiology",
        title: "Adult & Pediatric Cardiology",
        description: "From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.",
        image: "/home/child.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Adult & Pediatric Cardiology service is dedicated to providing advanced diagnostic and therapeutic options for patients with heart conditions. Our team of experienced cardiologists utilizes state-of-the-art technology to treat a wide range of conditions, including congenital heart defects, arrhythmias, and coronary artery disease. We focus on accurate diagnosis, effective treatment plans, and compassionate care to improve the heart health of our patients."
    },
    {
        slug: "bariatric-weight-loss-surgery",
        title: "Bariatric & Weight Loss Surgery",
        description: "Our Bariatric Surgery program supports patients on their weight-loss journey with tailored surgical and non-surgical options. We focus on long-term health improvements, helping reduce obesity-related risks and enhancing overall well-being",
        image: "/services/weight.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Bariatric & Weight Loss Surgery service is dedicated to providing comprehensive care for individuals seeking weight loss solutions. Our team of experienced surgeons and specialists work closely with patients to develop personalized treatment plans that may include surgical and non-surgical options. We focus on addressing the root causes of obesity, promoting healthy lifestyle changes, and ensuring long-term success for our patients."
    },
    {
        slug: "general-surgery",
        title: "General Surgery",
        description: "Our General Surgery team is skilled in a wide range of procedures, from hernia repairs to complex abdominal surgeries. We prioritize patient safety, careful planning, and post-operative care to promote fast recovery and optimal results.",
        image: "/home/surgery.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our General Surgery service is dedicated to providing comprehensive care for individuals seeking surgical solutions. Our team of experienced surgeons and specialists work closely with patients to develop personalized treatment plans that may include minimally invasive and open surgical options. We focus on ensuring the best possible outcomes through meticulous planning and compassionate care."
    },
    {
        slug: "gastroenterology",
        title: "Gastroenterology",
        description: "We provide expert care for digestive health, diagnosing and treating conditions of the stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced endoscopic techniques for accurate diagnosis and effective treatment.",
        image: "/home/gas.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our General Surgery service is dedicated to providing comprehensive care for individuals seeking surgical solutions. Our team of experienced surgeons and specialists work closely with patients to develop personalized treatment plans that may include minimally invasive and open surgical options. We focus on ensuring the best possible outcomes through meticulous planning and compassionate care."
    },
    {
        slug: "orthopedic-surgery",
        title: "Orthopedic Surgery",
        description: "Whether it’s a sports injury, joint pain, or complex surgery, our orthopedic specialists and surgeons deliver solutions to restore movement and quality of life. We focus on minimally invasive techniques to help patients regain mobility, reduce pain, and return to active lifestyles with personalized treatment plans.",
        image: "/services/spine.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Back & Spine Surgery service is dedicated to providing advanced diagnostic and therapeutic options for patients with spinal disorders. Our team of experienced surgeons and specialists utilize minimally invasive techniques and state-of-the-art technology to treat a wide range of conditions, including herniated discs, spinal stenosis, and chronic back pain. We focus on accurate diagnosis, effective pain management, and personalized treatment plans to restore mobility and enhance the quality of life for our patients."
    },
    {
        slug: "urology",
        title: "Urology",
        description: "We offer comprehensive care for urinary tract and reproductive health issues. From kidney stones to prostate conditions, our urologists use advanced diagnostics and tailored treatments for the best possible outcomes.",
        image: "/home/urology.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Back & Spine Surgery service is dedicated to providing advanced diagnostic and therapeutic options for patients with spinal disorders. Our team of experienced surgeons and specialists utilize minimally invasive techniques and state-of-the-art technology to treat a wide range of conditions, including herniated discs, spinal stenosis, and chronic back pain. We focus on accurate diagnosis, effective pain management, and personalized treatment plans to restore mobility and enhance the quality of life for our patients."
    },
    {
        slug: "family-geriatric-medicine",
        title: "Family & Geriatric Medicine",
        description: "We provide ongoing, personalized care for every stage of life. Our physicians manage chronic conditions, preventive health, and complex needs of older adults with a focus on quality of life and independence.",
        image: "/home/geri.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Back & Spine Surgery service is dedicated to providing advanced diagnostic and therapeutic options for patients with spinal disorders. Our team of experienced surgeons and specialists utilize minimally invasive techniques and state-of-the-art technology to treat a wide range of conditions, including herniated discs, spinal stenosis, and chronic back pain. We focus on accurate diagnosis, effective pain management, and personalized treatment plans to restore mobility and enhance the quality of life for our patients."
    },
    {
        slug: "general-medicine",
        title: "General Medicine",
        description: "Our General Medicine department delivers expert diagnosis and management of a broad spectrum of health concerns. We coordinate care across specialties, ensuring patients receive timely, effective, and compassionate treatment.",
        image: "/home/medicine.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Back & Spine Surgery service is dedicated to providing advanced diagnostic and therapeutic options for patients with spinal disorders. Our team of experienced surgeons and specialists utilize minimally invasive techniques and state-of-the-art technology to treat a wide range of conditions, including herniated discs, spinal stenosis, and chronic back pain. We focus on accurate diagnosis, effective pain management, and personalized treatment plans to restore mobility and enhance the quality of life for our patients."
    },
    {
        slug: "radiology",
        title: "Radiology",
        description: "With advanced imaging technology, our Radiology department offers precise diagnostic services including MRI, CT scans, mammography, and X-rays. We support fast, accurate diagnoses to guide effective treatment plans.",
        image: "/home/radio.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "neurology-and-neurosurgery",
        title: "Neurology & Neurosurgery",
        description: "Our Neurology and Neurosurgery team diagnoses and treats conditions of the brain, spine, and nervous system. From migraines to complex neurosurgical procedures, we provide integrated, patient-centered care.",
        image: "/home/neuro.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "endocrinology-and-diabetology",
        title: "Endocrinology & Diabetology",
        description: "We manage hormonal and metabolic disorders, including diabetes, thyroid disease, and adrenal conditions. Our specialists work closely with patients to optimize treatment and improve long-term health.",
        image: "/home/diabetes.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "nutrition-and-wellness",
        title: "Nutrition and Wellness",
        description: "Our nutritionists provide personalized dietary plans to support weight management, chronic disease prevention, and overall wellness. We combine scientific expertise with practical advice for sustainable results",
        image: "/home/nutri.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "breast-surgery",
        title: "Breast Surgery",
        description: "We offer advanced surgical care for benign and malignant breast conditions. Our approach is compassionate, precise, and tailored to each patient’s needs, with a focus on both health and aesthetics.",
        image: "/home/neuro.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "dermatology",
        title: "Dermatology",
        description: "Our dermatologists diagnose and treat skin, hair, and nail conditions, offering both medical and aesthetic dermatology services. We use the latest techniques to promote healthy skin and confidence.",
        image: "/home/dermatology.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "gynaecology",
        title: "Gynaecology",
        description: "We provide comprehensive women’s health services, from routine screenings to advanced gynecologic procedures. Our team supports every stage of life with sensitivity and expertise.",
        image: "/home/gyna.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "psychiatry-sleep-therapy",
        title: "Psychiatry & Sleep Therapy",
        description: "We address mental health and sleep disorders with evidence-based care. From anxiety and depression to insomnia, our specialists create personalized treatment plans that restore balance and well-being",
        image: "/home/sleep.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    {
        slug: "rheumatology",
        title: "Rheumatology",
        description: "Our rheumatologists specialize in diagnosing and treating autoimmune and inflammatory joint diseases, including arthritis and lupus. We focus on reducing pain, improving mobility, and preserving long-term health.",
        image: "/home/rheuma.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    },
    // {
    //     slug: "ear-nose-throat",
    //     title: "Ear, Nose and Throat (ENT)",
    //     description: "We offer a comprehensive range of ENT services, including diagnosis and treatment of conditions affecting the ear, nose, and throat.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "endocrinology-and-diabetology",
    //     title: "Endocrinology and Diabetology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "fertility-services",
    //     title: "Fertility Services",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "gastroenterology",
    //     title: "Gastroenterology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "general-medicine",
    //     title: "General Medicine",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "general-surgery",
    //     title: "General Surgery",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "Haematology",
    //     title: "Haematology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "international-patients",
    //     title: "International Patients",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "interventinal-cardiology",
    //     title: "Interventional Cardiology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "neurology-neurosurgery",
    //     title: "Neurology & Neurosurgery",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "nutritionist",
    //     title: "Nutritionist",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "oncology",
    //     title: "Oncology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "Oncology is a branch of medical science dealing with tumours, including the origin, development, diagnosis, and treatment of malignant neoplasms. Different types of doctors often work together to create a patient’s overall treatment plan that combines different types of treatments. Euracare provides Surgical Oncology services and cancer treatment using cutting-edge Interventional Radiology modalities. Interventional radiology may also be used to manage metastatic disease from a variety of cancers including those of the breast, colon, rectum, gallbladder, pancreas, lung, oesophagus and stomach, as well as melanoma and sarcoma. Interventional radiologists are specialists trained in using image-guided technology, such as X-rays, CT and MRI",
    //     testList: ["Biopsy", "MRI", "CT", "X-ray", "Clinical Laboratory", "Ultrasound", "Bronchoscopy", "Endoscopic procedures", "Lumbar puncture", "Pap smear", "Physical examination"],
    //     conditionList: ["Transarterial chemoembolization", "Radiofrequency ablation (RFA)", "Microwave ablation", "Tumour ablation procedures", "Liver-directed therapies", "Vascular work", "Drainage catheters", "Port and PICC Line Placement", "Pain management", "Lymphatic Interventions"],
    //     faqs: [
    //         {
    //             question: "What is antenatal care, and why is it important?",
    //             answer: "Antenatal care involves regular medical checkups during pregnancy to monitor the health of both mother and baby. It helps detect and manage potential complications early, ensuring a safe and healthy pregnancy."
    //         },
    //         {
    //             question: "When should I start antenatal visits at Euracare?",
    //             answer: "We recommend scheduling your first antenatal visit as soon as you suspect or confirm your pregnancy, ideally within the first 8-12 weeks. Early care is crucial for establishing baseline health measurements and identifying any potential risks."
    //         },
    //         {
    //             question: "What services are included in Euracare's antenatal care package?",
    //             answer: "Our comprehensive package includes regular check-ups, diagnostic screenings, ultrasound scans, blood tests, nutritional guidance, and prenatal education. We also provide personalized care plans based on individual needs."
    //         },
    //         {
    //             question: "Do you offer childbirth education or antenatal classes?",
    //             answer: "Yes, we offer comprehensive childbirth education classes that cover labor preparation, breathing techniques, pain management options, and newborn care. These classes are designed to help you feel confident and prepared for delivery."
    //         },
    //         {
    //             question: "What should I expect during a postnatal check-up?",
    //             answer: "Postnatal check-ups include assessment of your recovery, baby's growth and development, breastfeeding support, emotional well-being evaluation, and discussions about contraception and future health planning."
    //         },
    //         {
    //             question: "How soon after delivery should I come for a postnatal visit?",
    //             answer: "We recommend your first postnatal visit within the first week after delivery, followed by regular check-ups at 2 weeks, 6 weeks, and 3 months postpartum, or as advised by your healthcare provider."
    //         }
    //     ]
    // },
    // {
    //     slug: "orthopaedic-services",
    //     title: "Orthopaedic Services",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "paediatric-cardiology",
    //     title: "Paediatric Cardiology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "paediatrics",
    //     title: "Paediatrics",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "psychiatry-sleep-therapy",
    //     title: "Psychiatry – Sleep Therapy",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "pulmonology",
    //     title: "Pulmonology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "radiology",
    //     title: "Radiology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "reconstructive-plastic-surgery",
    //     title: "Reconstructive & Plastic Surgery",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
    // {
    //     slug: "rheumatology",
    //     title: "Rheumatology",
    //     description: "We offer a comprehensive range of dermatological services, including medical, surgical, and cosmetic treatments, to help you achieve and maintain healthy skin.",
    //     image: "/services/dermatology.png",
    //     heroImage: "/service-d/hero-img.png",
    //     overviewText: "At Euracare, our Dentistry service is dedicated to providing comprehensive care for individuals seeking dental solutions. Our team of experienced dentists and specialists work closely with patients to develop personalized treatment plans that may include preventive, restorative, and cosmetic options. We focus on promoting oral health, enhancing smiles, and ensuring long-term success for our patients."
    // },
];
