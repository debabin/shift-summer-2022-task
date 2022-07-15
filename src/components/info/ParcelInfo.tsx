import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import ReactSelect, { PropsValue } from "react-select";
import Error from "../Error";
import Label from "../Label";
import { IOption, IShippingFields } from "../../helpers/interfaces";
import { classNames } from "../../styles/classNames";
import { parcelOptions } from "../../utils/constants";
import { InputNumber } from "../Input";

const getValue = (value: string) =>
  value
    ? (parcelOptions.find(
        (option) => option.value == value
      ) as PropsValue<IOption>)
    : undefined;

type ParcelInfoProps<TFormValues> = {
  control: Control<TFormValues, object>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
  register: UseFormRegister<TFormValues>;
};

function ParcelInfo({
  control,
  errors,
  register,
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
            <p className={classNames.infoTitle}>Parcel information</p>
            <div className="mb-2">
              <Label required={true} text="Parcel type" />

              <ReactSelect<IOption>
                classNamePrefix="react-select"
                className="form__input"
                placeholder="Choose parcel type"
                options={parcelOptions}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as IOption).value)}
              />
              {error && (
                <p className="text-red-500 text-xs italic">{error.message}</p>
              )}
            </div>
            <div className="mb-2">
              <Label required={true} text="Approximate weight" />
              <InputNumber
                required={true}
                field="package.weight"
                register={register}
                min={0.1}
                max={20}
              />
              {errors.package?.weight && (
                <Error message={errors.package.weight.message} />
              )}
            </div>
            <div className="mb-2">
              <Label required={false} text="Comment for the courier" />

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
