import { IOption } from "./interfaces";

export const url = "http://localhost:3000/api/create/order";

export const parcelOptions: IOption[] = [
    {
      value: "letter",
      label: "Letter",
    },
    {
      value: "valuableLetter",
      label: "Valuable letter",
    },
    {
      value: "package",
      label: "Package",
    },
    {
      value: "smallPackage",
      label: "Small package",
    },
    {
      value: "parcel",
      label: "Parcel",
    },
    {
      value: "valuableParcel",
      label: "Valuable parcel",
    },
  ];