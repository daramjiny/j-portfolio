import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import screen1 from "@/assets/ad_real_screen_1.jpg";
import screen2 from "@/assets/ad_real_screen_2.jpg";
import screen3 from "@/assets/ad_real_screen_3.jpg";

const slides = [
    {
        id: 1,
        image: screen1,
        thumb: screen1,
        color: "#26A69A" // Teal/Green from image
    },
    {
        id: 2,
        image: screen2,
        thumb: screen2,
        color: "#F06292" // Pink from image
    },
    {
        id: 3,
        image: screen3,
        thumb: screen3,
        color: "#AED581" // Light Green from image
    }
];

export function LockScreenSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const isAnimating = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const paginate = (newDirection: number) => {
        if (isAnimating.current) return;

        const nextIndex = currentIndex + newDirection;
        if (nextIndex >= 0 && nextIndex < slides.length) {
            setDirection(newDirection);
            setCurrentIndex(nextIndex);
            isAnimating.current = true;
            setTimeout(() => isAnimating.current = false, 500); // Cooldown
        }
    };

    const handleThumbnailClick = (index: number) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault(); // Stop page scroll
        if (Math.abs(e.deltaY) > 20) {
            if (e.deltaY > 0) {
                paginate(1);
            } else {
                paginate(-1);
            }
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault(); // Stop page scroll on touch drag
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Add non-passive listeners to block scroll
            container.addEventListener('wheel', handleWheel, { passive: false });
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
        }
        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
                container.removeEventListener('touchmove', handleTouchMove);
            }
        };
    }, [currentIndex]); // Re-bind if needed, but mainly focused on mounting

    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipe = offset.y;
        const swipeConfidenceThreshold = 100;

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1); // Swipe Up -> Next
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1); // Swipe Down -> Prev
        }
    };

    const variants = {
        enter: (direction: number) => ({
            y: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            y: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div
            className="w-full h-full min-h-[600px] flex flex-row md:flex-col items-center justify-center p-6 relative overflow-hidden touch-none"
        >
            {/* Phone/Image Frame */}
            <div
                ref={containerRef}
                className="relative w-[260px] h-[520px] md:w-[320px] md:h-[640px] rounded-2xl md:bg-black md:rounded-[50px] md:border-[8px] md:border-black shadow-2xl overflow-hidden z-20 transition-all duration-300"
            >
                {/* Dynamic Island / Notch - Desktop Only */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-transparent">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            transition={{
                                y: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={slides[currentIndex].image}
                                alt="App Screen"
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Navigation - Side Dots */}
            <div className="flex flex-col gap-3 ml-6 md:hidden z-20">
                {slides.map((slide, index) => (
                    <button
                        key={`dot-${slide.id}`}
                        onClick={() => handleThumbnailClick(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "w-8 bg-black"
                                : "w-3 bg-black/20 hover:bg-black/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Desktop Navigation - Bottom Thumbnails */}
            <div className="hidden md:flex mt-8 z-20 gap-4 p-4 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg">
                {slides.map((slide, index) => (
                    <button
                        key={`thumb-${slide.id}`}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 ${currentIndex === index
                            ? "ring-2 ring-black/20 scale-110 shadow-lg"
                            : "opacity-70 hover:opacity-100 hover:scale-105"
                            }`}
                    >
                        <img
                            src={slide.thumb}
                            alt={`Thumbnail ${slide.id}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${slides[currentIndex].color}, transparent 70%)`,
                    transition: 'background 0.5s ease'
                }}
            />
        </div>
    );
}
