export interface IPersonInfo {
  name: string;
  surname: string;
  patronymic?: string;
  hasNoPatronymic: boolean;
  dateOfBirth: Date;
  address?: string;
}

export interface IAddress {
  city: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  note?: string;
}
// enum parcelType{
//     letter,
//     valuableLetter,
//     package,
//     smallPackage,
//     parcel,
//     valuableParcel
// }

export interface IParcelInfo {
  type: string;  // or type:parcelType,
  approximateWeight: number;
  note?: string;
}

export interface IShippingFields {
  sender: IPersonInfo;
  recipient: IPersonInfo;
  address: IAddress;
  parcel: IParcelInfo;
}

export interface IOption {
  value:string, 
  label:string
}
