import { Link } from "react-router-dom";
import { classNames } from "../styles/classNames";

export default function Card({ character }: CardProps) {

  return (
    <Link to={`/${character.char_id}`}>
      <div
        className="group w-96 xs:w-full cursor-pointer h-350 m-auto"
        // onClick={() => navigate()}
      >
        <div className={classNames.cardInner}>
          <div className="absolute w-full h-full">
            <img src={character.img} className={classNames.cardImage} />
          </div>
          <div className={classNames.cardBack}>
            <h1 className={classNames.cardTitle}>{character.name}</h1>
            <ul>
              <li className="list-none mb-1">
                <strong>Actor Name:</strong> {character.portrayed}
              </li>
              <li className="list-none mb-1">
                <strong>Nickname:</strong> {character.nickname}
              </li>
              <li className="list-none mb-1">
                <strong>Birthday:</strong> {character.birthday}
              </li>
              <li className="list-none mb-1">
                <strong>Status:</strong> {character.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
