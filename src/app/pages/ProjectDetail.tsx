import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUp, ExternalLink, Github, Calendar, User, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import { Footer } from "@/app/components/Footer";
import { LockScreenSlider } from "@/app/components/LockScreenSlider";
import { InstagramFeedSlider } from "@/app/components/InstagramFeedSlider";
import { InstagramPost } from "@/app/components/InstagramPost";

export function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-medium mb-4">Project not found</h2>
                    <Link
                        to="/"
                        className="px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const [imageMaxWidth, setImageMaxWidth] = useState<string | number>('100%');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white"
        >

            <div className="lg:flex lg:items-start">
                {/* Visual Column (Left) - Scrolls naturally with full height */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`relative w-full lg:w-[55%] min-h-[40vh] order-1 lg:order-1 bg-white ${project.category === "PAGE" ? "p-8 lg:p-20 block" : ""}`}
                >
                    {project.id === "himart-mobile" ? (
                        <div className="relative w-full py-12 flex items-center justify-center overflow-hidden h-auto lg:h-screen lg:sticky lg:top-0">
                            <LockScreenSlider />
                        </div>
                    ) : project.id === "emart-mall-face" ? (
                        <div className="relative w-full py-16 lg:py-28 min-h-[720px] flex items-center justify-center overflow-hidden h-auto lg:h-screen lg:sticky lg:top-0">
                            <InstagramFeedSlider />
                        </div>
                    ) : project.id === "emart-mall-insta" ? (
                        <div className="relative w-full py-12 lg:py-20 min-h-[720px] flex items-center justify-center h-auto lg:h-screen lg:sticky lg:top-0">
                            <InstagramPost />
                        </div>
                    ) : (
                        <div className="w-full">
                            <img
                                src={project.detailImage || project.image}
                                alt={project.title}
                                onLoad={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    if (project.category === "PAGE") {
                                        // If maxWidth is manually set, use it. Otherwise, use naturalWidth / 2 for Retina scaling.
                                        if (project.maxWidth) {
                                            setImageMaxWidth(`${project.maxWidth}px`);
                                        } else {
                                            setImageMaxWidth(`${img.naturalWidth / 2}px`);
                                        }
                                    }
                                }}
                                style={{ maxWidth: project.category === "PAGE" ? imageMaxWidth : '100%' }}
                                className={`h-auto block mx-auto ${project.category === "PAGE" ? "w-full shadow-[0_4px_30px_rgba(0,0,0,0.08)]" : "w-full"}`}
                            />
                        </div>
                    )}
                </motion.div>

                {/* Content Column (Right) - Sticky Sidebar */}
                <div className="order-2 lg:order-2 w-full lg:w-[45%] flex flex-col relative">
                    {/* Navigation - Hidden on Mobile, Absolute Bottom Right in Sticky Column */}
                    <nav className="hidden lg:flex absolute bottom-6 right-6 lg:right-16 z-50 gap-3">
                        <Link
                            to="/#projects"
                            className="inline-flex p-2 bg-white/80 backdrop-blur-md rounded-full border border-black/5 hover:bg-white hover:scale-105 transition-all shadow-sm text-black/40 hover:text-black"
                            aria-label="Back to projects"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex p-2 bg-white/80 backdrop-blur-md rounded-full border border-black/5 hover:bg-white hover:scale-105 transition-all shadow-sm text-black/40 hover:text-black group"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </nav>
                    <main className="flex-1 px-6 py-12 lg:px-16 lg:py-24 max-w-2xl mx-auto w-full">
                        <div className="space-y-16">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4 text-sm text-black/60">
                                    <span className="px-3 py-1 bg-black/5 rounded-full tracking-wide">
                                        {project.category}
                                    </span>
                                    <span className="tracking-widest uppercase">{project.year}</span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-balance">
                                    {project.title}
                                </h1>
                            </motion.div>

                            {/* Info Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="grid grid-cols-3 gap-3 sm:gap-8 py-5 sm:py-8 border-y border-black/5"
                            >
                                <div className="space-y-1 text-center sm:text-left pr-2 sm:pr-0 border-r border-black/10 sm:border-r-0">
                                    <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <User className="w-3 h-3 text-black/40 shrink-0" />
                                        <span>Client</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base leading-tight break-keep">{project.client || "Personal Project"}</p>
                                </div>
                                <div className="space-y-1 text-center sm:text-left px-2 sm:px-0 border-r border-black/10 sm:border-r-0">
                                    <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <Briefcase className="w-3 h-3 text-black/40 shrink-0" />
                                        <span>Category</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base leading-tight">{project.category}</p>
                                </div>
                                <div className="space-y-1 text-center sm:text-left pl-2 sm:pl-0">
                                    <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <Calendar className="w-3 h-3 text-black/40 shrink-0" />
                                        <span>Year</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base leading-tight">{project.year}</p>
                                </div>
                            </motion.div>

                            {/* Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <h3 className="text-lg font-medium">Overview</h3>
                                <p className="text-base lg:text-lg text-black/70 leading-relaxed text-justify">
                                    {project.fullDescription || project.description}
                                </p>
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-medium">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-black/5 text-black/70 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </main>

                </div>
            </div >

            <Footer />
        </motion.div >
    );
}
