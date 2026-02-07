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
          src="https://my.spline.design/windherocopycopy-gXkfIjcVT3ZrJVd7S0rgzisU-dQs/"
          style={{ width: "100vw", height: "100vh", border: "none" }}
          className="absolute top-0 left-0"
          title="Spline 3D Design"
        />
      </motion.div>
    </section>
  );
}