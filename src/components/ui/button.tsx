import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ig-pink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-white shadow-sm hover:bg-ink-soft hover:shadow-md",
        gradient:
          "bg-ig-gradient text-white shadow-[0_8px_30px_-8px_rgba(225,48,108,0.55)] hover:shadow-[0_12px_36px_-8px_rgba(225,48,108,0.65)] hover:brightness-105",
        outline:
          "border border-paper-line bg-white text-ink hover:border-ink/30 hover:bg-paper-alt",
        ghost: "text-ink hover:bg-paper-alt",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-14 px-9 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
