import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IOption, IShippingFields } from "./helpers/app.interface";
import PersonInfo from "./components/PersonInfo";
import deliveryIcon from "./assets/delivery.png";
import AddressInfo from "./components/AddressInfo";
import ParcelInfo from "./components/ParcelInfo";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IShippingFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IShippingFields> = (formData) => {
    console.log({ MyData: formData });
    // reset();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: formData }),
    };
    fetch("https://shift-summer-2022-backend.herokuapp.com/api/create/order", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("recieved: ", data));
  };

  return (
    <div className="App ">
      <h1 className="text-center text-4xl text-gray-900 mt-10">
        Delivery request
        <img src={deliveryIcon} className="h-10 inline ml-3" />
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl
         m-auto py-5 mt-10 px-8 grid grid-cols-1 sm:grid-cols-2 gap-12 form"
      >
        <PersonInfo {...{ register }} {...{ errors }} actor="receiver" />
        <PersonInfo {...{ register }} {...{ errors }} actor="sender" />
        <AddressInfo {...{ register }} {...{ errors }} />
        <ParcelInfo {...{ register }} {...{ errors }} {...{ control }} />

        <div className="my-3 text-center">
          <button
            className="btn btn__primary  text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
