import { classNames } from "../styles/classNames";

type labelProps = {
  required: boolean;
  text: string;
};

export default function Label({ required, text }: labelProps) {
  return (
    <label className={classNames.label}>
      {required && <span className={classNames.redStar}>*</span>}
      {text}
    </label>
  );
}
