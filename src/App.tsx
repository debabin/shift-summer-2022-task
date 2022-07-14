import "./App.css";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { itemType } from "./helpers/types";
import Card from "./components/Card";
import fullScreenImg from "./img/p2.jpg";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const mainURL =
    "https://shift-summer-2022-backend.herokuapp.com/api/breakingBad/characters";
  const helpURL = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    axios
      .get(helpURL, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authToken: "BreakingBad",
        },
      })
      .then((res) => {
        setData(res.data.slice(0, 20));
        setIsLoading(false);
        console.log(res.data.slice(0, 10));
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);

  return (
    <div className="relative">
      <img src={fullScreenImg} className="w-screen h-screen" />
      <section className="flex justify-center max-w-screen py-8 px-8 md:px-10 xl:px-20">
        {isLoading && <Oval color="grey" ariaLabel="loading-indicator" />}
        <div className="cards w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item: itemType) => (
            <Card {...{ ...item }}></Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
