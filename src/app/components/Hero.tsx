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
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <iframe
            src="https://my.spline.design/windherocopycopy-We1TDC33TeyyCCQacppt5kgO-JL9/"
            style={{ border: "none", background: "transparent" }}
            className="w-full h-full scale-75 md:scale-100 pointer-events-auto"
            title="Spline 3D Design"
            allow="transparency"
          />
        </div>
      </motion.div>
    </section>
  );
}