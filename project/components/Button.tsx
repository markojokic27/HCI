"use client";

// External packages
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { twJoin } from "tailwind-merge";

export const getButtonClassNames = ({
  size = "md",
  variant,
  isVisuallyDisabled,
}: {
  size: ButtonOwnProps["size"];
  variant: ButtonOwnProps["variant"];
  isVisuallyDisabled?: ButtonOwnProps["isVisuallyDisabled"];
}): string =>
  twJoin(
    "bg-transparent hover:bg-transparent rounded-xl border border-yellow-800 hover:border-orange-800 outline-none focus:outline-none leading-none",
    variant === "solid" &&
      "text-orange-800 bg-yellow-800 drop-shadow-xl hover:scale-[0.98] font-semibold hover:drop-shadow-none hover:bg-yellow-800 active:scale-[0.96]",
    variant === "outline" &&
      "hover:border-grayscale-500 hover:text-grayscale-500",
    variant === "dark" &&
      "text-white border-white hover:border-grayscale-200 hover:text-grayscale-200",
    size === "sm" && "px-4 py-2.5 text-2xs leading-none",
    size === "md" && "px-6 py-4 text-base leading-none",
    variant === "link" &&
      "border-0 bg-transparent hover:bg-transparent underline underline-offset-4 disabled:bg-transparent disabled:text-blue-100 text-black p-0 m-0 h-auto font-normal not-italic focus:outline-none text-base hover:no-underline active:no-outline text-left md:text-lg md:underline-offset-8",
    variant === "link" && size === "sm" && "md:text-base md:underline-offset-4",
    isVisuallyDisabled &&
      variant === "solid" &&
      "border-grayscale-200 bg-grayscale-200 hover:bg-grayscale-200 hover:border-grayscale-200 hover:cursor-default",
    isVisuallyDisabled &&
      variant === "outline" &&
      "border-grayscale-200 text-grayscale-200 hover:text-grayscale-200 hover:border-grayscale-200 ",
    isVisuallyDisabled &&
      variant === "dark" &&
      "text-grayscale-500 border-grayscale-500 hover:text-grayscale-500 hover:border-grayscale-500"
  );

export type ButtonOwnProps = {
  variant?: "solid" | "outline" | "dark" | "link";
  size?: "sm" | "md";
  isVisuallyDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button: React.FC<
  React.ComponentPropsWithoutRef<"button"> & AriaButtonProps & ButtonOwnProps
> = ({
  variant = "solid",
  size = "md",
  isVisuallyDisabled,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}) => (
  <AriaButton
    {...rest}
    isDisabled={rest.disabled}
    className={twMerge(
      `${iconLeft || iconRight ? "flex items-center gap-2" : ""}`,
      getButtonClassNames({ size, variant, isVisuallyDisabled }),
      className
    )}
  >
    {Boolean(iconLeft) && iconLeft}
    {children}
    {Boolean(iconRight) && iconRight}
  </AriaButton>
);
