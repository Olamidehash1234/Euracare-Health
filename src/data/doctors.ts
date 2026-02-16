export type Doctor = {
    id: string;
    name: string;
    specialty: string[];
    title: string;
    image: string;
    yearsOfExperience?: string;
    bio: string;
    bio2?: string;
    bio3?: string;
    bio4?: string;
    degree?: string[];
    researchInterests?: string[];
    profileImg?: string;
    overview?: string;
    program?: string[];
    education?: string[];
    languages?: string[];
    certifications?: string[];
    associations?: string[];
};

export const doctors: Doctor[] = [
    {
        id: "Dr. Tosin Majekodunmi",
        name: "Dr. Tosin Majekodunmi",
        specialty: ["Advanced Cardiac Imaging", "Interventional Cardiology","Adult & Pediatric Cardiology"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675978/Dr-tosin_szwvd6_m7ctok.jpg",
        title: "Medical Director & Chief of Cardiology",
        education: ["Internship and residency in Internal Medicine, London UK", "Cardiology residency in West Midlands, UK", "Adult Congenital Heart Disease Fellowship at Royal Brompton, Guy’s & St. Thomas’ and Great Ormond Street Hospitals (UK)", "Interventional/Structural Heart Disease Fellowship, Toronto General Hospital (Canada)"],
        yearsOfExperience: "20+",
        bio: "Dr Tosin Majekodunmi is a UK-trained Consultant Cardiologist with subspeciality interests in Adult Congenital Heart disease, and Interventional / Structural Cardiology, and is also the Medical Director at Euracare. He earned his medical degree from St Georges Hospital Medical School in London and completed general internal medicine and specialist training in cardiology in London and the West Midlands before pursuing advanced fellowships in adult congenital heart disease in London and interventional / structural cardiology in Toronto, Canada. Dr Majekodunmi is committed to delivering world-class cardiovascular care in Nigeria, with expertise in coronary angioplasty, cardiac device insertion and structural heart disease interventions in both children and adults. His vision is to provide cutting-edge, minimally invasive cardiac treatments to improve patient outcomes and quality of life across West Africa.",
        program: ["Structural heart interventions", "Congenital heart disease management", "Minimally invasive valve and cardiac therapies", "Pregnancy-related heart disease care"],
        researchInterests: ["Hypertension", "Congenital heart disease", "Pulmonary hypertension"],
        degree: ["BSc (Hons), King’s College London", "PhD in Biochemistry, University of Southampton", "MBBS, St. George’s Hospital Medical School, London", "MRCP (London)", "CCT Cardiology (London)"],
        languages: ["English", "Yoruba"],
    },
    {
        id: "Dr-Hammed",
        name: "Dr. Hammed Ninalowo",
        specialty: ["Interventional Radiology", "Oncology", "Vascular Surgery"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/Dr-hammed_ntfvps_logpcj.jpg",
        profileImg: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676030/test_mu1jza_rusxme.png",
        title: "Consulting Vascular & Interventional Radiologist",
        education: ["Residency in Diagnostic Radiology, University of Maryland Medical Centers", "Fellowship in Vascular & Interventional Radiology, University of Pennsylvania" ],
        program: ["Minimally invasive vascular care", "Image-guided tumor treatments", "Uterine fibroid embolization and other embolization therapies"],
        yearsOfExperience: "9",
        bio: "Dr. Hammed Ninalowo is a U.S.–trained, double board-certified diagnostic and vascular/interventional radiologist, and the first to offer the full spectrum of interventional radiology services in Nigeria. A graduate of the University of Illinois (Alpha Omega Alpha honors), he completed his residency at the University of Maryland Medical Center and fellowship at the University of Pennsylvania",
        bio2: "Since relocating his practice to Nigeria in 2018, he has pioneered landmark procedures in West Africa, including the region’s first transjugular portosystemic shunt, prostate artery embolization, endovascular aneurysm repair, and intra-arterial chemotherapy for retinoblastoma. He is also recognized for advancing uterine fibroid embolization as a minimally invasive treatment.",
        bio3: "Beyond clinical practice, Dr. Ninalowo is dedicated to expanding access to interventional radiology through physician training and mentorship, particularly in the public sector. He is also co-founder and CEO of Accuread Radiology, Nigeria’s first teleradiology company, bridging global expertise with local care. This has allowed “Brain gain” for the Nigerian Health sector as many Radiologists who have left Nigeria can now provide Tele-Radiology services to Nigerian patients while abroad.",
        bio4: "He has a passion for improving access to Radiology services and minimally invasive therapies and continues to persevere in the quest to make this readily available to the Nigerian population.",
        researchInterests: ["Expanding access to minimally invasive oncology treatments", "Fibroid disease management via uterine fibroid embolization", "Innovative endovascular therapies in low-resource settings"],
        degree: ["MD (University of Illinois, Alpha Omega Alpha – top of class honors)"],
        languages: ["English (fluent)"],
    },
    {
        id: "Dr. Owen-Woghiren",
        name: "Dr. Owen Woghiren",
        specialty: ["Gastroenterology"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675976/Dr-owen_fzyuau_ahdcm8.jpg",
        title: "Consultant Gastroenterologist",
        education: [ "University of Benin", "FRCP (UK)"],
        yearsOfExperience: "25+",
        program: ["Gastroenterology", "General Internal Medicine"],
        bio: "Dr. Owen Woghiren is a UK-trained Consultant Gastroenterologist and Hepatologist, currently practicing at Euracare Nigeria and serving as Clinical Service Lead for Gastroenterology &amp; Endoscopy at Barnet & Chase Farm Hospitals, Royal Free London NHS Foundation Trust.",
        bio2: "A graduate of the University of Benin (1993), he completed specialist training in Gastroenterology and General Internal Medicine at leading London hospitals, including Hammersmith, Chelsea, Westminster, and St Mary’s.",
        bio3: "He was appointed Consultant at Chelsea & Westminster Hospital in 2009, later moving to the Royal Free London, where he has held several senior leadership positions, including: • Clinical Lead in Nutrition • Head of Endoscopy Services &amp; Training • Clinical Service Lead, Gastroenterology & Endoscopy (Barnet & Chase Farm Hospitals) ",
        researchInterests: ["Endoscopy & Advanced GI Procedures", "Nutrition in Gastrointestinal Disease", "Hepatology & Liver Disease"],
        degree: ["MBBS"],
        languages: ["English"],
    },
    {
        id: "Dr. Abuchi-Okaro",
        name: "Dr. Abuchi Okaro",
        specialty: ["Bariatric & Weight Loss Surgery", "Gastroenterology", "General Surgery"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/Dr-abuchi_kwjhhh_fw2dn9.jpg",
        title: "Consultant General, Lap Upper GI & Bariatric Surgeon",
        bio: "Dr Abuchi Okaro is a consultant General, Laparoscopic Bariatric and UGI surgeon at Euracare, he is well recognised for his expertise in minimally invasive weight-loss and gastrointestinal surgery. He holds advanced surgical qualifications from both the UK and Japan and serves as a consultant at leading UK private healthcare institutions such as the Wellington Hospital in London and the Benenden Hospital in Kent. ",
        bio2: "Dr Okaro blends international medical training with compassionate patient care to lead Euracare’s gastrointestinal and surgical weight loss specialists healthcare services. He is the founder and president of the Bariatric and Metabolic Surgeon Society of Nigeria (BMSSN)",
        program: ["Minimally invasive Metabolic and Bariatric (weight-loss) surgery", "Upper GI Benign (Anti-reflux and Achalasia) and Malignant (Cancer) Surgery", "Open and Laparoscopic Hernia Surgery", "Diagnostics and therapeutic Gastrointestinal Surgery"],
        education: ["Master of Surgery (MS) from the University of London (2004)", "Fellowship of the Royal College of Surgeons of England (1995)", "Fellowship of the West African College of Surgeons", "Specialist in Upper GI and Laparoscopic Surgery in the UK and Tokyo, Japan (2005) "],
        yearsOfExperience: "25+",
        researchInterests: ["Minimally invasive weight-loss surgery", "Gastrointestinal surgery", "Hernia repair techniques"],
        degree: ["MBBS", "MS", "FRCS (England)", "FWACS"],
        languages: ["English (Fluent)"],
    },
    {
        id: "Dr. Kafayah-Ogunsola",
        name: "Dr. Kafayah Ogunsola",
        specialty: ["Psychiatry & Sleep therapy"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675975/Dr-kafayah_yvkzl0_gadrij.jpg",
        title: "Consultant Psychiatrist",
        bio: "Dr. Kafayah Ogunsola is a Consultant Psychiatrist and Therapist. She earned her medical degree (MB; BS) and is a Fellow of the West African College of Physicians (FWACP, Psychiatry). Over the years, she has built a reputation as a highly sought-after mental health and wellness expert, offering treatment for a wide range of psychiatric and psychological conditions. Her vision is to make mental health support easily accessible to individuals, families, and organizations both locally and internationally.",
        bio2: "Dr. Ogunsola is also passionate about workplace mental health. She provides Employee Assistance Programs (EAP), consultancy, and training services to corporate organizations and institutions. She has delivered numerous workplace seminars and webinars on emotional wellness and work-life balance in Nigeria and beyond. To break barriers in mental health advocacy, she has pioneered the use of Nigerian languages (Pidgin, Hausa, Igbo, and Yoruba) and innovative resources such as comic strips to increase awareness and accessibility.",
        bio3: "She is the Liaison-Director for the Suicide Research and Prevention Initiative in Nigeria (SURPIN), a Fellow of the West African College of Physicians, and a Member of the Association of Psychiatrists in Nigeria.",
        yearsOfExperience: "15+",
        degree: ["MB; BS", "FWACP (Psychiatry)"],
        education: ["Residency in Psychiatry, Nigeria", "Fellowship, West African College of Physicians (Psychiatry)"],
        researchInterests: ["Suicide prevention", " Mental health literacy and advocacy", "Workplace wellness and emotional health", "Telepsychiatry and digital access to care"],
        languages: ["English (Fluent)", "Yoruba (Fluent)", "Pidgin English (Fluent)", "Hausa (Conversational)", "Igbo (Conversational)"],
        program: ["Psychiatry"]
    },
    {
        id: "Dr. Roddy-Faddoul",
        name: "Dr. Roddy Faddoul",
        program: ["Family Medicine"],
        specialty: ["Family & Geriatric Medicine", "General Medicine"],
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675977/Dr-roddy_gzcdtj_xszm1p.jpg",
        title: "Family Medicine Practitioner",
        bio: "Dr. Roddy Faddoul is a dedicated Family Medicine Practitioner at Euracare Nigeria since 2017. After earning his MD at the American University of Beirut, he completed his Family Medicine residency at the American University of Beirut Medical Centre with training at top institutions in the U.S., including St. Luke’s Episcopal Hospital and MD Anderson Cancer Centre. Dr. Faddoul has participated in multiple volunteer initiatives across the U.S., Lebanon, and Nigeria, reinforcing his commitment to compassionate, comprehensive primary care.",
        degree: ["MD, American University of Beirut",],
        education: ["Residency at American University of Beirut Medical Centre", "Additional training at St. Luke’s Episcopal Hospital (Texas, USA) and MD Anderson", "Cancer Centre (Texas, USA)"],
        languages: ["English", "Arabic"],
        researchInterests: ["Molecular biology of prostate cancer", "Stone disease management advancements"]
    },
    {
        id: "Dr. Leye-Ajayi",
        name: "Dr. Leye Ajayi",
        title: "Consultant Urological Surgeon",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675975/Dr-Leye_ar7phs_elbbg4.jpg",
        bio: "Dr. Leye Ajayi is a leading Consultant Urological Surgeon at Euracare Nigeria and the clinical lead for Urology. With a strong background in minimally invasive urological surgery, he was awarded a Doctorate in Medicine (MD) for his groundbreaking research in prostate cancer. Dr. Ajayi brings world-class expertise to the region and is recognized for his proficiency in endoscopic laser treatments, delivering precision care for stone disease. He performs Percutaneous Nephrolithotomy (PCNL) for complex stone disease and conducts international Masterclasses in this area. He is an Associate Member of the European Association of Urology Section of Endourology (EAU-Endourology), the American Urological Association (AUA), and the British Association of Urological Surgeons (BAUS), and is considered a key opinion leader in his field. He provides best-in-class training and mentorship to healthcare professionals in Nigeria.",
        program: ["Minimally invasive treatment for urinary tract stone disease using laser and lithotripsy", "Comprehensive care in andrology", "Rapid-access clinics for prostate assessment and hematuria (blood in urine) cases"],
        degree: ["MBBS (London)", "FRCS (England)", "MD (London)", "FRCS (Urology)"],
        specialty: ["Urology"],
        education: ["Training across multiple London teaching hospitals", "Fellowship in Brisbane, Australia"],
        researchInterests: ["Molecular biology of prostate cancer", "Stone disease management advancements",],
        languages: ["English"]
    },
    {
        id: "Prof. Adesegun-Abudu",
        name: "Prof. Adesegun Abudu",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676018/prof-abudu_qbrmln_siw8sl.jpg",
        bio: "Professor Segun Abudu graduated from University of Ibadan with distinction in Anatomy in 1987. He became a Fellow of the Royal College of Surgeons and Physicians, Glasgow, United Kingdom in 1992. He trained in Orthopaedic Surgery at the Royal Orthopaedic Hospital, Birmingham, England and underwent an additional specialist training Fellowship programme to specialise in Orthopaedic and Major Joint Reconstructive Surgery in Canada. He obtained a Master of Science Degree in Clinical Research from University of Birmingham, UK in 1998 and United Kingdom Intercollegiate Fellowship of The Royal Colleges of Surgeons in Orthopaedic and Trauma Surgery in 2000. He gained the Certificate of Completion of Specialist Fellowship Training in Orthopaedics and Reconstructive Surgery, University of Toronto, Canada in 2001.",
        bio2: "He is currently a Professor and Consultant Orthopaedic Surgeon at the Royal Orthopaedic Hospital, Birmingham, United Kingdom where he provides tertiary services as a super-specialist for patients with varying forms of bone and joint conditions and complex arthroplasty. He is one of the few nationally recognised Bone Cancer Specialists in the United Kingdom. He provides care for patients from all over the United Kingdom and overseas. He has been involved in pioneering various techniques for bone and joint reconstructions including replacements with special metallic implants and bone transplantation for several bones in the body. He receives several doctors from all over the world for training; he has trained doctors from over twenty five countries many of whom have subsequently become internationally recognised experts in their own right. ",
        bio3: "He has been an invited surgeon and lecturer in many countries outside the United Kingdom including the USA, Japan, Canada, Spain, Italy, Belgium, Holland, Denmark, Australia, Portugal, Germany, Norway, Austria, Brazil, India, and Malaysia among others.",
        bio4: "In the last 15 years, Professor Abudu has devoted a considerable part of his time to providing specialist orthopaedic care in Nigeria while still running a busy specialist orthopaedic practice and clinical research in the United Kingdom.",
        title: "Consultant Orthopaedic Surgeon",
        program: ["Orthopaedic and Trauma Surgery"],
        yearsOfExperience: "35+",
        degree: ["MBBS (University of Ibadan, 1987)", "MSc in Clinical Research (University of Birmingham, 1998)", "FRCS (Orthopaedics; Royal College of Surgeons & Physicians of Glasgow, 1992)", "Intercollegiate FRCS (Orthopaedic & Trauma Surgery; Royal College of Surgeons, England, 2000"],
        education: ["Orthopaedic and Trauma Surgery – Birmingham Training Programme (1993–2001)", "Clinical Research Fellowship – University of Birmingham (1998)", "Fellowship in Orthopaedic and Reconstructive Surgery – University of Toronto, Canada (2001)"],
        researchInterests: ["Orthopaedic and trauma surgery"],
        specialty: ["Orthopedic Surgery"],
        languages: ["English"]
    },
    {
        id: "Mrs. Sherese Ijewere",
        name: "Mrs. Sherese Ijewere",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676002/mrs-Sherese_tmzdrm_wss5pv.jpg",
        title: "Clinical Nutrition Consultant",
        bio: "Mrs. Sherese Ijewere is a Clinical Nutrition Consultant at Euracare. She counsels and cares for a wide range of clients, including those with bariatric (weight loss) needs, metabolic diseases (such as hypertension, diabetes, and high cholesterol), cardiac conditions, gut health issues, fatty liver, cancer, and other inflammatory diseases. She is passionate about helping clients understand the role and impact of nutrition on their health and well-being, guiding them back to wellness.",
        program: ["Lifestyle Medicine", "Plant based Nutrition", "Bariatric Care", "Gut Health Practitioner", "Integrative Nutritional Cancer Care"],
        degree: ["BSc (Hons), United States"],
        education: ["Certified and Clinical Nutrition training for 18+ years, University of South Florida, St. Patrick Medical Center, Tampa, Florida, USA."],
        researchInterests: ["Lifestyle diseases"],
        languages: ["English"],
        specialty: ["Bariatric Care", "Nutrition and Wellness"],
        certifications: ["International Board Certification and Diploma for Lifestyle Medicine", "Nutrition Consultant, Gersons Cancer Therapy, Colin Campbell Center for Nutrition Studies", "Bariatric Nutrition", "Gut Health", "Psychological Counselling"],
        associations: ["American College of Lifestyle Medicine", "American Society for Nutrition", "Bariatric and Metabolic Surgeons Society of Nigeria", "Society of Lifestyle Medicine in Nigeria."]
    },
    {
        id: "Dr. Oladapo O. Fafemi",
        name: "Dr. Oladapo O. Fafemi",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675975/Dr-oladapo_l59oru_ypiq0k.jpg",
        title: "Consultant Breast Surgeon & Clinical Director, Surgical Specialities",
        bio: "Dr. Oladapo O. Fafemi is a distinguished Consulting Breast Surgeon and former Clinical Director for Surgical Specialities at North Middlesex University Hospital NHS Trust, London, bringing years of experience and advanced training across continents. After graduating from the University of Ibadan Medical School, he attained elite surgical qualifications (FRCS—Edinburgh and UK) and completed post-fellowship in general and oncoplastic breast surgery.",
        bio2: "A former member of the London Breast Cancer Pathway Board, Dr. Fafemi provides expert consultations and surgeries each month in Nigeria, enhancing breast health care with global surgical standards.",
        program: ["Breast Surgery","General Surgery"],
        degree: ["MBBS, University of Ibadan", "FRCS (Edinburgh, UK)", "FRCS (General Surgery, UK)"],
        education: ["University of Ibadan Medical School", "Fellowship of the Royal College of Surgeons of Edinburgh (UK)", "Fellowship of the Royal College of Surgeons (UK)"],
        researchInterests: ["Oncoplasty"],
        languages: ["English"],
        specialty: ["Breast Surgery","General Surgery"],
    },
    {
        id: "Dr. Nkemegbunam Kanayo Okoli",
        name: "Dr. Nkemegbunam Kanayo Okoli",
        image: "",
        title: "Consultant Physician & Endocrinologist",
        bio: "Dr. Nkemegbunam Kanayo Okoli is a highly skilled Consultant Physician and Endocrinologist with extensive experience in diagnosing and managing complex endocrine and internal medicine conditions. A graduate of the University of Benin, he holds a Fellowship from the West African College of Physicians and has worked at reputable institutions including the University of Port Harcourt Teaching Hospital. His clinical expertise spans diabetes care, hormonal disorders, and general internal medicine. At Euracare Nigeria, Dr. Okoli combines evidence-based medicine with a patient-centred approach to deliver exceptional care.",
        program: ["Internal Medicine", "Endocrinology"],
        degree: ["MBBS, University of Benin", "MWACP", "FWACP"],
        education: ["Internal Medicine and Endocrinology training via West African College of Physicians"],
        researchInterests: ["Endocrinology and Metabolic Health"],
        languages: ["English"],
        specialty: ["Endocrinology & Diabetology"],
    },
    {
        id: "Dr. Rama Ola Akachuku",
        name: "Dr. Rama Ola Akachuku",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1765445955/dr.rama_oidh7j.jpg",
        title: "Consultant Family Physician",
        bio: "Dr. Rama Ola Akachuku is a Consultant Family Physician with a special interest in Adolescent and Women’s Health. She trained in Hungary and Ireland and currently provides specialist women’s health and family medicine services at Euracare Nigeria. She is also the Founder of Raelia Health, a virtual women’s health clinic dedicated to accessible, patient-centred care.",
        bio2: "Dr. Rama’s clinical approach brings together evidence-based medicine, preventive care, hormonal health, and long-term wellbeing for women across all life stages. Her expertise spans adolescent health concerns, menstrual disorders, reproductive health, menopause management, urogynaecology, and complex hormonal conditions such as PCOS, endometriosis, and adenomyosis",
        bio3: "As a Family Medicine Consultant, she also delivers comprehensive general medical care, supporting patients with chronic conditions, maternal health needs, lifestyle optimisation, and mental wellness",
        program: ["Adolescent & Women’s Health", "Menstrual & Hormonal Disorders (including PCOS)", "Perimenopause & Menopause Management", "Endometriosis & Adenomyosis", "Urogynaecology (non-surgical management)", "Sexual & Reproductive Health", "Contraception & LARC Services (Mirena, Copper Coil, Implanon)", "Hormonal Therapy & HRT", "Thyroid-related Menstrual Disorders", "Preventive Women’s Health (Pap smears, breast checks)", "Minor Gynaecological Procedures", "General Family Medicine", "Chronic Disease Management (Diabetes, Hypertension)", "Lifestyle & Metabolic Health Counselling", "Mental Health Support","Maternal Health (antenatal/postnatal care, ultrasound)"],
        degree: ["MD (Hungary)", "MRCPI, Obstetrics & Gynaecology (Ireland)", "MICGP, Irish College of General Practitioners"],
        education: ["Medical Degree, Hungary", "Specialist Training in Obstetrics, Gynaecology & Family Medicine, Ireland"],
        researchInterests: ["Women’s Hormonal Health", "Adolescent Gynaecology", "Reproductive and Sexual Health", "Preventive Medicine", "Family Medicine Quality Improvement & Audits"],
        languages: ["English"],
        specialty: ["General Medicine", "Family Medicine", "Women’s Health"],
    },
    {
        id: "Prof Ibitrokoemi Faye Korubo",
        name: "Prof Ibitrokoemi Faye Korubo",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1768991005/Doc_Korubo_ivwxib.png",
        title: "Consultant Endocrinologist and Diabetologist.",
        bio: "Well published in peer review journals, reviewer for several local and international journals. Involved in training both undergraduate students and postgraduate Doctors. Endocrinology specialty assessor for the West African College of Physicians. Current National Vice President 3 of the Endocrinology and Metabolism Society of Nigeria. Immediate past National Vice President South-South for Diabetes Association of Nigeria. Well-trained in Interventional Endocrinology. Involved in multiple charity events and renders pro-bono services.",
        program: ["Pituitary tumors", "Diabetes prevention and treatment", "Adiposity based chronic disease ( previously called obesity)", "Menopause", "Osteoporosis", "Thyroid Disorders", "Erectile dysfunction", "Endocrine hypertension"],
        degree: ["MBBS", "Fellowship in Internal Medicine"],
        education: ["FWACP Fellow west African college of physicians: specialty Endocrinology, Diabetes and metabolism", "FACE Fellow American college of Endocrinology: specialty, Endocrinology Diabetes and metabolism", "Recently nominated for Fellowship of the Royal college of Physicians London", "Post graduate certificate: Diabetologist University of st Andrew's Scotland, UK", "Certification in Endocrinology and Diabetes Center for Diabetes and Endocrinology South Africa"],
        researchInterests: ["Endocrinology & Metabolic disorders", "Diabetes Mellitus", "Thyroid disorders", "Osteoporosis"],
        languages: ["English"],
        specialty: ["Endocrinology & Diabetology"],
        yearsOfExperience: "15+",
    }
];
