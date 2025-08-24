export type Doctor = {
    id: number;
    name: string;
    specialty: string[];
    image: string;
};

export const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr Hammed Ninalowo",
        specialty: ["Interventional Radiology", "Oncology", "Vascular Surgery"],
        image: "/home/doctors/doc1.png",
    },
    {
        id: 2,
        name: "Dr Pearl Aba Anoa Scott",
        specialty: ["Oncology"],
        image: "/home/doctors/doc2.png",
    },
    {
        id: 3,
        name: "Dr Asare Kwaku Offei",
        specialty: ["Gastroenterology", "General Surgery", "Hepatobiliary Surgeon", "Oncology"],
        image: "/home/doctors/doc3.png",
    },
    {
        id: 4,
        name: "Dr Theodora Pepera",
        specialty: ["Antenatal & Postnatal Care", "Gynaecology"],
        image: "/home/doctors/doc4.png",
    }
];
