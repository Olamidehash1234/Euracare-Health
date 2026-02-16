export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  postedDate: string;
  objective: string;
  dutiesAndResponsibilities: string[];
  qualificationsAndRequirements: {
    required: string[];
    preferred?: string[];
  };
  category: 'CLINICAL_SERVICES' | 'DIAGNOSTICS_IMAGING' | 'PHARMACY' | 'QUALITY_SAFETY';
}

export const jobPositions: JobPosition[] = [
  {
    id: 'medical-officer-1',
    title: 'MEDICAL OFFICER',
    department: 'Clinical Services',
    type: 'Full Time',
    location: 'Lagos, Nigeria',
    postedDate: 'Posted 1 week ago',
    category: 'CLINICAL_SERVICES',
    objective: 'The Medical Officer is responsible for providing primary healthcare services, managing wellbeing clinic, and ensuring compliance with occupational health and safety standards. This role supports the organization\'s health objectives by delivering preventive care, medical consultations, and emergency response.',
    dutiesAndResponsibilities: [
      'Conduct thorough medical assessments and examinations of patients.',
      'Diagnose and treat various medical conditions, injuries, and illnesses.',
      'Develop and implement personalized treatment plans for patients.',
      'Prescribe medications and monitor patient responses.',
      'Perform basic medical and surgical procedures as required.',
      'Educate patients and their families about medical conditions and treatments.',
      'Maintain accurate and up-to-date medical records for all patients.',
      'Collaborate with multidisciplinary healthcare teams to coordinate patient care.',
      'Stay informed about current medical best practices and treatments.',
      'Perform or treat basic medical and surgical emergencies.',
      'Understand use of point-of-care diagnostic tools such as STAT devices and ECG machines.',
      'Ensure a team-based approach to treatment of complex cases.',
      'Write detailed medical reports and discharge summaries.',
      'Offer critical medical services.',
      'Attend to wellbeing clinic as assigned.',
      'Adhere to medical protocols, standards, and regulations.',
      'Perform other applicable tasks as designed by the team lead and Medical Director.',
    ],
    qualificationsAndRequirements: {
      required: [
        'Medical degree (MBBS or equivalent) from an accredited institution.',
        'Minimum 2 years post NYSC experience.',
        'Full registration with the Medical and Dental Council.',
        'Must hold a valid practice license.',
        'Strong clinical and diagnostic skills.',
        'Must be compassionate and patient skills (BLS/ACLS).',
        'Excellent communication and interpersonal skills.',
        'Empathy and compassion toward patients.',
      ],
    },
  },
  {
    id: 'nurses-1',
    title: 'NURSES',
    department: 'Clinical Services',
    type: 'Full Time',
    location: 'Lagos, Nigeria',
    postedDate: 'Posted 1 week ago',
    category: 'CLINICAL_SERVICES',
    objective: 'Nurses provide essential patient care, support medical officers, and ensure optimal patient comfort and safety. They are critical team members who deliver quality nursing care aligned with best practices and organizational standards.',
    dutiesAndResponsibilities: [
      'Provide direct patient care and monitor patient health status.',
      'Administer medications and treatments as prescribed.',
      'Assist physicians during examinations and procedures.',
      'Maintain accurate patient records and documentation.',
      'Educate patients about health conditions and care instructions.',
      'Monitor vital signs and report changes to medical staff.',
      'Maintain infection control and safety standards.',
      'Provide emotional support to patients and families.',
      'Collaborate with healthcare team members.',
      'Ensure patient comfort and dignity.',
      'Respond to patient needs promptly.',
      'Maintain cleanliness of patient areas and equipment.',
    ],
    qualificationsAndRequirements: {
      required: [
        'Nursing degree (RN/BSN) from accredited institution.',
        'Valid nursing license and registration.',
        'Minimum 1-2 years of clinical experience.',
        'Strong patient care skills.',
        'Excellent communication abilities.',
        'Ability to work flexible hours.',
        'Compassion and patient advocacy focus.',
      ],
    },
  },
  {
    id: 'lab-scientist-1',
    title: 'MEDICAL LABORATORY SCIENTIST',
    department: 'Diagnostics & Imaging',
    type: 'Full Time',
    location: 'Lagos, Nigeria',
    postedDate: 'Posted 1 week ago',
    category: 'DIAGNOSTICS_IMAGING',
    objective: 'Medical Laboratory Scientists analyze patient specimens and provide accurate diagnostic test results. They ensure quality control, maintain laboratory standards, and support clinical decision-making through reliable laboratory data.',
    dutiesAndResponsibilities: [
      'Analyze patient blood, tissue, and other specimens.',
      'Operate and maintain laboratory equipment.',
      'Perform quality control testing.',
      'Report findings to healthcare providers.',
      'Maintain strict infection control protocols.',
      'Document test results accurately.',
      'Ensure proper specimen handling and storage.',
      'Troubleshoot equipment issues.',
      'Stay updated on laboratory procedures.',
      'Maintain laboratory safety standards.',
      'Collaborate with clinical staff.',
      'Ensure timely delivery of test results.',
    ],
    qualificationsAndRequirements: {
      required: [
        'Bachelor\'s degree in Medical Laboratory Science or related field.',
        'Valid professional certification/registration.',
        'Knowledge of laboratory procedures and techniques.',
        'Proficiency with laboratory equipment.',
        'Attention to detail and accuracy.',
        'Strong organizational skills.',
        'Ability to work under pressure.',
      ],
    },
  },
  {
    id: 'quality-officer-1',
    title: 'QUALITY IMPROVEMENT OFFICER',
    department: 'Quality & Safety',
    type: 'Full Time',
    location: 'Lagos, Nigeria',
    postedDate: 'Posted 1 week ago',
    category: 'QUALITY_SAFETY',
    objective: 'The Quality Improvement Officer develops and implements quality assurance programs, monitors compliance with standards, and leads continuous improvement initiatives to enhance organizational excellence and patient safety.',
    dutiesAndResponsibilities: [
      'Develop quality assurance and improvement programs.',
      'Monitor compliance with healthcare standards.',
      'Conduct audits and inspections.',
      'Analyze quality metrics and data.',
      'Identify areas for improvement.',
      'Implement corrective action plans.',
      'Train staff on quality procedures.',
      'Document findings and recommendations.',
      'Ensure adherence to protocols.',
      'Report to management on quality status.',
      'Lead quality improvement initiatives.',
      'Maintain compliance records.',
    ],
    qualificationsAndRequirements: {
      required: [
        'Bachelor\'s degree in Healthcare Management or related field.',
        'Knowledge of quality management systems.',
        'Understanding of healthcare standards and regulations.',
        'Data analysis and reporting skills.',
        'Project management experience.',
        'Strong communication skills.',
        'Problem-solving and analytical abilities.',
      ],
    },
  },
  {
    id: 'pharmacist-1',
    title: 'PHARMACIST',
    department: 'Pharmacy',
    type: 'Full Time',
    location: 'Lagos, Nigeria',
    postedDate: 'Posted 1 week ago',
    category: 'PHARMACY',
    objective: 'Pharmacists manage medication inventory, dispense prescriptions, and provide pharmaceutical counseling. They ensure medication safety, optimize therapy, and support clinical decision-making through pharmaceutical expertise.',
    dutiesAndResponsibilities: [
      'Dispense medications accurately and safely.',
      'Manage pharmaceutical inventory.',
      'Counsel patients on medication use.',
      'Verify medication prescriptions.',
      'Monitor for drug interactions.',
      'Maintain controlled substance records.',
      'Ensure proper medication storage.',
      'Collaborate with healthcare providers.',
      'Update medication records.',
      'Provide medication education.',
      'Maintain pharmacy cleanliness and organization.',
      'Manage pharmacy operations and safety.',
    ],
    qualificationsAndRequirements: {
      required: [
        'Doctor of Pharmacy (PharmD) degree.',
        'Valid pharmacy license and registration.',
        'Knowledge of medications and interactions.',
        'Patient communication skills.',
        'Attention to detail.',
        'Organizational and management abilities.',
        'Understanding of healthcare systems.',
      ],
    },
  },
];

export const categoryLabels: Record<JobPosition['category'], string> = {
  'CLINICAL_SERVICES': 'CLINICAL SERVICES',
  'DIAGNOSTICS_IMAGING': 'DIAGNOSTICS & IMAGING',
  'PHARMACY': 'PHARMACY',
  'QUALITY_SAFETY': 'QUALITY & SAFETY',
};
