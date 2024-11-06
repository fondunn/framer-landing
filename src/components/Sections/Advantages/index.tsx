"use client";
import Section from "@/components/Section";
import { FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  advantageDescription,
  advantages,
  advantageTitle,
} from "@/mock/advantages";
import RevealCardContainer from "@/components/RevealCardContainer";

const SectionAdvantages: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);
  return (
    <Section
      className="container mx-auto max-w-screen-2xl overflow-hidden px-2 py-2 md:py-4 lg:py-8"
      ref={ref}
    >
      <div className="bg-gradient-to-tr from-yellow-200 to-emerald-300 px-4 py-8 lg:py-16">
        <div className="relative overflow-hidden">
          <motion.div
            variants={{
              hidden: { y: 75, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-center text-5xl font-bold">{advantageTitle}</h3>
            <p className="mt-4 text-center text-xl font-medium">
              {advantageDescription}
            </p>
          </motion.div>
        </div>
        <div className="mt-16 flex flex-col justify-center gap-4 lg:flex-row">
          {advantages.map(({ title, description }, idx: number) => (
            <RevealCardContainer
              key={idx}
              className="rounded-md bg-white p-4 shadow-[4px_4px_0px_black]"
            >
              <p className="text-2xl font-semibold">{title}</p>
              <p className="mt-4">{description}</p>
            </RevealCardContainer>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default SectionAdvantages;
