import { useState } from "react";
import { IShippingFields } from "./app.interface";
import { PersonInfoProps } from "./app.type";
import { FaCheck } from "react-icons/fa";

function getDate18YrsAgo() {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  return date18YrsAgo.toISOString().slice(0, 10);
}

function PersonInfo({
  register,
  errors,
  actor,
}: PersonInfoProps<IShippingFields>): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  let errorObject;
  switch (actor) {
    case "sender":
      errorObject = errors.sender;
      break;
    case "recipient":
      errorObject = errors.recipient;
      break;
  }

  return (
    <div>
      <p className="text-gray-600 text-xl font-semibold mb-3 capitalize">
        {actor} information
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-end">
        <div className="flex flex-col">
          <label className="text-gray-600 font-normal">
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
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errorObject?.name && (
            <p className="text-red-500 text-xs italic">
              {errorObject.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col grow">
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Surname
          </label>
          <input
            {...register(`${actor}.surname`, {
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
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errorObject?.surname && (
            <p className="text-red-500 text-xs italic">
              {errorObject.surname.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3 items-end mt-2 ">
        <div className="flex flex-col grow">
          <div className="text-gray-600 font-normal flex justify-between flex-wrap items-center">
            Patronymic
            <div className=" flex items-center">
              <label
                onClick={() => setIsChecked(!isChecked)}
                className={
                  isChecked
                    ? "form__checkbox form__checkbox--active"
                    : "form__checkbox"
                }
              >
                <FaCheck
                  className={
                    isChecked
                      ? "form__checkbox__icon form__checkbox__icon--active"
                      : "form__checkbox__icon"
                  }
                />
              </label>
              <input
                {...register(`${actor}.hasNoPatronymic`)}
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <span className="text-gray-600 text-sm ">Has no patronymic </span>
            </div>
          </div>

          <input
            {...register(`${actor}.patronymic`, {
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
            disabled={isChecked}
            className="form__input border-solid border-gray-300 border py-1 px-4 w-full rounded text-gray-700 disabled:bg-slate-300"
            type="text"
            autoFocus
          />
          {errorObject?.patronymic && (
            <p className="text-red-500 text-xs italic">
              {errorObject.patronymic.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Birthday date
          </label>
          <input
            {...register(`${actor}.dateOfBirth`, {
              required: "Birthday date is require field!",
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="date"
            max={getDate18YrsAgo()}
            min={"1990-01-01"}
            autoFocus
          />
          {errorObject?.dateOfBirth && (
            <p className="text-red-500 text-xs italic">
              {errorObject.dateOfBirth.message}
            </p>
          )}
        </div>
      </div>
      <label className="text-gray-600 font-normal mt-2 block">Address</label>
      <input
        {...register(`${actor}.address`, {
          minLength: {
            value: 2,
            message: "Length must be at least 2 symbols",
          },
          maxLength: {
            value: 30,
            message: "Length must be less than 30 symbols",
          },
        })}
        className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
    </div>
  );
}

export default PersonInfo;
