export interface ICharacter {
  appearance: number[];
  better_call_saul_appearance: Array<number>;
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: Array<string>;
  length: number;
  portrayed: string;
  status: string;
}

export interface ICharactersProps {
  characters: ICharacter[];
}
