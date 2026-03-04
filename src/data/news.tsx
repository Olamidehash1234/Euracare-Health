// / <reference types="react" />
import type { ReactNode } from 'react';
import { NewsArticleContent } from './newsContent';

export type NewsArticle = {
    id: string;
    title: string;
    heroImage: string;
    content: () => ReactNode;
    date: string;
    category: string;
};

export type NewsCard = {
    id: string;
    date: string;
    title: string;
    category: string;
};

export type NewsItem = {
    date: string;
    title: string;
    category: string;
    anchor: string;
};

export const newsArticles: NewsArticle[] = [
    {
        id: "world-heart-day",
        title: "World Heart Day – Protecting What Matters Most",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675984/heart_bd0gyv_pq2ci0.jpg",
        content: NewsArticleContent.worldHeartDay,
        date: "Sep 29, 2025",
        category: "Cardiology / Medical Technology",
    },
    {
        id: "interventional-cardiology",
        title: "Interventional Cardiology – Saving Lives Without Open Surgery",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/cardiology_example.jpg",
        content: NewsArticleContent.interventionalCardiology,
        date: "Apr 8, 2025",
        category: "Interventional Cardiology",
    },
    {
        id: "interventional-radiology",
        title: "Interventional Radiology – Surgery Without the Scalpel",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/radiology_example.jpg",
        content: NewsArticleContent.interventionalRadiology,
        date: "Apr 8, 2025",
        category: "Interventional Radiology",
    },
    {
        id: "bariatric-surgery",
        title: "Bariatric Surgery – More Than Weight Loss",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/bariatric_example.jpg",
        content: NewsArticleContent.bariatricSurgery,
        date: "Feb 6, 2025",
        category: "Bariatric Surgery",
    },
    {
        id: "breast-surgery",
        title: "Breast Surgery – Expertise with Compassion",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/breast_example.jpg",
        content: NewsArticleContent.breastSurgery,
        date: "Mar 13, 2025",
        category: "Breast Surgery",
    },
    {
        id: "orthopedic-surgery",
        title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/orthopedic_example.jpg",
        content: NewsArticleContent.orthopedicSurgery,
        date: "Feb 19, 2025",
        category: "Orthopedic Surgery",
    },
    {
        id: "visiting-consultants",
        title: "Visiting Consultants – Global Expertise in Lagos",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/consultants_example.jpg",
        content: NewsArticleContent.visitingConsultants,
        date: "Feb 17, 2025",
        category: "International Patients",
    },
    {
        id: "Urology",
        title: "UROLOGY AWARENESS: WHY MEN AND WOMEN SHOULD BE PAYING ATTENTION TO THEIR URINARY HEALTH",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1766011755/uro_vhn9ew.png",
        content: NewsArticleContent.urology,
        date: "Dec 17, 2025",
        category: "Urology",
    },
    {
        id: "cervical-health-101",
        title: "Cervical Health 101: What Every Woman Should Know to Stay Protected",
        heroImage: "https://res.cloudinary.com/dnycq9llb/image/upload/v1768997063/cervical-blog_taanty.png",
        content: NewsArticleContent.cervicalHealth,
        date: "Jan 21, 2026",
        category: "Women Health",
    }
];

export const newsCards: NewsCard[] = [
    {
        id: "world-heart-day",
        date: "Sep 29, 2025",
        title: "World Heart Day – Protecting What Matters Most",
        category: "Cardiology / Medical Technology",
    },
    {
        id: "interventional-cardiology",
        date: "Apr 8, 2025",
        title: "Interventional Cardiology – Saving Lives Without Open Surgery",
        category: "Interventional Cardiology",
    },
    {
        id: "interventional-radiology",
        date: "Apr 8, 2025",
        title: "Interventional Radiology – Surgery Without the Scalpel",
        category: "Interventional Radiology",
    },
    {
        id: "bariatric-surgery",
        date: "Feb 6, 2025",
        title: "Bariatric Surgery – More Than Weight Loss",
        category: "Bariatric Surgery",
    },
    {
        id: "breast-surgery",
        date: "Mar 13, 2025",
        title: "Breast Surgery – Expertise with Compassion",
        category: "Breast Surgery",
    },
    {
        id: "orthopedic-surgery",
        date: "Feb 19, 2025",
        title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
        category: "Orthopedic Surgery",
    },
    {
        id: "visiting-consultants",
        date: "Feb 17, 2025",
        title: "Visiting Consultants – Global Expertise in Lagos",
        category: "International Patients",
    },
    {
        id: "Urology",
        date: "Dec 17, 2025",
        title: "UROLOGY AWARENESS: WHY MEN AND WOMEN SHOULD BE PAYING ATTENTION TO THEIR URINARY HEALTH",
        category: "Urology"
    },
    {
        id: "cervical-health-101",
        date: "Jan 21, 2026",
        title: "Cervical Health 101: What Every Woman Should Know to Stay Protected",
        category: "Women Health",
    }
];

export const newsItems: NewsItem[] = [
    {
        date: "Apr 8, 2025",
        title: "Interventional Radiology – Surgery Without the Scalpel",
        category: "Interventional Radiology",
        anchor: "interventional-radiology"
    },
    {
        date: "Feb 19, 2025",
        title: "Orthopedic Surgery – Restoring Mobility, Relieving Pain",
        category: "Orthopedic Surgery",
        anchor: "orthopedic-surgery"
    },
    {
        date: "Feb 17, 2025",
        title: "Visiting Consultants – Global Expertise in Lagos",
        category: "International Patients",
        anchor: "visiting-consultants"
    },
    {
        date: "Apr 8, 2025",
        title: "Interventional Cardiology – Saving Lives Without Open Surgery",
        category: "Interventional Cardiology",
        anchor: "interventional-cardiology"
    },
];

export const additionalNews: NewsItem[] = [
    {
        date: "Feb 6, 2025",
        title: "Bariatric Surgery – More Than Weight Loss",
        category: "Mental Health / Psychiatry",
        anchor: "bariatric-surgery"
    },
    {
        date: "Mar 13, 2025",
        title: "Breast Surgery – Expertise with Compassion",
        category: "Gynaecology",
        anchor: "breast-surgery"
    },
    {
        date: "Dec 17, 2025",
        title: "UROLOGY AWARENESS: WHY MEN AND WOMEN SHOULD BE PAYING ATTENTION TO THEIR URINARY HEALTH",
        category: "Urology",
        anchor: "Urology"
    },
    {
        date: "Jan 21, 2026",
        title: "Cervical Health 101: What Every Woman Should Know to Stay Protected",
        category: "Women Health",
        anchor: "cervical-health-101"
    }
];
