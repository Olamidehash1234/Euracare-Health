export type Doctor = {
    id: string;
    name: string;
    specialty: string[];
    image: string;
    profileImg: string;
    overview: string;
    education: string;
    experience: {
        position: string;
        institution: string;
        duration: string;
    }[];
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
        overview: "Dr. Hammed Ninalowo is a highly skilled specialist with over 15 years of experience...",
        education: "University of Illinois and University of Pennsylvania (US)",
        experience: [
            {
                position: "Senior Consultant",
                institution: "Euracare Multi-Specialist Hospital",
                duration: "2015 - Present"
            },
            // Add more experience history
        ],
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
        overview: "Dr. Pearl Aba Anoa Scott is an expert in Oncology with a focus on personalized treatment...",
        education: [
            {
                degree: "MBBS",
                institution: "Obafemi Awolowo University",
                year: "2010"
            },
            // Add more education history
        ],
        experience: [
            {
                position: "Consultant Oncologist",
                institution: "Lagos State University Teaching Hospital",
                duration: "2016 - Present"
            },
            // Add more experience history
        ],
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
        overview: "Dr. Asare Kwaku Offei specializes in Gastroenterology and General Surgery with over 20 years of experience...",
        education: [
            {
                degree: "MBChB",
                institution: "University of Ghana",
                year: "2000"
            },
            // Add more education history
        ],
        experience: [
            {
                position: "Lead Surgeon",
                institution: "Korle Bu Teaching Hospital",
                duration: "2010 - Present"
            },
            // Add more experience history
        ],
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
        overview: "Dr. Theodora Pepera is a renowned expert in Antenatal & Postnatal Care and Gynaecology...",
        education: [
            {
                degree: "MBBS",
                institution: "University of Nairobi",
                year: "2012"
            },
            // Add more education history
        ],
        experience: [
            {
                position: "Consultant Gynaecologist",
                institution: "Nairobi Women's Hospital",
                duration: "2013 - Present"
            },
            // Add more experience history
        ],
        languages: ["English", "Swahili"],
        availability: {
            days: ["Wednesday", "Friday"],
            hours: "9:00 AM - 5:00 PM"
        }
    }
];
