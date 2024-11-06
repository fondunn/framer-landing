import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={twMerge(className)}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
