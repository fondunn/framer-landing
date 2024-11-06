import { RefObject, useEffect, useMemo } from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

interface UseHeroProps {
  ref: RefObject<HTMLElement>;
}

export const useHero = ({ ref }: UseHeroProps) => {
  const COLORS_TOP = useMemo(
    () => ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"],
    [],
  );
  const color = useMotionValue(COLORS_TOP[0]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end center"],
  });

  const y = useTransform(scrollYProgress, [0.5, 1], ["0px", "-20px"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #fff 70%, ${color})`;

  return {
    backgroundImage,
    y,
    opacity,
    scale,
  };
};
