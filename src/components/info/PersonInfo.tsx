import { useState } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import Error from "../Error";
import Label from "../Label";
import { InputText, InputDate } from "../Input";
import { IShippingFields } from "../../helpers/interfaces";
import { classNames } from "../../styles/classNames";

type PersonInfoProps<TFormValues> = {
  actor: "sender" | "receiver";
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
  register: UseFormRegister<TFormValues>;
  resetField: UseFormResetField<TFormValues>;
};

function PersonInfo({
  actor,
  errors,
  register,
  resetField,
}: PersonInfoProps<IShippingFields>): JSX.Element {
  const [hasNoPatronymic, setHasNoPatronymic] = useState(false);

  return (
    <div>
      <p className={classNames.infoTitle}>{actor} information</p>
      <div className={classNames.infoTwoColumns}>
        <div className="flex flex-col">
          <Label required={true} text="Name" />
          <InputText
            register={register}
            required={true}
            field={`${actor}.firstname`}
            minLength={2}
            maxLength={30}
            pattern={true}
            disabled={false}
          />
          {errors[actor]?.firstname && (
            <Error message={errors[actor]?.firstname?.message} />
          )}
        </div>
        <div className="flex flex-col ">
          <Label required={true} text="Surname" />
          <InputText
            register={register}
            required={true}
            field={`${actor}.lastname`}
            minLength={2}
            maxLength={30}
            pattern={true}
            disabled={false}
          />
          {errors[actor]?.firstname && (
            <Error message={errors[actor]?.lastname?.message} />
          )}
        </div>
      </div>
      <div className={classNames.infoTwoColumns}>
        <div className="flex flex-col">
          <div className="flex justify-between flex-wrap items-center mb-1">
            <Label required={false} text="Patronymic" />

            <div className=" flex items-center">
              <label
                onClick={() => {
                  setHasNoPatronymic(!hasNoPatronymic);
                  resetField(`${actor}.middlename`);
                }}
                className={
                  hasNoPatronymic
                    ? "form__checkbox form__checkbox--active"
                    : "form__checkbox"
                }
              >
                <FaCheck
                  className={
                    hasNoPatronymic
                      ? "form__checkbox__icon form__checkbox__icon--active"
                      : "form__checkbox__icon"
                  }
                />
              </label>
              <input
                {...register(`${actor}.hasNoPatronymic`)}
                type="checkbox"
                className="hidden"
                checked={hasNoPatronymic}
              />
              <span className="text-gray-600 text-sm ">Has no patronymic </span>
            </div>
          </div>
          <InputText
            register={register}
            required={false}
            field={`${actor}.middlename`}
            minLength={2}
            maxLength={30}
            pattern={true}
            disabled={hasNoPatronymic}
          />
          {errors[actor]?.middlename && (
            <Error message={errors[actor]?.middlename?.message} />
          )}
        </div>
        <div className="flex flex-col">
          <Label required={true} text="Birthday date" />
          <InputDate
            required={true}
            register={register}
            field={`${actor}.birthDate`}
          />
          {errors[actor]?.birthDate && (
            <Error message={errors[actor]?.birthDate?.message} />
          )}
        </div>
      </div>
      <Label required={false} text="Residential address" />
      <InputText
        register={register}
        required={false}
        field={`${actor}.registrationAdress`}
        minLength={10}
        maxLength={50}
        disabled={false}
      />
      {errors[actor]?.registrationAdress && (
        <Error message={errors[actor]?.registrationAdress?.message} />
      )}
    </div>
  );
}

export default PersonInfo;
