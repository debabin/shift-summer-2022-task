import { IOption, IShippingFields } from "../helpers/app.interface";
import { ParcelInfoProps } from "../helpers/app.type";
import { getRuleMinLength, getRuleMaxLength } from "../helpers/app.functions";
import ReactSelect, { PropsValue } from "react-select";
import { Controller } from "react-hook-form";

const getValue = (value: string) =>
  value ? parcelOptions.find((option) => option.value == value) : "";

const parcelOptions: IOption[] = [
  {
    value: "letter",
    label: "Письмо",
  },
  {
    value: "valuableLetter",
    label: "Ценное письмо",
  },
  {
    value: "package",
    label: "Бандероль",
  },
  {
    value: "smallPackage",
    label: "Мелкий пакет",
  },
  {
    value: "parcel",
    label: "Посылка",
  },
  {
    value: "valuableParcel",
    label: "Ценная посылка",
  },
];

function ParcelInfo({
  register,
  errors,
  control,
}: ParcelInfoProps<IShippingFields>) {
  return (
    <div>
      <Controller
        control={control}
        name="parcel.type"
        rules={{
          required: "Parcel type is required field",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <p className="text-gray-600 text-xl font-semibold mb-3 capitalize">
              Parcel information
            </p>
            <div className="mb-2">
              <label className="text-gray-600 font-normal block">
                <span className="text-red-500 text-lg italic mr-1">*</span>
                Parcel type
              </label>
              <ReactSelect<IOption>
                classNamePrefix="react-select"
                className="form__input"
                placeholder="Тип посылки"
                options={parcelOptions}
                //requires replacement
                value={getValue(value) as PropsValue<IOption>}
                onChange={(newValue) => onChange((newValue as IOption).value)}
              />
              {error && (
                <p className="text-red-500 text-xs italic">{error.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-gray-600 font-normal block">
                <span className="text-red-500 text-lg italic mr-1">*</span>
                Approximate weight
              </label>
              <input
                {...register("parcel.approximateWeight", {
                  required: "Parcel weight is require field!",
                  min: { value: 0.1, message: "Minimum weight is 0.1" },
                  max: { value: 20, message: "Maximum weight is 20" },
                })}
                className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
                type="number"
                max={20}
                min={0}
                autoFocus
              />
              {errors.parcel?.approximateWeight && (
                <p className="text-red-500 text-xs italic">
                  {errors.parcel.approximateWeight.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-gray-600 font-normal block">
                Note for the courier
              </label>
              <textarea
                {...register("parcel.note")}
                className="form__input border-solid border-gray-300 border py-1 px-4 w-full rounded text-gray-700"
                autoFocus
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default ParcelInfo;
