import { cn } from "@repo/utils";
import React, { HTMLAttributes, ReactNode } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  type,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Size and padding
        "px-4 py-2 min-w-[100px] font-medium rounded-md",
        // Background and text from theme CSS variables
        "bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]",
        // Subtle border for structure
        "border border-transparent",
        // Shadow for elevation (optional, for hover/focus)
        "shadow-sm",
        // Hover and focus states
        "hover:shadow-md hover:bg-[color:var(--color-primary)]/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
        // Disabled styles
        "disabled:opacity-60 disabled:cursor-not-allowed transition-all select-none",
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
