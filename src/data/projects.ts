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
    maxWidth?: number;
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
import projectSiwonPakDetail from '../assets/project-siwonpak-detail.jpg';
import projectNtsDetail from '../assets/project-nts-detail.jpg';
import projectOliveDetail from '../assets/project-olive-detail.jpg';
import projectClearDetail from '../assets/project-clear-detail.jpg';
import projectModetourDetail from '../assets/project-modetour-detail.jpg';
import projectEucerinDetail from '../assets/project-eucerin-detail.jpg';
import projectSiwonProDetail from '../assets/project-siwonpro-detail.jpg';
import projectSiwonProThumb from '../assets/project-siwonpro-thumb.jpg';

export const projects: Project[] = [
    {
        id: "government-promo",
        title: "국세청 Promotion Page",
        description: "국세청 전자(세금)계산서 프로모션 랜딩페이지",
        fullDescription: "표와 순서도 및 탭메뉴를 이용해서 사용자들이 전자세금서의 발급 과정 및 의미를 쉽고 간편하게 확인할 수 있도록하고 신뢰성을 주면서 눈에 띄는 색상을 주로 사용하여 디자인했습니다.",
        tags: ["Public Sector", "Landing Page", "Responsive", "Accessibility"],
        year: "2017",
        category: "PAGE",
        image: projectNtsThumb,
        client: "국세청",
        role: "Web Designer",
        detailImage: projectNtsDetail,
    },
    {
        id: "hansot-bidding",
        title: "한솥도시락 bidding page",
        description: "한솥도시락의 요일별 메뉴를 한솥 브랜드 색상을 이용해 친근하게 웹툰 스타일로 디자인했습니다.",
        fullDescription: "한솥도시락의 요일별 메뉴를 한솥 브랜드 색상을 이용해 친근하게 웹툰 스타일로 디자인했습니다. 폰트의 종류나 색상은 제한적으로 사용하여 자칫 지저분해보일 수 있는 부분들을 최소화하도록 노력했습니다.",
        tags: ["Landing Page", "Web Design", "Promotion"],
        year: "2016",
        category: "PAGE",
        image: projectHsdThumb,
        detailImage: projectHsdDetail,
        client: "한솥도시락",
        role: "Web Designer",
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
        detailImage: projectEucerinDetail,
    },
    {
        id: "clear-project",
        title: "클리어치과 Promotion Page",
        description: "클리어치과의 포인트 색상을 활용하여 깨끗하고 맑은 느낌의 랜딩페이지를 제작했습니다. 이벤트 내용이 많은만큼 텍스트 부분은 최대한 단정한 느낌이 들도록 디자인했습니다.",
        fullDescription: "클리어치과의 포인트 색상을 활용하여 깨끗하고 맑은 느낌의 랜딩페이지를 제작했습니다. 이벤트 내용이 많은만큼 텍스트 부분은 최대한 단정한 느낌이 들도록 디자인했습니다.",
        tags: ["Landing Page", "Web Design", "Promotion"],
        year: "2017",
        category: "PAGE",
        image: projectClearThumb,
        client: "클리어치과",
        role: "Web Designer",
        detailImage: projectClearDetail,
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
        detailImage: projectOliveDetail,
    },
    // New Projects Added
    {
        id: "himart-mobile",
        title: "Himart Mobile Fullscreen AD",
        description: "하이마트 내 프로모션 상품을 캐시슬라이드, 쿠차슬라이드, 허니스크린 등 풀스크린 모바일 광고로 진행하여 일정 기간동안 라이브시킬 탬플릿을 주기적으로 디자인했습니다. 제한적인 가이드와 공간안에서 최대한 이벤트 내용을 한눈에 들어오도록하여 높은 클릭율을 목표로 작업했습니다.",
        tags: ["MO/PC Banner", "Fullscreen AD", "Mobile"],
        year: "2018",
        category: "BANNER",
        image: projectHimartMoThumb,
        client: "Himart",
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
        title: "modetour bidding page",
        description: "모두투어의 혼밥, 혼여등 젊은 세대를 타겟팅으로 프로모션을 진행한 랜딩페이지로 2,30대에게 친근한 일러스트를 활용하여 유머러스하면서도 모두투어의 이미지를 느낄 수 있도록 디자인하려고 노력했습니다.",
        fullDescription: "모두투어의 혼밥, 혼여등 젊은 세대를 타겟팅으로 프로모션을 진행한 랜딩페이지로 2,30대에게 친근한 일러스트를 활용하여 유머러스하면서도 모두투어의 이미지를 느낄 수 있도록 디자인하려고 노력했습니다.",
        tags: ["Event", "Travel", "Web"],
        year: "2017",
        category: "PAGE",
        image: projectModetourThumb,
        client: "modetour",
        detailImage: projectModetourDetail,
    },
    {
        id: "siwon-landing",
        title: "siwonschool landing page",
        description: "시원스쿨 퍼펙트 패키지 랜딩페이지로 혜택과 리뷰를 강조하면서도 시원스쿨 브랜드 분위기와 이질적인 느낌이 들지않도록 브랜드색상 및 모델을 중간중간 배치해서 디자인했습니다.",
        fullDescription: "시원스쿨 퍼펙트 패키지 랜딩페이지로 혜택과 리뷰를 강조하면서도 시원스쿨 브랜드 분위기와 이질적인 느낌이 들지않도록 브랜드색상 및 모델을 중간중간 배치해서 디자인했습니다.",
        tags: ["Landing Page", "Education", "Marketing"],
        year: "2016",
        category: "PAGE",
        image: projectSiwonPakThumb,
        detailImage: projectSiwonPakDetail,
        client: "siwonschool",
        role: "Web Designer",
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
        detailImage: projectSiwonProDetail,
    },
];
