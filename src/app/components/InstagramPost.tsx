import { useState, useEffect, useCallback } from 'react';
import { motion, PanInfo } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

import slide1 from "../../assets/emart-insta-slide-1.jpg";
import slide2 from "../../assets/emart-insta-slide-2.jpg";
import slide3 from "../../assets/emart-insta-slide-3.jpg";

import profilePic from "../../assets/emart-insta-profile.png";

const slides = [
    {
        id: 1,
        image: slide1,
        bgColor: 'from-green-100 to-green-50',
        color: '#4ADE80',
    },
    {
        id: 2,
        image: slide2,
        bgColor: 'from-red-100 to-red-50',
        color: '#de4a4aff',
    },
    {
        id: 3,
        image: slide3,
        bgColor: 'from-stone-900 to-stone-800',
        color: '#eab308', // Soft Gold
    }
];

export function InstagramPost() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: true });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(true);
    const [isSaved, setIsSaved] = useState(false);

    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setCurrentIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, emblaApi]);

    const handleInteraction = () => {
        setIsAutoPlaying(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        // Stop autoplay on manual scroll
        handleInteraction();
    };

    return (
        <div className="w-full min-h-[400px] flex flex-col items-center justify-start pt-6 pb-6 lg:pt-0 lg:pb-0 px-6 relative h-full xl:justify-center">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ease-in-out"
                style={{
                    background: `
                      radial-gradient(circle at 50% 50%, ${slides[currentIndex].color} 0%, transparent 45%)
                    `,
                    opacity: 1,
                    filter: "blur(70px) saturate(4)",
                }}
            />

            {/* Instagram Post Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-20 w-full max-w-[480px] bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >
                {/* Header (Instagram Style) */}
                <div className="flex items-center justify-between p-3 px-4">
                    <div className="flex items-center gap-3">
                        {/* Profile Story Ring */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative cursor-pointer"
                        >
                            <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] p-[2px]">
                                <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden flex items-center justify-center">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex flex-col -gap-1">
                            <p className="font-semibold text-[13px] text-gray-900 leading-tight">emartstore</p>
                            <p className="text-[11px] text-gray-500 leading-tight">이마트 공식 인스타그램 🛒❤️</p>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 -mr-2"
                    >
                        <MoreHorizontal className="w-5 h-5 text-gray-900" />
                    </motion.button>
                </div>

                {/* Image Slider using Embla */}
                <div
                    className="relative aspect-square bg-transparent overflow-hidden group select-none"
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                    onWheel={handleWheel}
                    onDoubleClick={() => {
                        setIsLiked(true);
                    }}
                >
                    <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                        <div className="flex h-full touch-pan-y">
                            {slides.map((slide, idx) => (
                                <div
                                    key={slide.id}
                                    className={`flex-[0_0_100%] min-w-0 relative bg-gradient-to-br ${slide.bgColor} flex items-center justify-center`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full h-full object-contain drop-shadow-sm pointer-events-none select-none"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots (Instagram Style: inside image if multiple) */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 transition-opacity duration-300">
                        {slides.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-1.5 bg-white' : 'w-1.5 bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            scrollPrev();
                            handleInteraction();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 hover:bg-black/60 shadow-md"
                    >
                        <ChevronLeft className="w-5 h-5 text-white pr-0.5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            scrollNext();
                            handleInteraction();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 hover:bg-black/60 shadow-md"
                    >
                        <ChevronRight className="w-5 h-5 text-white pl-0.5" />
                    </motion.button>
                </div>

                {/* Action Buttons (Instagram Style) */}
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsLiked(!isLiked)}
                                className={`transition-colors`}
                            >
                                <Heart className={`w-6 h-6 stroke-[1.8px] ${isLiked ? 'fill-[#FF3040] text-[#FF3040] stroke-none' : 'text-gray-900'}`} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <MessageCircle className="w-6 h-6 text-gray-900 stroke-[1.8px] -scale-x-100" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center justify-center transform translate-y-[2px]"
                            >
                                <Send className="w-[22px] h-[22px] text-gray-900 stroke-[1.8px] -rotate-12 ml-1" />
                            </motion.button>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSaved(!isSaved)}
                        >
                            <Bookmark className={`w-6 h-6 stroke-[1.8px] transition-colors ${isSaved ? 'fill-gray-900 text-gray-900' : 'text-gray-900'}`} />
                        </motion.button>
                    </div>

                    {/* Likes Count */}
                    <div className="mt-2.5 mb-1.5">
                        <p className="font-semibold text-[13px] text-gray-900">
                            {isLiked ? '좋아요 1,235개' : '좋아요 1,234개'}
                        </p>
                    </div>

                    {/* Caption Preview */}
                    <div className="mb-2">
                        <p className="text-[13px] text-gray-900 leading-tight">
                            <span className="font-semibold mr-1.5">emartstore</span>
                            라인프렌즈랑 같이 저녁 먹어요! 🍽️ 저녁 메뉴 인증샷 이벤트 참여하고 귀여운 라인프렌즈 식탁매트 받아가세요! ... <span className="text-gray-500 text-[13px] leading-tight">더 보기</span>
                        </p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
