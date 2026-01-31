import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <iframe
          src="https://my.spline.design/shapethevibe-ZUWHZpVhbgTFFmIHutCpRF8k-Alw/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline 3D Design"
        />
      </motion.div>
    </section>
  );
}