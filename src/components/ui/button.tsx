import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[6px] border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A1A1AA] focus-visible:ring-offset-white disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[#18181B] text-white border-transparent hover:bg-[#27272A] active:bg-[#3F3E46] disabled:bg-[#F4F4F5] disabled:text-[#A1A1AA]",
        secondary:
          "bg-white text-[#18181B] border-[#E2E2E2] hover:bg-[#F4F4F5] active:bg-[#E5E5E5]",
        destructive:
          "bg-[#EF4444] text-white border-transparent hover:bg-[#DC2626] active:bg-[#B91C1C] disabled:opacity-60",
        ghost:
          "border-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-4 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
