import { PropsValue } from "react-select";
import { packageOptions } from "./constants";
import { IOption } from "./interfaces";

export function getDate18YearsAgo() {
  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
  return date18YearsAgo.toISOString().slice(0, 10);
}

export function getValue(value: string) {
  return value
    ? (packageOptions.find(
        (option) => option.value == value
      ) as PropsValue<IOption>)
    : undefined;
}
