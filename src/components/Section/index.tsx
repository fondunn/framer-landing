import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface SectionProps {
  children: ReactNode;
  className?: string;
}
const Section: FC<SectionProps> = ({ children, className }) => {
  return <section className={twMerge(className)}>{children}</section>;
};

export default Section;
