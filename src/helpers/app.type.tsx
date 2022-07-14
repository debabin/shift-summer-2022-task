import {
  Control,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";


type actorOption = "sender" | "receiver";

export type PersonInfoProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
  resetField: UseFormResetField<TFormValues>;
  actor: actorOption;
};

export type AddressInfoProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
};

export type ParcelInfoProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
  control: Control<TFormValues, object>
};
