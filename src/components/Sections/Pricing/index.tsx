"use client";
import Section from "@/components/Section";
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealPriceCard from "@/components/RevealPriceCard";
import { pricing, pricingDescription, pricingTitle } from "@/mock/pricing";

const SectionPricing: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleContainer = useTransform(scrollYProgress, [0, 0.6], [0.96, 1]);
  return (
    <Section ref={ref} className="">
      <motion.div
        className="h-full w-full bg-stone-900 px-2 py-16"
        style={{
          scale: scaleContainer,
        }}
      >
        <div className="container mx-auto flex max-w-screen-2xl flex-col items-center">
          <h3 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            {pricingTitle}
          </h3>
          <p className="m-auto mt-5 max-w-2xl text-xl text-zinc-200 sm:text-center sm:text-2xl">
            {pricingDescription}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6 space-y-0 sm:mt-16 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
            {pricing.map((item, idx: number) => (
              <RevealPriceCard
                key={idx}
                title={item.title}
                price={item.price}
                description={item.description}
                popular={item.popular}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SectionPricing;
