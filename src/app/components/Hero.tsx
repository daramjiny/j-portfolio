import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full relative"
      >
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Spline 3D Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-screen h-screen origin-center scale-[0.85] sm:scale-100">
            <iframe
              src="https://my.spline.design/windherocopycopy-We1TDC33TeyyCCQacppt5kgO-JL9/"
              className="w-full h-full border-0 bg-transparent"
              title="Spline 3D Design"
              allow="transparency"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
