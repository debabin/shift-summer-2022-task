import { Circles } from "react-loader-spinner";
import { classNames } from "../styles/classNames";

export default function () {
  return (
    <div className={classNames.fullScreenBlackout}>
      {<Circles color="white" ariaLabel="loading-indicator" />}
    </div>
  );
}
