import { cn } from "@/lib/utils.ts";
import { cva } from "class-variance-authority";
import React from "react";

export const DebugContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white px-6 py-8 rounded-lg w-full h-full grid grid-cols-2">
      {children}
    </section>
  );
};
export const DebugTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-sm">{children}</h1>;
};
export const DebugDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <span className="text-sm text-neutral-500">{children}</span>;
};
export const DebugLeftInfoSide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="pt-2">{children}</div>;
};
export const DebugRightCodeSide = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}) => {
  const variants = cva(
    "text-sm rounded-lg border border-border flex flex-col flex-wrap max-h-[330px] overflow-auto p-4",
    {
      variants: {
        variant: {
          light: "bg-white text-neutral-600 ",
          dark: "bg-foreground text-neutral-400",
        },
      },
      defaultVariants: {
        variant: "light",
      },
    },
  );
  return (
    <code className={cn(variants({ variant, className }))}>{children}</code>
  );
};
