import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { IShippingFields } from "../../helpers/interfaces";
import { classNames } from "../../styles/classNames";
import Error from "../Error";
import {InputText} from "../Input";
import Label from "../Label";

type AddressInfoProps<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrorsImpl<DeepRequired<TFormValues>>;
};

function AddressInfo({ register, errors }: AddressInfoProps<IShippingFields>) {
  return (
    <div>
      <p className={classNames.infoTitle}>Delivery address</p>
      <div className="mb-2">
        <Label required={true} text="City" />
        <InputText
          register={register}
          required={true}
          field="address.city"
          minLength={2}
          maxLength={50}
          disabled={false}
        />
        {errors.address?.city && (
          <Error message={errors.address.city.message} />
        )}
      </div>
      <div className="mb-2">
        <Label required={true} text="Street" />
        <InputText
          register={register}
          required={true}
          field="address.street"
          minLength={2}
          maxLength={60}
          disabled={false}
        />
        {errors.address?.street && (
          <Error message={errors.address.street.message} />
        )}
      </div>
      <div className={classNames.infoTwoColumns}>
        <div>
          <Label required={true} text="House number" />
          <InputText
            required={true}
            register={register}
            field="address.house"
            minLength={1}
            maxLength={10}
            disabled={false}
          />
          {errors.address?.house && (
            <Error message={errors.address.house.message} />
          )}
        </div>
        <div>
          <Label required={true} text="Apartment number" />
          <InputText
            required={true}
            register={register}
            field="address.apartment"
            minLength={1}
            maxLength={10}
            disabled={false}
          />

          {errors.address?.apartment && (
            <Error message={errors.address.apartment.message} />
          )}
        </div>
      </div>
      <div className="mb-2">
        <Label required={false} text="Comment for the courier" />
        <textarea
          {...register("address.comment")}
          className={classNames.textArea}
          autoFocus
        />
      </div>
    </div>
  );
}

export default AddressInfo;
