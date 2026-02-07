import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Video, Code2, ShoppingBag, Megaphone } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: "",
      position: "영상편집 실무 과정",
      period: "2024. 09 ~ 2024. 11",
      description:
        "After Efect 및 Premiere Pro 활용한 2D 모션그래픽 영상제작 실습",
      icon: Video,
    },
    {
      company: "광고대행사",
      position: "하이애드원",
      period: "2015. 06 ~ 2018. 12",
      description:
        "이마트몰 / 신세계몰 / SSG닷컴 / GS Fresh등 종합몰 SNS 피드 및 PC, mobile DA 디자인을 주 업무로 진행. 학원 / 뷰티 / 관공서 랜딩페이지 디자인 및 퍼블리싱 및 신규 사업 제안서 관련 DA 소재 작업",
      icon: Megaphone,
    },
    {
      company: "",
      position: "웹퍼블리셔 전문가과정",
      period: "2013. 10 ~ 2014. 02",
      description:
        "웹디자인에 필요한 디자인툴과 웹표준의 전반적인 내용학습을 위한 html5, css3, javascript, jquery 코딩 실습",
      icon: Code2,
    },
    {
      company: "여성쇼핑몰",
      position: "쇼룸에이치컴퍼니",
      period: "2013. 02 - 2013. 08",
      description:
        "자사 홈페이지 리뉴얼 메인 시안작업과 오픈마켓(G마켓, 옥션, 11번가의 미니샵) , 타오바오(중국의 대표적인 오픈마켓)운영",
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center px-6 lg:px-12 py-24 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-black/50 mb-4">My Journey</p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Education & Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.position}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group bg-white p-8 rounded-2xl border border-black/5 hover:border-black/20 transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black rounded-xl group-hover:scale-110 transition-transform">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-medium">{exp.position}</h3>
                      <span className="text-sm text-black/40 tracking-wide">{exp.period}</span>
                    </div>
                    {exp.company && <p className="text-black/60 font-medium mb-3">{exp.company}</p>}
                    <p className="text-black/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}