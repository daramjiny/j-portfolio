import { useState, useEffect, useCallback } from 'react';
import { motion, PanInfo } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, MessageCircle, MoreHorizontal, ThumbsUp, Share2 } from 'lucide-react';
import imgRectangle3468500 from "../../assets/3a7e4d3060d765b4d6115890a3fa00acd4e2cf95.png";
import imgRectangle3468501 from "../../assets/8953c2c9ff93dc5485e6993b523a75140d675363.png";
import imgRectangle3468502 from "../../assets/7049b54f07cc197be3cfb3ddbdbe6fc284d1a03a.png";
import imgImage10888 from "../../assets/a830774136230f0c52046916f89ad5f5a3c2a3bb.png";

const slides = [
    {
        id: 1,
        image: imgRectangle3468500,
        bgColor: 'from-orange-100 to-orange-50',
        color: '#ffac37ff', // Soft Orange
    },
    {
        id: 2,
        image: imgRectangle3468501,
        bgColor: 'from-blue-100 to-pink-50',
        color: '#FFA5AC', // Soft pink
    },
    {
        id: 3,
        image: imgRectangle3468502,
        bgColor: 'from-pink-100 to-blue-50',
        color: '#4E98FF', // Soft Pink
    },
];

export function InstagramFeedSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: true });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

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
        <div className="w-full min-h-[400px] flex flex-col items-center justify-start pt-6 pb-6 lg:pt-75 lg:pb-60 px-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                      radial-gradient(circle at 50% 50%, ${slides[currentIndex].color} 0%, rgba(255,255,255,0) 50%),
                      radial-gradient(circle at 50% 50%, ${slides[currentIndex].color} 0%, rgba(255,255,255,0) 35%)
                    `,
                    transition: "background 0.5s ease",
                    opacity: 0.7,
                    filter: "saturate(1.2)",
                }}
            />

            {/* Instagram Post Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-20 w-full max-w-[480px] bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] md:shadow-[0_0_20px_rgba(0,0,0,0.05)] overflow-hidden"
            >
                {/* Post Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-white p-[2px]">
                                    <img
                                        src={imgImage10888}
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <p className="font-semibold text-sm text-gray-900">이마트</p>
                            <p className="text-xs text-gray-500">Sponsored</p>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2"
                    >
                        <MoreHorizontal className="w-5 h-5 text-gray-900" />
                    </motion.button>
                </div>

                {/* Caption (Facebook Style: Top) */}
                <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 leading-relaxed">
                        <span className="font-semibold">이마트 </span>
                        <span className="text-gray-900">
                            달콤한 빵으로 행복한 하루 시작하세요! 🥐✨
                        </span>
                    </p>
                </div>

                {/* Image Slider using Embla */}
                <div
                    className="relative aspect-square bg-transparent overflow-hidden group select-none"
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                    onWheel={handleWheel}
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
                                        className="w-full h-full object-contain pointer-events-none select-none"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            scrollPrev();
                            handleInteraction();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 hover:bg-black/40"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            scrollNext();
                            handleInteraction();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 hover:bg-black/40"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </motion.button>
                </div>

                {/* Likes Count & Info */}
                <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 mx-4">
                    <div className="flex items-center gap-1">
                        <div className="bg-[#1877F2] rounded-full p-1">
                            <ThumbsUp className="w-2 h-2 text-white fill-white" />
                        </div>
                        <span>{isLiked ? '651' : '650'}</span>
                    </div>
                    <div className="flex gap-3">
                        <span>48 comments</span>
                        <span>5 shares</span>
                    </div>
                </div>

                {/* Action Buttons (Facebook Style) */}
                <div className="px-2 py-1">
                    <div className="flex items-center justify-between">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsLiked(!isLiked)}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors ${isLiked ? 'text-[#1877F2]' : 'text-gray-600'}`}
                        >
                            <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-[#1877F2]' : ''}`} />
                            <span className="font-medium text-sm">Like</span>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-600"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-medium text-sm">Comment</span>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-600"
                        >
                            <Share2 className="w-5 h-5" />
                            <span className="font-medium text-sm">Share</span>
                        </motion.button>
                    </div>
                </div>

            </motion.div>

            {/* Slide Counter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-20 text-center mt-6 text-gray-600"
            >
                <p className="text-sm font-medium">
                    {currentIndex + 1} / {slides.length}
                </p>
            </motion.div>
        </div>
    );
}
