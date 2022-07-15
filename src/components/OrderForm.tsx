import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation } from "react-query";
import AddressInfo from "./info/AddressInfo";
import ParcelInfo from "./info/ParcelInfo";
import PersonInfo from "./info/PersonInfo";
import Spinner from "./Spinner";
import deliveryIcon from "../img/delivery.png";
import error from "../img/error.png";
import { url } from "../helpers/constants";
import { IOrder, IShippingFields } from "../helpers/interfaces";
import { classNames } from "../styles/classNames";

export default function OrderForm() {
  const [lastID, setLastID] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [backendError, setBackendError] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    resetField,
  } = useForm<IShippingFields>({ mode: "onChange" });

  const mutation = useMutation(
    "create order",
    (data: IOrder) =>
      axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      }),
    {
      onSuccess: (response) => {
        setLastID(response.data.data.order.id);
        reset();
      },
      onError: (error: any) => {
        setBackendError(JSON.parse(error.request.response).data);
        setModalOpened(true);
      },
    }
  );

  const onSubmit: SubmitHandler<IShippingFields> = (formData) => {
    mutation.mutateAsync({ order: formData });
  };

  return (
    <div>
      {mutation.isLoading && <Spinner />}

      <div
        className={modalOpened ? classNames.modalOpen : classNames.modalClosed}
      >
        <div className="flex justify-between">
          <p className={classNames.errorMessage}>Something went wrong :( </p>
          <AiOutlineClose
            className={classNames.modalCloseBtn}
            onClick={() => setModalOpened(false)}
          />
        </div>
        <ul className="mt-2">
          {Object.values(backendError).map((elem, iElem) =>
            Object.values(elem).map((err, iErr) => (
              <li key={iElem + "_" + iErr} className="flex items-center">
                <img src={error} className="leading-3 mr-1" />
                <span>
                  {err} ({Object.keys(elem)[iErr]} of{" "}
                  {Object.keys(backendError)[iElem]})
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

      <h1 className={classNames.pageTitle}>
        Delivery request
        <img src={deliveryIcon} className="h-10 inline ml-3" />
      </h1>

      {mutation.isSuccess && (
        <p className={classNames.successMessage}>
          Application successfully sent.
          <br />
          Last order ID: {lastID}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
        <PersonInfo {...{ register, errors, resetField }} actor="receiver" />
        <PersonInfo {...{ register, errors, resetField }} actor="sender" />
        <AddressInfo {...{ register, errors }} />
        <ParcelInfo {...{ register, errors, control }} />

        <button className={classNames.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
