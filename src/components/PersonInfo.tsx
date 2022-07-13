import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IShippingFields } from "../helpers/app.interface";
import { PersonInfoProps } from "../helpers/app.type";
import {
  getRuleMinLength,
  getRuleMaxLength,
  getRulePatternLetters,
} from "../helpers/app.rules";

function getDate18YrsAgo() {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  return date18YrsAgo.toISOString().slice(0, 10);
}

function PersonInfo({
  register,
  errors,
  actor,
  resetField,
}: PersonInfoProps<IShippingFields>): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  let errorObject;
  switch (actor) {
    case "sender":
      errorObject = errors.sender;
      break;
    case "receiver":
      errorObject = errors.receiver;
      break;
  }

  return (
    <div>
      <p className="text-gray-600 text-xl font-semibold mb-3 capitalize">
        {actor} information
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        <div className="flex flex-col">
          <label className="text-gray-600 font-normal">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Name
          </label>
          <input
            {...register(`${actor}.firstname`, {
              required: "Name is require field!",
              minLength: getRuleMinLength(2),
              maxLength: getRuleMaxLength(30),
              pattern: getRulePatternLetters(),
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errorObject?.firstname && (
            <p className="text-red-500 text-xs italic">
              {errorObject.firstname.message}
            </p>
          )}
        </div>
        <div className="flex flex-col grow">
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Surname
          </label>
          <input
            {...register(`${actor}.lastname`, {
              required: "Surname is require field!",
              minLength: getRuleMinLength(2),
              maxLength: getRuleMaxLength(30),
              pattern: getRulePatternLetters(),
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errorObject?.lastname && (
            <p className="text-red-500 text-xs italic">
              {errorObject.lastname.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3 items-start mt-2 ">
        <div className="flex flex-col grow">
          <div className="text-gray-600 font-normal flex justify-between flex-wrap items-center mb-1">
            Patronymic
            <div className=" flex items-center">
              <label
                onClick={() => {
                  setIsChecked(!isChecked);
                  resetField(`${actor}.middlename`);
                }}
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
              />
              <span className="text-gray-600 text-sm ">Has no patronymic </span>
            </div>
          </div>

          <input
            {...register(`${actor}.middlename`, {
              minLength: getRuleMinLength(2),
              maxLength: getRuleMaxLength(30),
              pattern: getRulePatternLetters(),
            })}
            disabled={isChecked}
            className="form__input border-solid border-gray-300 border py-1 px-4 w-full rounded text-gray-700 disabled:bg-slate-300"
            type="text"
            autoFocus
          />
          {errorObject?.middlename && (
            <p className="text-red-500 text-xs italic">
              {errorObject.middlename.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Birthday date
          </label>
          <input
            {...register(`${actor}.birthDate`, {
              required: "Birthday date is require field!",
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="date"
            max={getDate18YrsAgo()}
            min={"1990-01-01"}
            autoFocus
          />
          {errorObject?.birthDate && (
            <p className="text-red-500 text-xs italic">
              {errorObject.birthDate.message}
            </p>
          )}
        </div>
      </div>
      <label className="text-gray-600 font-normal mt-2 block">
        Residential address
      </label>
      <input
        {...register(`${actor}.registrationAdress`, {
          minLength: getRuleMinLength(10),
          maxLength: getRuleMaxLength(50),
        })}
        className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
        type="text"
        autoFocus
      />
      {errorObject?.registrationAdress && (
        <p className="text-red-500 text-xs italic">
          {errorObject.registrationAdress.message}
        </p>
      )}
    </div>
  );
}

export default PersonInfo;
