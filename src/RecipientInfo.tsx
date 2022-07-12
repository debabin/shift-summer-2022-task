import { useState } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { IShippingFields } from "./app.interface";

export type FormInputProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
  actor: "sender" | "recipient";
};

function RecipientInfo({
  register,
  errors,
  actor,
}: FormInputProps<IShippingFields>): JSX.Element {
  const [noPatronymicRec, setNoPatronymicRec] = useState(false);

  let errorObject;
  switch (actor) {
    case "sender":
      errorObject = errors.sender;
      break;
    case "recipient":
      errorObject = errorObject;
      break;
  }

  return (
    <div>
      <p className="text-gray-800 text-xl font-medium mb-3">Sender info</p>
      <label className="text-gray-600 font-medium">
        <span className="text-red-500 text-lg italic mr-1">*</span>
        Name
      </label>
      <input
        {...register(`${actor}.name`, {
          required: "Name is require field!",
          minLength: {
            value: 2,
            message: "Length must be at least 2 symbols",
          },
          maxLength: {
            value: 30,
            message: "Length must be less than 30 symbols",
          },
          pattern: {
            value: /^[a-zA-Zа-яА-ЯЁё\s-]+$/,
            message: "Please enter valid value",
          },
        })}
        className="border-solid border-gray-300 border py-2 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
      {errorObject?.name && (
        <p className="text-red-500 text-xs italic">
          {errorObject.name.message}
        </p>
      )}
      <label className="text-gray-600 font-medium mt-2 block">
        <span className="text-red-500 text-lg italic mr-1">*</span>
        Surname
      </label>
      <input
        {...register("recipient.surname", {
          required: "Surname is require field!",
          minLength: {
            value: 2,
            message: "Length must be at least 2 symbols",
          },
          maxLength: {
            value: 30,
            message: "Length must be less than 30 symbols",
          },
          pattern: {
            value: /^[a-zA-Zа-яА-ЯЁё\s-]+$/,
            message: "Please enter valid value",
          },
        })}
        className="border-solid border-gray-300 border py-2 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
      {errorObject?.surname && (
        <p className="text-red-500 text-xs italic">
          {errorObject.surname.message}
        </p>
      )}
      <label className="text-gray-600 font-medium flex justify-between items-center mt-2">
        Patronymic
        <label className="text-gray-600 text-sm flex items-center">
          <input
            {...register("recipient.hasNoPatronymic")}
            className="mt-1 mr-1"
            type="checkbox"
            onClick={() => setNoPatronymicRec(!noPatronymicRec)}
          />
          Has no patronymic
        </label>
      </label>
      <input
        {...register("recipient.patronymic", {
          minLength: {
            value: 2,
            message: "Length must be at least 2 symbols",
          },
          maxLength: {
            value: 30,
            message: "Length must be less than 30 symbols",
          },
          pattern: {
            value: /^[a-zA-Zа-яА-ЯЁё\s-]+$/,
            message: "Please enter valid value",
          },
        })}
        disabled={noPatronymicRec}
        className="border-solid border-gray-300 border py-2 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
      {errorObject?.patronymic && (
        <p className="text-red-500 text-xs italic">
          {errorObject.patronymic.message}
        </p>
      )}

      <label className="text-gray-600 font-medium mt-2 block">
        <span className="text-red-500 text-lg italic mr-1">*</span>
        Birthday date
      </label>
      <input
        {...register("recipient.dateOfBirth", {
          required: "Birthday date is require field!",
        })}
        className="border-solid border-gray-300 border py-2 px-4  w-full rounded text-gray-700"
        type="date"
        autoFocus
      />
      {errorObject?.dateOfBirth && (
        <p className="text-red-500 text-xs italic">
          {errorObject.dateOfBirth.message}
        </p>
      )}
      <label className="text-gray-600 font-medium mt-2 block">Address</label>
      <input
        {...register("recipient.address", {
          minLength: {
            value: 2,
            message: "Length must be at least 2 symbols",
          },
          maxLength: {
            value: 30,
            message: "Length must be less than 30 symbols",
          },
        })}
        className="border-solid border-gray-300 border py-2 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
    </div>
  );
}

export default RecipientInfo;
