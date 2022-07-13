import { IOption, IShippingFields } from "../helpers/app.interface";
import { ParcelInfoProps } from "../helpers/app.type";
import ReactSelect, { PropsValue } from "react-select";
import { Controller } from "react-hook-form";

const getValue = (value: string) =>
  value ? parcelOptions.find((option) => option.value == value) as PropsValue<IOption> : undefined;

const parcelOptions: IOption[] = [
  {
    value: "letter",
    label: "Letter",
  },
  {
    value: "valuableLetter",
    label: "Valuable letter",
  },
  {
    value: "package",
    label: "Package",
  },
  {
    value: "smallPackage",
    label: "Small package",
  },
  {
    value: "parcel",
    label: "Parcel",
  },
  {
    value: "valuableParcel",
    label: "Valuable parcel",
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
        name="package.type"
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
                placeholder="Choose parcel type"
                options={parcelOptions}
                //requires replacement
                value={getValue(value)}
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
                {...register("package.weight", {
                  required: "Parcel weight is require field!",
                  min: { value: 0.1, message: "Minimum weight is 0.1" },
                  max: { value: 20, message: "Maximum weight is 20" },
                })}
                className="form__input border-solid border-gray-300 border py-1 px-4 w-full rounded text-gray-700"
                type="number"
                max={20}
                min={0}
                autoFocus
              />
              {errors.package?.weight && (
                <p className="text-red-500 text-xs italic">
                  {errors.package.weight.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-gray-600 font-normal block">
                Comment for the courier
              </label>
              <textarea
                {...register("package.comment")}
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
