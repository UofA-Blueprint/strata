import * as React from "react";

import { cn } from "@/lib/utils";

type Tone = "default" | "error";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  tone?: Tone;
};

const base = 
"flex h-12 w-full rounded-[10px] px-4 text-base shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition " +
"focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-offset-0 " +
"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground";

const toneClasses: Record<Tone, string> = {
  default:
    // default / hover / focus / active
    "bg-white border-[1.5px] border-[#d9d9d9] text-[#111827] " +
    "hover:border-[#9ea0a3] hover:bg-white " +
    // Focus (empty) = lighter blue
    "focus-visible:border-[#9bbcff] focus-visible:border-[0px] focus-visible:ring-[#9bbcff] " +
    // Focus (filled) = deeper blue ring (and deeper border if you want)
    "[&:not(:placeholder-shown):focus-visible]:ring-[#8eb2fa] [&:not(:placeholder-shown):focus-visible]:border-[0px]" +
    // Active (mouse down) - keep it light if that's what you want
    "active:border-[#9bbcff]",
  error:
  "bg-white border-[1.5px] border-[#ef4444] text-[#111827] " +
  "focus-visible:border-[#ef4444] focus-visible:border-[0px] focus-visible:ring-[#ef4444]/70 " +
  "active:border-[#dc2626]",
}

const disabledClasses = 
"disabled:bg-[#f2f2f2] disabled:border-transparent disabled:text-[#9ca3af] disabled:shadow-none disabled:cursor-not-allowed";


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder = " ", className, tone = "default", type="text", ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        ref={ref}
        type={type}
        className={cn(base, toneClasses[tone], disabledClasses, className)}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


