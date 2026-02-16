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
    additionalOverview?: string;
    additionalOverview2?: string;
    additionalOverview3?: string;
    conditionSubtitle?: string;
    additionalconditionSubtitle?: string;
    additionalconditionList?: string[];
    testSubtitle?: string;
    procedureSubtitle?: string;
    testList?: string[];
    conditionList?: string[];
    procedureList?: string[];
    faqs?: FAQ[];
    buttonText?: string;
    testimonialVideoUrl?: string[];
    videoUrls?: string[];
    additionalProcedureSubtitle?: string;
    additionalProcedureList?: string[];
    additionalProcedureSubtitle2?: string;
    additionalProcedureList2?: string[];
};

export const services: ServiceData[] = [
    {
        slug: "interventional-cardiology",
        title: "Interventional Cardiology",
        description: "Our expert cardiologists provide advanced heart care, from diagnostics to complex interventions. Using the latest technology and evidence-based treatments, we help you protect and restore your heart health with precision and compassion.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675976/cardiac_xbxrno_j7rqz2.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText:
            "Our Interventional Cardiology service provides advanced, minimally invasive solutions for the diagnosis and treatment of complex heart conditions. Our team of highly skilled cardiologists specializes in catheter-based procedures that reduce recovery time, minimize discomfort, and improve patient outcomes. With access to state-of-the-art technology and evidence-based protocols, we deliver personalized care for both routine and high-risk cardiac cases.",
        additionalOverview: "Our world class team is led by Euracare’s Medical Director, Dr. Tosin Majekodunmi, a specialist in adult and paediatric congenital and structural heart disease.",
        conditionSubtitle: "Our interventional cardiologists manage a broad spectrum of heart and vascular conditions, such as:",
        conditionList: ["Atherosclerosis", "Cardiomyopathy", " Congenital heart disease (both adult and paediatric)", "Heart failure", "Heart valve disease", "Arrhythmias (abnormal heart rhythms)", "Angina (chest pain)"],
        testSubtitle: "We offer a comprehensive range of diagnostic services to detect and evaluate cardiovascular diseases, including:",
        testList: ["Electrocardiogram (ECG) – Measures the electrical activity of the heart", "Echocardiogram (Echo) – Uses ultrasound to assess heart structure and function.", "Exercise Stress Test – Monitors heart performance under physical exertion.", "Holter & Event Monitoring – Continuous heart rhythm recording over 24–48 hours or longer.", "Cardiac CT & MRI – High-resolution imaging of the heart and vessels.", "Cardiac Catheterization (Diagnostic Angiography) – Examines coronary arteries for blockages.", "Blood Biomarker Testing – Detects cardiac damage or inflammation."],
        procedureSubtitle: "Using cutting-edge technology and minimally invasive techniques, we perform:",
        procedureList: ["Coronary angiography, aortography", "Right and left heart catheterisation", "Coronary stenting, including complex interventions", "Temporary pacing", "Single and dual-chamber permanent pacemaker implantation", "Renal artery stenting for resistant hypertension", "Balloon aortic valvuloplasty, Transcatheter Aortic Valve Implantation (TAVI/TAVR)", "Transesophageal echocardiogram (TEE)", "Atrial septal defect (ASD) closure", "Patent foramen ovale (PFO) closure"],
        faqs: [
            {
                question: "What is interventional cardiology and how is it different from general cardiology?",
                answer: "Interventional cardiology focuses on catheter-based, minimally invasive treatments for heart and vascular conditions, unlike general cardiology which primarily manages conditions through medication and lifestyle changes"
            },
            {
                question: "Is angioplasty safe?",
                answer: "Yes, when performed by experienced specialists, angioplasty is a safe and effective procedure with low complication rates. Our team follows strict safety protocols to ensure optimal outcomes."
            },
            {
                question: "Will I need to stay overnight after a procedure?",
                answer: "Many procedures are performed on a same-day basis, but some may require a short hospital stay depending on your condition and treatment plan"
            },
            {
                question: "How long is the recovery period?",
                answer: "Most patients return to normal activities within a few days, though recovery time may vary based on the complexity of the procedure and overall health"
            },
            {
                question: "Do you treat children with heart conditions?",
                answer: "Yes, our center has expertise in both adult and pediatric interventional cardiology."
            },
            {
                question: "Does this service reduce the need for medical travel overseas?",
                answer: "Absolutely—Euracare brings cutting-edge interventional cardiology care to Nigeria, eliminating the need for patients to travel abroad for these life-saving interventions."
            }
        ],
        videoUrls: ["vPNyzAA0zCM"]
    },
    {
        slug: "interventional-radiology",
        title: "Interventional Radiology",
        description: "We provide cutting-edge, image-guided procedures that diagnose and treat conditions with less discomfort and faster recovery. From targeted therapies to vascular interventions, our Interventional Radiology specialists combine technology and expertise to deliver outstanding outcomes.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676000/inter_t1wgzr_hgch3y.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Interventional Radiology clinic provides advanced, minimally invasive diagnostic and therapeutic procedures guided by cutting-edge imaging technologies such as ultrasound, fluoroscopy, CT, and MRI. These techniques allow our specialists to target diseases with exceptional precision—often replacing the need for open surgery, reducing recovery time, and minimizing patient risk.",
        additionalOverview2: "Our fellowship-trained interventional radiologists work closely with other specialists to provide personalized, multidisciplinary care for a wide range of conditions.",
        conditionSubtitle: "We provide diagnostic and therapeutic interventions for a broad range of conditions, including:",
        conditionList: ["Neurovascular disorders: Brain aneurysms and Acute stroke", "Closed blood vessels, vascular blockages", "Peripheral vascular disease", "Venous Insufficiency disease", "Uterine fibroids", "Enlarged Prostate", "Gastrointestinal bleeding", "Tumor embolization and ablation (hepatobiliary, gastrointestinal, genitourinary)", "Pain management, lymphatic issues", "Dialysis access", "Musculoskeletal intervention"],
        testSubtitle: "Our team uses advanced imaging modalities to guide procedures and ensure accurate diagnoses, including:",
        testList: [" Image-guided biopsies (various organs)", "Ultrasound-guided imaging for precise targeting of vessels or lesions", "Fluoroscopy for real-time X-ray visualization during procedures", "CT-guided imaging for deep tissue access and intervention", "MRI-guided imaging for certain soft-tissue targeted procedures", "Venography &amp; angiography to assess blood vessel health and blockages"],
        procedureSubtitle: "Using advanced imaging guidance, our interventional radiologists perform procedures such as:",
        procedureList: ["Brain aneurysm coiling and Flow diverting stents", "Mechanical thrombectomy for Acute stroke", "Angioplasty & stenting", "Embolization (for fibroids, prostate, tumors, bleeding control)", "Ablation therapies (tumors, liver, lungs)", "TIPS (Transjugular Intrahepatic Portosystemic Shunt)", "Thrombolysis / thrombectomy", "Venous access device placement", "Gastrointestinal, hepatobiliary, gynaecologic, and genitourinary interventions", "Interventional oncology procedures", "Pain management interventions", "Lymphatic treatments"],
        faqs: [
            {
                question: "What is the main advantage of interventional radiology?", 
                answer: " Most procedures are minimally invasive, requiring only a small incision or needle puncture, leading to faster recovery, less pain, and lower complication risk compared to traditional surgery."
            },
            {
                question: "Do I need to stay overnight after a procedure?",
                answer: "Many interventional radiology procedures are performed on an outpatient basis, allowing patients to return home the same day. However, some complex interventions may require short hospital stays"
            },
            {
                question: "Are these procedures painful?",
                answer: "Most are performed under local anesthesia with sedation, ensuring patient comfort throughout the process."
            },
            {
                question: " How do I know if I’m a candidate for an Interventional Radiology procedure?",
                answer: "Your doctor or specialist will review your condition and may refer you for an Interventional Radiology consultation to determine if a minimally invasive option is appropriate."
            },
            {
                question: "Are Interventional Radiology procedures safe?",
                answer: "Yes, they are considered very safe when performed by experienced specialists. Risks are generally lower than open surgery, but as with any medical procedure, there are potential complications that will be discussed beforehand."
            },
            {
                question: "Do I need a referral?",
                answer: "In most cases, a referral from your primary physician or specialist is recommended for targeted treatment planning."
            }
        ]
    },
    {
        slug: "adult-pediatric-cardiology",
        title: "Adult & Pediatric Cardiology",
        description: "From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675977/child_hewemt_zv4wb3.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Our Adult & Pediatric Cardiology department offers comprehensive cardiac care for patients of all ages — from newborns to seniors. We provide advanced diagnostics, expert treatment, and preventive strategies for heart and vascular conditions. Our cardiologists work closely with multidisciplinary teams to deliver tailored care, whether managing congenital heart",
        additionalOverview: "defects in children, controlling cardiovascular risk factors in adults, or performing advanced interventions. With cutting-edge technology and a patient-centered approach, we ensure precise diagnosis and effective management in a safe, compassionate environment.",
        conditionSubtitle: "Adults:",
        conditionList: ["Coronary Artery Disease", "Heart Failure", "Arrhythmias (Atrial Fibrillation, Ventricular Tachycardia, etc.)", "Hypertension", "Valvular Heart Disease", "Cardiomyopathies", "Peripheral Arterial Disease", "Pulmonary hypertension", "Heart disease in pregnancy", "Adult congenital heart disease"],
        additionalconditionSubtitle: "Paediatrics:",
        additionalconditionList: ["Congenital Heart Defects (ASD, VSD, Tetralogy of Fallot, etc.)", "Pediatric Arrhythmias", "Kawasaki Disease", "Rheumatic Heart Disease", "Pulmonary Hypertension", "Heart Murmurs & Structural Abnormalities"],
        testList: ["Electrocardiogram (ECG)", "Echocardiography (Transthoracic &amp; Transesophageal)", "Pediatric Echocardiography", "Exercise Stress Testing", "Holter & Event Monitoring", "Cardiac CT & MRI", "Fetal Echocardiography", "Ambulatory Blood Pressure Monitoring", "Lipid Profile &amp; Cardiac Biomarker Testing"],
        faqs: [
            {
                question: "When should my child see a pediatric cardiologist?",
                answer: "If your child has a heart murmur, rapid breathing, bluish skin tone, poor weight gain, fainting episodes, or a family history of congenital heart disease, a consultation is recommended."
            },
            {
                question: "Can children undergo heart surgery safely?",
                answer: "Yes, pediatric cardiac surgeries and catheter-based procedures are routinely performed with excellent safety records at specialized centers.",
            },
            {
                question: "Are all heart murmurs in children serious?",
                answer: "Not necessarily. Many murmurs are “innocent” and harmless, but evaluation is essential to rule out structural heart issues."
            },
            {
                question: "Can children outgrow heart problems?",
                answer: "Some minor heart conditions can resolve with age, but others require ongoing monitoring or intervention"
            },
            {
                question: "What symptoms in adults warrant a cardiology check-up?",
                answer: "Chest pain, shortness of breath, palpitations, unexplained fatigue, dizziness, swelling in the legs, or a family history of heart disease should prompt an evaluation.",
            },
            {
                question: "How often should I get my heart checked?",
                answer: "Adults over 40 or with risk factors should have annual screenings; children with symptoms or family history may require earlier evaluation.",
            },
            {
                question: "How is a heart condition diagnosed?",
                answer: "Diagnosis typically involves a combination of a physical exam, patient history, blood tests, ECG/EKG, echocardiogram, stress testing, Holter monitoring, and, if needed, advanced imaging like cardiac MRI or CT scans."
            },
            {
                question: "What lifestyle changes help maintain heart health?",
                answer: "Balanced nutrition, regular exercise, maintaining a healthy weight, avoiding smoking, managing stress, and controlling blood pressure and cholesterol are key for all ages.",
            },
            {
                question: "How often should I follow up with my cardiologist?",
                answer: "This depends on your diagnosis — from annual check-ups for at-risk patients to more frequent visits for those with active conditions."
            }
        ]
    },
    {
        slug: "bariatric-weight-loss-surgery",
        title: "Bariatric & Weight Loss Surgery",
        description: "Our Bariatric Surgery program supports patients on their weight-loss journey with tailored surgical and non-surgical options. We focus on long-term health improvements, helping reduce obesity-related risks and enhancing overall well-being",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676031/weight_rafgq8_avky6h.png",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Our Bariatric & Weight Loss Surgery clinic offers a comprehensive, multidisciplinary approach to obesity management, combining surgical expertise with nutritional, psychological, and lifestyle support. We help patients achieve sustainable weight loss, improve obesity-related health conditions, and enhance quality of life. Our team uses the latest minimally invasive surgical techniques to ensure faster recovery, minimal scarring, and reduced complications. Every patient undergoes a personalized evaluation to select the safest and most effective treatment plan.",
        conditionList: ["Obesity (BMI ≥ 30)", "Morbid Obesity (BMI ≥ 40, or ≥ 35 with comorbidities)", "Type 2 Diabetes Mellitus (Obesity-related)", "Hypertension", "Dyslipidemia", "Obstructive Sleep Apnea", "Gastroesophageal Reflux Disease (GERD) linked to obesity", "Non-Alcoholic Fatty Liver Disease (NAFLD)"],
        testList: ["Body Mass Index (BMI) Assessment", "Nutritional Evaluation", "Metabolic & Hormonal Testing", "Sleep Study (for sleep apnea)", "Psychological Assessment", "Ultrasound of Abdomen", "Endoscopy (if indicated", "Cardiac Evaluation (ECG, Echocardiogram)", "Comprehensive Blood Panel"],
        procedureList: ["Gastric Balloon Procedure: A temporary, non-surgical silicone balloon is placed in the stomach to create fullness, helping you eat less and control hunger. It’s removed after 6–12 months.", "Sleeve Gastrectomy: A minimally invasive surgery that removes 75% of the stomach, reducing appetite and calorie intake for significant, sustainable weight loss.", "Single Anastomosis Bypass (Mini Gastric Bypass): An advanced surgery that reduces stomach size and bypasses part of the intestine, lowering calorie absorption for effective weight loss."],
        faqs: [
            {
                question: "Who qualifies for bariatric surgery?",
                answer: "Candidates usually have a BMI of 40 or higher, or 35+ with serious weight-related health issues such as type 2 diabetes, sleep apnea, or hypertension.",
            },
            {
                question: "How much weight will I lose after bariatric surgery?",
                answer: "Most patients lose 50–70% of their excess body weight within 12–18 months, depending on the procedure and adherence to lifestyle changes.",
            },
            {
                question: "Is bariatric surgery reversible?",
                answer: "Some procedures, like gastric banding, are reversible; others, such as sleeve gastrectomy, are permanent"
            },
            {
                question: "Will my medical conditions improve after surgery?",
                answer: "Many obesity-related conditions, like diabetes and hypertension, improve significantly or resolve completely post-surgery."
            },
            {
                question: "Is bariatric surgery safe?",
                answer: "While all surgery carries risk, bariatric procedures are generally safe when performed by experienced surgeons, with risks minimized through thorough pre-op evaluation."
            },
            {
                question: "Will I need to follow a special diet after surgery?",
                answer: "Yes — a structured post-op diet begins with liquids, then progresses to purees, soft foods, and eventually regular healthy meals in smaller portions."
            },
            {
                question: "Will I have excess skin after weight loss?",
                answer: "Rapid and significant weight loss can lead to loose skin, which may require cosmetic surgery for removal if desired."
            },
            {
                question: "How long is the recovery period?",
                answer: "Most patients return to normal activities within 2–4 weeks, but full recovery and adaptation to new eating habits take several months."
            }
        ],
        videoUrls: ["QyH6StmVmvQ"],
        buttonText: "Learn more about Bariatric Surgery at Euracare",
        testimonialVideoUrl: ["https://www.youtube.com/embed/wZP3lPmPMU4?si=8ZqUQN-whOzQ1msm", "https://www.youtube.com/embed/XmbAz4kEcrk?si=vnBVb23-eT1klTzb"]
    },
    {
        slug: "general-surgery",
        title: "General Surgery",
        description: "Our General Surgery team is skilled in a wide range of procedures, from hernia repairs to complex abdominal surgeries. We prioritize patient safety, careful planning, and post-operative care to promote fast recovery and optimal results.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676030/surgery_ydhhsx_b3p5cw.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Our General Surgery department delivers expert care for a broad range of conditions affecting the abdomen, breast, and gastrointestinal system—with a focus on surgical precision and minimally invasive techniques. We are equipped to treat both elective and emergency cases, combining advanced diagnostics with personalized surgical planning.",
        conditionList: ["Hernias (inguinal, umbilical, incisional, femoral, hiatus, diaphragmatic)", "Gallstones & gallbladder disease", "Hemorrhoids & rectal bleeding", "Bile duct disorders", "Gastrointestinal (GI) cancers – surgical oncology", "Peptic ulcers", "Achalasia & GERD (reflux disease)"],
        testList: ["MRI", "CT scan", "X-ray imaging", "Ultrasound", "Clinical laboratory testing", "Endoscopy (upper GI, colonoscopy, sigmoidoscopy, proctoscopy as needed)"],
        procedureList: ["Hernia repair (open and laparoscopic across various types)", "Laparoscopic cholecystectomy (gallbladder removal)", "Hemorrhoidectomy", "Surgical Peptic ulcer repair", "Surgical management of bile duct disease", "Oncology surgeries for GI cancers (e.g., stomach, colorectal)", "Anti-reflux surgery and Heller’s cardiomyotomy for achalasia"],
        faqs: [
            {
                question: "What is the recovery time after laparoscopic surgery compared to open surgery?",
                answer: "Minimally invasive (laparoscopic) procedures typically have shorter recovery periods, less postoperative pain, and smaller scars."
            },
            {
                question: "Will I always stay overnight in the hospital?",
                answer: "It depends on the procedure—some are outpatient, while major surgeries may require a one or more night hospital stay."
            },
            {
                question: "How soon can I return to normal activity after surgery?",
                answer: "Most minimally invasive procedures allow return to light activity within a week, with full recovery varying by the condition."
            },
            {
                question: "Are there risks associated with general surgery?",
                answer: "As with any surgery, there are risks—but minimally invasive techniques generally reduce complications. Your surgeon will walk you through specific risks"
            },
            {
                question: "Is endoscopy part of general surgery?",
                answer: "Yes—our team performs endoscopic diagnostics such as colonoscopy and proctoscopy to evaluate GI issues when needed."
            }
        ]
    },
    {
        slug: "gastroenterology",
        title: "Gastroenterology",
        description: "We provide expert care for digestive health, diagnosing and treating conditions of the stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced endoscopic techniques for accurate diagnosis and effective treatment.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/gas_ucqxld_wjau9m.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Gastroenterology at Euracare focuses on the prevention, diagnosis, and treatment of disorders affecting the pancreas, liver, gallbladder, esophagus, stomach, small intestine, and colon. We leverage minimally invasive techniques—including endoscopy and laparoscopic surgery—to reduce pain, minimize scarring, shorten hospital stays, and accelerate recovery. Whether you're dealing with routine digestive symptoms or complex gastrointestinal conditions, our expert team delivers precise, patient-centered care.",
        conditionList: ["Acid reflux and gastroesophageal reflux disease (GERD)", "Gastritis and stomach ulcers", "Irritable bowel syndrome (IBS)", "Inflammatory bowel disease (Crohn’s disease, ulcerative colitis)", "Hepatitis and other liver disorders", "Gallstones and gallbladder disease", "Pancreatitis", "Celiac disease", "Esophageal disorders (achalasia, strictures)", "Constipation and chronic diarrhoea", "Gastrointestinal bleeding", "Polyps and precancerous lesions", "Colorectal, stomach, and oesophageal cancers"],
        procedureList: ["Colonoscopy", "Colonoscopy with polypectomy (Biopsy, Snare, Endoscopic mucosal resection)", "Flexible sigmoidoscopy and diagnostics", "Upper endoscopy", "Small bowel enteroscopy (Push enteroscopy)", "Proctosigmoidoscopy", "Endoscopic mucosal resection (EMR)", "Endoluminal mucosal resection", "Endoluminal stenting", "Endoscopic retrograde cholangiopancreatography (ERCP) – diagnostic & therapeutic", "Variceal hemostasis including banding", "Non-variceal hemostasis (Injection of epinephrine, cautery, hemoclips)", "Percutaneous gastrostomy tube insertion, replacement or removal", "Removal of foreign body in the gastrointestinal tract", "Laparoscopic cholecystectomy (Gallbladder removal)", "Laparoscopic Heller’s cardiomyotomy (Achalasia treatment)", "Laparoscopic hiatus hernia repair & anti-reflux surgery", "Open and laparoscopic hernia repair (incisional, inguinal, femoral, umbilical, hiatus, diaphragmatic)", "Open and laparoscopic stomach & small intestine surgery", "Haemorrhoidectomy", "Cyst removal"],
        testList: ["Endoscopic imaging (gastroscopy, colonoscopy)", "Abdominal ultrasound", "CT scan of the abdomen and pelvis", "MRI of the liver, biliary tract, and pancreas", "Liver function tests", "Stool analysis (including for occult blood, infections, parasites)", "Helicobacter pylori testing", "Fibroscan (liver elastography)", "Blood tests for gastrointestinal conditions"],
        faqs: [
            {
                question: "What symptoms should prompt me to see a gastroenterologist?",
                answer: "You should seek medical advice if you experience persistent abdominal pain, unexplained weight loss, difficulty swallowing, prolonged diarrhea or constipation, blood in stool, severe bloating, or chronic heartburn."
            },
            {
                question: "How should I prepare for a gastroenterology appointment?",
                answer: "Bring a list of your symptoms, any medications or supplements you take, previous test results, and details about your medical history. Some procedures, such as endoscopy or colonoscopy, require fasting or bowel preparation, which will be explained in advance."
            },
            {
                
                question: "Are endoscopic procedures painful?",
                answer: "Most are performed under sedation, so you remain comfortable and pain-free throughout the procedure"
            },
            {
                question: "How should I prepare for a colonoscopy?",
                answer: "You’ll be given specific instructions, which usually include dietary changes and a bowel cleansing preparation the day before the procedure."
            },
            {
                question: "How often should I get a colonoscopy?",
                answer: "For individuals at average risk, colonoscopy is recommended every 10 years starting at age 45–50. Those with higher risk factors, such as family history or previous findings, may need screening earlier and more frequently."
            },
            {
                question: "Can liver diseases be treated successfully?",
                answer: "Many liver conditions, if diagnosed early, can be treated or effectively managed to prevent complications."
            },
            {
                question: "Can diet and lifestyle changes improve digestive health?",
                answer: "Yes. Eating a balanced diet rich in fiber, staying hydrated, exercising regularly, limiting alcohol, avoiding smoking, and managing stress can significantly improve digestive function and reduce symptoms."
            }
        ],
        videoUrls: ["uvCIazEPLSM"]
    },
    {
        slug: "orthopedic-surgery",
        title: "Orthopedic Surgery",
        description: "Whether it’s a sports injury, joint pain, or complex surgery, our orthopedic specialists and surgeons deliver solutions to restore movement and quality of life. We focus on minimally invasive techniques to help patients regain mobility, reduce pain, and return to active lifestyles with personalized treatment plans.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676020/spine_blqqwi_n3wdle.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Orthopaedic Surgery department is dedicated to diagnosing, preventing, and treating disorders affecting bones, joints, muscles, ligaments, tendons, and nerves. Most procedures are minimally invasive, which means smaller incisions, less pain, minimal scarring, and faster recovery—delivering premium outcomes with patient comfort in mind. Our multidisciplinary team provides expert care for both elective and emergency musculoskeletal conditions.",
        conditionList: ["Bone fractures & trauma", "Joint problems including hip and knee disorders", "Soft tissue injuries and tendon/ligament tears", "Avascular necrosis", "Degenerative joint conditions (e.g., osteoarthritis)", "Ankle, foot, wrist, elbow, hand injuries and pain", "Spinal deformities and arthritic spine conditions", "Rehabilitation under joint health program", "Bone and joint deformities", "Failed joint replacements and failed fracture treatments", "Bone and soft tissue tumours"],
        testList: ["X-ray imaging", "CT scans", "MRI and MRI arthrograms (MRA", "Clinical laboratory testing", "Diagnostic injection under image guidance"],
        procedureList: ["Arthroscopy for joint evaluation and treatment", "Joint replacement and revision surgeries (hip, knee)", "Bone fracture repair", "Debridement and bone fusion procedures", "Osteotomy and spine fusion surgeries", "Soft tissue repairs (muscles, tendons, ligaments)", "Minimally invasive spine surgeries"],
        faqs: [
            {
                question: "When should I see an orthopaedic surgeon?",
                answer: "If you have persistent joint pain, swelling, stiffness, limited mobility, or an injury that hasn’t improved with rest and medication, it may be time to see an orthopaedic specialist",
            },
            {
                question: "Do all orthopaedic problems require surgery?",
                answer: "An assessment is required to determine the appropriate treatment for your complaints."
            },
            {
                question: "What advantages do minimally invasive orthopaedic surgeries offer?",
                answer: "They typically involve smaller incisions, less pain, lower infection risk, and faster recovery than traditional open surgery.",
            },
            {
                question: "How long will recovery take after orthopaedic surgery?",
                answer: "Recovery depends on procedure type—minor procedures may have quick recovery, while joint replacements or fusion surgeries often require several weeks of rehabilitation.",
            },
            {
                question: "Are joint replacement surgeries suitable for older patients?",
                answer: "Yes—many older adults benefit greatly from joint replacements, with improved mobility and quality of life, guided by careful surgical and rehabilitative planning."
            }
        ]
    },
    {
        slug: "urology",
        title: "Urology",
        description: "We offer comprehensive care for urinary tract and reproductive health issues. From kidney stones to prostate conditions, our urologists use advanced diagnostics and tailored treatments for the best possible outcomes.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676031/urology_m0nizb_b3ptkb.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Urology Department provides expert diagnosis and treatment for a wide range of urinary tract and male reproductive health conditions. Our services include advanced diagnostics such as uroflowmetry, prostate biopsy, and endoscopy, as well as minimally invasive treatments for prostate issues, kidney stones, and bladder disorders. We use the latest Olympus Exera III video system with high-definition flexible ureteroscopes and cystoscopes for precise, incision-free procedures. All examinations are recorded for accuracy and patient reference.",
        additionalOverview: "We offer contemporary Holmium laser technology with the LithoEvo by Quanta systems with proprietary features such as Vapor tunnel technology ensuring for individualized kidney stone treatment.",
        additionalOverview2: "Percutaneous nephrolithotomy (PCNL) is performed in the supine position offering patients a comfortable intra-operative position with excellent stone free rate and rapid return to normal activity.",
        additionalOverview3: "Our dedicated team of surgeons, nurses, and support staff work alongside radiology and laboratory services to ensure seamless care. The endoscopy suite meets international infection-control standards, featuring a state-of-the-art TD-20 disinfector and single-use instruments for maximum safety and comfort.",
        conditionList: ["Benign prostatic hyperplasia (BPH) and prostate cancer", "Kidney stones and urinary tract stone disease", "Bladder cancer and tumours", "Hematuria (blood in urine) investigations", "Penoscrotal conditions: hydrocele, varicocele, cysts, erectile dysfunction, infertility", "General urological conditions in men and women"],
        testList: ["Urine collection and laboratory analysis", "Imaging: CT scan, MRI, X-ray", "Blood tests and PSA (prostate-specific antigen) levels", "Endoscopic diagnostics: cystoscopy and ureteroscopy", "Prostate biopsy using advanced imaging systems"],
        procedureList: ["Transurethral resection of prostate (TURP) and bladder tumour (TURBT)", "Ureteroscopy and laser lithotripsy for kidney stones", "Percutaneous nephrolithotomy (PCNL) for complex stone cases", "Penoscrotal surgeries: hydrocelectomy, varicocele repair, orchiectomy, vasectomy", "Diagnostic and therapeutic cystoscopies—both rigid and flexible"],
        faqs: [
            {
                question: "Are these urological procedures minimally invasive?",
                answer: "Yes—most procedures are performed endoscopically with no or very small incisions, ensuring quicker recovery and less discomfort."
            },
            {
                question: "How are kidney stones treated?",
                answer: "Treatment options include ureteroscopy with laser, PCNL for large stones, and non-invasive medical therapies based on stone size and location."
            },
            {
                question: "Will I stay overnight for stone surgery?",
                answer: "Some treatments may require short postoperative observation; many ureteroscopic or transurethral procedures are done as day cases"
            },
            {
                question: "Why would I need a prostate biopsy?",
                answer: "A prostate biopsy is performed when elevated PSA levels or imaging suggest potential prostate cancer, ensuring accurate diagnosis and treatment."
            },
            {
                question: "Can urology treat infertility?",
                answer: "Yes—Dr. Ajayi offers diagnostic assessments and surgical treatments related to male infertility, in addition to general men’s health services."
            }
        ],
        videoUrls: ["nmmZrB3af_Y", "4qrTU5kMF60"],
        testimonialVideoUrl: ["https://www.youtube.com/embed/UNIfzQPsWbk?si=WxwRDP2FAucbhgsN"]
    },
    {
        slug: "family-geriatric-medicine",
        title: "Family & Geriatric Medicine",
        description: "We provide ongoing, personalized care for every stage of life. Our physicians manage chronic conditions, preventive health, and complex needs of older adults with a focus on quality of life and independence.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675981/geri_n2yrho_orogus.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Family & Geriatric Medicine team is here to care for you and your loved ones through every stage of life — from children and young adults to seniors. We focus on keeping you healthy, preventing illness, and managing long-term conditions with compassion and expertise",
        additionalOverview: "Euracare’s Family & Geriatric Medicine Department provides comprehensive,continuous, and coordinated care for patients of all ages, from children to seniors, with a special emphasis on the unique needs of older adults. Our physicians focus on preventive healthcare, early detection of diseases, health promotion, and the management of chronic conditions. We see an undifferentiated panel of patients with varying disease ailments.",
        additionalOverview2: "For our senior patients, we deliver holistic and compassionate care aimed at maintaining independence, mobility, and quality of life. We also work closely with families and caregivers to ensure that elderly patients receive personalised support that meets both their medical and social needs. Our primary focus is to provide patient-centred and family-oriented care.",
        conditionList: ["Lifestyle and chronic diseases: diabetes, hypertension, heart disease", "Respiratory conditions: asthma, COPD, recurrent chest infections", "Common infections: flu, pneumonia, urinary tract infections", "Digestive issues: acid reflux, gastritis, irritable bowel syndrome", "Age-related conditions: dementia, osteoporosis, arthritis", "Mobility and balance problems, recurrent falls, frailty syndromes", "Sleep problems and nutritional deficiencies in older adults", "Men’s health problems: erectile dysfunction, prostate diseases"],
        testSubtitle: "We use a wide range of diagnostic tools to detect conditions early and monitor progress:",
        testList: ["Routine blood and urine tests", "Blood pressure and cardiovascular risk assessments", "Diabetes screening (HbA1c, fasting blood sugar)", "Cognitive and memory assessments for dementia and Alzheimer’s disease", "Bone density scans for osteoporosis", "Lung function tests", "Cancer screenings (prostate, breast, cervical, colon, etc.)", "Fall risk and mobility assessments"],
        procedureList: ["Comprehensive geriatric assessments and personalised care planning", "Vaccinations and immunisations (including travel vaccines)", "Chronic disease management programmes and medication optimisation", "Wound care and minor surgical procedures", "Nutritional counselling and physical rehabilitation referrals", "Palliative and end-of-life care planning, with family support"],
        faqs: [
            {
                question: "Who is a Family Medicine Physician?",
                answer: "A Family Medicine physician is a medical doctor or primary care specialist trained in the specialty of Family Medicine, which is a discipline that provides comprehensive, continuous, and coordinated healthcare to individuals and families across all ages, genders, and disease categories"
            },
            {
                question: "What is the difference between family medicine and geriatric medicine?",
                answer: "Family medicine provides care for patients of all ages, while geriatric medicine focuses specifically on the health concerns of the older adult, particularly those with multiple or complex conditions.",
            },
            {
                question: "How often should I have a check-up?",
                answer: "We recommend an annual health check-up for all adults, and more frequent visits for patients managing chronic conditions or those over 65."
            },
            {
                question: "Can family medicine doctors manage multiple health issues at once?",
                answer: "Yes. Our physicians are trained to manage complex cases involving multiple health concerns, ensuring treatments are safe, coordinated, and tailored."
            },
            {
                question: "Do you work with other specialists?",
                answer: "Absolutely. We coordinate with cardiologists, endocrinologists, neurologists, orthopaedic surgeons, and other specialists within Euracare to provide seamless, integrated & multidisciplinary care."
            }
        ]
    },
    {
        slug: "general-medicine",
        title: "General Medicine",
        description: "Our General Medicine department delivers expert diagnosis and management of a broad spectrum of health concerns. We coordinate care across specialties, ensuring patients receive timely, effective, and compassionate treatment.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676003/medicine_ih4pev_saxbp3.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "The General Medicine Department at Euracare provides comprehensive primary care and internal medicine services for adults of all ages. Our physicians are skilled in diagnosing, treating, and preventing a wide spectrum of acute and chronic health conditions, focusing on your overall well-being. Whether you need a routine check-up, long-term management of a medical condition, or urgent care for a sudden illness, our team delivers expert, patient-centred treatment supported by Euracare’s advanced diagnostic and imaging facilities.",
        conditionList: ["Hypertension (high blood pressure)", "Diabetes and endocrine disorders", "Respiratory tract infections (common colds, bronchitis, asthma)", "Gastrointestinal issues (ulcers, acid reflux, IBS)", "Heart disease and cardiovascular risk management (including cholesterol)", "Allergies and dermatological conditions", "Migraines, headaches, and chronic fatigue", "Infectious diseases (malaria, typhoid, hepatitis, etc.", "Lifestyle-related conditions: obesity, smoking-related illness", "Back pain, musculoskeletal discomfort", "Preventive care and general wellness"],
        testSubtitle: "Our physicians use detailed clinical evaluations, laboratory testing, and imaging studies to ensure accurate and timely diagnoses. Common tests include:",
        testList: ["Comprehensive blood and urine tests", "Blood sugar and cholesterol screening", "Blood pressure monitoring", "ECG (electrocardiogram)", "Pulmonary function tests", "X-rays, ultrasounds, and other imaging", "Stool and culture tests for infections"],
        procedureList: ["Routine and annual medical check-ups", "Vaccinations and immunisations (childhood, adult, travel)", "Wound care and minor surgical procedures", "Intravenous (IV) therapy for hydration or medication", "Chronic disease management programs with lifestyle support", "Preventive health counselling and lifestyle coaching (diet, exercise, smoking cessation)"],
        faqs: [
            {
                question: " When should I see a general medicine doctor instead of a specialist?",
                answer: "If you have a new or unexplained symptom, need preventive care, or require ongoing management of a chronic condition, a general medicine doctor is your first point of contact. They can treat you directly or refer you to the appropriate specialist"
            },
            {
                question: "How often should I get a medical check-up?",
                answer: "For healthy adults, at least once a year. More frequent visits are recommended for those with chronic illnesses, risk factors, or ongoing treatment."
            },
            {
                question: "What should I bring for my first visit?",
                answer: "Please bring any previous medical records, test results, and a list of medications or supplements you are currently taking."
            },
            {
                question: "Do you provide long-term care for chronic illnesses?",
                answer: "Yes. We offer personalised, long-term management plans that may include medication adjustments, regular monitoring,"
            }
        ]
    },
    {
        slug: "radiology",
        title: "Radiology",
        description: "With advanced imaging technology, our Radiology department offers precise diagnostic services including MRI, CT scans, mammography, and X-rays. We support fast, accurate diagnoses to guide effective treatment plans.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676017/radio2_dhh2ki_xrpali.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "The Radiology department at Euracare offers state-of-the-art diagnostic imaging services to support accurate and timely diagnoses. We use a teleradiology system with most of our radiologists based in the UK/USA/Canada who review all our imaging remotely and provide accurate and timely interpretations of radiological studies. Our highly trained radiographers work closely with referring physicians to ensure each patient receives the most suitable imaging study, performed safely and efficiently. With advanced equipment and a focus on patient comfort, we provide clear, precise images that guide effective treatment decisions.",
        conditionList: ["Fractures and bone injuries", "Tumours and cancer staging", "Heart and lung diseases", "Abdominal pain and digestive tract issues", "Stroke and brain conditions", "Musculoskeletal injuries and joint disorders", "Infections and inflammatory conditions", "Vascular diseases and blockages"],
        testSubtitle: "We offer a full range of imaging services, including:",
        testList: ["X-ray – for bones, joints, and chest imaging", "Ultrasound – for abdominal, pelvic, and soft tissue imaging", "CT scan – for detailed cross-sectional images of the body", "MRI – for high-resolution images of soft tissues, brain, and spine", "Mammogram – for breast cancer screening and diagnosis", "Fluoroscopy – for real-time moving images of body systems"],
        procedureList: ["Image-guided biopsies", "Drainage procedures", "Joint and soft tissue injections under imaging guidance",  "Vascular imaging and angiography", "Pre- and post-operative imaging assessments"],
        faqs: [
            {
                question: "Do I need a doctor’s referral for imaging?",
                answer: "In most cases, yes. A referral ensures you get the correct type of scan and that it is clinically necessary."
            },
            {
                question: "Are imaging tests painful?",
                answer: "Most imaging tests are painless. Some procedures may require contrast dye or minimal discomfort from positioning."
            },
            {
                question: "How should I prepare for my scan?",
                answer: "Preparation depends on the type of imaging. Some scans require fasting, while others need you to avoid certain medications. Your doctor or technician will provide specific instructions."
            },
            {
                question: "How long will it take to get my results?",
                answer: "Typically, results are available within 24–48 hours, but urgent cases may be prioritised for same-day reporting."
            },
            {
                question: "Is imaging safe?",
                answer: "Yes. We follow strict safety guidelines to minimise exposure to radiation, and non-radiation options like ultrasound"
            }
        ]
    },
    {
        slug: "neurology-and-neurosurgery",
        title: "Neurology & Neurosurgery",
        description: "Our Neurology and Neurosurgery team diagnoses and treats conditions of the brain, spine, and nervous system. From migraines to complex neurosurgical procedures, we provide integrated, patient-centered care.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676005/neuro_nttm4e_tukveb.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Neurology & Neurosurgery department treats conditions of the brain, spine, and nervous system. Neurologists focus on non-surgical management while neurosurgeons provide minimally invasive interventions when needed. Our goal is to enhance quality of life through personalized, state-of-the-art, minimally invasive treatments that reduce recovery time and offer optimal safety.",
        conditionSubtitle: "Our Neurology & Neurosurgery team provides expert diagnosis, treatment, and management for a comprehensive range of neurological conditions, including:",
        conditionList: ["Amyotrophic Lateral Sclerosis (ALS)", "Arteriovenous Malformations (AVMs) in the brain or spine", "Brain aneurysms", "Cerebrovascular diseases", "Chronic pain syndromes including headache, neck, and back pain", "Epilepsy and seizure disorders", "Huntington’s disease and other hyperkinetic syndromes", "Multiple Sclerosis (MS)", "Muscular dystrophy", "Neurofibromatosis and other neurocutaneous syndromes", "Parkinson’s disease and other neurodegenerative conditions", "Sleep disorders", "Spina bifida and related neurological defects", "Spinal stenosis and myelopathy", "Stroke care and rehabilitation"],
        testList: ["Neurological exam, patient history, and physical assessment", "MRI and CT neuroimaging", "Cerebrospinal fluid (CSF) analysis", "Electromyography (EMG) and nerve conduction studies", "Evoked potentials (EPs)", "Neuropsychological testing, muscle biopsy, genetic testing"],
        procedureList: ["Surgical interventions for brain/spinal AVMs, aneurysms, tumours", "Stroke management and rehabilitation", "Minimally invasive spinal fusion for stenosis and myelopathy", "Neurosurgical support for epilepsy and degenerative neurological diseases", "Integrated non-surgical treatment plans for chronic pain syndromes"],
        faqs: [
            {
                question: "What’s the difference between a neurologist and a neurosurgeon?",
                answer: "Neurologists manage neurological conditions medically; neurosurgeons perform surgeries when needed."
            },
            {
                question: "How is stroke treated here?",
                answer: "Through acute intervention and a multidisciplinary rehabilitation approach tailored for recovery."
            },
            {
                question: "Are MRI and CT scans safe for diagnosing neurological conditions?",
                answer: "Yes—they’re essential, non-invasive tools for accurate diagnosis."
            },
            {
                question: "Can chronic headaches be surgically treated?",
                answer: "Most chronic headaches are managed medically, but surgical options are available for specific structural causes."
            },
            {
                question: "What is the benefit of minimally invasive neurosurgery?",
                answer: "Smaller incisions, less pain, lower infection risk, shorter hospital stay, and quicker recovery."
            }
        ]
    },
    {
        slug: "endocrinology-and-diabetology",
        title: "Endocrinology & Diabetology",
        description: "We manage hormonal and metabolic disorders, including diabetes, thyroid disease, and adrenal conditions. Our specialists work closely with patients to optimize treatment and improve long-term health.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/diabetes_fuwebm_ikb4oc.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Endocrinology & Diabetology department specializes in managing hormone-related conditions and diabetes with a holistic, evidence-based approach. Our clinicians offer preventive diabetic care, diagnostics, and comprehensive treatment plans tailored to the growing needs of modern lifestyles and metabolism-related diseases. Whether it's type 1, type 2, prediabetes, or gestational diabetes, we combine specialist care with seamless access to laboratory and imaging facilities to support long-term wellness.",
        conditionList: ["Type 1 Diabetes", "Type 2 Diabetes", "Prediabetes", "Gestational Diabetes", "Adrenal gland disorders", "Cholesterol and lipid disorders", "Osteoporosis", "Parathyroid disorders", "Pituitary disorders & Pituitary tumours", "Thyroid cancer", "Thyroid disease"],
        testList: ["Clinical laboratory tests", "Continuous glucose monitoring (CGM)", "Glycated hemoglobin (HbA1c) test", "LDL (“bad” cholesterol) measurement", "Kidney function assessment", "Eyesight examination", "Cortisol stimulation test", "CT scan", "MRI scan", "MIBG (metaiodobenzylguanidine) scan", "Provocative/Suppression tests", "Saliva test", "Endocrine dynamic testing", "Fine-needle aspiration cytology (FNAC)", "Ultrasound-guided thyroid biopsy"],
        procedureList: ["Multidisciplinary management of diabetes (lifestyle, medication, surgical options)", "Hormonal disorder evaluation and treatment", "Bone density assessment and osteoporosis management", "Imaging-guided endocrine biopsies (thyroid, adrenal, pituitary)", "Continuous monitoring technologies for precision patient care"],
        faqs: [
            {
                question: "What sugar level indicates diabetes, and how often should patients check their A1C?",
                answer: "A fasting blood sugar ≥ 126 mg/dL or A1C ≥ 6.5% typically confirms diabetes; prediabetes falls in lower ranges. Every 3–6 months, depending on how well blood sugar levels are managed."
            },
            {
                question: "What is Gestational Diabetes?",
                answer: "Diabetes diagnosed during pregnancy—it requires careful monitoring and may involve dietary adjustment or insulin therapy."
            },
            {
                question: "Can hormone disorders be treated without surgery?",
                answer: "Many are managed with medications and monitoring; surgery is reserved for specific tumor-related cases."
            },
            {
                question: "What are the risks of untreated osteoporosis?",
                answer: "It increases the likelihood of fractures and loss of mobility—early intervention is key."
            },
            {
                question: "Can thyroid disorders be cured?",
                answer: "Many thyroid conditions, such as hypothyroidism or hyperthyroidism, can be effectively managed with medication or surgery. Some, like thyroid cancer, may be curable with appropriate treatment."
            },
            {
                question: "What are the signs of adrenal gland problems?",
                answer: "Symptoms may include unexplained weight changes, fatigue, muscle weakness, high or low blood pressure, and mood changes."
            },
            {
                question: " When should I see an endocrinologist?",
                answer: "If you have unexplained fatigue, sudden weight changes, irregular periods, excessive thirst, or difficulty controlling blood sugar, a referral to an endocrinologist is advised."
            }
        ],
        videoUrls: ["MwXr3txbhxc"]
    },
    {
        slug: "nutrition-and-wellness",
        title: "Nutrition and Wellness",
        description: "Our nutritionists provide personalized dietary plans to support weight management, chronic disease prevention, and overall wellness. We combine scientific expertise with practical advice for sustainable results",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676003/nutri_lvvsym_zanev4.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "At Euracare, our Clinical Nutrition Department offers expert dietary coaching and wellness plans to combat lifestyle diseases and support overall health. Our nutritionists work closely with patients before and after medical procedures, designing customized meal plans that promote optimal outcomes, recovery, and long-term wellbeing. Good nutrition is vital for managing conditions like heart disease, diabetes, obesity, hypertension, thyroid issues, arthritis, and autoimmune disorders.",
        conditionList: ["Obesity and weight management", "Diabetes and gestational diabetes", "High blood pressure (hypertension)", "High cholesterol and lipid disorders", "Thyroid conditions", "Heart disease", "Arthritis and joint discomfort", "Cognitive support for dementia", "Gut Health"],
        testList: ["Nutrient level testing", "Body Mass Index (BMI) evaluation", "Cholesterol profile including LDL", "Glycated Hemoglobin (HbA1c) for blood sugar control"],
        procedureList: ["Personalized dietary consultations", "Tailored meal and wellness plans", "Pre- and post-operative nutrition support", "Long-term lifestyle and diet coaching", "Support for chronic disease nutrition management"],
        faqs: [
            {
                question: "Why is nutrition important for chronic disease?",
                answer: "Proper nutrition can significantly reduce risks and support management of conditions like diabetes, hypertension, and heart disease."
            },
            {
                question: "Does nutrition matter after surgery?",
                answer: "Yes — personalized meal planning helps with healing, energy, and a smoother recovery process"
            },
            {
                question: "Can I still eat my favorite foods?",
                answer: "Yes, but in balanced portions and often healthier preparations—guided by your nutritionist"
            },
            {
                question: "Do you support weight loss through lifestyle changes?",
                answer: "Absolutely — weight management plans emphasize sustainable diet and exercise habits, not quick fixes"
            },
            {
                question: "How long does consultation take?",
                answer: "Typically around 45–60 minutes, plus follow-ups to adjust your nutrition plan as needed."
            }
        ]
    },
    {
        slug: "breast-surgery",
        title: "Breast Surgery",
        description: "We offer advanced surgical care for benign and malignant breast conditions. Our approach is compassionate, precise, and tailored to each patient’s needs, with a focus on both health and aesthetics.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675975/breast_tmvgd3_cklpio.jpg",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675975/breast_tmvgd3_cklpio.jpg",
        overviewText: "Euracare’s Breast Surgery service uses expertly trained, minimally invasive surgical techniques to enhance appearance, treat disease, and restore confidence. Whether you need reconstructive, reduction, or diagnostic breast surgery, our surgeons prioritize safety, fast recovery, and natural-looking results.",
        testList: ["Clinical examination and history", "Ultrasound", "X-ray (mammography/digital mammography)", "CT scan when indicated", "Clinical laboratory testing"],
        procedureList: ["Breast reduction surgery", "Augmentation mammoplasty", "Mastectomy and lumpectomy", "Breast-conserving surgery", "Mastopexy (breast lift)", "Treatment of breast abscesses, including incision, drainage, and lactiferous duct excision", "Surgical breast biopsies (including microdochectomy)"],
        faqs: [
            {
                question: "What is the recovery from breast surgery like?",
                answer: "Minimally invasive techniques allow for shorter hospital stays, less pain, and faster return to routine activity"
            },
            {
                question: "Can I have a breast lift and reduction together?",
                answer: "Yes — mastopexy and reduction can be performed together, and your surgeon will recommend the best option for your needs."
            },
            {
                question: "Will I still feel normal after surgery?",
                answer: "Sensation preservation depends on technique, but efforts are made for both functional and cosmetic outcomes."
            },
            {
                question: "Do you perform surgery for benign versus cancerous breast conditions?",
                answer: "Yes — treatment ranges from cosmetic surgery to cancer-focused interventions such as mastectomy or lumpectomy."
            },
            {
                question: "Is scarring visible after surgery?",
                answer: "Surgeons use precise techniques"
            }
        ]
    },
    {
        slug: "dermatology",
        title: "Dermatology",
        description: "Our dermatologists diagnose and treat skin, hair, and nail conditions, offering both medical and aesthetic dermatology services. We use the latest techniques to promote healthy skin and confidence.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675977/dermatology_emipdu_wjkmqe.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Dermatology department offers expert diagnosis and treatment for all skin, hair, and nail disorders—whether standalone or linked to systemic illness. Our dermatologists combine clinical precision with modern therapies to deliver comprehensive, patient-focused care.",
        conditionList: ["Infectious skin diseases", "Blistering disorders", "Connective tissue diseases", "Psoriasis and related conditions", "Photosensitivity reactions", "Cutaneous ulcerations", "Oral mucosal diseases", "Eczema and dermatitis", "Vitiligo", "Pruritus (severe itching)", "Acne and scarring", "Hair disorders", "Skin cancer screening and early detection"],
        testList: ["Thorough physical examination", "Blood and urine laboratory tests"],
        procedureList: ["Chemical peels and cosmetic skin treatments"],
        faqs: [
            {
                question: "How do I know if a skin condition requires specialist care?",
                answer: "Conditions such as persistent rashes, new or changing skin lesions, and suspicious growths should be evaluated by a dermatologist."
            },
            {
                question: "Are chemical peels safe?",
                answer: "Yes—when performed by trained professionals, peels are safe and effective with minimal downtime."
            },
            {
                question: "Can skin issues indicate other health problems?",
                answer: "Absolutely—dermatologic signs can reveal systemic conditions like autoimmune diseases or internal illnesses."
            },
            {
                question: "How often should I have a skin cancer screening?",
                answer: "Annual checks are ideal, especially if you’ve had prior skin issues, light skin, or sun exposure."
            },
            {
                question: "Do you treat hair loss?",
                answer: "Yes, we address various causes of hair disorders—from genetic to immune-mediated—with tailored therapies."
            }
        ]
    },
    {
        slug: "gynaecology",
        title: "Gynaecology",
        description: "We provide comprehensive women’s health services, from routine screenings to advanced gynecologic procedures. Our team supports every stage of life with sensitivity and expertise.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/gynacology_fywfz0_sdbzc9.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare's Gynaecology department delivers expert care for a broad spectrum of women’s health needs, from routine reproductive care to surgical interventions. Every treatment emphasizes accurate diagnosis and gentle recovery in a compassionate setting.",
        conditionSubtitle: "Our gynecology team provides expert diagnosis and management for a wide range of women’s health concerns, including:",
        conditionList: ["Menstrual disorders (heavy, irregular, or painful periods)", "Menopause and perimenopause symptoms", "Polycystic ovary syndrome (PCOS)", "Fibroids (benign uterine growths)", "Endometriosis", "Ovarian cysts", "Abnormal vaginal bleeding", "Pelvic pain", "Pelvic inflammatory disease (PID)", "Vaginal infections", "Urinary incontinence and pelvic floor disorders", "Fertility concerns and reproductive health issues", "Early pregnancy complications (including ectopic pregnancy)","Routine cervical cancer screening and management of abnormal Pap smears"],
        testList: ["Clinical examination", "Ultrasound imaging", "Laboratory tests (hormones, infections)", "Screening procedures (e.g., pap smear)"],
        procedureSubtitle: "Minimally Invasive (Laparoscopic) Procedures:",
        procedureList: ["Laparoscopic ovarian cystectomy (removal of cysts from the ovary)", "Laparoscopic myomectomy (removal of fibroids)", "Laparoscopic hysterectomy (removal of the uterus)", "Laparoscopic adhesiolysis (removal of pelvic adhesions)", "Laparoscopic management of ectopic pregnancy"],
        additionalProcedureSubtitle: "Other Surgical & Diagnostic Procedures:",
        additionalProcedureList: ["Hysteroscopy (diagnosis and treatment of uterine cavity problems)", "Dilation and curettage (D&C)", "Colposcopy and cervical biopsy (for abnormal Pap smears)", "Endometrial biopsy", "Cervical cerclage (to help prevent preterm birth)", "Pelvic floor repair surgery","Tubal ligation and sterilization procedures"],
        additionalProcedureSubtitle2: "Non-Surgical & Preventive Care",
        additionalProcedureList2: ["Menopause management and hormone therapy", "Contraceptive counselling and procedures (IUD insertion, contraceptive implants)", "HPV vaccination", "Well-woman check-ups and preventive health screening"],
        faqs: [
            {
                question: "When should I consult a gynaecologist?",
                answer: "For issues like irregular cycles, pelvic pain, fertility concerns, or menopausal symptoms."
            },
            {
                question: "Are minimally invasive gynaecologic surgeries available?",
                answer: "Yes—these reduce recovery time, scarring, and discomfort."
            },
            {
                question: "At what age should routine gynaecological screenings begin?",
                answer: "Pap smear screenings generally begin at age 21 or earlier if symptoms are present."
            },
            {
                question: "Can fibroids be treated without surgery?",
                answer: "Some can—but surgical evaluation is often necessary for accurate treatment planning."
            },
            {
                question: "s reproductive health addressed holistically?",
                answer: "Yes—your care involves physical, hormonal, fertility, and wellness assessments."
            }
        ]
    },
    {
        slug: "psychiatry-sleep-therapy",
        title: "Psychiatry & Sleep Therapy",
        description: "We address mental health and sleep disorders with evidence-based care. From anxiety and depression to insomnia, our specialists create personalized treatment plans that restore balance and well-being",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676019/sleep_ablro1_iaegko.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Psychiatry & Sleep Therapy unit combines psychological and medical expertise to treat mental health conditions and sleep disorders. Our holistic approach helps restore mental well-being and improve quality of rest.",
        conditionList: ["Anxiety and stress", "Depression and mood disorders", "Psychotic illnesses (e.g., schizophrenia)", "Sleep issues (e.g., insomnia, obstructive sleep apnea)", "Workplace-related stress (including corporate wellness"],
        testList: ["Clinical evaluation and psychiatric assessment", "Diagnostic imaging (MRI, CT, X-ray) when needed"],
        procedureList: ["Comprehensive psychiatric evaluation and therapy", "Sleep studies (for sleep-related conditions)"],
        faqs: [
            {
                question: "How do I know if my sleeping issues require treatment?",
                answer: "Persistent insomnia, daytime fatigue, or snoring that disrupts life indicates need for specialized care."
            },
            {
                question: "Can therapy help depression long-term?",
                answer: "Yes—combined with medical management, psychotherapy offers sustainable improvement."
            },
            {
                question: "What is sleep therapy?",
                answer: "It’s a structured, multidisciplinary approach to diagnosing and treating sleep disorders"
            },
            {
                question: "Are psychotic disorders treatable?",
                answer: "Many can be managed with a combination of medication, therapy, and support."
            }
        ]
    },
    {
        slug: "rheumatology",
        title: "Rheumatology",
        description: "Our rheumatologists specialize in diagnosing and treating autoimmune and inflammatory joint diseases, including arthritis and lupus. We focus on reducing pain, improving mobility, and preserving long-term health.",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676017/rheuma_qj5ahx_l479fm.jpg",
        heroImage: "/service-d/hero-img.png",
        overviewText: "Euracare’s Rheumatology department specializes in managing autoimmune, inflammatory, and musculoskeletal disorders with precision and compassionate care. Our team uses advanced diagnostics to guide long-term therapy for complex chronic conditions.",
        conditionList: ["Joint and back pain", "Autoimmune disorders", "Lupus", "Systemic sclerosis", "Inflammatory myositis", "Sjögren’s syndrome", "Mixed connective tissue disease", "Rheumatoid arthritis", "Juvenile arthritis", "Septic arthritis", "Gout", "Osteoarthritis", "Osteoporosis", "Behçet’s disease", "Bursitis", "Tendinitis", "Spondyloarthropathy", "Spondylosis", "Systemic vasculitis", "Fibromyalgia", "Giant cell arteritis (GCA)"],
        testList: ["Blood tests (including autoimmune serology)", "Joint aspiration", "Cortisone injections", "Physical examination", "Infusion therapy", "X-ray", "Ultrasound", "MRI", "CT scan"],
        procedureList: ["Joint injections and synovial fluid sampling", "Disease-modifying treatment for autoimmune conditions" ,"Pain management and rehabilitation planning"],
        faqs: [
            {
                question: "How can I tell if my joint pain is rheumatologic?",
                answer: "Persistent inflammation, stiffness, and tenderness—even after rest—suggest rheumatologic referral."
            },
            {
                question: "Are rheumatologic conditions curable?",
                answer: "Many conditions are manageable; early detection improves outcomes dramatically."
            },
            {
                question: "Do treatments include medication only?",
                answer: "No—treatment involves medication, lifestyle changes, physical therapy, and specialist care."
            },
            {
                question: "Can older adults with arthritis improve mobility?",
                answer: "Yes—through therapy, medication, and personalized joint care strategies."
            },
            {
                question: "What is vasculitis and how is it treated?",
                answer: "Vasculitis is inflammation of blood vessels; it’s treated with immunosuppression and close monitoring."
            }
        ]
    },
    
];
