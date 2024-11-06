"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { config } from "@/components/Sections/Hero/config";
const SectionHero = () => {
  return (
    <Section className="flex min-h-[90svh] flex-col items-center justify-center space-y-2 overflow-hidden bg-gradient-to-tr from-sky-300 to-rose-300 lg:space-y-4">
      <motion.h1
        initial={config.h1.initial}
        animate={config.h1.animate}
        className="text-4xl font-black uppercase text-amber-700 md:text-6xl lg:text-8xl xl:text-9xl"
      >
        Framer Landing
      </motion.h1>
      <motion.p
        initial={config.p.initial}
        animate={config.p.animate}
        className="text-xl font-medium md:text-2xl lg:text-4xl xl:text-5xl"
      >
        Slide-in and reveal animations
      </motion.p>
    </Section>
  );
};

export default SectionHero;
