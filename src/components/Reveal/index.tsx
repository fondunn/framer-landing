"use client";
import { FC, memo, ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
interface RevealProps {
  children: ReactNode;
  bg?: string;
}

const Reveal: FC<RevealProps> = ({ children, bg }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={twMerge(
          "absolute bottom-[4px] left-0 right-0 top-[4px] z-20 bg-amber-300",
          bg,
        )}
      />
    </div>
  );
};
export default memo(Reveal);
