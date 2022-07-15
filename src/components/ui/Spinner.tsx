import { Circles } from "react-loader-spinner";

export default function () {
  return (
    <div
      className="blackout w-screen h-screen fixed 
        bg-gray-900 z-50 opacity-60 top-0 flex items-center justify-center"
    >
      {<Circles color="white" ariaLabel="loading-indicator" />}
    </div>
    
  );
}
