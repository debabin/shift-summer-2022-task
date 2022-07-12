import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IOption, IShippingFields } from "./app.interface";
import "./App.css";
import ReactSelect, { PropsValue } from "react-select";
import PersonInfo from "./PersonInfo";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IShippingFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(data);
    reset();
  };

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

  return (
    <div className="App">
      <h1 className="text-center text-2xl text-orange-500 mt-10">
        Заявка на доставку
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl m-auto py-5 mt-10 px-8 border grid grid-cols-2 gap-12"
      >
        <PersonInfo register={register} errors={errors} actor="recipient" />
        <PersonInfo register={register} errors={errors} actor="sender" />

        <Controller
          control={control}
          name="parcel.type"
          rules={
            {
              // required: "Parcel type is required field",
            }
          }
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect<IOption>
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
          )}
        />

        <div className="my-3 text-center">
          <button
            onClick={() => console.log(errors)}
            className="transition duration-500 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
