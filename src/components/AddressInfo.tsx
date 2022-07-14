import { IShippingFields } from "../helpers/app.interface";
import { AddressInfoProps } from "../helpers/app.type";
import { getRuleMinLength, getRuleMaxLength } from "../helpers/app.rules";

function AddressInfo({ register, errors }: AddressInfoProps<IShippingFields>) {
  return (
    <div>
      <p className="text-gray-600 text-xl font-semibold mb-3 capitalize">
        Delivery address
      </p>
      <div className="mb-2">
        <label className="text-gray-600 font-normal block">
          <span className="text-red-500 text-lg italic mr-1">*</span>
          City
        </label>
        <input
          {...register("address.city", {
            required: "City is require field!",
            minLength: getRuleMinLength(2),
            maxLength: getRuleMaxLength(50),
          })}
          className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
          type="text"
          autoFocus
        />
        {errors.address?.city && (
          <p className="text-red-500 text-xs italic">
            {errors.address.city.message}
          </p>
        )}
      </div>
      <div className="mb-2">
        <label className="text-gray-600 font-normal block">
          <span className="text-red-500 text-lg italic mr-1">*</span>
          Street
        </label>
        <input
          {...register("address.street", {
            required: "Street is require field!",
            minLength: getRuleMinLength(2),
            maxLength: getRuleMaxLength(60),
          })}
          className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
          type="text"
          autoFocus
        />
        {errors.address?.street && (
          <p className="text-red-500 text-xs italic">
            {errors.address.street.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-2">
        <div>
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            House number
          </label>
          <input
            {...register("address.house", {
              required: "House number is require field!",
              minLength: getRuleMinLength(1),
              maxLength: getRuleMaxLength(10),
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errors.address?.house && (
            <p className="text-red-500 text-xs italic">
              {errors.address.house.message}
            </p>
          )}
        </div>
        <div>
          <label className="text-gray-600 font-normal block">
            <span className="text-red-500 text-lg italic mr-1">*</span>
            Apartment number
          </label>
          <input
            {...register("address.apartment", {
              required: "Apartment number is require field!",
              minLength: getRuleMinLength(1),
              maxLength: getRuleMaxLength(10),
            })}
            className="form__input border-solid border-gray-300 border py-1 px-4  w-full rounded text-gray-700"
            type="text"
            autoFocus
          />
          {errors.address?.apartment && (
            <p className="text-red-500 text-xs italic">
              {errors.address.apartment.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2">
        <label className="text-gray-600 font-normal block">
          Comment for the courier
        </label>
        <textarea
          {...register("address.comment")}
          className="form__input border-solid border-gray-300 border py-1 px-4 w-full rounded text-gray-700"
          autoFocus
        />
      </div>
    </div>
  );
}

export default AddressInfo;
