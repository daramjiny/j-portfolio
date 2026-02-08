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
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <iframe
            src="https://my.spline.design/windherocopycopy-We1TDC33TeyyCCQacppt5kgO-JL9/"
            style={{ border: "none", background: "transparent" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[170vh] h-full md:w-full md:h-full md:static md:translate-x-0 pointer-events-auto"
            title="Spline 3D Design"
            allow="transparency"
          />
        </div>
      </motion.div>
    </section>
  );
}