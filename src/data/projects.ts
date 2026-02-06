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
        id: "product-launch-banner",
        title: "Product Launch Banner",
        description: "Dynamic promotional banner series for new product launch across multiple platforms and screen sizes.",
        tags: ["Banner Design", "Marketing", "Photoshop", "Motion"],
        year: "2024",
        category: "BANNER",
        image: "https://images.unsplash.com/photo-1762325393954-5300a6e35f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tb3Rpb25hbCUyMGJhbm5lciUyMGRlc2lnbnxlbnwxfHx8fDE3NjgzODEwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "seasonal-campaign-banner",
        title: "Seasonal Campaign Banner",
        description: "Eye-catching seasonal campaign banners with interactive elements and strong call-to-action design.",
        tags: ["Campaign", "Banner", "Adobe XD", "Visual Design"],
        year: "2023",
        category: "BANNER",
        image: "https://images.unsplash.com/photo-1766233419934-27e9a04da5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc2ODM4MTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "instagram-content-series",
        title: "Instagram Content Series",
        description: "Cohesive social media content design including posts, stories, and reels for brand consistency.",
        tags: ["Instagram", "Social Media", "Illustrator", "Branding"],
        year: "2024",
        category: "SNS",
        image: "https://images.unsplash.com/photo-1621184078903-6bfe9482d935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjgzMjk4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "social-media-templates",
        title: "Social Media Templates",
        description: "Versatile template system for daily social media posts with customizable layouts and color schemes.",
        tags: ["Templates", "SNS", "Figma", "Design System"],
        year: "2023",
        category: "SNS",
        image: "https://images.unsplash.com/photo-1521572089244-e5aaacacca6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHRlbXBsYXRlfGVufDF8fHx8MTc2ODM4MTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "brand-motion-graphics",
        title: "Brand Motion Graphics",
        description: "Animated brand story video with smooth transitions and engaging visual storytelling for company introduction.",
        tags: ["Motion Design", "After Effects", "Video", "Animation"],
        year: "2024",
        category: "VIDEO",
        image: "https://images.unsplash.com/photo-1501780392773-287d506245a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMHZpZGVvfGVufDF8fHx8MTc2ODM4MTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "product-demo-video",
        title: "Product Demo Video",
        description: "Interactive product demonstration video with clean animations and user-friendly visual explanations.",
        tags: ["Video Editing", "Motion", "Tutorial", "UI Animation"],
        year: "2023",
        category: "VIDEO",
        image: "https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVtbyUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzODEwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
];
