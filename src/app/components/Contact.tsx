import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 lg:px-12 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-black/50 mb-8 font-medium">Get In Touch</p>

            <motion.a
              href="mailto:jjinyee01@gmail.com"
              className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter hover:text-black/70 transition-colors break-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              jjinyee01@gmail.com
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="mailto:jjinyee01@gmail.com"
              className="inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-all text-sm tracking-wide uppercase"
            >
              Send Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}