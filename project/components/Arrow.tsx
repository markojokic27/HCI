// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";

// Components
import { Icon } from "@/components/Icon";

export type ArrowOwnProps = {
  variant?: "left" | "right";
  color?: "black" | "white";
  size?: "sm" | "md";
};

export const Arrow: React.FC<
  React.ComponentPropsWithoutRef<"div"> & ArrowOwnProps
> = ({
  variant = "right",
  color = "black",
  size = "md",
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={twMerge(
      "flex h-10 w-10 items-center justify-center rounded-full border border-orange-800 bg-orange-800 text-white outline-none focus:outline-none",
      color === "white" && "bg-transparent text-orange-800",
      size === "sm" && "h-6 w-6 border-[0.5px]",
      className
    )}
  >
    <Icon
      name={variant === "left" ? "arrowLeft" : "arrowRight"}
      className={size === "sm" ? "h-3.5 w-3.5" : "max-h-6 max-w-6"}
    />
  </div>
);
