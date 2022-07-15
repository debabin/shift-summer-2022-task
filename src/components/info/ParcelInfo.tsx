import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import ReactSelect from "react-select";
import Error from "../Error";
import Label from "../Label";
import { IOption, IShippingFields } from "../../helpers/interfaces";
import { classNames } from "../../styles/classNames";
import { packageOptions } from "../../helpers/constants";
import { InputNumber } from "../Input";
import { getValue } from "../../helpers/functions";

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
      <p className={classNames.infoTitle}>Parcel information</p>
      <div className="mb-2">
        <Label required={true} text="Parcel type" />
        <Controller
          control={control}
          name="package.type"
          rules={{
            required: "Required field",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect<IOption>
                classNamePrefix="react-select"
                className="form__input"
                placeholder="Choose type"
                options={packageOptions}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as IOption).value)}
              />
              {error && <Error message={error.message} />}
            </div>
          )}
        />
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
          className={classNames.textArea}
          autoFocus
        />
      </div>
    </div>
  );
}

export default ParcelInfo;
