import { useEffect } from "react";
import { ICharactersProps, ICharacter } from "../helpers/interfaces";
import Card from "./Card";

export default function CardGrid({characters}: ICharactersProps) {
  return (
    <div className="cards w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((item: ICharacter) => (
        <Card { ...item } key={item.char_id} />
      ))}
    </div>
  );
}
