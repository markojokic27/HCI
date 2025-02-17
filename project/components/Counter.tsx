"use client";

// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
  NumberField,
  Group,
  Input,
  Button,
  NumberFieldProps,
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";

export const Counter: React.FC<
  NumberFieldProps & {
    variant?: "default" | "small";
    setValue?: (value: number) => void;
  }
> = ({ className, variant, value, setValue, ...rest }) => {
  return (
    <NumberField
      value={value}
      onChange={setValue}
      minValue={1}
      maxValue={15}
      aria-label="Counter"
      className={className?.toString()}
      {...rest}
    >
      <Group
        className={twMerge(
          "flex items-center justify-between rounded-xl border border-orange-800 px-6 py-3",
          variant === "small" ? "w-22 py-1.75 px-3" : "md:w-40",
        )}
      >
        <Button
          slot="decrement"
          className="outline-none data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="minus" className={variant === "small" ? "h-4 w-4" : ""} />
        </Button>
        <Input
          inputMode="numeric"
          className={twMerge(
            "h-5 w-5 text-center outline-none",
            variant === "small" ? "h-4 w-4 text-2xs" : "",
          )}
        />
        <Button
          slot="increment"
          className="outline-none data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="plus" className={variant === "small" ? "h-4 w-4" : ""} />
        </Button>
      </Group>
    </NumberField>
  );
};
