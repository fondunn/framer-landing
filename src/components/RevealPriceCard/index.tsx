import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
interface RevealPriceCardProps {
  title: string;
  price: number;
  description: string;
  popular: boolean;
}
const RevealPriceCard: FC<RevealPriceCardProps> = ({
  title,
  price,
  description,
  popular,
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
      className={clsx(
        "flex max-w-xs flex-1 basis-1/3 flex-col rounded-lg bg-zinc-100 p-6 shadow-sm",
        popular && "border-2 border-pink-500",
      )}
      style={{
        y: moveY,
      }}
    >
      <p className="text-2xl font-semibold leading-6">{title}</p>
      <p className="mt-4 text-zinc-800">{description}</p>
      <p className="mt-8">
        <span className="text-5xl font-extrabold">{price}$</span>
        <span className="text-base font-medium text-zinc-800">/month</span>
      </p>
      {/*<button*/}
      {/*  className="hover:-border-b-1 mt-8 rounded-sm bg-stone-900 py-2 text-center text-sm font-semibold text-stone-100 hover:-translate-x-1 hover:-translate-y-1">*/}
      {/*  Subscribe*/}
      {/*</button>*/}
      <button className="mt-8 rounded-sm border-2 border-stone-900 bg-stone-900 px-6 py-3 font-semibold uppercase text-stone-100 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:bg-slate-200 hover:text-stone-900 hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Subscribe
      </button>
    </motion.div>
  );
};

export default RevealPriceCard;
