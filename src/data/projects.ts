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
    gallery?: string[];
    client?: string;
    role?: string;
    link?: string;
}

import projectGov from '../assets/project-gov.png';

export const projects: Project[] = [
    {
        id: "government-promo",
        title: "Government Promotion Page",
        description: "Responsive landing page for public sector promotion with accessible design and clear information hierarchy.",
        fullDescription: "Designed and developed a comprehensive promotion page for a government agency. The project focused on accessibility, clarity, and trust. Key features include a responsive layout optimized for all devices, clear call-to-action sections, and strictly adhering to web accessibility standards (WCAG) to ensure information is available to all citizens.",
        tags: ["Public Sector", "Landing Page", "Responsive", "Accessibility"],
        year: "2024",
        category: "PAGE",
        image: projectGov,
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
        image: "https://images.unsplash.com/photo-1687825512118-5ee2ddded118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzY4MzgxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        image: "https://images.unsplash.com/photo-1751831798147-a8c0b2bd9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBwcm9kdWN0fGVufDF8fHx8MTc2ODM4MTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        client: "Lumière Beauty",
        role: "UI/UX Designer",
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
