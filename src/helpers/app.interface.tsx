export interface IPersonInfo {
  firstname: string;
  lastname: string;
  middlename?: string;
  hasNoPatronymic: boolean;
  birthDate: Date;
  registrationAdress?: string;
}

export interface IAddress {
  city: string;
  street: string;
  house: number;
  apartment: number;
  comment?: string;
}

export interface IParcelInfo {
  type: string;  
  weight: number;
  comment?: string;
}

export interface IShippingFields {
  sender: IPersonInfo;
  receiver: IPersonInfo;
  address: IAddress;
  package: IParcelInfo;
}

export interface IOption {
  value:string, 
  label:string
}
