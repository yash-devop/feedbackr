import { cn } from "@repo/utils/client";
import { cva } from "class-variance-authority";

export const Spinner = ({
  className,
  variant = "default",
  size = "sm",
}: {
  className?: string;
  variant?: "default" | "primary" | "neutral";
  size?: "xs" | "sm" | "md" | "lg";
}) => {
  const variants = cva(
    "aspect-square rounded-full border-[3px] border-muted border-r-input animate-spin",
    {
      variants: {
        variant: {
          default: "border-r-input",
          primary: "border-r-primary",
          neutral: "border-r-input",
        },
        size: {
          xs: "w-5",
          sm: "w-[25px]",
          md: "w-[30px]",
          lg: "w-10",
        },
      },
    },
  );
  return <div className={cn(variants({ className, variant, size }))}></div>;
};
