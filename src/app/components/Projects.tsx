import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { projects, Category } from "@/data/projects";
import { Link } from "react-router-dom";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");

  const categories: Category[] = ["ALL", "PAGE", "BANNER", "SNS", "VIDEO"];

  // Shuffle projects on mount
  const shuffledProjects = useMemo(() => {
    const shuffled = [...projects];
    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const filteredProjects = selectedCategory === "ALL"
    ? shuffledProjects
    : shuffledProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest uppercase text-black/50 mb-4">My Work</p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-12">Featured Projects</h2>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              >
                <motion.button
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`px-6 py-2.5 text-sm tracking-wide rounded-full transition-all duration-300 ${selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-black/60 hover:bg-black/10'
                    }`}
                >
                  {category}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative aspect-[4/3] bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-black/20 transition-colors duration-200"
              >
                <Link to={`/project/${project.id}`} className="block w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hover Overlay with Project Info */}
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs tracking-widest uppercase text-white/60">
                          {project.year}
                        </span>
                        <div className="flex gap-2">
                          <div
                            className="p-2 bg-white/10 checked:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-150 group-hover:scale-110"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl lg:text-3xl font-medium text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs tracking-wide bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-white group/link">
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}