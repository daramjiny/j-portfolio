import { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import imgRectangle3468500 from "../../assets/3a7e4d3060d765b4d6115890a3fa00acd4e2cf95.png";
import imgRectangle3468501 from "../../assets/8953c2c9ff93dc5485e6993b523a75140d675363.png";
import imgRectangle3468502 from "../../assets/7049b54f07cc197be3cfb3ddbdbe6fc284d1a03a.png";
import imgImage10888 from "../../assets/a830774136230f0c52046916f89ad5f5a3c2a3bb.png";

const slides = [
    {
        id: 1,
        image: imgRectangle3468500,
        bgColor: 'from-orange-100 to-orange-50',
        color: '#FF8737', // Soft Orange
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
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);


    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            zIndex: 1,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            zIndex: 2,
        },
        exit: {
            x: 0,
            opacity: 0,
            scale: 1.05,
            zIndex: 0,
        },
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        const newIndex = (currentIndex + newDirection + slides.length) % slides.length;
        setCurrentIndex([newIndex, newDirection]);
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            paginate(1);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleInteraction = () => {
        setIsAutoPlaying(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            paginate(1);
        } else {
            paginate(-1);
        }
    };

    return (
        <div className="w-full min-h-[600px] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                      radial-gradient(circle at 50% 50%, ${slides[currentIndex].color} 0%, rgba(255,255,255,0) 62%),
                      radial-gradient(circle at 50% 50%, ${slides[currentIndex].color} 0%, rgba(255,255,255,0) 45%)
                    `,
                    transition: "background 0.5s ease",
                    opacity: 0.75,
                    filter: "saturate(1.2)",
                }}
            />

            {/* Instagram Post Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-20 w-full max-w-[480px] bg-white rounded-2xl overflow-hidden"
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

                {/* Image Slider */}
                <div
                    className="relative aspect-square bg-gradient-to-br overflow-hidden group select-none"
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                    onWheel={handleWheel}
                >
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.5 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={handleDragEnd}
                            className={`absolute inset-0 bg-gradient-to-br ${slides[currentIndex].bgColor} cursor-grab active:cursor-grabbing select-none`}
                        >
                            <motion.img
                                src={slides[currentIndex].image}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-contain pointer-events-none select-none"
                                draggable={false}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            paginate(-1);
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
                            paginate(1);
                            handleInteraction();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 hover:bg-black/40"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </motion.button>
                </div>

                {/* Action Buttons */}
                <div className="px-4 pt-3 pb-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsLiked(!isLiked)}
                                className="group relative"
                            >
                                <motion.div
                                    animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Heart
                                        className={`w-7 h-7 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-900'
                                            }`}
                                    />
                                </motion.div>
                                {isLiked && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 1 }}
                                        animate={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Heart className="w-7 h-7 fill-red-500 text-red-500" />
                                    </motion.div>
                                )}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: -15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <MessageCircle className="w-7 h-7 text-gray-900" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Send className="w-7 h-7 text-gray-900" />
                            </motion.button>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSaved(!isSaved)}
                        >
                            <Bookmark
                                className={`w-7 h-7 transition-colors ${isSaved ? 'fill-gray-900 text-gray-900' : 'text-gray-900'
                                    }`}
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Likes Count */}
                <div className="px-4 pb-2">
                    <motion.p
                        key={isLiked ? 'liked' : 'not-liked'}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        className="font-semibold text-sm text-gray-900"
                    >
                        {isLiked ? '651' : '650'} likes
                    </motion.p>
                </div>

                {/* Caption */}
                <div className="px-4 pb-3">
                    <p className="text-sm text-gray-900">
                        <span className="font-semibold">이마트 </span>
                        <span className="text-gray-700">
                            달콤한 빵으로 행복한 하루 시작하세요! 🥐✨
                        </span>
                    </p>
                    <button className="text-gray-500 text-sm mt-1">
                        View all 48 comments
                    </button>
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
                <p className="text-xs text-gray-400 mt-1">
                    {isAutoPlaying ? 'Auto-playing' : 'Manual mode'} • Swipe or click arrows
                </p>
            </motion.div>
        </div>
    );
}
