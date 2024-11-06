import { FC, memo } from "react";

import clsx from "clsx";
import RevealCardContainer from "@/components/RevealCardContainer";
import Button from "@/components/Button";
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
  return (
    <RevealCardContainer
      className={clsx(
        "flex max-w-xs flex-1 basis-1/3 flex-col rounded-lg bg-zinc-100 p-6 shadow-sm",
        popular && "border-2 border-pink-500",
      )}
    >
      <p className="text-2xl font-semibold leading-6">{title}</p>
      <p className="mt-4 text-zinc-800">{description}</p>
      <p className="mt-8">
        <span className="text-5xl font-extrabold">{price}$</span>
        <span className="text-base font-medium text-zinc-800">/month</span>
      </p>
      <Button>Subscribe</Button>
    </RevealCardContainer>
  );
};

export default memo(RevealPriceCard);
