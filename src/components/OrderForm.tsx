import { IOrder, IShippingFields } from "../helpers/app.interface";
import PersonInfo from "../components/PersonInfo";
import deliveryIcon from "../assets/delivery.png";
import AddressInfo from "../components/AddressInfo";
import ParcelInfo from "../components/ParcelInfo";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import createOrder from "../API/order";
// import { formClass } from "../helpers/app.classnames";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";

export default function OrderForm() {
  const [lastID, setLastID] = useState("");
  const [errorObj, setErrorObj] = useState("");
  const [modalOpened, setModalOpened] = useState(false);

  const mutation = useMutation(
    "create order",
    (data: IOrder) => createOrder(data),
    {
      onSuccess: (response) => {
        setLastID(response.data.data.order.id);
      },
      onError: (error: any, data: object) => {
        setErrorObj(JSON.parse(error.request.response).data);
        console.log(error, data);
        console.log(JSON.parse(error.request.response).data);
        setModalOpened(true);
      },
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IShippingFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IShippingFields> = (formData) => {
    mutation.mutateAsync({ order: formData });
    reset();
  };

  return (
    <div>
      {mutation.isLoading && (
        <div
          className="blackout w-screen h-screen fixed 
      bg-gray-900 z-50 opacity-60 top-0 flex items-center justify-center"
        >
          {<Circles color="white" ariaLabel="loading-indicator" />}
        </div>
      )}

      <div
        className={
          modalOpened
            ? "modal modal--active max-w-md sm:max-w-xl"
            : "modal max-w-md sm:max-w-xl"
        }
      >
        <div className="flex justify-between">
          <p className="text-xl text-red-500">Something went wrong :( </p>
          <AiOutlineClose
            className="modal__closeBtn transition duration-250 ease-out hover:ease-in"
            onClick={() => setModalOpened(false)}
          />
        </div>
        <ul>
          {Object.values(errorObj).map((elem, iElem) =>
            Object.values(elem).map((err, iErr) => (
              <li key={iElem + "_" + iErr}>
                {err} ({Object.keys(errorObj)[iElem]}.{Object.keys(elem)[iErr]}
                ))
              </li>
            ))
          )}
        </ul>
      </div>

      <h1 className="text-center text-4xl text-gray-900 mt-10">
        Delivery request
        <img src={deliveryIcon} className="h-10 inline ml-3" />
      </h1>
      {mutation.isSuccess && (
        <p className="text-green-500">Success! ID of last order: {lastID}</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl
        m-auto py-5 mt-10 px-8 grid grid-cols-1 sm:grid-cols-2 gap-12 form"
      >
        <PersonInfo {...{ register }} {...{ errors }} actor="receiver" />
        <PersonInfo {...{ register }} {...{ errors }} actor="sender" />
        <AddressInfo {...{ register }} {...{ errors }} />
        <ParcelInfo {...{ register }} {...{ errors }} {...{ control }} />

        <div className="my-3 text-center">
          <button
            className="btn btn__primary  text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
