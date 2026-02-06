import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect } from "react";
import { Footer } from "@/app/components/Footer";
import { LockScreenSlider } from "@/app/components/LockScreenSlider";

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white"
        >
            {/* Navigation - Fixed */}
            <nav className="fixed top-6 left-6 z-50">
                <Link
                    to="/#projects"
                    className="inline-flex p-3 bg-white/80 backdrop-blur-md rounded-full border border-black/5 hover:bg-white hover:scale-105 transition-all shadow-sm text-black"
                >
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </nav>

            <div className="lg:grid lg:grid-cols-2 min-h-screen">
                {/* Visual Column (Left) - Scrolls naturally with full height */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`relative h-auto min-h-[40vh] lg:min-h-screen order-1 lg:order-1 ${project.id === "himart-mobile" ? "bg-white" : "bg-black/5"
                        }`}
                >
                    {project.id === "himart-mobile" ? (
                        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                            <LockScreenSlider />
                        </div>
                    ) : (
                        <img
                            src={project.detailImage || project.image}
                            alt={project.title}
                            className="w-full h-auto block"
                        />
                    )}
                </motion.div>

                {/* Content Column (Right) - Sticky Sidebar */}
                <div className="order-2 lg:order-2 flex flex-col lg:sticky lg:top-0 lg:self-start h-full">
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
                                className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-black/5"
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <User className="w-3 h-3 text-black/40" />
                                        <span>Client</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base">{project.client || "Personal Project"}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <Briefcase className="w-3 h-3 text-black/40" />
                                        <span>Role</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base">{project.role || "Designer"}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-black/50 text-xs uppercase tracking-wider">
                                        <Calendar className="w-3 h-3 text-black/40" />
                                        <span>Year</span>
                                    </div>
                                    <p className="font-medium text-sm lg:text-base">{project.year}</p>
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
                                <p className="text-base lg:text-lg text-black/70 leading-relaxed text-balance">
                                    {project.fullDescription || project.description}
                                </p>
                                <p className="text-base lg:text-lg text-black/70 leading-relaxed text-balance">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-medium">Technologies</h3>
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
            </div>

            <Footer />
        </motion.div>
    );
}
