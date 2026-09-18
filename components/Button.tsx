import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rakn-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-void",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:bg-rakn-cyan hover:text-black",
        accent:
          "bg-rakn-red text-white hover:brightness-110 glow-red",
        outline:
          "border border-white/25 bg-transparent text-white hover:border-rakn-cyan hover:text-rakn-cyan hover:bg-white/5",
        ghost: "text-white/80 hover:text-white hover:bg-white/5",
        platform:
          "border border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.85rem]",
        xl: "h-16 px-10 text-[0.9rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
