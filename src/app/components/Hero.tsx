import { useEffect } from "react";
import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  useEffect(() => {
    const scriptId = "hana-viewer-script";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "https://cdn.spline.design/@splinetool/hana-viewer@1.2.44/hana-viewer.js";
    document.body.appendChild(script);
  }, []);

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
          <div className="w-full h-full origin-center scale-130 sm:scale-100">
            <hana-viewer
              url="https://prod.spline.design/2MIRstLBWZ2On3gz-CmQ/scene.hanacode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Soft vignette to draw attention to center (no hard masking) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 60%, rgba(0,0,0,0.32) 100%)",
          }}
        />

        {/* Subtle top/bottom gradients to anchor the frame */}
        <div className="absolute inset-x-0 top-0 z-20 h-32 pointer-events-none bg-gradient-to-b from-black/40 via-black/18 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-40 pointer-events-none bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
