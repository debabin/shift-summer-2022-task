import {
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
