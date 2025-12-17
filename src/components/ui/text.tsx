import * as React from "react";
import { cn } from "@/lib/utils";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "h6"
  | "h7"
  | "h8";

type TextProps = {
  variant?: TextVariant;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const variantStyles: Record<TextVariant, string> = {
  h1: "text-[32px] font-extrabold leading-[1.1] tracking-[-0.01em]", // W800, LH 110%
  h2: "text-[24px] font-semibold leading-[1.2]", // W600, LH 120%
  h3: "text-[20px] font-semibold leading-[1.2]", // W600, LH 120%
  h4: "text-[18px] font-semibold leading-[1.2]", // W600, LH 120%
  h5: "text-[16px] font-normal leading-[28px]", // W400, LH 28px
  body: "text-[16px] font-normal leading-[28px]", // W400, LH 28px
  h6: "text-[14px] font-normal leading-[1.4]", // W400, LH 140%
  h7: "text-[12px] font-normal leading-[1.4]", // W400, LH 140%
  h8: "text-[10px] font-normal leading-[1.4]", // W400, LH 140%
};

const defaultTags: Record<TextVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  h6: "h6",
  h7: "p", // No h7 tag
  h8: "p", // No h8 tag
};

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const Component = as || defaultTags[variant];

    return (
      <Component
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = "Text";

export { Text };
