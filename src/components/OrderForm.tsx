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

export default function OrderForm() {
  const [lastID, setLastID] = useState();

  const mutation = useMutation(
    "create order",
    (data: IOrder) => createOrder(data),
    {
      onSuccess: (response) => {
        setLastID(response.data.data.order.id);
      },
      onError: (error: any) => {
        alert(error.message);
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
          className="loadingScreen w-screen h-screen fixed 
      bg-gray-900 z-50 opacity-60 top-0 flex items-center justify-center"
        >
          {<Circles color="white" ariaLabel="loading-indicator" />}
        </div>
      )}

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
