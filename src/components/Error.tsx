import { classNames } from "../styles/classNames";

export default function Error({ message }: { message: string | undefined }) {
  return <p className={classNames.errorText}>{message}</p>;
}
