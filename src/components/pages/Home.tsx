import axios from "axios";
import { useEffect, useState } from "react";
import { RevolvingDot } from "react-loader-spinner";
import Card from "../Card";
import fullScreenImg from "../../img/splashScreen.jpg";
import { classNames } from "../../styles/classNames";
import { url } from "../../utils/constants";

export default function () {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([] as Character[]);

  useEffect(() => {
    axios
      .get(url, {
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
    <main>
      <img src={fullScreenImg} className="w-screen h-screen object-cover" />
      <section className={classNames.sectionContainer}>
        {isLoading && (
          <RevolvingDot
            secondaryColor="black"
            color="gray"
            height={100}
            width={100}
          />
        )}
        {!isLoading && (
          <div className={classNames.cardsGrid}>
            {characters.map((character: Character) => (
              <Card character={character} key={character.char_id} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
