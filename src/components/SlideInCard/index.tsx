"use client";
import { FC, memo, ReactNode, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SlideInCardProps {
  children: ReactNode;
  index: number;
}

const SlideInCard: FC<SlideInCardProps> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const initialX = useMemo(() => (index % 2 === 0 ? "-100px" : "100px"), []);
  const x = useTransform(scrollYProgress, [0.3, 1], [initialX, "0px"]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  return (
    <motion.div
      ref={ref}
      className="w-full rounded-sm border-2 border-black p-4 shadow-[4px_4px_0px_black] md:w-4/5 lg:w-1/2"
      style={{
        x,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};
export default memo(SlideInCard);
