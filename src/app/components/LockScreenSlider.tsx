import { useState } from "react";
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

    const handleThumbnailClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
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
        <div className="w-full h-full min-h-[600px] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[640px] bg-black rounded-[50px] border-[8px] border-black shadow-2xl overflow-hidden z-20">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-black">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                y: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={slides[currentIndex].image}
                                alt="App Screen"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Thumbnails */}
            <div className="mt-8 z-20 flex gap-4 p-4 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
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
