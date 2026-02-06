import { Palette, Smartphone, Code2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Category = "ALL" | "PAGE" | "BANNER" | "SNS" | "VIDEO";

export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    year: string;
    category: Category;
    image: string;
    detailImage?: string;
    gallery?: string[];
    client?: string;
    role?: string;
    link?: string;
}

import projectNtsThumb from '../assets/project-nts-thumb.jpg';
import projectHsdThumb from '../assets/project-hsd-thumb.jpg';
import projectHsdDetail from '../assets/project-hsd-detail.jpg';
import projectEucerinThumb from '../assets/project-eucerin-thumb.jpg';
import projectClearThumb from '../assets/project-clear-thumb.jpg';
import projectOliveThumb from '../assets/project-olive-thumb.jpg';
import projectEmartFaceThumb from '../assets/project-emartmallface-thumb.jpg';
import projectEmartInsThumb from '../assets/project-emartmallins-thumb.jpg';
import projectGsInsThumb from '../assets/project-gsfreshins-thumb.jpg';
import projectSsgBandThumb from '../assets/project-ssgband-thumb.jpg';
import projectHimartMoThumb from '../assets/project-himartmo-thumb.jpg';
import projectSsgMallMoThumb from '../assets/project-ssgmallmo-thumb.jpg';
import projectGsFreshMoThumb from '../assets/project-gsfreshmo-thumb.jpg';
import projectGsFreshEventThumb from '../assets/project-gsfreshmo2-thumb.jpg';
import projectGsFreshPetThumb from '../assets/project-gsfreshpetins-thumb.jpg';
import projectBbKakaoThumb from '../assets/project-bbkakao-thumb.jpg';
import projectCjDaumThumb from '../assets/project-cjdaum-thumb.jpg';
import projectSsgNaverPcThumb from '../assets/project-ssgnaverpc-thumb.jpg';
import projectTgBannerThumb from '../assets/project-tgbanner-thumb.jpg';
import projectDmBandThumb from '../assets/project-dmband-thumb.jpg';
import projectMtBandThumb from '../assets/project-mtband-thumb.jpg';
import projectFashionAppThumb from '../assets/project-fashionapp-thumb.jpg';
import projectOttAppThumb from '../assets/project-ottapp-thumb.jpg';
import projectJjangyouThumb from '../assets/project-jjangyou-thumb.jpg';
import projectModetourThumb from '../assets/project-modetour-thumb.jpg';
import projectSiwonPakThumb from '../assets/project-siwonpak-thumb.jpg';
import projectSiwonProThumb from '../assets/project-siwonpro-thumb.jpg';

export const projects: Project[] = [
    {
        id: "government-promo",
        title: "Government Promotion Page",
        description: "Responsive landing page for public sector promotion with accessible design and clear information hierarchy.",
        fullDescription: "Designed and developed a comprehensive promotion page for a government agency. The project focused on accessibility, clarity, and trust. Key features include a responsive layout optimized for all devices, clear call-to-action sections, and strictly adhering to web accessibility standards (WCAG) to ensure information is available to all citizens.",
        tags: ["Public Sector", "Landing Page", "Responsive", "Accessibility"],
        year: "2024",
        category: "PAGE",
        image: projectNtsThumb,
        client: "National Tax Service",
        role: "UI/UX Designer",
    },
    {
        id: "brand-identity-website",
        title: "Brand Identity & Website",
        description: "Complete brand redesign and responsive website for a sustainable fashion startup, focusing on minimalist aesthetics.",
        fullDescription: "This project involved a complete overhaul of the brand identity for a sustainable fashion startup. The goal was to communicate transparency, eco-friendliness, and modern minimalism. The deliverables included a new logo system, color palette, typography guidelines, and a fully responsive e-commerce website designed in Figma and developed with React.",
        tags: ["Branding", "UI/UX", "Figma", "Web Design"],
        year: "2024",
        category: "PAGE",
        image: projectHsdThumb,
        detailImage: projectHsdDetail,
        client: "EcoStyle Inc.",
        role: "Lead Designer & Developer",
    },
    {
        id: "ecommerce-landing",
        title: "E-Commerce Landing",
        description: "Modern landing page design with product showcase and seamless checkout flow for luxury cosmetics brand.",
        fullDescription: "Designed a high-converting landing page for a luxury cosmetics line. The focus was on high-quality visual storytelling, smooth scroll animations, and an intuitive checkout process. The design significantly improved the conversion rate by simplifying the user journey.",
        tags: ["Landing Page", "Responsive", "Figma", "Animation"],
        year: "2024",
        category: "PAGE",
        image: projectEucerinThumb,
        client: "Lumière Beauty",
        role: "UI/UX Designer",
    },
    {
        id: "clear-project",
        title: "Clear Service Platform",
        description: "User-friendly service platform design focusing on clarity and ease of use.",
        fullDescription: "A comprehensive design project for a service platform, emphasizing a clean and intuitive user interface to maximize user engagement and satisfaction.",
        tags: ["Service Design", "UI/UX", "Web Platform"],
        year: "2024",
        category: "PAGE",
        image: projectClearThumb,
        client: "Clear Corp",
        role: "UI Designer",
    },
    {
        id: "olive-young-campaign",
        title: "Olive Young Campaign",
        description: "Promotional campaign page for a leading health & beauty retailer.",
        fullDescription: "Designed a vibrant event page for Olive Young, featuring interactive elements and promotional banners to drive customer engagement and sales.",
        tags: ["Event Page", "Promotion", "Retail"],
        year: "2024",
        category: "PAGE",
        image: projectOliveThumb,
        client: "Olive Young",
        role: "Web Designer",
    },
    // New Projects Added
    {
        id: "himart-mobile",
        title: "Hi-Mart Mobile App",
        description: "Mobile application interface design for electronics retailer.",
        tags: ["Mobile", "Commerce", "App Design"],
        year: "2024",
        category: "BANNER",
        image: projectHimartMoThumb,
        client: "Lotte Hi-Mart",
    },
    {
        id: "ssg-mall-renewal",
        title: "SSG Mall Renewal",
        description: "Mobile renewal project for SSG.com shopping platform.",
        tags: ["Mobile", "Commerce", "UI/UX"],
        year: "2024",
        category: "BANNER",
        image: projectSsgMallMoThumb,
        client: "SSG.COM",
    },
    {
        id: "gs-fresh-event",
        title: "GS Fresh Event Page",
        description: "Promotional event page design for GS Fresh.",
        tags: ["Event", "Mobile", "Promotion"],
        year: "2024",
        category: "BANNER",
        image: projectGsFreshEventThumb,
        client: "GS Fresh",
    },
    {
        id: "gs-fresh-mobile",
        title: "GS Fresh Mobile App",
        description: "Fresh food delivery mobile application design.",
        tags: ["Mobile", "Fresh Food", "App Design"],
        year: "2024",
        category: "BANNER",
        image: projectGsFreshMoThumb,
        client: "GS Fresh",
    },
    {
        id: "gs-fresh-pet",
        title: "GS Fresh Pet",
        description: "Social media content for pet category promotion.",
        tags: ["Instagram", "Pet", "Social Media"],
        year: "2024",
        category: "SNS",
        image: projectGsFreshPetThumb,
        client: "GS Fresh",
    },
    {
        id: "emart-mall-face",
        title: "Emart Mall Facebook Content",
        description: "Engaging Facebook content series for Emart Mall.",
        tags: ["SNS", "Facebook", "Marketing"],
        year: "2024",
        category: "SNS",
        image: projectEmartFaceThumb,
        client: "Emart Mall",
    },
    {
        id: "emart-mall-insta",
        title: "Emart Mall Instagram",
        description: "Visual Instagram feed curation and post design.",
        tags: ["SNS", "Instagram", "Visual Design"],
        year: "2024",
        category: "SNS",
        image: projectEmartInsThumb,
        client: "Emart Mall",
    },
    {
        id: "gs-fresh-insta",
        title: "GS Fresh Instagram",
        description: "Fresh and vibrant Instagram content for GS Fresh.",
        tags: ["SNS", "Instagram", "Branding"],
        year: "2024",
        category: "SNS",
        image: projectGsInsThumb,
        client: "GS Fresh",
    },
    {
        id: "ssg-band",
        title: "SSG Band Content",
        description: "Community engagement content for SSG Band.",
        tags: ["SNS", "Community", "Design"],
        year: "2024",
        category: "SNS",
        image: projectSsgBandThumb,
        client: "SSG",
    },
    {
        id: "dm-band-content",
        title: "DM Band Content",
        description: "Community-focused SNS content design for DM Band.",
        tags: ["SNS", "Community", "Design"],
        year: "2024",
        category: "SNS",
        image: projectDmBandThumb,
        client: "DM Band",
    },
    {
        id: "mt-band-content",
        title: "MT Band Content",
        description: "Engaging SNS content series for MT Band community.",
        tags: ["SNS", "Community", "Design"],
        year: "2024",
        category: "SNS",
        image: projectMtBandThumb,
        client: "MT Band",
    },
    {
        id: "bbq-kakao-promotion",
        title: "BBQ Kakao Promotion",
        description: "Promotional banner campaign for BBQ on KakaoTalk.",
        tags: ["Banner", "Promotion", "Mobile"],
        year: "2024",
        category: "BANNER",
        image: projectBbKakaoThumb,
        client: "BBQ",
    },
    {
        id: "cj-daum-banner",
        title: "CJ Daum Banner",
        description: "CJ Group promotional banner displayed on Daum portal.",
        tags: ["Banner", "Web", "Promotion"],
        year: "2024",
        category: "BANNER",
        image: projectCjDaumThumb,
        client: "CJ CheilJedang",
    },
    {
        id: "ssg-naver-pc-banner",
        title: "SSG Naver PC Banner",
        description: "Large scale PC banner for SSG.com on Naver main page.",
        tags: ["Banner", "PC", "Naver"],
        year: "2024",
        category: "BANNER",
        image: projectSsgNaverPcThumb,
        client: "SSG.COM",
    },
    {
        id: "tg-banner-campaign",
        title: "TG Banner Campaign",
        description: "Digital banner campaign for TG brand awareness.",
        tags: ["Banner", "Campaign", "Digital"],
        year: "2024",
        category: "BANNER",
        image: projectTgBannerThumb,
        client: "TG",
    },

    {
        id: "fashion-app-video",
        title: "Fashion App Video",
        description: "Short-form promo video for a fashion app launch.",
        tags: ["Video", "Motion", "Promo"],
        year: "2024",
        category: "VIDEO",
        image: projectFashionAppThumb,
        client: "Fashion App",
    },
    {
        id: "ott-app-video",
        title: "OTT App Video",
        description: "Explainer motion video highlighting key OTT app features.",
        tags: ["Video", "Motion", "Explainer"],
        year: "2024",
        category: "VIDEO",
        image: projectOttAppThumb,
        client: "OTT App",
    },
    {
        id: "jjangyou-promotion",
        title: "Jjangyou Noodle Promotion",
        description: "Promotional page design for Jjangyou Noodle brand.",
        tags: ["Web", "F&B", "Promotion"],
        year: "2023",
        category: "SNS",
        image: projectJjangyouThumb,
        client: "Jjangyou",
    },
    {
        id: "modetour-event",
        title: "Modetour Travel Event",
        description: "Seasonal travel event page for Modetour.",
        tags: ["Event", "Travel", "Web"],
        year: "2023",
        category: "PAGE",
        image: projectModetourThumb,
        client: "Modetour",
    },
    {
        id: "siwon-school-campaign",
        title: "Siwon School Campaign",
        description: "Marketing campaign banners for Siwon School.",
        tags: ["Banner", "Education", "Marketing"],
        year: "2023",
        category: "PAGE",
        image: projectSiwonPakThumb,
        client: "Siwon School",
    },
    {
        id: "siwon-school-pro",
        title: "Siwon School Pro",
        description: "B2B professional education service promotion.",
        tags: ["Banner", "B2B", "Education"],
        year: "2023",
        category: "PAGE",
        image: projectSiwonProThumb,
        client: "Siwon School",
    },
];
