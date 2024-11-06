"use client";
import Section from "@/components/Section";
import { FC, useMemo, useRef } from "react";
import {
  startingContent,
  startingDescription,
  startingTitle,
} from "@/mock/starting";
import SlideInCard from "@/components/SlideInCard";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionStarting: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  return (
    <Section
      className="container mx-auto max-w-screen-2xl overflow-hidden px-2 py-4 md:px-4 md:py-8 lg:py-16"
      ref={ref}
    >
      <motion.h3
        style={{
          scale,
          opacity,
        }}
        className="text-center text-4xl font-bold lg:tracking-tight"
      >
        {startingTitle}
      </motion.h3>
      <motion.p
        style={{
          scale,
          opacity,
        }}
        className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
      >
        {startingDescription}
      </motion.p>
      <div className="mx-auto mt-4 flex flex-col items-center justify-center space-y-4 md:mt-8 lg:mt-12">
        {startingContent.map(({ title, description }, idx: number) => (
          <SlideInCard index={idx}>
            <p className="text-2xl font-bold">{title}</p>
            <p className="mt-2">{description}</p>
          </SlideInCard>
        ))}
      </div>
    </Section>
  );
};
export default SectionStarting;
