"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { twMerge } from "tailwind-merge";

interface RevealCardContainerProps {
  children: ReactNode;
  className?: string;
}
const RevealCardContainer: FC<RevealCardContainerProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const moveY = useTransform(scrollYProgress, [0, 1], ["200px", "0px"]);
  return (
    <motion.div
      ref={ref}
      className={twMerge(className)}
      style={{
        y: moveY,
      }}
    >
      {children}
    </motion.div>
  );
};
export default RevealCardContainer;
