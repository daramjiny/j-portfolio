import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect } from "react";
import { Footer } from "@/app/components/Footer";

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
            className="min-h-screen bg-white"
        >
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-6">
                <Link
                    to="/#projects"
                    className="inline-flex p-3 bg-white/80 backdrop-blur-md rounded-full border border-black/5 hover:bg-white hover:scale-105 transition-all shadow-sm text-black"
                >
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </nav>

            <main className="pt-24 pb-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Header */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-4 text-sm text-black/60">
                                <span className="px-3 py-1 bg-black/5 rounded-full tracking-wide">
                                    {project.category}
                                </span>
                                <span className="tracking-widest uppercase">{project.year}</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight">
                                {project.title}
                            </h1>
                        </motion.div>

                        {/* Project Info Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-black/5"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-black/50 text-sm">
                                    <User className="w-4 h-4" />
                                    <span className="uppercase tracking-wider">Client</span>
                                </div>
                                <p className="font-medium">{project.client || "Personal Project"}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-black/50 text-sm">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="uppercase tracking-wider">Role</span>
                                </div>
                                <p className="font-medium">{project.role || "Designer"}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-black/50 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span className="uppercase tracking-wider">Year</span>
                                </div>
                                <p className="font-medium">{project.year}</p>
                            </div>
                            <div className="space-y-2">
                                <span className="uppercase tracking-wider text-black/50 text-sm block mb-2">
                                    Links
                                </span>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 border border-black/10 rounded-full hover:bg-black/5 transition-colors">
                                        <Github className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="aspect-video w-full rounded-3xl overflow-hidden bg-black/5"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <h2 className="text-2xl font-medium">Overview</h2>
                            <p className="text-lg text-black/70 leading-relaxed text-balance">
                                {project.fullDescription || project.description}
                            </p>
                            <p className="text-lg text-black/70 leading-relaxed text-balance">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-black/5 text-black/70 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
