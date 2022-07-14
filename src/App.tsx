import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import CardGrid from "./components/CardGrid";
import fullScreenImg from "./img/p2.jpg";
import { ICharacter } from "./helpers/interfaces";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([] as ICharacter[]);

  const localhostURL = "http://localhost:3000/api/breakingBad/characters";
  const docsURL = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    axios
      .get(localhostURL, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authToken: "BreakingBad",
        },
      })
      .then((res) => {
        setCharacters(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
      
  }, []);

  return (
    <div className="relative">
      <img src={fullScreenImg} className="w-screen h-screen" />
      <section className="flex justify-center max-w-screen py-8 px-8 md:px-10 xl:px-20">
        {isLoading && <Spinner />}
        {!isLoading && <CardGrid characters={characters} />}
      </section>
    </div>
  );
}

export default App;
