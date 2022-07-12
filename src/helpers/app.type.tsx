import {
  Control,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";


type actorOption = "sender" | "recipient";

export type PersonInfoProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
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
