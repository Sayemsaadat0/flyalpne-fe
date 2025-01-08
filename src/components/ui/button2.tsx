

import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils'; // Utility for combining class names
import { IconType } from '../core/icons/icons';

// Button variants using class-variance-authority
export const buttonVariants = cva(
  'leading-none  transition-all disabled:bg-slate-300 text-w-button-1-20 ',
  {
    variants: {
      variant: {
        primarybtn:
          'rounded-[10px] bg-f-primary-1 transition-all border border-f-primary-1 hover:bg-f-primary-2-300 hover:border-transparent !text-f-white-300',
        outlineBtn:
          'rounded-[10px]  border border-f-primary-1 !text-f-primary-1-700 hover:bg-f-primary-1-50  transition-all ',
        textBtn:
          'rounded-[10px] text-oc-primary-1-900 ',
        paginationBtn:
          'rounded-[10px] border rounded-full',
        ghostBtn: 'rounded-full border',
      },
      size: {
        default: "py-2.5 px-3 md:px-[32px] md:py-[18px] text-w-paragraph-regular-20",
        sm: "py-1.5 px-2 md:px-[24px] md:py-[12px] text-w-small-regular-16",
        xs: "py-1.5 px-2 md:px-[18px] md:py-1 text-[14px] ",
        icon: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: 'primarybtn',
      size: 'default'
    },
  }
);

// Define the Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label: string;
  icon?: IconType;
  reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  label,
  size,
  icon,
  reverse = false,
  ...props
}: ButtonProps) => {
  return (
    <button className={`whitespace-nowrap   ${cn(buttonVariants({ variant, className, size }))}`} {...props}>
      <div
        className={
          icon &&
          `text-w-button-1-20 flex justify-center items-center gap-2  ${reverse ? "flex-row-reverse gap-2" : "flex-row"
          }`
        }
      >
        <span>{label}</span>
        {/* {icon && <span><>{icon}</></span>} */}
      </div>
    </button>
  );
};

export default Button;
