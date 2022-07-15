import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { getDate18YearsAgo } from "../helpers/functions";
import { IShippingFields } from "../helpers/interfaces";

import { classNames } from "../styles/classNames";

type inputTextProps<TFormValues> = {
  minLength: number;
  maxLength: number;
  field: any;
  pattern?: boolean;
  register: UseFormRegister<TFormValues>;
  required: boolean;
  disabled: boolean;
};

type inputDateProps<TFormValues> = {
  field: any;
  register: UseFormRegister<TFormValues>;
  required: boolean;
};
type inputNumberProps<TFormValues> = {
  field: any;
  register: UseFormRegister<TFormValues>;
  required: boolean;
  min: number;
  max: number;
};

export function InputText({
  minLength,
  maxLength,
  field,
  pattern,
  register,
  required,
  disabled,
}: inputTextProps<IShippingFields>) {
  return (
    <input
      {...register(field, {
        ...(required ? { required: "Required field" } : {}),
        ...(pattern
          ? {
              pattern: {
                value: /^[a-zA-Zа-яА-ЯЁё;\s-]+$/,
                message: "Please enter valid value",
              },
            }
          : {}),
        minLength: {
          value: minLength,
          message: `Length must be at least ${minLength} symbols`,
        },
        maxLength: {
          value: maxLength,
          message: `Length must be less than ${maxLength} symbols`,
        },
      })}
      disabled={disabled}
      className={classNames.input}
      type="text"
      autoFocus
    />
  );
}

export function InputDate({
  field,
  register,
  required,
}: inputDateProps<IShippingFields>) {
  return (
    <input
      {...register(field, {
        ...(required ? { required: "Required field" } : {}),
      })}
      className={classNames.input}
      type="date"
      max={getDate18YearsAgo()}
      min="1990-01-01"
      autoFocus
    />
  );
}

export function InputNumber({
  field,
  register,
  required,
  max,
  min,
}: inputNumberProps<IShippingFields>) {
  return (
    <input
      {...register(field, {
        ...(required ? { required: "Required field" } : {}),
        min: { value: min, message: `Minimum weight is ${min}` },
        max: { value: max, message: `Maximum weight is ${max}` },
      })}
      className={classNames.input}
      type="number"
      max={20}
      min={0}
      autoFocus
    />
  );
}
