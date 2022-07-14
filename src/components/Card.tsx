import { itemType } from "../helpers/types";

export default function Card(item: itemType) {
  return (
    <div className="card w-full cursor-pointer">
      <div className="card-inner w-full h-full">
        <div className="card-front absolute w-full h-full">
          <img src={item.img} className="h-full w-full object-cover"/>
        </div>
        <div className="card-back absolute w-full h-full">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
