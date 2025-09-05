export type Doctor = {
    id: string;
    name: string;
    specialty: string[];
    title: string;
    image: string;
    yearsOfExperience: string;
    bio: string;
    bio2?: string;
    bio3?: string;
    bio4?: string;
    degree: string[];
    researchInterests: string[];
    profileImg?: string;
    overview?: string;
    program: string[];
    education: string[];
    languages: string[];
};

export const doctors: Doctor[] = [
    {
        id: "Dr. Tosin Majekodunmi",
        name: "Dr. Tosin Majekodunmi",
        specialty: ["Advanced Cardiac Imaging", "Interventional Cardiology","Adult & Pediatric Cardiology"],
        image: "/doctors/Dr-tosin.jpg",
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
        name: "Dr Hammed Ninalowo",
        specialty: ["Interventional Radiology", "Oncology", "Vascular Surgery"],
        image: "/home/doctors/doc1.png",
        profileImg: "/home/test.png",
        title: "Consulting Vascular & Interventional Radiologist",
        education: ["Residency in Diagnostic Radiology, University of Maryland Medical Centers", "Fellowship in Vascular & Interventional Radiology, University of Pennsylvania" ],
        program: ["Minimally invasive vascular care", "Image-guided tumor treatments", "Uterine fibroid embolization and other embolization therapies"],
        yearsOfExperience: "15",
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
        specialty: ["Gastroenterology", "General Medicine",],
        image: "/doctors/Dr-owen.jpg",
        title: "Consultant Gastroenterologist",
        education: [ "University of Benin", "FRCP (UK)"],
        yearsOfExperience: "25",
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
        specialty: ["Bariatric Surgery", "Gastrointestinal Surgery", "General Surgery"],
        image: "",
        title: "Consultant General, Lap Upper GI & Bariatric Surgeon",
        bio: "Dr Abuchi Okaro is a consultant General, Laparoscopic Bariatric and UGI surgeon at Euracare, he is well recognised for his expertise in minimally invasive weight-loss and gastrointestinal surgery. He holds advanced surgical qualifications from both the UK and Japan and serves as a consultant at leading UK private healthcare institutions such as the Wellington Hospital in London and the Benenden Hospital in Kent. ",
        bio2: "Dr Okaro blends international medical training with compassionate patient care to lead Euracare’s gastrointestinal and surgical weight loss specialists healthcare services. He is the founder and president of the Bariatric and Metabolic Surgeon Society of Nigeria (BMSSN)",
        program: ["Minimally invasive Metabolic and Bariatric (weight-loss) surgery", "Upper GI Benign (Anti-reflux and Achalasia) and Malignant (Cancer) Surgery", "Open and Laparoscopic Hernia Surgery", "Diagnostics and therapeutic Gastrointestinal Surgery"],
        education: ["Master of Surgery (MS) from the University of London (2004)", "Fellowship of the Royal College of Surgeons of England (1995)", "Fellowship of the West African College of Surgeons", "Specialist in Upper GI and Laparoscopic Surgery in the UK and Tokyo, Japan (2005) "],
        yearsOfExperience: "25+",
        researchInterests: ["Minimally invasive weight-loss surgery", "Gastrointestinal surgery", "Hernia repair techniques"],
        degree: ["MBBS", "MS", "FRCS (England)", "FWACS"],
        languages: ["English (Fluent)"],
    }
];
