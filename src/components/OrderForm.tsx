import { IOrder, IShippingFields } from "../helpers/app.interface";
import PersonInfo from "../components/PersonInfo";
import deliveryIcon from "../assets/delivery.png";
import error from "../assets/error.png";
import AddressInfo from "../components/AddressInfo";
import ParcelInfo from "../components/ParcelInfo";
import SubmitButton from "../components/SubmitButton";
import Spinner from "../components/Spinner";
import createOrder from "../API/order";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { useState } from "react";
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
        reset();
      },
      onError: (error: any) => {
        setErrorObj(JSON.parse(error.request.response).data);
        setModalOpened(true);
      },
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    control,
    formState: { errors },
  } = useForm<IShippingFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IShippingFields> = (formData) => {
    mutation.mutateAsync({ order: formData });
  };

  return (
    <div>
      {mutation.isLoading && <Spinner />}

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
        <ul className="mt-2">
          {Object.values(errorObj).map((elem, iElem) =>
            Object.values(elem).map((err, iErr) => (
              <li key={iElem + "_" + iErr} className="flex items-center">
                <img src={error} className="leading-3 mr-1" />
                <span>
                  {err} ({Object.keys(elem)[iErr]} of{" "}
                  {Object.keys(errorObj)[iElem]})
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

      <h1 className="text-center text-4xl text-gray-900 mt-10 title">
        Delivery request
        <img src={deliveryIcon} className="h-10 inline ml-3" />
      </h1>

      {mutation.isSuccess && (
        <p className="text-green-500 w-full text-center">
          Application successfully sent.
          <br />
          Last order ID: {lastID}
        </p>
      )}
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl
        m-auto py-5 mt-10 px-8 grid grid-cols-1 sm:grid-cols-2 gap-12 form"
      >
        <PersonInfo {...{ register, errors, resetField }} actor="receiver" />
        <PersonInfo {...{ register, errors, resetField }} actor="sender" />
        <AddressInfo {...{ register, errors }} />
        <ParcelInfo {...{ register, errors, control }} />

        <SubmitButton />
      </form>
    </div>
  );
}
