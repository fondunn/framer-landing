import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "mt-8 rounded-sm border-2 border-stone-900 bg-stone-900 px-6 py-3 font-semibold uppercase text-stone-100 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:bg-slate-200 hover:text-stone-900 hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none",
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
