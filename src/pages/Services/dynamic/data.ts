export type ServiceData = {
    slug: string;
    title: string;
    description: string;
    image: string;
    heroImage: string;
    overviewText: string;
};

export const services: ServiceData[] = [
    {
        slug: "advanced-cardiac-imaging",
        title: "Advanced Cardiac Imaging",
        description: "Our Advanced Cardiac Imaging service uses state-of-the-art technology—such as echocardiography, CT, and MRI—to provide precise, non-invasive assessments of heart structure and function, enabling early diagnosis and tailored treatment plans.",
        image: "/services/cardiac.png",
        heroImage: "/services/cardiac-hero.png",
        overviewText: "Advanced Cardiac Imaging at Euracare provides comprehensive diagnostic solutions using cutting-edge technology. Our state-of-the-art imaging equipment, combined with the expertise of our specialists, enables precise visualization of heart structures and function. This allows for early detection of cardiovascular conditions, accurate diagnosis, and the development of targeted treatment strategies. Our advanced imaging capabilities include 3D echocardiography, cardiac CT, and MRI, offering detailed insights into heart health while ensuring patient comfort and safety.",
    },
    {
        slug: "antenatal-postnatal-care",
        title: "Antenatal & Postnatal Care",
        description: "We provide comprehensive care before and after childbirth, including regular check-ups, diagnostic screenings, nutritional guidance, and emotional support—ensuring the health and well-being of both mother and baby at every stage.",
        image: "/services/postnatal.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Our goal is to provide regular check-ups that allow doctors to treat and prevent potential health problems throughout the course of the pregnancy and to promote healthy lifestyles that benefit both mother and child. During check-ups, pregnant women receive medical information over maternal physiological changes in pregnancy, biological changes, and prenatal nutrition including prenatal vitamins. Recommendations on management and healthy lifestyle changes are also made during regular check-ups. Prenatal screening is playing important roll to reduce the frequency of maternal death, miscarriages, birth defects, low birth weight, neonatal infections and other preventable health problems. Euracare’s specialists provide comprehensive range of Antenatal and Postnatal Care services."
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
