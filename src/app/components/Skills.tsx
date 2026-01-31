import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, FileText, Video } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: Palette,
      title: "WEB DESIGN",
      description: "포토샵/일러스트 등 Adobe프로그램을 이용해서 웹페이지/상세페이지/배너를 제작합니다.",
      items: ["Photoshop", "Illustrator", "Web Design", "Banner"],
    },
    {
      icon: FileText,
      title: "PLANNING",
      description: "웹디자인에 필요한 간단한 기획안과 카피를 작성할 수 있습니다.",
      items: ["Planning", "Copywriting", "Storyboarding"],
    },
    {
      icon: Video,
      title: "VIDEO EDITING",
      description: "Davinci Resolve, After Effects를 활용하여 간단한 영상편집을 할 수 있습니다.",
      items: ["DaVinci Resolve", "After Effects", "Video Editing"],
    },
    {
      icon: Code2,
      title: "WEB PUBLISHING",
      description: "HTML/CSS/JAVASCRIPT를 활용하여 웹페이지를 제작, 유지보수할 수 있습니다.",
      items: ["HTML", "CSS", "JavaScript", "Publishing"],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center px-6 lg:px-12 py-24 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-black/50 mb-4">My Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-2xl border border-black/5 hover:border-black/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
                    <p className="text-black/60 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs tracking-wide bg-black/5 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}