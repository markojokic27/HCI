// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";

import * as Icons from "@/components/icons/index";

export type IconNames =
  | "search"
  | "bag"
  | "user"
  | "heart"
  | "chevronDown"
  | "chevronUp"
  | "chevronLeft"
  | "chevronRight"
  | "plus"
  | "minus"
  | "arrowRight"
  | "arrowLeft"
  | "info"
  | "trash"
  | "arrowUpRight"
  | "calendar"
  | "truck"
  | "mapPin"
  | "receipt"
  | "check"
  | "package"
  | "creditCard"
  | "undo"
  | "x"
  | "hamburger"
  | "checkbox";

const baseClasses = "w-6 h-6 flex-shrink-0";

export const Icon: React.FC<
  React.ComponentPropsWithoutRef<"svg"> & {
    name: IconNames;
  }
> = ({ name, className, ...rest }) => (
  <>
    {name === "search" && (
      <Icons.Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "bag" && (
      <Icons.Bag {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "user" && (
      <Icons.User {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "heart" && (
      <Icons.Heart {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevronDown" && (
      <Icons.ChevronDown
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "chevronUp" && (
      <Icons.ChevronUp {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevronLeft" && (
      <Icons.ChevronLeft
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "chevronRight" && (
      <Icons.ChevronRight
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "plus" && (
      <Icons.Plus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "minus" && (
      <Icons.Minus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrowRight" && (
      <Icons.ArrowRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrowLeft" && (
      <Icons.ArrowLeft {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "info" && (
      <Icons.Info {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "trash" && (
      <Icons.Trash {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrowUpRight" && (
      <Icons.ArrowUpRight
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "calendar" && (
      <Icons.Calendar {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "truck" && (
      <Icons.Truck {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "mapPin" && (
      <Icons.MapPin {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "receipt" && (
      <Icons.Receipt {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "check" && (
      <Icons.Check {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "package" && (
      <Icons.Package {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "creditCard" && (
      <Icons.CreditCard {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "undo" && (
      <Icons.Undo {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "x" && (
      <Icons.X {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "hamburger" && (
      <Icons.Hamburger {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "checkbox" && (
      <Icons.Checkbox {...rest} className={twMerge(baseClasses, className)} />
    )}
  </>
);
