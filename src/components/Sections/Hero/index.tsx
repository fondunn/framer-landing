"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { heroSubtitle, heroTitle } from "@/mock/hero";
import { useHero } from "@/components/Sections/Hero/hooks/useHero";
const SectionHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { y, opacity, scale, backgroundImage } = useHero({ ref });
  return (
    <Section
      ref={ref}
      className="flex h-[calc(100svh-2.5rem)] overflow-hidden md:h-[calc(100svh-3.5rem)]"
    >
      <motion.div
        className="flex w-full flex-col items-center justify-center space-y-2 lg:space-y-4"
        style={{ backgroundImage }}
      >
        <motion.div
          style={{
            y,
            opacity,
            scale,
          }}
        >
          <Reveal>
            <h1 className="text-4xl font-black uppercase text-amber-700 md:text-6xl lg:text-8xl xl:text-9xl">
              {heroTitle}
            </h1>
          </Reveal>
        </motion.div>
        <motion.div
          style={{
            y,
            opacity,
            scale,
          }}
        >
          <Reveal>
            <p className="text-xl font-medium md:text-2xl lg:text-4xl xl:text-5xl">
              {heroSubtitle}
            </p>
          </Reveal>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default SectionHero;
