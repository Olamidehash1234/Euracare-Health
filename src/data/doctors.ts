export type Doctor = {
    id: string;
    name: string;
    specialty: string[];
    title: string;
    image: string;
    yearsOfExperience: number;
    bio: string;
    degree: string;
    researchInterests: string;
    profileImg?: string;
    overview: string;
    education: string;
    languages: string[];
    availability: {
        days: string[];
        hours: string;
    };
};

export const doctors: Doctor[] = [
    {
        id: "Dr-Hammed",
        name: "Dr Hammed Ninalowo",
        specialty: ["Interventional Radiology", "Oncology", "Vascular Surgery"],
        image: "/home/doctors/doc1.png",
        profileImg: "/home/test.png",
        title: "Consulting Vascular and Interventional Radiologist",
        overview: "Dr. Hammed Ninalowo is a highly skilled specialist with over 15 years of experience...",
        education: "University of Illinois and University of Pennsylvania (US)",
        yearsOfExperience: 28,
        bio: "Dr. Hammed Ninalowo, is a US trained Vascular and Interventional Radiologist who completed his training at the prestigious University of Pennsylvania and is the first US trained Physician to offer the full spectrum of interventional Radiology services in Nigeria. He obtained his medical degree at the University of Illinois and graduated at the top of his class with honors(Alpha Omega Alpha). He has a passion for improving access to Minimally invasive therapies in the West African Population.",
        researchInterests: "Minimally invasive oncology treatments and fibroid disease",
        degree: "MD",
        languages: ["English", "Yoruba"],
        availability: {
            days: ["Monday", "Wednesday", "Friday"],
            hours: "9:00 AM - 5:00 PM"
        }
    },
    {
        id: "Dr-Pearl",
        name: "Dr Pearl Aba Anoa Scott",
        specialty: ["Oncology"],
        image: "/home/doctors/doc2.png",
        title: "Consultant Oncologist",
        overview: "Dr. Pearl Aba Anoa Scott is an expert in Oncology with a focus on personalized treatment...",
        education: "University of Lagos",
        yearsOfExperience: 10,
        bio: "Dr. Pearl Aba Anoa Scott is a dedicated Consultant Oncologist with a focus on personalized treatment plans for cancer patients. She completed her medical degree at the University of Lagos and has undergone extensive training in Oncology. Dr. Scott is committed to providing compassionate care and staying at the forefront of cancer research.",
        researchInterests: "Cancer immunotherapy and targeted therapies",
        degree: "MD",
        languages: ["English", "Igbo"],
        availability: {
            days: ["Tuesday", "Thursday"],
            hours: "10:00 AM - 4:00 PM"
        }
    },
    {
        id: "Dr-Asare",
        name: "Dr Asare Kwaku Offei",
        specialty: ["Gastroenterology", "General Surgery", "Hepatobiliary Surgeon", "Oncology"],
        image: "/home/doctors/doc3.png",
        title: "Consultant Gastroenterologist",
        overview: "Dr. Asare Kwaku Offei specializes in Gastroenterology and General Surgery with over 20 years of experience...",
        education: "University of Lagos",
        yearsOfExperience: 20,
        bio: "Dr. Asare Kwaku Offei is a highly experienced Consultant Gastroenterologist with a focus on digestive health. He completed his medical degree at the University of Lagos and has undergone extensive training in Gastroenterology. Dr. Offei is dedicated to providing comprehensive care for patients with gastrointestinal disorders.",
        researchInterests: "Gastrointestinal disorders and minimally invasive techniques",
        degree: "MD",
        languages: ["English", "Twi"],
        availability: {
            days: ["Monday", "Thursday"],
            hours: "8:00 AM - 3:00 PM"
        }
    },
    {
        id: "Dr-Theodora",
        name: "Dr Theodora Pepera",
        specialty: ["Antenatal & Postnatal Care", "Gynaecology"],
        image: "/home/doctors/doc4.png",
        title: "Consultant Gynaecologist",
        overview: "Dr. Theodora Pepera is a renowned expert in Antenatal & Postnatal Care and Gynaecology...",
        education: "University of Lagos",
        yearsOfExperience: 12,
        bio: "Dr. Theodora Pepera is a renowned expert in Antenatal & Postnatal Care and Gynaecology. She completed her medical degree at the University of Lagos and has undergone extensive training in Gynaecology. Dr. Pepera is dedicated to providing comprehensive care for women throughout all stages of pregnancy and beyond.",
        researchInterests: "Women's health and reproductive rights",
        degree: "MD",
        languages: ["English", "Swahili"],
        availability: {
            days: ["Wednesday", "Friday"],
            hours: "9:00 AM - 5:00 PM"
        }
    }
];
