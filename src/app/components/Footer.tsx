import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-black/60"
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
