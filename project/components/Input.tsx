"use client";

// External packages
import * as React from "react";
import {
  TextField,
  TextFieldProps,
  Input as AriaInput,
  Label,
  InputProps,
  FieldError,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const Input: React.FC<
  React.ComponentPropsWithoutRef<"div"> &
    TextFieldProps & {
      icon?: React.ReactNode;
      label: string;
      inputProps?: React.ComponentPropsWithoutRef<"input"> &
        InputProps & { validationError?: string };
    }
> = ({ label, inputProps = {}, icon, className, ...rest }) => {
  const labelRef = React.useRef<HTMLLabelElement | null>(null);
  const {
    validationError,
    onChange,
    className: inputClassName,
    ...restInputProps
  } = inputProps;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (labelRef.current) {
      labelRef.current.setAttribute(
        "data-label-floating",
        value ? "true" : "false",
      );
    }
    onChange?.(event);
  };

  return (
    <TextField
      {...rest}
      className={twMerge("group w-full text-base text-gray-400", className)}
    >
      <div className="relative mb-2 outline-none focus:outline-none">
        <Label
          ref={labelRef}
          className="peer absolute left-4 top-1/2 origin-left -translate-y-1/2 transition-transform data-[label-floating=true]:-translate-y-[22px] data-[label-floating=true]:scale-75 text-grayscale-400"
        >
          {label}
        </Label>
        <AriaInput
          {...restInputProps}
          className={twMerge(
            "h-[56px] w-full border border-grayscale-200 px-4 text-gray-900 outline-none hover:border-grayscale-500 focus:border-grayscale-500 active:border-grayscale-500 group-data-[invalid=true]:border-red-700 peer-data-[label-floating=true]:pt-3 rounded-1",

            inputClassName,
          )}
          onChange={handleChange}
        />
        {Boolean(icon) && (
          <div className="absolute right-4 top-[18px] hover:cursor-pointer">
            {icon}
          </div>
        )}
      </div>

      {validationError && (
        <FieldError className="absolute hidden text-2xs text-red-500 group-data-[invalid=true]:block">
          {validationError}
        </FieldError>
      )}
    </TextField>
  );
};
