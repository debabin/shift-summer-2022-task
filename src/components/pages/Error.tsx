import { classNames } from "../../styles/classNames";
import error from "../../img/error.png"
import notFound from "../../img/404.png"


export default function Error() {
  return <div className={classNames.centerElements}>
    <img src={error} className="w-screen h-screen object-cover" />
    <img src={notFound} className="absolute " />
  </div>;
}
