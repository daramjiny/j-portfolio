import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import aboutProfile from "@/assets/about-profile.jpg";
import aboutShape from "@/assets/about-shape.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm tracking-widest uppercase text-black/50 mb-4">About Me</p>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
                WEB DESIGNER
                <br />
                GYEONGJIN
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-black/60 leading-relaxed"
            >
              <p>
                흰색은 동화의 힘을 가지고 있습니다. 노란색과 파란색을 섞으면 초록색이 되고, 검은색은 모든 색을 탁하게 만들지만, 흰색은 다릅니다.
                흰색은 어떤 색을 섞어도 본연의 색이 변하거나 없어지지 않고 자연스럽게 연해질 뿐입니다.
              </p>
              <p>
                저는 이렇게 클라이언트와 팀원들과 함께 발맞춰 서로 공감하고 융화될 수 있는 흰색같은 웹디자이너가 되고싶습니다.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10">
              <ImageWithFallback
                src={aboutProfile}
                alt="Web Designer Gyeongjin"
                className="w-full h-full object-cover scale-150"
              />
            </div>
            <motion.img
              src={aboutShape}
              alt="Decorative glass shape"
              className="absolute -bottom-28 -right-28 w-64 h-64 z-20 mix-blend-multiply opacity-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}