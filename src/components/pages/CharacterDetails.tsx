import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { classNames } from "../../styles/classNames";
import { url } from "../../utils/constants";

export default function CharacterPage() {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [characterInfo, setCharacterInfo] = useState({} as Character);

  useEffect(() => {
    axios
      .get(url + `/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authToken: "BreakingBad",
        },
      })
      .then((res) => {
        setCharacterInfo(res.data.data[0]);
        console.log(res.data.data[0]);
        setIsLoading(false);

        Object.entries(res.data.data[0]).map(([key, value]) => {
          console.log(key);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className={classNames.characterPage}>
      {isLoading && (
        <div className={classNames.centerElements}>
          {<Circles color="white" />}
        </div>
      )}

      {!isLoading && (
        <div className={classNames.characterContainer}>
          <img src={characterInfo.img} className={classNames.characterImage} />
          <div>
            <h1 className={classNames.characterTitle}>{characterInfo.name}</h1>
            <ul className="text-white text-xl">
              {Object.entries(characterInfo)
                .filter(([key, value]) => key != "img" && key != "char_id")
                .map(([key, value]) => (
                  <li className="mb-2">
                    <strong className="capitalize">{key}: </strong>
                    {value instanceof Array ? value.join(", ") : value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
